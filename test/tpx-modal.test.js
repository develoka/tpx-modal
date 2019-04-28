import { html, fixture, expect } from '@open-wc/testing';

import '../src/tpx-modal.js';

describe('<tpx-modal>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<tpx-modal></tpx-modal>');
    expect(el.header).to.equal('My Example');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <tpx-modal .header=${'different'}></tpx-modal>
    `);
    expect(el.header).to.equal('different');
  });
});
