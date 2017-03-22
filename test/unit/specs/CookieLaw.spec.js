import Vue from 'vue'
import CookieLaw from '@/components/CookieLaw'

describe('CookieLaw.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CookieLaw)
    const vm = new Constructor().$mount()
    console.log(vm.$el.querySelector('.Cookie__content').textContent)
    expect(vm.$el.querySelector('.Cookie__content').textContent)
      .to.equal('This website uses cookies to ensure you get the best experience on our website.')
  })
})
