import Vue from 'vue'
import CookieLaw from '@/components/CookieLaw'
import * as Cookie from 'tiny-cookie'

describe('CookieLaw.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CookieLaw)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.Cookie__content').textContent)
      .to.equal('This website uses cookies to ensure you get the best experience on our website.')
  })

  it('should set localstorage when clicking confirm button', () => {
    const Constructor = Vue.extend(CookieLaw)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.Cookie__button').textContent)
      .to.equal('Got it!')

    expect(localStorage.getItem('cookie:accepted')).to.equal(null)

    vm.$el.querySelector('.Cookie__button').click()

    expect(localStorage.getItem('cookie:accepted')).to.equal('true')

    localStorage.clear()
  })
  it('should have an <a> tag with target="_blank" if buttonLinkNewTab prop is true', () => {
    const Constructor = Vue.extend(CookieLaw)
    const vm = new Constructor({ propsData: { buttonLink: 'link', buttonLinkNewTab: true } }).$mount()
    expect(vm.$el.querySelector('.Cookie__buttons > a').getAttribute('target'))
      .to.equal('_blank')
  })
  it('should set cookie when domain prop is not set', () => {
    const Constructor = Vue.extend(CookieLaw)
    const vm = new Constructor({ propsData: { storageType: 'cookies' } }).$mount()

    expect(Cookie.get('cookie:accepted')).to.equal(null)

    vm.$el.querySelector('.Cookie__button').click()

    expect(Cookie.get('cookie:accepted')).to.equal('true')

    Cookie.remove('cookie:accepted')
  })
  it('should set cookie when domain prop set', () => {
    const Constructor = Vue.extend(CookieLaw)
    const vm = new Constructor({
      propsData: { storageType: 'cookies', cookieOptions: { domain: 'localhost' } }
    }).$mount()

    expect(Cookie.get('cookie:accepted')).to.equal(null)

    vm.$el.querySelector('.Cookie__button').click()

    expect(Cookie.get('cookie:accepted')).to.equal('true')

    Cookie.remove('cookie:accepted', { domain: 'localhost' })
  })
  // it('should set a cookie when localstorage is not available', () => {
  //   const Constructor = Vue.extend(CookieLaw)
  //   const vm = new Constructor().$mount()

  //   localStorage = null

  //   expect(Cookie.get('cookie:accepted')).to.equal(null)

  //   vm.$el.querySelector('.Cookie__button').click()

  //   expect(Cookie.get('cookie:accepted')).to.equal(true)
  // })
})
