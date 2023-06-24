type KnowledgeQueryResponse = {
  answers: {
    confidenceScore: number;
    answer: string;
  }[];
};

const shouldUseQnA = (knowledgeQuery: KnowledgeQueryResponse) => {
  if (!knowledgeQuery) return false;

  if (!knowledgeQuery.answers) return false;

  const len = knowledgeQuery.answers.length;
  for (let i = 0; i < len; i++) {
    if (knowledgeQuery.answers[i].confidenceScore >= 0.8) return true;
  }

  return false;
};

const getAnswer = (knowledgeQuery: KnowledgeQueryResponse) => {
  const len = knowledgeQuery.answers.length;
  const possible = [];
  for (let i = 0; i < len; i++) {
    if (knowledgeQuery.answers[i].confidenceScore >= 0.8)
      possible.push(knowledgeQuery.answers[i].answer);
  }

  return possible[Math.floor(Math.random() * possible.length)];
};

export { shouldUseQnA, getAnswer };
