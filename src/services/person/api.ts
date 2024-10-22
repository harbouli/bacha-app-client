import { z } from 'zod';
import { client } from '../common';
import { personSchema, PersonType } from './schema';

export const getPeople = async (query: any) => {
  const { firstName, ...rest } = query;
  const res = await client.get<{ persons: PersonType[]; totalPages: number }>(
    'person',
    { params: { ...rest, search: firstName } }
  );

  const arrayOfPerson = z.array(personSchema).parse(res.data.persons);
  return { people: arrayOfPerson, totalPages: res.data.totalPages };
};
