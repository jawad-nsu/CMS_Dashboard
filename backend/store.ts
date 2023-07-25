import axios from 'axios';

export async function postStore(values: Object) {
  const res = await axios.post('/api/stores', values);
  return res;
}
