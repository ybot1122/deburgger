import React from "react";
import { analyzeSentiment } from "../../api/analyzeSentiment";
import * as css from './SentimentAnalysis.css'
import JSONPretty from 'react-json-pretty';

const SentimentAnalysisSection = ({text}: {text: string}) => {
  const [results, setResults] = React.useState({});

  React.useEffect(() => {
    const analyze = async () => {
        const r = await analyzeSentiment(text);
        setResults(r);
    }
    if (text) {
      analyze();
    }

  }, [text])

  return (
    <div className={css.container}>
      <h2 className={css.header}>Sentiment Analysis</h2>
      <div className={css.header}>
        <JSONPretty data={results} />
      </div>
  </div>

  );
}

export {
  SentimentAnalysisSection
}