import { html, css, unsafeCSS, LitElement } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import CSS from './tpx-modal-css.js';

export default class TpxModal extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(CSS)}
    `;
  }

  static get properties() {
    return {
      id: { type: String },
      isOpen: { type: Boolean, reflect: true, attribute: 'is-open' },
      title: { type: String,  reflect: true },
      xPos: { type: String,  reflect: true, attribute: 'x-pos' },
      yPos: { type: String,  reflect: true, attribute: 'y-pos' },
      width: { type: String,  reflect: true },
      height: { type: String,  reflect: true },
      styles: { type: Object },
      rawStyles: { type: String },
      showCloseButton: { 
        type: Boolean, 
        reflect: true, 
        attribute: 'show-close-button' 
      },
      showOverlay: { 
        type: Boolean, 
        reflect: true, 
        attribute: 'show-overlay' 
      },
      shouldCloseOnOverlayClick: { 
        type: Boolean, 
        reflect: true,
        attribute: 'should-close-on-overlay-click'
      },
      shouldCloseOnEsc: { 
        type: Boolean, 
        reflect: true,
        attribute: 'should-close-on-esc'
      },
      onRequestOpen: {
        type: Function,
        attribute: 'on-request-open'
      },
      onRequestClose: {
        type: Function,
        attribute: 'on-request-close'
      }
    }
  }

  constructor() {
    super();
    this.id = 'tpx-modal';
    this.title = 'My Modal';
    this.isOpen = false;
    this.xPos = 'center'; /* center, left, right */
    this.yPos = 'center'; /* center, top, bottom */
    this.width = 'auto';
    this.height = 'auto';
    this.styles = { overlay: {}, content: {}, header : {}, section: {}, footer : {} };
    this.rawStyles = '';
    this.showCloseButton = false;
    this.showOverlay = false;
    this.shouldCloseOnOverlayClick = false;
    this.shouldCloseOnEsc = false;
    this.onRequestOpen = null;
    this.onRequestClose = null;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);

    if (name === 'should-close-on-overlay-click') {
      this.styles.overlay = Object.assign(this.styles.overlay, { 
        cursor: 'pointer' 
      });
    }
    if (name === 'should-close-on-esc') {
      document.onkeydown = (e) => {
        if (e.keyCode === 27) { this.closeModal() }
      };
    }
    if (name === 'width' || name === 'height') {
      this.styles.content = Object.assign(this.styles.content, { 
        [name]: newval
      });
    }
  }

  shouldUpdate(changedProps) {
    const oldval = changedProps.get('isOpen');
    const newval = this.isOpen;
    if (newval && (oldval !== newval)) {
      this.onRequestOpen && this.onRequestOpen();
    }
    return changedProps;
  }

  closeModal() {
    this.isOpen = false;
    this.onRequestClose && this.onRequestClose();
  }

  render() {
    return html`
      ${!this.rawStyles ? '' : html `<style>${this.rawStyles}</style>`}
      
      <input id="${this.id}" class="toggle" ?checked="${this.isOpen}" type="checkbox" />
      
      ${this.showOverlay ? html`
        <div class="overlay" style=${styleMap(this.styles.overlay)} 
          @click="${this.shouldCloseOnOverlayClick ? this.closeModal : () => {}}">
        </div>` : ''}

      <article 
        class="x-${this.xPos} y-${this.yPos}"
        style=${styleMap(this.styles.content)}>

        <header style=${styleMap(this.styles.header)}>
          <h3>${this.title}</h3>
          <slot name="header"></slot>
          ${this.showCloseButton ? html`<label class="close" @click="${this.closeModal}">&times;</label>` : ``}
        </header>

        <section style=${styleMap(this.styles.section)}>
          <slot></slot>
        </section>

        <footer style=${styleMap(this.styles.footer)}>
          <slot name="footer"></slot>
        </footer>
      </article>
    `;
  }
}
