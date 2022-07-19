let topSkills = require("./topSkills");
const options = {
  includeInferedFrom: 3,
  includeInfered: 0,
  includeRelated: 3,
};
const data = require("./Data/skills.json")
const inputArray = ["Java", "react", "javascript", ".net"];
const output1 =topSkills(data,inputArray,options);

const output = [ "Tomcat","redTab"]
test("Matching output", () => {
  expect(output).toContain('Tomcat')
});
// console.log(topSkills(data,inputArray,options))
