/**
 * Created by Super on 21.06.2017.
 */
var beginGame = confirm('Do you want to begin game?')
var a = 0, b = 5, sum=0, key = 0;
var randomNumber, continueGame, userNumber = [2];
var money1 = 10, money2 = 5, money3 = 2;
if(beginGame) {
     game();
     if(userNumber[0] != randomNumber & userNumber[1] != randomNumber & userNumber[2] != randomNumber)
     {
         alert('You win 0$');
             if(confirm('Do you want to play again?'))
             {
                 game();
             }
     }
         continueGame  = confirm('Do you want continue game?');
    while(continueGame) {
        b*=2;
        money1*=3;
        money2*=3;
        money3*=3;
        game();
        key++;
        continueGame  =  confirm('Do you want continue game?');
        if(!continueGame)
        {
            alert('Thanks for game yo win '+sum+'$');
        }

    }
}
else {
    alert('Today, you did not win a million but could');
}


function game () {

    randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
    randomNumber = 5;
    userNumber[0] = +prompt('Enter number: ', '');
    if (userNumber[0] == randomNumber) {
        alert('You win ' + money1 + '$');
        sum=sum+money1;
    }
    else {
        userNumber[1] = +prompt('Enter number: ', '');
        if (userNumber[1] == randomNumber) {
            alert('You win ' + money2 + '$');
            sum=sum+money2;
        }
        else {
            userNumber[2] = +prompt('Enter number: ', '');
            if (userNumber[2] == randomNumber) {
                alert('You win ' + money3 + '$');
                sum=sum+money3;
            }
            // else {
            //     alert('You win 0$');
            //     if(confirm('Do you want to play again?'))
            //     {
            //         game();
            //     }
            // }
            }
    }

}
