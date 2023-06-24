import React from "react";
import { queryKnowledgeBase } from "../api/queryKnowledgeBase";
import { getAnswer, shouldUseQnA } from "./handleQnA";

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
      if (shouldUseQnA(knowledgeQuery)) {
        finish(getAnswer(knowledgeQuery));
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
