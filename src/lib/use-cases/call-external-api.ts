import axios from "axios";

export const get = async (api: string) => {
  const { data } = await axios.get(api);
  return data.record;
};

export default { get };
