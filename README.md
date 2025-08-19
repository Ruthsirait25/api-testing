# 🚀 API Testing

Project untuk **Automated API Testing** menggunakan **Jest** & **Supertest**.  
Menunjukkan cara melakukan pengujian **GET, POST, PUT, DELETE** dengan struktur kode yang rapi serta penggunaan **environment variable**.

---

## 📂 Struktur Project
```
api-testing/
├── src/
│   ├── config/ConfigMaster.js
│   ├── helpers/RequestHelper.js
│   └── test/api.test.js
├── .env.example
├── package.json
└── README.md
```

## ⚡ Cara Menjalankan

1. **Clone project**
   ```bash
   git clone https://github.com/username/api-testing.git
   cd api-testing
2. **Install dependencies**
   ```bash
   npm install
3. **Buat file .env dari .env.example**
    ```bash
       BASE_URL=https://jsonplaceholder.typicode.com
4. **Jalankan Test**
    ```bash      
      npm test
