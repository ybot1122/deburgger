const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const analyzeConversations = async (text) => {
  const body =
  {
    "top": 3,
    "question": "YOUR_QUESTION_HERE",
    "includeUnstructuredSources": true,
    "confidenceScoreThreshold": "YOUR_SCORE_THRESHOLD_HERE",
    "answerSpanRequest": {
      "enable": true,
      "topAnswersWithSpan": 1,
      "confidenceScoreThreshold": "YOUR_SCORE_THRESHOLD_HERE"
    },
    "filters": {
      "metadataFilter": {
        "logicalOperation": "YOUR_LOGICAL_OPERATION_HERE",
        "metadata": [
          {
            "key": "YOUR_ADDITIONAL_PROP_KEY_HERE",
            "value": "YOUR_ADDITIONAL_PROP_VALUE_HERE"
          }
        ]
      }
    }
  };

  const response = await fetch('https://deburggerlanguageservices.cognitiveservices.azure.com/language/:query-knowledgebases?projectName=Deburgger&api-version=2021-10-01&deploymentName=production', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  });
  const data = await response.json();

  return data;
};

module.exports = analyzeConversations;