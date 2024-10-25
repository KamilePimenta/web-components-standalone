import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterOutlet } from '@angular/router';
import { SbCollectionOfInvoiceComponent } from './sb-collection-of-invoice/sb-collection-of-invoice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SbCollectionOfInvoiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-components-rnf';

  constructor(private _injector: Injector) {}

  ngDoBootstrap() {
    const customEl = createCustomElement(AppComponent, { injector: this._injector });
    customElements.define('sb-collection-of-invoice', customEl);
  }
}