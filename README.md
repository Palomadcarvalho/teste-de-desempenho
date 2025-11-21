# Ecommerce Checkout API (SUT)

Trata-se de uma API Node.js propositalmente construída com endpoints que simulam diferentes comportamentos de consumo de recursos (I/O vs CPU), permitindo a prática de testes de Carga, Estresse, Pico e Resistência.

## 📋 Pré-requisitos

Para executar este projeto e realizar a atividade, você precisará de:

- Node.js (v14 ou superior)
- k6 (Ferramenta de teste de carga).

🚀 Como rodar a aplicação

Clone o repositório e entre na pasta: `git clone https://github.com/CleitonSilvaT/teste-de-desempenho`

`cd teste-de-desempenho`

Instale as dependências: `npm install`

Inicie o servidor: `npm start`

Você verá a mensagem: 🚀 SUT (Ecommerce API) rodando na porta 3000🔌 Endpoints DisponíveisA API expõe as seguintes rotas para teste:

1. Health Check (Smoke Test)

   Método: GET URL: http://localhost:3000/health
   Comportamento: Retorna status 200 imediatamente. Usado para verificar se a API está online.

2. Checkout Simples (I/O Bound)

   Método: POST URL: http://localhost:3000/checkout/simple
   Comportamento: Simula uma transação que depende de rede ou banco de dados. O servidor aguarda um tempo aleatório (entre 100ms e 300ms) antes de responder, mas consome pouca CPU.Uso Ideal: Testes de Carga (Load) e Pico (Spike).

3. Checkout Seguro (CPU Bound)

   Método: POST URL: http://localhost:3000/checkout/crypto
   Comportamento: Realiza um cálculo pesado de hash (bcrypt). Isso bloqueia o Event Loop do Node.js momentaneamente.Uso Ideal: Testes de Estresse (Stress) para encontrar o ponto de ruptura da CPU.

## 🧪 Estrutura para a Atividade

Recomendamos que você crie seus scripts de teste na pasta tests/. A estrutura do projeto deve ficar assim:

├── src/

│ └── server.js # Código da API (NÃO ALTERAR)

├── package.json

├── README.md

└── tests/ # Crie seus scripts k6 aqui

├── smoke.js

├── load.js

├── stress.js

└── spike.js

⚠️ Aviso ImportanteEsta aplicação foi desenhada para fins didáticos. O código contém ineficiências propositais para facilitar a visualização de gargalos durante os testes de desempenho. Não utilize este código como referência para aplicações em produção.
