const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted", () => {


const input = [
    "Гарри Поттер",
    "Властелин Колец",
    "Волшебник изумрудного города"
]

const expected = [
    "Властелин Колец",
    "Волшебник изумрудного города",
    "Гарри Поттер"
]
const result = sorting.sortByName(input)
expect(result).toEqual(expected);
});
});
