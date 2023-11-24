

// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while

// volendo BONUS:
// do la possibilità all’utente di inserire voci nella lista

let shoppingList = ["uova", "zucca castagna", "olive", "salame nostrano", "provola", "cavolo nero", "cime di rapa", "spazzolino", "carta igienica", "gelato", "caffè"]

// Partiamo da un indice dell'array = 0 

let i = 0;

let ulElement = document.getElementById ("lista_della_spesa");

// se l'indice i è minore della lunghezza dell'array allora verrà iniettato dentro l'ul un li che conterrà shoppingList[i]

while (i < shoppingList.length) {
    let liElement = document.createElement("li");
    liElement.textContent = shoppingList[i];
    ulElement.appendChild(liElement);
    i++;
}


console.log ()