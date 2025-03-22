import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'base-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.css']
})
export class BaseButtonComponent {
  @Input() typeButton:string = 'black-button';
  @Input() routerLink?:string;
  @Input() url?: string = '';
  @Input() text: string = '';

}
