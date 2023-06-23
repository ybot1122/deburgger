import React from "react";
import { analyzeSentiment } from "../../api/analyzeSentiment";

const SentimentAnalysisSection = () => {
  const sentimentAnalysisInput = React.useRef<HTMLInputElement>(null);

  const onSubmitSentimentAnalysis = React.useCallback(() => {
    if (sentimentAnalysisInput?.current?.value) {
      analyzeSentiment(sentimentAnalysisInput?.current?.value);
    }
  }, []);

  return (
    <div>
    <h2>Sentiment Analysis</h2>
    <input type="text" ref={sentimentAnalysisInput} /><button type="submit" onClick={onSubmitSentimentAnalysis}>Submit</button>
  </div>

  );
}

export {
  SentimentAnalysisSection
}