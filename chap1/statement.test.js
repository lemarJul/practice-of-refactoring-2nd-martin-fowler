const statement = require("./statement.js");
const plays = require("./plays.json");
const [invoice] = require("./invoices.json");

describe("statement", () => {
  it("should return the correct statement", () => {
    const expectedStatement =
      "Statement for BigCo\n Hamlet: $410.00 (55 seats)\n As You Like It: $510.00 (35 seats)\n Othello: $410.00 (40 seats)\nAmount owed is $1,330.00\nYou earned 47 credits\n";

    expect(statement(invoice, plays)).toEqual(expectedStatement);
  });
});


