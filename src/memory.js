class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    for (let ind = 0; ind < this.cards.length; ind++){
      let nextInd = Math.floor(Math.random()*this.cards.length)
      ;[this.cards[ind], this.cards[nextInd]] = [this.cards[nextInd], this.cards[ind]]
    }
    console.log(this.cards)
  }

  checkIfPair(card1, card2) {
    console.log(card1, card2)
    // ... write your code here
    this.pairsClicked++
    if(card1.getAttribute('data-card-name') == card2.getAttribute('data-card-name')){
      this.pairsGuessed++
      card1.classList.add('blocked')
      card2.classList.add('blocked')
      return true
    }
    card1.classList.remove('turned')
    card2.classList.remove('turned')
    return false
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed == this.cards.length/2){
      alert('Game Over Victory')
    }
  }
}
