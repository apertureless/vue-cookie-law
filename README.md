# 🍪 👮 Vue Cookie Law
[![Build Status](https://travis-ci.org/apertureless/vue-cookie-law.svg?branch=develop)](https://travis-ci.org/apertureless/vue-cookie-law)
[![npm](https://img.shields.io/npm/v/vue-cookie-law.svg)](https://www.npmjs.com/package/vue-cookie-law)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/apertureless/vue-cookie-law/blob/master/LICENSE)

EU Cookie Law Plugin for Vue.js

📺 [Demo](https://apertureless.github.io/vue-cookie-law/)

## 🔧  Install
`yarn add vue-cookie-law`

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

## Slots

You can also pass in the message into a named slot. This way you can for example add `<router-link>` and other dynamic content.

```html
<cookie-law>
  <div slot="message">
    Here is my message for more info <router-link to="legal-notes">Click here</router-link>
  </div>
</cookie-law>
```

## Scoped Slot

For a more complex layout use the scoped slot
```html
<cookie-law>
  <div slot-scope="props">
    <button class="skew" @click="props.accept"><span>I accept</span></button>
    <p>
      This site uses 🍪
    </p>
    <button class="skew" @click="props.close"><span>Ignore me</span></button>
  </div>

</cookie-law>
```
| methods | description |
|---|---|
| accept | Closes the cookie disclaimer and saves to localStorage |
| close | Only closes the cookie disclaimer. The disclaimer will reappear on the next page load. |
| open | Show disclaimer if user ignored him |

## Props
| prop | default | type | description
|---|---|---|---|
| buttonText | 'Got It!' | String | 🔘 Well, its the button text
| buttonLink |  | String\|Object | Link to more infos. Simple href or a [vue-router](https://github.com/vuejs/vue-router) Location object
| buttonLinkText | 'More info' | String | Label of link button
| buttonLinkNewTab | false | Boolean | If true, it opens the link in a new tab/window (href)
| buttonClass | 'Cookie__button' | String | Custom class name for buttons
| message | 'This website uses cookies to ensure you get the best experience on our website.' | String | Your message in the content area
| theme | 'base' | String | Selected theme. You can also create a custom one
| position | 'bottom' | String | Possible positions are `bottom` or `top`
| transitionName | 'slideFromBottom' | String | Enter and leave transitions. Currently supported `slideFromBottom`, `slideFromTop`, `fade`
| storageType | 'localStorage' | String | Type of storage, where to store 'cookies:accept': true. Can be `localStorage` (default) or `cookies`. If LocalStorage is unsupported, then used Cookies.

## Events

The default button will emit an `accept` event you can listen on if the user clicks the button.

```html
<cookie-law v-on:accept="ThankYouMethod()"/>
```

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
.Cookie--mytheme .Cookie__button {....}
.Cookie--mytheme div.Cookie__button:hover {....}
```

And then pass your theme name to the component.

## :scroll: Changelog
Details changes for each release are documented in the [CHANGELOG.md](https://github.com/apertureless/vue-cookie-law/blob/develop/CHANGELOG.md).


## :exclamation: Issues
Please make sure to read the [Issue Reporting Checklist](https://github.com/apertureless/vue-cookie-law/blob/develop/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.


## :muscle: Contribution
Please make sure to read the [Contributing Guide](https://github.com/apertureless/vue-cookie-law/blob/develop/CONTRIBUTING.md) and [Code of Conduct](code-of-conduct.md) before making a pull request.

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)

<a href="https://www.buymeacoffee.com/xcqjaytbl" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
