const data = require("../Data/skills.json");
const topSkills = require("../topSkills");

function randomFunction(req,res,next){
  const {options,inputArray} =   req.body
  try {
    res.status(200).send(topSkills(data, inputArray, options));
  } catch (error) {
    res.status(400).send(error)
  }
}
module.exports = randomFunction;

