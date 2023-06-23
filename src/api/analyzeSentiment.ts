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

import { TextAnalyticsClient, AzureKeyCredential } from "@azure/ai-text-analytics";
import { cognitiveSecret } from "./cognitiveSecret";

// You will need to set these environment variables or edit the following values
const endpoint = 'https://deburgger.cognitiveservices.azure.com/'
const apiKey = cognitiveSecret;

const analyzeSentiment = async (text: string) =>  {
  console.log("=== Analyze Sentiment Sample ===");

  const client = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));

  const results = await client.analyzeSentiment([text]);

  console.log(results[0])

  return {
    text,
    ...results[0],
  }
}

export {
  analyzeSentiment
}
