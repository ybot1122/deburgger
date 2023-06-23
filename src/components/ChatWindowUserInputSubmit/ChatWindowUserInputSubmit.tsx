import React from "react";

import * as css from "./ChatWindowUserInputSubmit.css";

const ChatWindowUserInputSubmit = ({
  onSubmit,
  inputRef,
}: {
  onSubmit: (e: any) => boolean;
  inputRef: any;
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        ref={inputRef}
        className={css.userInput}
        placeholder="type message here"
      />
      <button type="submit" className={css.userInputSubmit}>
        Submit
      </button>
    </form>
  );
};

export { ChatWindowUserInputSubmit };
