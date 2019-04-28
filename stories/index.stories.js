import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import TpxModal from '../src/TpxModal.js';
import '../src/tpx-modal.js';

import readme from '../README.md';

storiesOf('tpx-modal', module)
  .addDecorator(withKnobs)
  // .add('Documentation', () => withClassPropertiesKnobs(TpxModal), { notes: { markdown: readme } })
  .add(
    'Custom Title',() => html`
      <tpx-modal title=${`Hello Storybook`} is-open show-overlay></tpx-modal>
    `,
  )
  .add(
    'Show Close Button',() => html`
      <tpx-modal is-open show-overlay show-close-button></tpx-modal>
    `,
  );
