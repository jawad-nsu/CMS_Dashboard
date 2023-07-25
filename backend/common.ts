// import axios from '@/lib/axios';

// export const fetchAPI = async (route, method, data) => {
//   const headers = {
//     ...(window.localStorage.getItem('token')
//       ? { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
//       : {}),

//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   };

//   return axios(
//     {
//       method,
//       url: `${route}`,
//       data,
//     },
//     { headers }
//   );
// };

// export async function parseBody(res, skipErrorCheck = false) {
//   const body = await res.data;
//   if (!skipErrorCheck) {
//     if (body.error) throw new Error(body.message || body.errorObj.message);
//     if (res.status !== 200) throw new Error(res.statusText);
//   }

//   return body;
// }
