// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample uses the key-phrase extraction endpoint to determine which
 * words or phrases in a document are of particular importance.
 *
 * @summary extracts key phrases from a piece of text
 */

import {
  TextAnalyticsClient,
  AzureKeyCredential,
} from "@azure/ai-text-analytics";
import { cognitiveSecret } from "./cognitiveSecret";

// You will need to set these environment variables or edit the following values
const endpoint = "https://deburgger.cognitiveservices.azure.com/";
const apiKey = cognitiveSecret;

const extractKeyPhrases = async (text: string) => {
  const client = new TextAnalyticsClient(
    endpoint,
    new AzureKeyCredential(apiKey)
  );

  const results = await client.extractKeyPhrases([text]);

  return results;
};

export { extractKeyPhrases };
