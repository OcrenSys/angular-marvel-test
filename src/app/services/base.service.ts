import { environment } from '../../environments/environment.development';

export class BaseService {
	protected url = '';

	constructor(_url: string = '') {
		this.url = _url;
	}

	protected Url(_url?: string): string {
		const { BASE_URL, API } = environment;
		return `${BASE_URL}${API}${_url || this.url}`;
	}
}
