

function valider() {

    var selector = document.getElementById("conversion");
    var montant = parseInt(document.getElementById("montant").value);
    if (selector.options[document.getElementById("conversion").selectedIndex].value == "dollars") {
        montant = montant * 1.16532;
        console.log(montant);
        document.getElementById("result").innerHTML = montant + " Dollars";
    } else if (selector.options[document.getElementById("conversion").selectedIndex].value == "yen") {
        montant = montant * 129.859579;
        console.log(montant);
        document.getElementById("result").innerHTML = montant + " Yen";
    } else if (selector.options[document.getElementById("conversion").selectedIndex].value == "livre") {
        montant = montant * 0.895421572;
        console.log(montant);
        document.getElementById("result").innerHTML = montant + " Livres Sterling";
    }
}

function convertir() {
    var somme = parseInt(document.getElementById("somme").value);
    var modulo = "";
    var modulo1 = "";
    var modulo2 = "";
    var modulo3 = "";
    console.log(somme);

    if (somme < 10) {
        somme = somme / 0.1;
        alert(somme + " pièce(s) de cuivre");

    } else if (somme < 100) {
        var v1 = somme / 10;
        var convert1 = v1 = Math.trunc(v1);
        modulo = (somme % 10) / 0.1;
        var convert2 = modulo = Math.trunc(modulo);
        alert(convert1 + " pièce(s) d'argent et " + convert2 + " pièce(s) de cuivre");

    } else if (somme < 5000) {
        var v2 = somme / 100;
        var convert1 = v2 = Math.trunc(v2);
        modulo = (somme % 100) / 10;
        modulo1 = (modulo % 10) / 0.1;
        var convert2 = modulo = Math.trunc(modulo);
        var convert3 = modulo1 = Math.trunc(modulo1);
        alert(convert1 + " pièce(s) d'or et " + convert2 + " pièce(s) d'argent " + convert3 + " pièce(s) de cuivre");

    } else if (somme < 100000) {
        var v3 = somme / 5000;
        var convert1 = v3 = Math.trunc(v3);
        modulo = (somme % 5000) / 100;
        modulo1 = (modulo % 100) / 10;
        modulo2 = (modulo % 10) / 0.1;
        var convert2 = modulo = Math.trunc(modulo);
        var convert3 = modulo1 = Math.trunc(modulo1);
        var convert4 = modulo2 = Math.trunc(modulo2);
        alert(convert1 + " pièce(s) de platine " + convert2 + " pièce(s) d'or " + convert3 + " pièce(s) d'argent " + convert4 + " pièce(s) de cuivre");

    } else if (somme > 100000) {
        var v4 = somme / 100000;      
        modulo = (somme % 100000) / 5000;
        modulo1 = (modulo % 5000) / 100;
        modulo2 = (modulo1 % 100) / 10;
        modulo3 = (modulo2 % 10) / 0.1;
        var convert1 = v4 = Math.trunc(v4);
        var convert2 = modulo = Math.trunc(modulo);
        var convert3 = modulo1 = Math.trunc(modulo1);
        var convert4 = modulo2 = Math.trunc(modulo2);
        var convert5 = modulo3 = Math.trunc(modulo3);
        alert(convert1 + " pièce(s) de mithril " + convert2 + " pièce(s) de platine " + convert3 + " pièce(s) d'or " + convert4 + " pièce(s) d'argent " + convert5 + " pièce(s)de cuivre");
    }
}



