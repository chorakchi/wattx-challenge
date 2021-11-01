export const mapper = (items) => {
  return items.map((item) => {
    return Object.keys(item).map((k) =>
        item[k]
    );
  });
};
