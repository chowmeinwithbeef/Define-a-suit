//Codewars Daily 2022 05 23
//Define a suit
//If a card contains a shape, return name

function defineSuit (card) {
  if (card.includes('♣'))  
    return 'clubs'
  if (card.includes('♦'))  
    return 'diamonds'    
  if (card.includes('♥'))  
    return 'hearts'
  if (card.includes('♠'))  
    return 'spades'
  }