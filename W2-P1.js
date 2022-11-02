/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*let a=5;
let b=3;
if(a>b){
  console.log("Il valore piu grande è:", a);
}
else if(a<b){
  console.log("Il valore piu grande è:", b);
}
else{
  console.log("I valori sono uguali")
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*if(a!==5){
  console.log("Not equal");
}
else{
  console.log("Equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/*if(a%5===0){
  console.log("Divisibile by 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*if((a===8) || (b===8) || ((a-b)===8) || ((b-a))===8 || ((a+b)===8)){
  console.log("Il valore di a o b o la loro addizione/sottrazione è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*let totalShoppingCart=40;
if(totalShoppingCart>50){
  console.log(totalShoppingCart);
}
else{
  console.log(totalShoppingCart+10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/*let total;
total=totalShoppingCart*0.80;
if(total>50){
  console.log(total);
}
else{
  console.log(total+10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*let x=1;
let y=2;
let z=3;
if(x>y && x>z && y>z){
console.log(x,y,z);
}
else if(x>y && x>z && z>y){
  console.log(x,z,y);
}
else if(y>x && y>z && x>z){
  console.log(y,x,z);
}
else if(y>x && y>z && z>x){
  console.log(y,z,x);
}
else if(z>x && z>y && x>y){
  console.log(z,x,y);
}
else if(z>x && z>y && y>x){
  console.log(z,y,x);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*let float=3;
if(typeof float===number && float%1===0){
  console.log("Intero");
}
else{
  console.log("Decimale");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*if(a%2===0){
  console.log("Pari");
}
else{
 console.log("Dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*let val = 7;
  if (val < 10 && val>=5) {
      console.log("Meno di 10");
    } else if(val<5){
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*let num=20;
if(num<20 && num>=15){
  console.log("Large");
}
else if(num<15 && num>=10){
  console.log("Medium");
}
else if(num<10 && num>=5){
  console.log("Small");
}
else if(num<5){
  console.log("Tiny");
}
else{
  console.log("Huge");
}
/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/
/*let isMale;
let gender=isMale?"male":"female";
console.log(gender);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/*let n=0;
let f=0;
while(n<6){
  console.log(n);
  x+=n;
  n++;
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/
/*let i=0;
for(i=0;i<11;i++){
  console.log(i);
}


/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/*let i=0;
for(i=0;i<11;i++){
  if(i===3 || i===8){
    continue;
  }
  console.log(i);
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*let i=0;
for(i=0;i<16;i++){
  if(i%2==0){
    console.log("Pari:", i);
  }
  else{
    console.log("Dispari:", i);
  }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*let i=0;
for(i=1;i<101;i++){
  if(i%3===0 && i%5===0){
    console.log("FizzBuzz");
  }
  else if(i%3===0){
    console.log("Fizz");
  }
  else if(i%5===0){
    console.log("Buzz");
  }
  
  else{
    console.log(i);
  }
}
/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/
/*let day=7
switch(day){
  case 1:
    day="Lunedi";
    console.log(day);
    break;
    case 2:
      day="Martedi";
      console.log(day);
      break;
      case 3:
        day="Mercoledi";
      console.log(day);
      break;
      case 4:
        day="Giovedi";
      console.log(day);
      break;
      case 5:
        day="Venerdi";
      console.log(day);
      break;
      case 6:
        day="Sabato";
      console.log(day);
      break;
      case 7:
        day="Domenica";
      console.log(day);
      break;
}
*/