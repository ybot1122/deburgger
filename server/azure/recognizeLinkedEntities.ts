// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample uses the linked entity recognition endpoint to detect
 * well-known entities in a document and connect (link) them to entries in an
 * external knowledge base (such as Wikipedia) that contain information about
 * the entity.
 *
 * @summary detects entities that have links to more information on the web
 */

import {
  TextAnalyticsClient,
  AzureKeyCredential,
} from "@azure/ai-text-analytics";
import { cognitiveSecret } from "./cognitiveSecret";

// You will need to set these environment variables or edit the following values
const endpoint = "https://deburgger.cognitiveservices.azure.com/";
const apiKey = cognitiveSecret;

const recognizeLinkedEntities = async (text: string) => {
  const client = new TextAnalyticsClient(
    endpoint,
    new AzureKeyCredential(apiKey)
  );

  const results = await client.recognizeLinkedEntities([
    {
      id: "0",
      language: "en",
      text,
    },
  ]);

  return results;
};

export { recognizeLinkedEntities };
