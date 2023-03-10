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
        .then(data => {console.log(data.cards)
        
        let image1 =`<img src=${data.cards[0].image}>`
        let image2 = `<img src=${data.cards[1].image}>`

        document.querySelector('#card1').innerHTML = image1
        document.querySelector('#card2').innerHTML = image2
        })
}) 


