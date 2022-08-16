//computer
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = 'nieznany ruch';

if(randomNumber == 1) {
  computerMove = 'kamień';
}
if(randomNumber == 2){
  computerMove = 'papier';
}
if(randomNumber == 3){
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

//gracz
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == 1) {
  playerMove = 'kamień';
}
if(playerInput == 2){
  playerMove = 'papier';
}
if(playerInput == 3){
  playerMove = 'nożyce';
}

//wynik

if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrałeś!');
  }
if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Przegrałeś!');
  }   
  
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Wygrałeś!');
  }
if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }
if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrałeś!');
  } 
  
if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrałeś!');
  }
if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wygrałeś!');
  }
if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
  } 
