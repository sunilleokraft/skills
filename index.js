const data = require("./Data/skills.json");
const topSkills = require("./topSkills");
const options = {
  includeInferedFrom: 3,
  includeInfered: 0,
  includeRelated: 3,
};
const inputArray = ["Java", "react", "javascript", ".net"];

const start = performance.now();
topSkills(data, inputArray, options);
const duration = performance.now() - start;
console.log("time taken by programme: " + duration + " ms");

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
