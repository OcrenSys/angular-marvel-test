import {
	HttpEvent,
	HttpHandlerFn,
	HttpInterceptorFn,
	HttpParams,
	HttpRequest
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';

export const ApiInterceptor = (
	req: HttpRequest<unknown>,
	next: HttpHandlerFn
) => {
	const { HASH, PUBLIC_KEY, TS } = environment;

	const reqClone = req.clone({
		params: req.params.set('apikey', PUBLIC_KEY).set('hash', HASH).set('ts', TS)
	});

	return next(reqClone).pipe(tap((event: HttpEvent<any>) => {}));
};
