/**
 * Question answering API. https://learn.microsoft.com/en-us/rest/api/cognitiveservices/questionanswering/question-answering/get-answers?tabs=HTTP#code-try-0
 * 
 * Given a question, tries to return the answer by querying our knowledge database.
 */

const {subscriptionKey} = require('../opcApimSubscriptionKey');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const queryKnowledgeBase = async (text) => {
  const body =

  {
    "question": text,
    "top": 3,
    "confidenceScoreThreshold": 0.2,
    "context": { },
    "rankerType": "Default",
    "filters": {  },
    "answerSpanRequest": {
      "enable": true,
      "confidenceScoreThreshold": 0.2,
      "topAnswersWithSpan": 1
    },
    "includeUnstructuredSources": true
  }
  
  const response = await fetch('https://deburggerlanguageservices.cognitiveservices.azure.com/language/:query-knowledgebases?projectName=Deburgger&api-version=2021-10-01&deploymentName=production', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey,
    }
  });
  const data = await response.json();

  return data;
};

module.exports = queryKnowledgeBase;