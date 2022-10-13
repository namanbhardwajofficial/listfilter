import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';



/**
 * `my-listfilter`
 * dfdf
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyListfilter extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .hidden {
          display: none;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <input value="{{prop1::input}}">
      <ul id="list">
  <li>Hypertext Markup Language</li>
  <li>Cascading Style Sheets</li>
  <li>Javascript</li>
  <li>Web Components</li>
  <li>Polymer</li>
  <li>Web Browser</li>
  <li>Mentally Friendly</li>
</ul>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: '',
        observer: 'filterList'
      },
    };
  }
   filterList() {
    var items = this.$.list.children;
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.textContent.includes(this.prop1)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    }
  }
}

window.customElements.define('my-listfilter', MyListfilter);
