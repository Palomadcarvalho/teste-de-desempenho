import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 50 },  // ramp-up: 0 -> 50 VUs em 1 min
    { duration: '2m', target: 50 },  // platô: 50 VUs por 2 min
    { duration: '30s', target: 0 },  // ramp-down: 50 -> 0 em 30s
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // p95 < 500ms
    http_req_failed: ['rate<0.01'],   // erros < 1%
  },
};

export default function () {
  const res = http.post('http://localhost:3000/checkout/simple');

  check(res, {
    'status é 200': (r) => r.status === 200,
  });
}
