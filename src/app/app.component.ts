import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/sidemenu/sidemenu.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
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
		SideMenuComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
	protected device = signal<'mobile' | 'desktop'>('mobile');
	protected opened = signal<boolean>(false);
	protected mobileQuery!: MediaQueryList;
	private _mobileQueryListener: (event: MediaQueryListEvent) => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 768px)');
		this._mobileQueryListener = (event: MediaQueryListEvent): void => {
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
