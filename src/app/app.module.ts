import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MessageComponent } from './message.component';


@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[MessageComponent],
  providers: [],
  bootstrap: [],
  entryComponents: [MessageComponent]
})
export class MainModule {

  constructor(private injector: Injector) {
    const customElement = createCustomElement(MessageComponent, { injector });
    customElements.define('app-message', customElement);
}

ngDoBootstrap() {

}
 }





