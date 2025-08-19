# 🚀 API Testing

Project untuk **Automated API Testing** menggunakan **Jest** & **Supertest**.  
Menunjukkan cara melakukan pengujian **GET, POST, PUT, DELETE** dengan struktur kode yang rapi serta penggunaan **environment variable**.

---

## 📂 Struktur Project
```
API-TESTING/
│── node_modules/
│── reports/ 
│ └── test-report.html
│── src/
│ ├── config/
│ │ └── ConfigMaster.js 
│ ├── helpers/
│ │ └── RequestHelper.js
│ └── test/
│ └── api.test.js
│── .env.example
│── .gitignore
│── jest.config.js
│── package.json
│── package-lock.json
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
   a. **Jika ingin menjalankan di terminal**
    ```bash      
      npm test
    
   b. **Jika ingin melihat detail report dalam format HTML**
        ```bash
       npm test -- --reporters=default --reporters=jest-html-reporters
5. **📊 Hasil Report**
      Setelah menjalankan test, buka file berikut di browser
   ```bash
   reports/test-report.html

