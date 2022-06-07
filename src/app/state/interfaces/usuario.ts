import { General } from './general';

export interface Usuario extends General {
  firstName: string;
  lastName: string;
  email: string;
}
