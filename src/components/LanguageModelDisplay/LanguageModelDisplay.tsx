import React from "react";
import * as css from "./LanguageModelDisplay.css";
import JSONPretty from "react-json-pretty";

const LanguageModelDisplay = ({
  text,
  analysisCb,
}: {
  text: string;
  analysisCb: (text: string) => Promise<any>;
}) => {
  const [results, setResults] = React.useState({});

  React.useEffect(() => {
    const analyze = async () => {
      const r = await analysisCb(text);
      setResults(r);
    };
    if (text) {
      analyze();
    }
  }, [text]);

  return (
    <div className={css.container}>
      <h2 className={css.header}>Sentiment Analysis</h2>
      <div className={css.header}>
        <JSONPretty data={results} />
      </div>
    </div>
  );
};

export { LanguageModelDisplay };
