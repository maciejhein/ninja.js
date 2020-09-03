import { shape, number, string } from 'prop-types';

export const row = shape({
  name1: string,
  email: string,
  edit_path: string,
  per_id: number
});
