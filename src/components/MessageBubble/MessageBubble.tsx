import React from "react";

import * as css from "./MessageBubble.css";

const MessageBubble = ({
  text,
  from,
  messageInd,
}: {
  text: string;
  from: "user" | "bot";
  messageInd: number;
}) => {
  return (
    <div key={messageInd} className={css.msgOuter}>
      <div className={from === "bot" ? css.msgInnerBot : css.msgInnerUser}>
        <div className={css.msgInner}>{text}</div>
      </div>
    </div>
  );
};

export { MessageBubble };
