const extraFunction = {
  getFilterDataWithConfig: (array, data) => {
    let list = [];
    array.map((ids) => {
      const SkillNameData = data.filter((skill) => {
        if (skill.id == ids) {
          list = [...list, skill.name];
        }
      });
    });
    return list;
  },
  //sort object by key
  sortObjbyKey: (ids, limit, filteObject = {}) => {
    ids.map((id) => {
      if (!filteObject[id]) {
        filteObject[id] = 1;
      } else {
        filteObject[id] = filteObject[id] + 1;
      }
    });

    sortable = Object.fromEntries(
      Object.entries(filteObject)
        .sort(([, a], [, b]) => b - a)
        .slice(0, limit)
    );
    return Object.keys(sortable);
  },
  //function to filter data with input array and collect all sameIds in one array
  filterDataToGetSameIds: (data, inputs) => {
    let sameIds = [];
    data.find((skill) => {
      inputs.map((input) => {
        if (skill.name.toLowerCase() == input.toLowerCase()) {
          sameIds = [...sameIds, ...skill.sameAsIds, skill.id];
        }
      });
    });
    return [...new Set(sameIds)];
  },
};

module.exports = extraFunction;
