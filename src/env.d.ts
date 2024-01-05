interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  /**
   * Built-in environment variable.
   * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
   */
  [key: string]: unknown;
  readonly NG_APP_ENV: string;
  readonly NG_APP_MARVEL_API_PUBLIC_KEY: string;
  readonly NG_APP_MARVEL_API_PRIVATE_KEY: string;
  readonly NG_APP_MARVEL_HASH: string;
  readonly NG_APP_MARVEL_BASE_URL: string;
  readonly NG_APP_MARVEL_API_V1: string;
  readonly NG_APP_MARVEL_TIMESTAMP: string;
}