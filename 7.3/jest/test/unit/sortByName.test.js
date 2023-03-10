const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
        "Гарри Поттер",
        "Гарри Поттер",
        "Гарри Поттер"
    ]

    const expected = input
    const result = sorting.sortByName(input)
    expect(result).toEqual(expected);
  });
});

