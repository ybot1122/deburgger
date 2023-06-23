import React from "react";
import { analyzeSentiment } from "../../api/analyzeSentiment";
import * as css from './SentimentAnalysis.css'
import JSONPretty from 'react-json-pretty';const SentimentAnalysisSection = () => {
  const sentimentAnalysisInput = React.useRef<HTMLInputElement>(null);
  const [results, setResults] = React.useState({});

  const onSubmitSentimentAnalysis = React.useCallback(async () => {
    if (sentimentAnalysisInput?.current?.value) {
      const r = await analyzeSentiment(sentimentAnalysisInput?.current?.value);
      setResults(r);
    }
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.header}>Sentiment Analysis</h2>
      <div className={css.header}>
        <input type="text" ref={sentimentAnalysisInput} /><button type="submit" onClick={onSubmitSentimentAnalysis}>Submit</button>
        
      </div>
      <div className={css.header}>
        <JSONPretty data={results} />
      </div>
  </div>

  );
}

export {
  SentimentAnalysisSection
}