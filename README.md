# \<tpx-modal>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

Check the [demo here](https://code.develoka.com/gist/6888d64486fe9681104e7e66e102c9f0)

## Installation
```bash
npm i @develoka/tpx-modal
```

## Customizable properties

| Property                      | Type    | Default    | Description                  |
| ----------------------------- | ------- | ---------- | ---------------------------- |
| is-open                       | Boolean | false      |                              |
| title                         | String  | "My Modal" |                              |
| x-pos                         | String  | "center    | Options: left, center, right |
| y-pos                         | String  | "center    | Options: top, center, bottom |
| width                         | String  | "auto"     |                              |
| height                        | String  | "auto"     |                              |
| rawstyles                     | String  | ""         | Use this at your own risk    |
| show-close-button             | Boolean | false      |                              |
| show-overlay                  | Boolean | false      |                              |
| should-close-on-overlay-click | Boolean | false      |                              |
| should-close-on-esc           | Boolean | false      |                              |

### Properties that cannot be set directly on element attribute

| Property       | Type     | Default                                                             | Description |
| -------------- | -------- | ------------------------------------------------------------------- | ----------- |
| styles         | Object   | { overlay: {}, content: {}, header : {}, section: {}, footer : {} } |             |
| onRequestOpen  | Function | null                                                                |             |
| onRequestClose | Function | null                                                                |             |


## General usage example

```html
<script type="module">
  import '@develoka/tpx-modal/dist';
</script>

<!-- Customizable properties directly into element attribute: --> 

<tpx-modal
  is-open
  title="Modal title"
  x-pos="center"
  y-pos="center"
  width="auto"
  height="auto"
  rawstyles=".overlay { background: red!important }"
  show-close-button
  show-overlay
  should-close-on-overlay-click
  should-close-on-esc
>
  <!-- Available slot content -->
  
  <div slot="header">
    <strong>A tale of sub heeader</strong>
  </div>
  <form action="#">
    <input class="form-control" type="email" placeholder="Email address" /> 
    <input class="form-control" type="password" placeholder="Your password" /> 
  </form>
  <div slot="footer">
    <button class="form-control">Login</button>
  </div>
</tpx-modal>

<!-- Customizable properties only with javascript: --> 

<script>
// Get modal element
var modal = document.querySelector('tpx-modal');
modal.styles = { overlay: { backgroundColor: 'red!important' } }
modal.onRequestOpen  = function () { console.log('Open the modal');  }
modal.onRequestClose = function () { console.log('Close the modal'); }
</script>
```

## Usage example (lit-element)
```js
import { html, render } from 'lit-html';
import '@develoka/tpx-modal'

render(html`
  <button onclick="document.querySelector('tpx-modal').setAttribute('is-open', true)">
    Show modal
  </button>

  <tpx-modal 
    title="This is Modal" 
    x-pos="center"
    y-pos="center"
    width="300px"
    show-close-button
    should-close-on-esc
    show-overlay
    should-close-on-overlay-click>
    <h3>Hello world</h3>
  </tpx-modal>
`, document.querySelector('body'));
```

## Usage example (in browser / vanilla js)

Use source in `dist` folder

```html
<script type="module">
  import '@develoka/tpx-modal/dist';
</script>

<button onclick="document.querySelector('tpx-modal').setAttribute('is-open', true)">
  Show modal
</button>

<tpx-modal 
  title="This is Modal" 
  x-pos="center"
  y-pos="center"
  width="300px"
  show-close-button
  should-close-on-esc
  show-overlay
  should-close-on-overlay-click>
  <h3>Hello world</h3>
</tpx-modal>
```

## Usage example (in old browser)

Don't forget to include `polyfills` and use source on `legacy` folder

```html
<script src="@develoka/tpx-modal/dist/polyfills/babel.js"></script>
<script src="@develoka/tpx-modal/dist/polyfills/webcomponents.js"></script>

<!-- Content here -->

<script type="module">
  import '@develoka/tpx-modal/dist/legacy';
</script>
```
