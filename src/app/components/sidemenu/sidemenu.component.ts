import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
  imports: [MatListModule, RouterModule],
})
export class SideMenuComponent {
  protected links = [
    {
      label: 'Comics',
      isActive: false,
      href: 'comics',
    },
    {
      label: 'Characters',
      isActive: false,
      href: 'characters',
    },
  ];
}
