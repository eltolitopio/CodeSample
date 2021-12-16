import { getRepoByName } from "../api/services/repoServices";

test("Check api for bugs", async () => {
  const result = await getRepoByName("eslint/eslint");
  // const result = await getRepoByName("brocc-ab/test");

  expect(result).toBeInstanceOf(Object);
  expect(result).toHaveProperty("full_name");
  expect(result).toHaveProperty("description");
  expect(result).toHaveProperty("stargazers_count");
});
