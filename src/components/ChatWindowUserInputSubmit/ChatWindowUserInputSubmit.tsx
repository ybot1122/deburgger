import React from "react";

import * as css from "./ChatWindowUserInputSubmit.css";

const ChatWindowUserInputSubmit = ({
  onSubmit,
  inputRef,
  isDisabled,
}: {
  onSubmit: (e: any) => boolean;
  inputRef: any;
  isDisabled: boolean;
}) => {
  const submitCb = React.useCallback(
    (e: any) => {
      if (isDisabled) return;
      onSubmit(e);
    },
    [isDisabled, onSubmit]
  );

  return (
    <form onSubmit={submitCb}>
      <input
        type="text"
        ref={inputRef}
        className={css.userInput}
        placeholder="type message here"
        disabled={isDisabled}
      />
      <button
        type="submit"
        className={css.userInputSubmit}
        disabled={isDisabled}
      >
        Submit
      </button>
      {isDisabled && <p>Deburrger bot is responding...</p>}
    </form>
  );
};

export { ChatWindowUserInputSubmit };
