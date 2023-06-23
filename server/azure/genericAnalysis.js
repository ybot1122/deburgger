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

  for await (const page of resultPages) {
    const keyPhrasesAction = page.extractKeyPhrasesResults[0];
    if (!keyPhrasesAction.error) {
      for (const doc of keyPhrasesAction.results) {
        console.log(`- Document ${doc.id}`);
        if (!doc.error) {
          console.log("\tKey phrases:");
          for (const phrase of doc.keyPhrases) {
            console.log(`\t- ${phrase}`);
          }
        } else {
          console.error("\tError:", doc.error);
        }
      }
      console.log("Action statistics: ");
      console.log(JSON.stringify(keyPhrasesAction.results.statistics));
    }

    const entitiesAction = page.recognizeEntitiesResults[0];
    if (!entitiesAction.error) {
      for (const doc of entitiesAction.results) {
        console.log(`- Document ${doc.id}`);
        if (!doc.error) {
          console.log("\tEntities:");
          for (const entity of doc.entities) {
            console.log(`\t- Entity ${entity.text} of type ${entity.category}`);
          }
        } else {
          console.error("\tError:", doc.error);
        }
      }
      console.log("Action statistics: ");
      console.log(JSON.stringify(entitiesAction.results.statistics));
    }

    const piiEntitiesAction = page.recognizePiiEntitiesResults[0];
    if (!piiEntitiesAction.error) {
      for (const doc of piiEntitiesAction.results) {
        console.log(`- Document ${doc.id}`);
        if (!doc.error) {
          console.log("\tPii Entities:");
          for (const entity of doc.entities) {
            console.log(`\t- Entity ${entity.text} of type ${entity.category}`);
          }
        } else {
          console.error("\tError:", doc.error);
        }
      }
      console.log("Action statistics: ");
      console.log(JSON.stringify(piiEntitiesAction.results.statistics));
    }
  }
}

module.exports = {
  genericAnalysis,
}