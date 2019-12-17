import { Component, EventEmitter } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('isVisible', [
      state('visible', style({ transform: 'translateY(0)' })),
      state('hidden', style({ transform: 'translateY(72px)' })),
      transition(':enter', [
        style({ transform: 'translateY(72px)' }),
        animate(100),
      ]),
      transition('visible => hidden', [animate(100)]),
    ]),
  ],
})
export class ToastComponent {
  isVisible = true;
  animationStateChanged = new EventEmitter<AnimationEvent>();

  constructor() {}

  onAnimationDone(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }
}
