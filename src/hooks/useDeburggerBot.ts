import React from "react";
import { queryKnowledgeBase } from "../api/queryKnowledgeBase";

/**
 * The main hook where the Deburgger bot constructs its responses
 *
 * @returns {
 *
 * }
 */
const useDeburggerBot = () => {
  const [isResponding, setIsResponding] = React.useState(false);
  const [lastBotMessage, setLastBotMessage] = React.useState("");

  const onUserInput = React.useCallback((text: string) => {
    setIsResponding(true);

    const finish = (responseText: string) => {
      setIsResponding(false);
      setLastBotMessage(responseText);
    };

    const buildResponse = async () => {
      /**
       * RESPONSE BUILD LOGIC HERE.
       */

      // Check if QnA Query Returns an Answer
      const knowledgeQuery = await queryKnowledgeBase(text);
      if (knowledgeQuery?.answers?.[0]?.confidenceScore >= 0.5) {
        finish(knowledgeQuery.answers[0].answer);
        return;
      }

      finish("Sorry no response from me.");
    };

    buildResponse();
  }, []);

  return {
    onUserInput,
    isResponding,
    lastBotMessage,
  };
};

export { useDeburggerBot };
