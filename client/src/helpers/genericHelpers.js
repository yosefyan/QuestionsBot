export const checkSentenceLength = (aString) => {
  return aString.split(" ").length;
};

export const fstLetterUpper = (aString) => {
  return aString.charAt(0)?.toUpperCase() + aString.slice(1);
};

export const handleScroll = (
  setScrollAmount,
  ElementToScroll,
  directionToScroll,
  direction,
  i,
  shouldPercentage,
  percentage,
  shouldFocus,
  inputsToFocus
) => {
  let height = ElementToScroll.current[directionToScroll] || 0;
  let result =
    direction === "next" && shouldPercentage && percentage >= 100
      ? 0
      : direction === "back"
      ? -height
      : height;

  setScrollAmount((prev) => (prev + result <= 0 ? 0 : prev + result));
  if (shouldFocus) {
    let timeout = setTimeout(
      () =>
        inputsToFocus[direction === "next" ? i + 1 : i - 1].current?.focus(),
      250
    );
    return () => {
      clearTimeout(timeout);
    };
  }
};
