import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { PersonType } from './schema';
import { createPerson } from './api';
import { catchError } from '@/common';

type Variables = Omit<PersonType, 'docs'> & { docs: File[] | null };
type Response = void;

export const useCreatePerson = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) => createPerson(variables),
  onError: (err) => catchError(err),
});
