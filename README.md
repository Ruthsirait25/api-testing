# Api-testing
Project untuk Automated API Testing menggunakan Jest &amp; Supertest. Menunjukkan cara melakukan pengujian GET, POST, PUT, DELETE dengan struktur kode yang rapi dan penggunaan environment variable.

## Struktur Project
api-testing/
├── src/
│ ├── config/ConfigMaster.js
│ ├── helpers/RequestHelper.js
│ └── test/sample.test.js
├── .env.example
├── package.json
└── README.md

1. Clone project:
   git clone https://github.com/username/api-testing.git
   cd api-testing
2. Install dependencies:
  npm install
3. Buat file .env dari .env.example:
   BASE_URL=https://jsonplaceholder.typicode.com
4. Jalankan test:
   npm test
