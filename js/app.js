(function() {
    const toArray = function (htmlCollection) {
        return Array.prototype.slice.call(htmlCollection);
    }
    const updateCardDisplay = function(card, cards)  {
        card.classList.remove('hidden');
        cards.forEach(function(c) {
            c.classList.add('hidden');
        })
    }

    const cards = toArray(document.getElementsByClassName('testamonial'));
    let currentCard = cards.shift();

    const prevButtons = toArray(document.getElementsByClassName('button-prev'));
    prevButtons.forEach(function(button) {
         const listener = function(e) {
             cards.unshift(currentCard);
             currentCard = cards.pop();
             updateCardDisplay(currentCard, cards);
         }
         button.addEventListener('click', listener)
    });
    const nextButtons = toArray(document.getElementsByClassName('button-next'))
    nextButtons.forEach(function(button) {
        const listener = function(e) {
            cards.push(currentCard);
            currentCard = cards.shift();
            updateCardDisplay(currentCard, cards);
        }
        button.addEventListener('click', listener)
    });
})()
