'use strict';
var column;
var multiplyTable;
var row;
var size;


size = parseInt(window.prompt('Taille de la table de multiplications ?'));

document.write('<table>');

for (row = 1; row <= size; row++) {
    document.write('<tr>');

    for (column = 1; column <= size; column++) {
        if (row == column) {
            document.write('<td class="same-number">');
        } else {
            document.write('<td>');
        }

        document.write(row * column);

        document.write('</td>');
    }

    document.write('</tr>');
}

document.write('</table>');