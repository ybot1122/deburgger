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

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    console.log(`- Document ${result.id}`);
    if (!result.error) {
      console.log(`\tDocument text: ${text}`);
      console.log(`\tOverall Sentiment: ${result.sentiment}`);
      console.log("\tSentiment confidence scores: ", result.confidenceScores);
      console.log("\tSentences");
      for (const { sentiment, confidenceScores, text } of result.sentences) {
        console.log(`\t- Sentence text: ${text}`);
        console.log(`\t  Sentence sentiment: ${sentiment}`);
        console.log("\t  Confidence scores:", confidenceScores);
      }
    } else {
      console.error(`  Error: ${result.error}`);
    }
  }
}

export {
  analyzeSentiment
}
