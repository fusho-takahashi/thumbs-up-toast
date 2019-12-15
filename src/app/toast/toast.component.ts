import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
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
      transition(':leave', [
        animate(100, style({ transform: 'translateY(72px)' })),
      ]),
    ]),
  ],
})
export class ToastComponent {
  constructor() {}
}
