/// <reference lib="webworker" />

// when the web worker receives a message it will execute the callback and return a response
addEventListener('message', ({ data }) => {
  const response = []
  for(let i = 0; i < 1000000; i++) {
    response.push(Math.random() * 1000)
  }

  postMessage(response);
});
