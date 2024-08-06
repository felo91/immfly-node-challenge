interface addBetweenInterface {
  start?: string | null;
  newItem?: string[] | null;
  end?: string | null;
}

export const addBetween = (addBetweenData: addBetweenInterface) => {
  let { start, newItem, end } = addBetweenData;
  newItem = newItem || [];
  return [start, ...newItem, end].filter(Boolean);
};

export default { addBetween };
