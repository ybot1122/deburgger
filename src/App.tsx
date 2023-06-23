import React from "react";

import { themeClass } from "./theme.css";
import * as css from "./App.css";
import classNames from "classnames";
import { analyzeSentiment } from "./api/analyzeSentiment";

const App = () => {

  const sentimentAnalysisInput = React.useRef<HTMLInputElement>(null);

  const onSubmitSentimentAnalysis = React.useCallback(() => {
    if (sentimentAnalysisInput?.current?.value) {
      analyzeSentiment(sentimentAnalysisInput?.current?.value);
    }
  }, []);

  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>
        <h1>Deburgger</h1>
      </header>
        <div id="front-cover" className={css.frontCover}>
          Hi I am Deburgger
        </div>
        <div>
          <h2>Sentiment Analysis</h2>
          <input type="text" ref={sentimentAnalysisInput} /><button type="submit" onClick={onSubmitSentimentAnalysis}>Submit</button>
        </div>
    </div>
  );
};

export default App;
