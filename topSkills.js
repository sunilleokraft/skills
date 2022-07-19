const {
  getFilterDataWithConfig,
  filterDataToGetSameIds,
  sortObjbyKey,
} = require("./extraFunctions");

function topSkills(data, inputArray, options) {
  //function call for store sameAsIs for all inputs
  let sameAsIds = filterDataToGetSameIds(data, inputArray);
  let inferredFromIds = [];
  let inferredIds = [];
  let relatedIds = [];

  sameAsIds.map((ids) => {
    const abc = data.filter((skill) => {
      if (skill.id == ids) {
        inferredFromIds = [...inferredFromIds, ...skill.inferredFromIds];
        inferredIds = [...inferredIds, ...skill.inferredIds];
        relatedIds = [...relatedIds, ...skill.relatedIds];
      }
    });
  });
  //   console.log(inferredFromIds, inferredIds, relatedIds);

  let finalOutput = [
    ...sortObjbyKey(inferredFromIds, options.includeInferedFrom),
    ...sortObjbyKey(inferredIds, options.includeInfered),
    ...sortObjbyKey(relatedIds, options.includeRelated),
  ];
  finalOutput = [...new Set(finalOutput)];

  return getFilterDataWithConfig(finalOutput, data);
}

module.exports = topSkills;
