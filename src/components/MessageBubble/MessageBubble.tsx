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
    <div key={messageInd} className={from === "user" ? css.left : css.right}>
      <div className={css.msgInner}>{text}</div>
    </div>
  );
};

export { MessageBubble };
