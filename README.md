# 🍪 👮 Vue Cookie Law


[![npm](https://img.shields.io/npm/v/vue-cookie-law.svg)](https://www.npmjs.com/package/vue-cookie-law)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/apertureless/vue-cookie-law/blob/master/LICENSE)

EU Cookie Law Plugin for Vue.js

📺 [Demo](https://apertureless.github.io/vue-cookie-law/)

## 🔧  Install
`yarn add vue-cookie-law -S `

## 👈 Usage

```javascript

<template>
  <footer>
    <cookie-law theme="dark-lime"></cookie-law>
  </footer>
</template>

<script>
  import CookieLaw from 'vue-cookie-law'
  export default {
    components: { CookieLaw }
  }
</script>
```

## Props
| prop | default | type | description
|---|---|---|---|
| buttonText | 'Got It!' | String | 🔘 Well, its the button text
| message | 'This website uses cookies to ensure you get the best experience on our website.' | String | Your message in the content area
| theme | 'base' | String | Selected theme. You can also create a custom one
| position | 'bottom' | String | Possible positions are `bottom` or `top`
| transitionName | 'slideFromBottom' | String | Enter and leave transitions. Currenty supported `slideFromBottom`, `slideFromTop`, `fade`

## 💅 Themes

![Cookie Law Themes](static/cookie-law-themes.png)

### Custom Themes
You can easy create your own themes. The classes that need to be styled are:

- `.Cookie` for the container
- `.Cookie__content` for the content with message
- `.Cookie__button` for the button

If you create your own theme, postfix the class.

```css
.Cookie--mytheme {....}
.Cookie--mytheme > .Cookie__button {....}
```

And then pass your theme name to the component.

## :scroll: Changelog
Details changes for each release are documented in the [CHANGELOG.md](https://github.com/jjuszczak/vue-cookie-law/blob/develop/CHANGELOG.md).


## :exclamation: Issues
Please make sure to read the [Issue Reporting Checklist](https://github.com/jjuszczak/vue-cookie-law/blob/develop/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.


## :muscle: Contribution
Please make sure to read the [Contributing Guide](https://github.com/jjuszczak/vue-cookie-law/blob/develop/CONTRIBUTING.md) before making a pull request.

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
