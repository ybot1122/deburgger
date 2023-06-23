import { endpoint } from "./endpoint";

const queryKnowledgeBase = async (text: string) => {
  const body = await fetch(`${endpoint}/queryKnowledgeBase?text=${text}`);
  const json = await body.json();

  return json;
};

export { queryKnowledgeBase };
