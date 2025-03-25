import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-button',
  imports: [CommonModule],
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.css']
})
export class BaseButtonComponent {
  @Input() typeButton:string = 'black-button';
  @Input() url?: string;
  @Input() text: string = '';

}
