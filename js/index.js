let cardsId

function cardsAPI() {
    fetch(' https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => cardsId = data.deck_id)
        document.querySelector('#draw-btn').disabled = false

}

document.querySelector('#new-deck-btn').addEventListener('click', cardsAPI)


document.querySelector('#draw-btn').addEventListener('click', () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${cardsId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            
            console.log(data.cards)
 
        let image1 =`<img src=${data.cards[0].image}>`
        let image2 = `<img src=${data.cards[1].image}>`

        document.querySelector('#card1').innerHTML = image1
        document.querySelector('#card2').innerHTML = image2

        const cardWinner = winner(data.cards[0].value, data.cards[1].value)

        document.querySelector('#winner').innerHTML = cardWinner 
    })
})


function winner(value1, value2){
    
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]

    const cardValue = cards.indexOf(value1.value)
    const cardValue2 = cards.indexOf(value2.value)
 

    if(cardValue > cardValue2){
        return "Computer WINS"
    }else if(cardValue < cardValue2){
        return "You WIN"
    }else{
        return "WAR"
    }
}

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        return "Card 1 wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        return "Card 2 wins!"
    } else {
        return "War!"
    }
}
console.log(determineCardWinner('QUEEN', '5'))


