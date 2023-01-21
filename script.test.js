const googleSearch = require("./script");

dbMock = ["dog.com", "disney.com", "cheese.com", "dogcutepics.com"];

it("is a silly test", () => {
  expect("hello").toBe("hello");
  googleSearch("testtest", dbMock);
});

it("is searching google", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("dog.com", dbMock)).toEqual(["dog.com"]);
});
