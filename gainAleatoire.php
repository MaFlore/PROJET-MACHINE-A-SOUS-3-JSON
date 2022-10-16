<?php

header("Content-Type: text/plain; charset=utf-8");
header("Cache-Control: no-cache . private");
header("Pragma: no-cache");
sleep(2);

$parametreJSON = file_get_contents('php://input');

// require_once('JSON.php');

// $objet_json = new Services_JSON();

$objetJoueur = json_decode($parametreJSON);

$niveauJoueur = $objetJoueur->niveau;

if($niveauJoueur == 'facile'){
    $niveauJoueur = 'facile';
    $gain = rand(0,100);

}
else if($niveauJoueur == 'moyen'){
    $niveauJoueur = 'moyen';
    $gain = rand(0,500);
}
else {
    $niveauJoueur = 'difficile';
    $gain = rand(0,1000);
}

$resultat = $niveauJoueur.':'.$gain;
echo $resultat;

?>