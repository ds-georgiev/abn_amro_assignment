import mockAPICall from "./mocks/mockAPICall";

describe("API test", () => {
  test("API can fetch shows", async () => {
    const status = await mockAPICall;
    expect(status).toBe(true);
  });
});
