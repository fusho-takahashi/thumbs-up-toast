import { Injectable, ComponentRef } from '@angular/core';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ToastComponent } from './toast.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  overlayRef: OverlayRef;
  containerRef: ComponentRef<ToastComponent>;
  containerInstance: ToastComponent;

  constructor(private overlay: Overlay) {
    const positionStrategy = this.overlay
      .position()
      .global()
      .bottom('24px')
      .left('24px');

    this.overlayRef = this.overlay.create(
      new OverlayConfig({ positionStrategy }),
    );
  }

  open() {
    if (this.overlayRef.hasAttached()) {
      return;
    }

    const toastPortal = new ComponentPortal(ToastComponent);
    this.containerRef = this.overlayRef.attach(toastPortal);
    setTimeout(() => {
      this.overlayRef.detach();
    }, 4000);
  }
}
