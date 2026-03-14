export type ApiErrorSource = {
  path: string | number;
  message: string;
};

export interface ApiError {
  success: false;
  message: string;
  err?: { name: string; message: string; statusCode?: number };
  errorSources: ApiErrorSource[];
  stack?: string;
}

export type ApiResponse<T = unknown> = {
  success: true;
  message: string;
  data: T;
};
