const request = require("../helpers/RequestHelper");
const { createUserData, updateUserData, deleteUserData } = require("../config/TestData");

describe("Testing API JSONPlaceholder", () => {
  
  // === READ ===
  it("GET - Ambil 1 post", async () => {
    const res = await request.get("/posts/1");
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("id", 1);
  });

  // === CREATE ===
  describe("CREATE", () => {
    test.each(createUserData)(
      "Should create user with name: %s and email: %s",
      async (payload) => {
        const res = await request.post("/users", payload);

        expect(res.status).toBe(201);
        expect(res.data).toHaveProperty("id");
        expect(res.data.name).toBe(payload.name);
        expect(res.data.email).toBe(payload.email);
      }
    );
  });

  // === UPDATE ===
  describe("UPDATE", () => {
    test.each(updateUserData)(
      "Should update post with id: %s",
      async (payload) => {
        const res = await request.put(`/posts/${payload.id}`, payload);

        expect(res.status).toBe(200);
        expect(res.data).toMatchObject(payload);
      }
    );
  });

  // === DELETE ===
  describe("DELETE", () => {
    test.each(deleteUserData)(
      "Should delete post with id: %s",
      async (payload) => {
        const res = await request.delete(`/posts/${payload.id}`);

        expect([200, 204]).toContain(res.status);
        expect(res.data).toEqual({});
      }
    );
  });

});