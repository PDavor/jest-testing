const googleSearch = require("./script");

dbMock = ["dog.com", "disney.com", "cheese.com", "dogcutepics.com"];
it("this is a test", () => {
  googleSearch("testtest", dbMock);
});
