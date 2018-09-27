// vic3King<<<<<<
class Hangman {
  constructor(word = [], remainingGueses) {
    this.word = word.toLowerCase().split('')
    this.remainingGueses = remainingGueses
    this.guessedLetters = []
    this.status = 'playing'
  }
  getStatus() {
    //solved using .every method
    const finished = this.word.every((letter) => {
      return this.guessedLetters.includes(letter) || letter === ' '
    })
    // let finished = true

    // this.word.forEach((letter) => {
    //   if(this.guessedLetters.includes(letter)) {

    //   } else finished = false
    // })

    if (this.remainingGueses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }
  get puzzle() {
    let puzzle = ''
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    });
    return puzzle
  }
  makeGuess(char) {
    if (this.status === 'playing') {
      char = char.toLowerCase()
      if (!this.guessedLetters.includes(char)) {
        this.guessedLetters.push(char)
      }

      if (!this.word.includes(char)) {
        this.remainingGueses--
      }
      this.getStatus()
    }
  }
 get summary() {
    if (this.status === 'playing') {
      return `guess left: ${this.remainingGueses}`
    } else if (this.status === 'failed') {
      return `Nice try! The word was: "${this.word.join('')}"`
    } else {
      return 'great work you got the word!'
    }
  }
}
