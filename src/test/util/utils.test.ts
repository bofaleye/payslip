import { formatDate } from "../../utils/index";

describe("formatDate function", () => {
  test("formats date string correctly", () => {
    const dateString = "2024-04-05T00:00:00Z";

    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe("Apr 5, 2024");
  });

  test("formats Date object correctly", () => {
    const dateObject = new Date("2024-04-05");
    const formattedDate = formatDate(dateObject);
    expect(formattedDate).toBe("Apr 5, 2024");
  });

  test("handles invalid input gracefully", () => {
    const formattedDate = formatDate("invalid");
    expect(formattedDate).toBe("");
  });
});
