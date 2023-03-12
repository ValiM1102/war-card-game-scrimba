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

        winner(data.cards[0].value, data.cards[1].value)
 
        let image1 =`<img src=${data.cards[0].image}>`
        let image2 = `<img src=${data.cards[1].image}>`

        document.querySelector('#card1').innerHTML = image1
        document.querySelector('#card2').innerHTML = image2
            
        if( winner = "player1"){
            document.querySelector('#player1-score').textContent += 1
        }else if (winner = 'player 2') {
            document.querySelector('#player2-score').textContent += 1
        }
    })
}) 


function winner(value1, value2){
    
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]

    const cardValue = cards.indexOf(value1.value)
    const cardValue2 = cards.indexOf(value2.value)
    let winner 
    if(cardValue > cardValue2){
        return winner = "player1"
    }else if(cardValue > cardValue2){
        return winner = "player2"
    }else{
        return winner = "tie"
    }
}


