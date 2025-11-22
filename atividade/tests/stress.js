import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 200 },  // 0 -> 200 usuários em 2 minutos
    { duration: '2m', target: 500 },  // 200 -> 500 usuários em 2 minutos
    { duration: '2m', target: 1000 }, // 500 -> 1000 usuários em 2 minutos
    { duration: '1m', target: 0 },    // rampa de queda
  ],
};

export default function () {
  const res = http.post('http://localhost:3000/checkout/crypto');

  // Aqui o foco é mais em desempenho do que em regra de negócio,
  // então vou considerar "ok" qualquer status < 500
  check(res, {
    'resposta sem erro de servidor (status < 500)': (r) => r.status < 500,
  });
}
