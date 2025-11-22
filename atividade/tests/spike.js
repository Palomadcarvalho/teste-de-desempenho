import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },   // carga baixa por 30s
    { duration: '10s', target: 300 },  // salto imediato para 300 usuários em 10s
    { duration: '1m', target: 300 },   // manter 300 usuários por 1 min
    { duration: '10s', target: 10 },   // queda imediata para 10 usuários
    { duration: '20s', target: 0 }, 
  ],
};

export default function () {
  const res = http.post('http://localhost:3000/checkout/simple');

  check(res, {
    'sem erro de servidor (status < 500)': (r) => r.status < 500,
  });
}
