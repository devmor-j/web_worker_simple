import '@picocss/pico'

const resultElement = document.getElementById('result')

const numberInputs = [...document.querySelectorAll('[type="number"][data-number]')]

// check support for web workers

if ('Worker' in window) {
  const worker = new Worker('./worker.js');

  numberInputs.forEach(el => {
    el.addEventListener('input', () => {
      const data = numberInputs.map(el => el.value)
      worker.postMessage(data)
    })
  })

  worker.onmessage = ({ data }) => {
    resultElement.textContent = data
  }
} else {
  resultElement.textContent = 'Sorry! your browser does not support web workers, maybe because it is outdated!'
}
