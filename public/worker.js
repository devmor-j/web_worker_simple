// self is like global object window
// but here refers to this web worker

// listen on messages sent here
// comming from it's registerer - in this case index.js

self.onmessage = ({ data }) => {
  const isDataInvalid = data.some(
    d => d === '' || d === NaN
  )

  if (isDataInvalid) {
    self.postMessage('data is invalid (all fields must be numbers)')
  } else {
    const result = data.reduce((prev, curr) => prev * curr)
    self.postMessage(result)
  }
}
