# \<tpx-modal>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

Check the [demo here](https://code.develoka.com/gist/6888d64486fe9681104e7e66e102c9f0)

## Installation
```bash
npm i @develoka/tpx-modal
```

## Usage example
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
```html
<script src="@develoka/tpx-modal/dist/polyfills/babel.js"></script>
<script src="@develoka/tpx-modal/dist/polyfills/webcomponents.js"></script>

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

<script type="module">
  import '@develoka/tpx-modal/dist/legacy';
</script>
```
