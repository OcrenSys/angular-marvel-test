import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent {
  protected items$: Observable<{ label: string; path: string }[]> = of([
    {
      label: 'comics',
      path: '/comics',
    },
    {
      label: 'details',
      path: '/comics:id',
    },
  ]);
}
