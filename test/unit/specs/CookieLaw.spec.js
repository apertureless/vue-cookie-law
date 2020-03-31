import { mount } from 'vue-test-utils'
import CookieLaw from '@/components/CookieLaw'

let mockGetCookie = jest.fn();
let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();

jest.mock('tiny-cookie', () => ({
  __esModule: true, // mock the exports
    set: jest.fn().mockImplementation((...args) => {
        mockSetCookie(...args);
    }),
    get: jest.fn().mockImplementation((...args) => {
        mockGetCookie(...args);
    }),
    remove: jest.fn().mockImplementation((...args) => {
      mockRemoveCookie(...args);
    }),
}));

describe('CookieLaw.vue', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should render correct contents', () => {
    const wrapper = mount(CookieLaw)
    expect(wrapper.find('.Cookie__content').text())
      .toEqual('This website uses cookies to ensure you get the best experience on our website.')
  })

  it('should call "isAccepted" method when mount ', async () => {
    const mockFn = jest.fn();
    mount(CookieLaw, {
      methods: {
        isAccepted: mockFn
      }
    })

    expect(mockFn).toHaveBeenCalled()
  })

  it('should set localstorage when clicking confirm button', () => {
    const wrapper = mount(CookieLaw)

    expect(wrapper.find('.Cookie__button').text()).toEqual('Got it!')

    expect(localStorage.getItem('cookie:accepted')).toEqual(null)

    wrapper.find('.Cookie__button').trigger('click')

    expect(localStorage.getItem('cookie:accepted')).toEqual('true')

    localStorage.clear()
  })

  it('should have an <a> tag with target="_blank" if buttonLinkNewTab prop is true', () => {
    const wrapper = mount(CookieLaw, { propsData: { buttonLink: 'link', buttonLinkNewTab: true } })
    expect(wrapper.find('.Cookie__buttons > a').attributes().target).toBe('_blank')
  })

  it('should have a router link if buttonLink prop is an object', () => {
    const wrapper = mount(CookieLaw, { propsData: { buttonLink: { path: '/foo' } } })
    // Cause router-link component is not installed here
    expect(wrapper.find('router-link').exists()).toBe(true);
    expect(wrapper.find('router-link').attributes().to).toEqual("[object Object]")
  })

  it('should set cookie when domain prop is not set', () => {
    const wrapper = mount(CookieLaw, { propsData: { storageType: 'cookies' } })

    expect(mockGetCookie).toHaveBeenCalled();

    wrapper.find('.Cookie__button').trigger('click')

    expect(mockSetCookie).toHaveBeenCalledWith('cookie:accepted', true, {"expires": "1Y"});

  })

  it('should set cookie when domain prop set', () => {
    const wrapper = mount(CookieLaw, {
      propsData: { storageType: 'cookies', cookieOptions: { domain: 'localhost' } }
    })

    expect(mockGetCookie).toHaveBeenCalled();

    wrapper.find('.Cookie__button').trigger('click')

    expect(mockSetCookie).toHaveBeenCalledWith('cookie:accepted', true, {"expires": "1Y"});
  })

  it('should set a cookie when localstorage is not available', () => {
    const prevStorageBehavior = Storage.prototype.setItem;
    Storage.prototype.setItem = jest.fn(() => {throw new Error('')});

    const wrapper = mount(CookieLaw)

    expect(mockGetCookie).toHaveBeenCalled();

    wrapper.find('.Cookie__button').trigger('click')

    expect(mockSetCookie).toHaveBeenCalledWith('cookie:accepted', true, {"expires": "1Y"});
    Storage.prototype.setItem = prevStorageBehavior;
  })

  it('should close and open when component\'s methods "close" and "open" are called sequentially', async () => {
    const wrapper = mount(CookieLaw)
    wrapper.vm.close()
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toBe(undefined)
    wrapper.vm.open()
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.Cookie__button').text()).toEqual('Got it!')
  });

  it('should decline when buttonDecline is set and clicked', async () => {
    const wrapper = mount(CookieLaw, { propsData: { buttonDecline: true, buttonDeclineText: 'decline' } })

    expect(wrapper.find('.Cookie__button--decline').exists()).toBe(true);
    expect(wrapper.find('.Cookie__button--decline').text()).toEqual('decline')

    wrapper.find('.Cookie__button--decline').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toBe(undefined)
  });

  it('should decline when buttonDecline is set and clicked + using cookie', async () => {
    const wrapper = mount(CookieLaw, { propsData: { buttonDecline: true, buttonDeclineText: 'decline', storageType: 'cookies' } })

    expect(wrapper.find('.Cookie__button--decline').exists()).toBe(true);
    expect(wrapper.find('.Cookie__button--decline').text()).toEqual('decline')

    wrapper.find('.Cookie__button--decline').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toBe(undefined)
  });

  it('should trigger "accept" event when mounted if cookie has been already acccepted ', async () => {
    localStorage.setItem('cookie:accepted', 'true')

    const wrapper = mount(CookieLaw)

    expect(wrapper.emitted()).toHaveProperty('accept')

    localStorage.clear()
  })

  it('should NOT trigger "accept" event when mounted if cookie has not been already accepted ', async () => {
    const wrapper = mount(CookieLaw)

    console.log(wrapper.emitted())

    expect(wrapper.emitted()).not.toHaveProperty('accept')

    localStorage.clear()
  })

  it('should trigger "revoke" event and remove previous user choice if revoke() method is called', async () => {
    const storageName = 'cookie:test'
    localStorage.setItem(storageName, 'true')

    const wrapper = mount(CookieLaw, {
      propsData: {
        storageName: storageName
      }
    })

    wrapper.vm.revoke()

    expect(wrapper.emitted()).toHaveProperty('revoke')
    expect(localStorage.getItem(storageName)).toBeNull()

    localStorage.clear()
  })

  it('should trigger "revoke" event and remove previous user choice if revoke() method is called (using COOKIE)', async () => {
    const storageName = 'cookie:test'
    localStorage.setItem(storageName, 'true')

    const wrapper = mount(CookieLaw, {
      propsData: {
        storageName: storageName,
        storageType: 'cookies'
      }
    })

    wrapper.vm.revoke()

    expect(wrapper.emitted()).toHaveProperty('revoke')
    expect(mockRemoveCookie).toHaveBeenCalled();

    localStorage.clear()
  })
})
