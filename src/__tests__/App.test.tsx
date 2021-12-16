import { getRepoByName } from "../api";

test("Check api for bugs", async () => {
  const result = await getRepoByName("eslint/eslint");
  // const result = await getRepoByName("ziarmandhost/SuperAdmin2021");// will create 404 error, as this is private repo

  expect(result).toBeInstanceOf(Object);
  expect(result).toHaveProperty("full_name");
  expect(result).toHaveProperty("description");
  expect(result).toHaveProperty("stargazers_count");
});
