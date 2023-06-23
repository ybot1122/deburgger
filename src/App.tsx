import React from "react";

import { themeClass } from "./theme.css";
import * as css from "./App.css";
import classNames from "classnames";
import { LanguageModelDisplay } from "./components/LanguageModelDisplay/LanguageModelDisplay";
import { ChatWindowUserInputSubmit } from "./components/ChatWindowUserInputSubmit/ChatWindowUserInputSubmit";
import { MessageBubble } from "./components/MessageBubble/MessageBubble";
import { analyzeSentiment } from "./api/analyzeSentiment";
import { useDeburggerBot } from "./hooks/useDeburggerBot";

type Message = {
  from: "user" | "bot";
  text: string;
  messageInd: number;
};

const App = () => {
  const chatWindowRef = React.useRef<HTMLDivElement>(null);
  const messages = React.useRef<Message[]>([
    {
      from: "bot",
      text: "Hi, welcome to Deburgger. I can help you with anything related to burgers. Cooking? Eating? Just plain love em?",
      messageInd: -1,
    },
  ]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [numMessages, setNumMessages] = React.useState(0);
  const [lastUserMsg, setLastUserMsg] = React.useState("");

  const latestBotMessage = React.useRef("");
  const { onUserInput, isResponding, lastBotMessage } = useDeburggerBot();

  // Update message chain when bot responds
  React.useEffect(() => {
    if (latestBotMessage.current === lastBotMessage) return;

    messages.current.push({
      from: "bot",
      text: lastBotMessage,
      messageInd: numMessages,
    });

    setNumMessages(numMessages + 1);
    latestBotMessage.current = lastBotMessage;
  }, [lastBotMessage, numMessages]);

  // Handle user input submit
  const onSubmit = React.useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      if (inputRef?.current?.value) {
        const val = inputRef?.current?.value;
        messages.current.push({
          from: "user",
          text: val,
          messageInd: numMessages,
        });
        onUserInput(val);
        setLastUserMsg(val);
        setNumMessages(numMessages + 1);
        inputRef.current.value = "";
      }

      return false;
    },
    [numMessages, onUserInput]
  );

  // Scroll to bottom whenever new message is sent.
  React.useEffect(() => {
    if (chatWindowRef?.current?.scrollHeight) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [numMessages]);

  // Render all the messages
  const messagesRendered = messages.current.map((m) => {
    return (
      <MessageBubble
        from={m.from}
        messageInd={m.messageInd}
        text={m.text}
        key={m.messageInd}
      />
    );
  });

  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>
        <h1>Deburgger</h1>
      </header>
      <div id="front-cover" className={css.frontCover}>
        Deburgger - The Smartest AI When it Comes to Burgers. Not much else.
      </div>

      <div className={css.chatWindow}>
        <div className={css.chatMessageWindow} ref={chatWindowRef}>
          {messagesRendered}
        </div>
        <ChatWindowUserInputSubmit
          onSubmit={onSubmit}
          inputRef={inputRef}
          isDisabled={isResponding}
        />
      </div>
      <LanguageModelDisplay
        text={lastUserMsg}
        analysisCb={analyzeSentiment}
        header="Sentiment Analysis"
      />
    </div>
  );
};

export default App;
