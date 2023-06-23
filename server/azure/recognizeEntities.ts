// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Uses the entity recognition endpoint to detect entities in a document using
 * Named Entity Recognition (NER) and prints them along with their recognized
 * entity type.
 *
 * @summary detects entites in a piece of text
 */

import {
  TextAnalyticsClient,
  AzureKeyCredential,
} from "@azure/ai-text-analytics";
import { cognitiveSecret } from "./cognitiveSecret";

// You will need to set these environment variables or edit the following values
const endpoint = "https://deburgger.cognitiveservices.azure.com/";
const apiKey = cognitiveSecret;

const recognizeEntities = async (text: string) => {
  const client = new TextAnalyticsClient(
    endpoint,
    new AzureKeyCredential(apiKey)
  );

  const results = await client.recognizeEntities([
    {
      id: "0",
      language: "en",
      text,
    },
  ]);

  return results;
};

export { recognizeEntities };
