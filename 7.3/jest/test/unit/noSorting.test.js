const sorting = require("../../app");

describe("Books the same names test suit", () => {
  it("Books names should not be sorted", () => {
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

