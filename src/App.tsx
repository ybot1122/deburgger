import React from "react";

import { themeClass } from "./theme.css";
import * as css from "./App.css";
import classNames from "classnames";
import { SentimentAnalysisSection } from "./components/SentimentAnalysis/SentimentAnalysis";

type Message = {
  from: "user" | "bot";
  text: string;
};

const App = () => {
  const messages = React.useRef<Message[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [numMessages, setNumMessages] = React.useState(0);
  const [lastUserMsg, setLastUserMsg] = React.useState("");

  const onSubmit = React.useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputRef?.current?.value) {
      setLastUserMsg(inputRef.current.value);
      setNumMessages(numMessages + 1);
      inputRef.current.value = "";
    }

    return false;
  }, [numMessages]);

  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>
        <h1>Deburgger</h1>
      </header>
      <div id="front-cover" className={css.frontCover}>
        Deburgger - The Smartest AI When it Comes to Burgers. Not much else.
      </div>

<div className={css.chatWindow}>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef} className={css.userInput} placeholder="type message here" />
        <button type="submit" className={css.userInputSubmit}>Submit</button>
      </form>
</div>
      <SentimentAnalysisSection text={lastUserMsg} />
    </div>
  );
};

export default App;
