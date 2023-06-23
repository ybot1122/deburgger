import React from "react";

/**
 * The main hook where the Deburgger bot constructs its responses
 *
 * @returns {
 *
 * }
 */
const useDeburggerBot = () => {
  const [isResponding, setIsResponding] = React.useState(false);
  const [lastBotMessage, setLastBotMessage] = React.useState("");

  const onUserInput = React.useCallback((text: string) => {
    setIsResponding(true);

    setTimeout(() => {
      setIsResponding(false);
      setLastBotMessage("Responding to " + text);
    }, 2000);
  }, []);

  return {
    onUserInput,
    isResponding,
    lastBotMessage,
  };
};

export { useDeburggerBot };
