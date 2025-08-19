const api = require('../helpers/RequestHelper');

describe("Testing API JSONPlaceholder", () => {

  // READ
  it("GET - Ambil 1 post", async () => {
    const res = await api.get("/posts/1");
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("id", 1);
  });

  // CREATE
  it("POST - Buat post baru", async () => {
    const payload = {
      title: "Belajar Testing API",
      body: "Ini adalah body contoh",
      userId: 1
    };
    const res = await api.post("/posts", payload);
    expect(res.status).toBe(201);
    expect(res.data).toMatchObject(payload);

    global.newPostId = res.data.id;
  });

  // UPDATE
  it("PUT - Update post yang ada", async () => {
    const payload = {
      id: 1,
      title: "Menjalani Hidup Sebagai Pengangguran ",
      body: "Semoga ini tidak akan lama",
      userId: 1
    };
    const res = await api.put("/posts/1", payload);
    expect(res.status).toBe(200);
    expect(res.data).toMatchObject(payload);
  });

  // DELETE
  it("DELETE - Hapus post", async () => {
    const res = await api.delete("/posts/1");
    expect([200, 204]).toContain(res.status);
    expect(res.data).toEqual({});
  });

});
