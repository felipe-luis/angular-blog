import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseButtonComponent } from "../base-button/base-button.component";

@Component({
  selector: 'app-menu-bar',
  imports: [RouterModule, BaseButtonComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

}
