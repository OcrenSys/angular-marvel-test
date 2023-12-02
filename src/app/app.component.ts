import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SideMenuComponent } from './components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    /* ANGULAR MATERIAL COMPONENTS */
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    /* CUSTOM COMPONENTS */
    BreadcrumbComponent,
    FooterComponent,
    SideMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  protected title = 'Ocrensys';
  protected device = signal<'mobile' | 'desktop'>('mobile');
  protected opened = signal<boolean>(false);
  protected mobileQuery: MediaQueryList;
  private _mobileQueryListener: (event: any) => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = (event) => {
      console.log(event.matches);
      if (event.matches) {
        this.device.set('mobile');
        this.opened.set(false);
      } else {
        this.device.set('desktop');
        this.opened.set(true);
      }

      return changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
