import axios from 'axios';

export async function postStore(values: Object) {
  const res = await axios.post('/api/stores', values);
  return res;
}

export async function updateStore(values: Object, storeId: String) {
  const res = await axios.patch(`/api/stores/${storeId}`, values);
  return res;
}
