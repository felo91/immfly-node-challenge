export const addBetween = (start: string, end: string, newItem: string) => {
  return [start, newItem, end].filter(Boolean);
};

export default { addBetween };
