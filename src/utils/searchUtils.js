var filterNotNull = filters => {
  var filtered = [];
  filters.forEach(filter => {
    if (Object.values(filter)[0] !== null) {
      filtered.push(filter);
    }
  });
  return filtered;
};

export { filterNotNull };
