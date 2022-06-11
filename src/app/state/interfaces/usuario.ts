import { General } from '../../interfaces/general';

export interface Usuario extends General {
  firstName: string;
  lastName: string;
  email: string;
}
