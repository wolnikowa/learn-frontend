let turn = 1;
let x = "X";
let o = "O";
let temp = "q";
let temp2 = 0;
let tablica = ['q','q','q','q','q','q','q','q','q','q'];
let spr = 0;
let koniec=0;
function moja_funkcja(pozycja) {
if (koniec==0){
if (tablica[pozycja] == 'q')
{
if (turn%2==1){

document.getElementById(pozycja).src = 'X.svg';
tablica[pozycja] = x;
}
else
{

document.getElementById(pozycja).src = 'O.svg';
tablica[pozycja] = o;
}
turn++;

for (temp2=1; temp2<=2; temp2++)
{
if (temp2==1){q=x;}
else {q=o;}
for (spr=0; spr<=9; spr+=3)
{
if (tablica[1+spr]==q && tablica[2+spr]==q && tablica[3+spr]==q){alert("Wygrana " + q); koniec=1;}
}
for (spr=1; spr<=3; spr++)
{
if (tablica[spr]==q && tablica[spr+3]==q && tablica[spr+6]==q){alert("Wygrana " + q); koniec=1;}
}
if (tablica[1]==q && tablica[5]==q && tablica[9]==q){alert("Wygrana " + q); koniec=1;}
if (tablica[3]==q && tablica[5]==q && tablica[7]==q){alert("Wygrana " + q); koniec=1;}
}

}else {alert('To pole już zostało wybrane');}

spr=0;
for (temp2=1; temp2<=9; temp2++)
{
if (tablica[temp2]!='q'){spr++;}
if (spr>=9){alert('Koniec gry');koniec=1;}
}
}
else {alert('Gra została już zakończona!');} 

}