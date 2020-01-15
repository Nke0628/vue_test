export interface Test {
  [key: string]: any;
  email: {
    [key: string]: boolean;
    required: boolean;
    format: boolean;
  };
  password: {
    [key: string]: boolean;
    required: boolean;
  };
}

export interface loginForm {
  required: boolean;
  format: boolean;
}
