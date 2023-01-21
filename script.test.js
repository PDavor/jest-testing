const googleSearch = require("./script");

dbMock = ["dog.com", "disney.com", "cheese.com", "dogcutepics.com"];

describe("googleSearch", () => {
  it("is a silly test", () => {
    expect("hello").toBe("hello");
    googleSearch("testtest", dbMock);
  });

  it("is searching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog.com", dbMock)).toEqual(["dog.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("doesn't return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
