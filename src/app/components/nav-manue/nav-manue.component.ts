import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-manue',
  templateUrl: './nav-manue.component.html',
  styleUrls: ['./nav-manue.component.css']
})

export class NavManueComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

