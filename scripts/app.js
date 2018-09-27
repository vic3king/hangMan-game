// vic3King<<<<<<
//select dom elements
const puzzleEl = document.querySelector('#word1')
const guessesEl = document.querySelector('#guessLeft')
let player1

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  player1.makeGuess(guess)
  render()
})
//render game setting the props
const render = () => {
  puzzleEl.innerHTML = ''
  guessesEl.textContent = player1.summary

  let puzzle = player1.puzzle.split('')
  let div = document.querySelector('#word1')

  puzzle.forEach(element => {
    const span = document.createElement('span')
    span.textContent = element
    div.appendChild(span)
  });


}
//start game and
const startGame = async () => {
  const puzzle = await getPuzzle('2')
  player1 = new Hangman(puzzle, 5)
  render()
}
//reset button
document.querySelector('#reset').addEventListener('click', startGame)

startGame()
// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })


// getCurrentCountry().then((country) => {
//   console.log(`you are currently in ${country.name}`)
// }).catch((error) => {
//   console.log(error)
// })

// getLocation().then((location) => {
//   return getCountryDetails(location.country).then((country) => {
//     console.log(`you are currently in ${country.name}`)
//   })
// }).catch((error) => {
//   console.log(error)
// })