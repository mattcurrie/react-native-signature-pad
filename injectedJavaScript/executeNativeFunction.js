var content = `
  function executeNativeFunction(fnName, args) {
    window.postMessage(JSON.stringify(args));
  }
`;

export default content;
