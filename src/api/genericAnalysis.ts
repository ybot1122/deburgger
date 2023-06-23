import { endpoint } from "./endpoint";

const genericAnalysis = async (text: string) => {
  const body = await fetch(`${endpoint}/genericAnalysis?text=${text}`);
  const json = await body.json();

  return json;
};

export { genericAnalysis };
