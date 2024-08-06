interface addBetweenInterface {
  start?: string | null;
  newItem?: string | null;
  end?: string | null;
}

export const addBetween = (addBetweenData: addBetweenInterface) => {
  const { start, newItem, end } = addBetweenData;
  return [start, newItem, end].filter(Boolean);
};

export default { addBetween };
