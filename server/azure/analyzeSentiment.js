// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * In this sample, we use the sentiment analysis endpoint to retrieve
 * estimations of document sentiment (positive, negative, or mixed) within some
 * example text. The endpoint allows us to analyze sentiment on a per-sentence
 * or overall (per-document) basis.
 *
 * @summary analyzes the sentiment of a piece of text
 *
 *
 * source: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/textanalytics/ai-text-analytics/samples/v5/typescript/src/analyzeSentiment.ts
 */

const {
  TextAnalyticsClient,
  AzureKeyCredential,
} = require("@azure/ai-text-analytics");
const { cognitiveSecret } = require("./cognitiveSecret");

// You will need to set these environment variables or edit the following values
const endpoint = "https://deburgger.cognitiveservices.azure.com/";
const apiKey = cognitiveSecret;

const analyzeSentiment = async (text, includeOpinionMining = true) => {
  const client = new TextAnalyticsClient(
    endpoint,
    new AzureKeyCredential(apiKey)
  );

  const results = await client.analyzeSentiment(
    [
      {
        id: "0",
        language: "en",
        text,
      },
    ],
    { includeOpinionMining }
  );

  return {
    text,
    ...results[0],
  };
};

module.exports = { analyzeSentiment };
