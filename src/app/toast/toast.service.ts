import { Injectable, ComponentRef } from '@angular/core';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ToastComponent } from './toast.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { filter, take } from 'rxjs/operators';

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
    this.containerInstance = this.containerRef.instance;

    this.containerInstance.animationStateChanged
      .pipe(
        filter((event) => event.toState === 'hidden'),
        take(1),
      )
      .subscribe(() => {
        this.overlayRef.detach();
      });

    setTimeout(() => {
      this.containerInstance.startLeaveAnimation();
    }, 4000);
  }
}
