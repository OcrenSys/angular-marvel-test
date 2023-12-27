import { environment } from '../../environments/environment.development';

export class BaseService<T> {
  protected url = '';

  constructor(_url: string) {
    this.url = _url;
  }

  protected Url(_url: String = ''): string {
    const { BASE_URL, API } = environment;
    return `${BASE_URL}${API}${this.url}`;
  }
}
