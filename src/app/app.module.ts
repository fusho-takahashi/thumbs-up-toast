import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [AppComponent, ToastComponent],
  imports: [
    BrowserModule,
    PortalModule,
    OverlayModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ToastComponent],
})
export class AppModule {}
