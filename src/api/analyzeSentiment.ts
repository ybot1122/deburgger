import { endpoint } from "./endpoint";

const analyzeSentiment = async (text: string) => {
  const body = await fetch(`${endpoint}/sentimentAnalysis?text=${text}`);
  const json = await body.json();

  return json;
};

export { analyzeSentiment };
