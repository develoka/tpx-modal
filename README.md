# \<tpx-modal>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i @develoka/tpx-modal
```

## Usage
```js
import { html, render } from 'lit-html';
import '@develoka/tpx-modal'

render(html`
  <tpx-modal></tpx-modal>
`, document.querySelector('body'));
```

## Usage (in browser / vanilla js)
```html
<script type="module">
  import '@develoka/tpx-modal/dist';
</script>

<tpx-modal></tpx-modal>
```
Check the [demo here](https://code.develoka.com/gist/6888d64486fe9681104e7e66e102c9f0)

## Testing using karma (if applied by author)
```bash
npm run test
```

## Testing using karma via browserstack (if applied by author)
```bash
npm run test:bs
```

## Demoing using storybook (if applied by author)
```bash
npm run storybook
```

## Linting (if applied by author)
```bash
npm run lint
```
