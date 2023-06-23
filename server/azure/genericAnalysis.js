// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample extracts key phrases, entities, and pii entities from several documents
 *  using a long-running operation. This functionality uses the generic analysis
 * endpoint, which provides a way to group several different Text Analytics actions
 * into a single request.
 *
 * @summary applies multiple Text Analytics actions per document
 */

const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");
const { cognitiveSecret } = require("./cognitiveSecret");

// You will need to set these environment variables or edit the following values
const endpoint = "https://deburgger.cognitiveservices.azure.com/";
const apiKey = cognitiveSecret;

const genericAnalysis = async (text) => {

  const documents = [text]

  const client = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));

  const actions = {
    recognizeEntitiesActions: [{ modelVersion: "latest" }],
    recognizePiiEntitiesActions: [{ modelVersion: "latest" }],
    extractKeyPhrasesActions: [{ modelVersion: "latest" }],
    recognizeLinkedEntitiesActions: [{modelVersion: "latest"}],
    analyzeSentimentActions: [{modelVersion: "latest"}],
  };
  const poller = await client.beginAnalyzeActions(documents, actions, "en", {
    includeStatistics: true,
  });

  poller.onProgress(() => {
    console.log(
      `Number of actions still in progress: ${poller.getOperationState().actionsInProgressCount}`
    );
  });

  console.log(`The analyze actions operation created on ${poller.getOperationState().createdOn}`);

  console.log(
    `The analyze actions operation results will expire on ${poller.getOperationState().expiresOn}`
  );

  const resultPages = await poller.pollUntilDone();

  const result = [];
  for await (const page of resultPages) {
    result.push(page);
  }

  return result;
}

module.exports = {
  genericAnalysis,
}