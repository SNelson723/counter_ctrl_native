export type JsonError = {
  message: string;
};

export enum UserRole {
  SINGLE_STORE = 1,
  MULTI_STORE = 2,
  SECURITY = 3,
  ACCOUNTING = 4,
  ADMIN_ROLE = 9,
}

export interface SecurityQuestion {
  id: number;
  question: string;
}
