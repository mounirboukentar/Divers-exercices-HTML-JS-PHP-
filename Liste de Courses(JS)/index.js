'use strict';

var shoppingList = new Array();

function addItem(item) {
    shoppingList.push(item);
}

function displayShoppingList() {
    console.log('La liste contient ' + shoppingList.length + ' produit(s).');
    console.log(shoppingList);
}

function removeAllItems() {
    shoppingList = new Array();
}

function removeItem(item) {
    var index;

    index = shoppingList.indexOf(item);

    if (index == -1) {
        console.log("ERREUR : le produit " + item + " n'existe dans la liste de courses");

        return;
    }

    shoppingList.splice(index, 1);
}

console.clear();

addItem('Fraises');
addItem('Poulet');
addItem('Tournevis');
addItem('Artichaut');
displayShoppingList();

removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));
displayShoppingList();

removeAllItems();
displayShoppingList();