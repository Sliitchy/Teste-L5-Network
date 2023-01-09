import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  burgerSwitch: boolean;

  constructor() { }

  toggleBurger() {
    this.burgerSwitch = !this.burgerSwitch;
  }

}
