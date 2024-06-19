const upDownIndex = (i) => {
  return i % 2 === 0
    ? `shadow-fuchsia-500/25 downUp `
    : `shadow-cyan-500/25 upDown`;
};

export default upDownIndex;
