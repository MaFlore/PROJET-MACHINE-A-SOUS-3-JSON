function jouer() {

    var niveau = document.querySelector('input[name=niveau]:checked ').value;
    var mise = document.getElementById('mise').value;
    if (mise == "") {
        alert("Le champ mise ne doit pas etre null");
    } else if (mise > 25000) {
        alert("La mise ne doit pas dépasser 25000");
    } else {

        var objet_json = new Object();
        objet_json.niveau = document.querySelector('input[name=niveau]:checked ').value;

        var parametreJSON = JSON.stringify(objet_json);

        objet_xml_http_request = creation_objet_xml_http_request();

        objet_xml_http_request.open('post', 'gainAleatoire.php', true);

        objet_xml_http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        objet_xml_http_request.onreadystatechange = actualiserPage;

        document.getElementById('button').disabled = true;
        document.getElementById('formulaire').style.visibility = "hidden";
        document.getElementById('commencer').style.visibility = "hidden";
        document.getElementById('charge').style.visibility = "visible";

        objet_xml_http_request.send(parametreJSON);
    }

}