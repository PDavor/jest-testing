const fetch = require("node-fetch");
const swapi = require("./script2");

// done is used to execute test when done is called, otherwise async tests false positive
it("calls swapi to get people", (done) => {
  //Expect.assertions(number) verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    done();
  });
});

// you can also return instead of using done param also
it("calls swapi to get people with a promise", () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

//https://github.com/sapegin/jest-cheat-sheet
