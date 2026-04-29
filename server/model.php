<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "riveracyprien1");
define("DBLOGIN", "riveracyprien1");
define("DBPWD", "riveracyprien1");


function getAllMovies(){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "select id, name, image from Movie";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

function addMovies($tit, $rea, $year, $dur, $desc, $img, $age, $cat, $url){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "INSERT INTO Movie (name, director, year, length, description, id_category, image, trailer, min_age) VALUES (:tit, :rea, :year, :dur, :desc, :cat, :img, :url, :age)";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    $stmt -> bindParam(':tit', $tit);
    $stmt -> bindParam(':rea', $rea);
    $stmt -> bindParam(':year', $year);
    $stmt -> bindParam(':dur', $dur);
    $stmt -> bindParam(':desc', $desc);
    $stmt -> bindParam(':img', $img);
    $stmt -> bindParam(':age', $age);
    $stmt -> bindParam(':cat', $cat);
    $stmt -> bindParam(':url', $url);
    // Exécute la requête SQL
    $stmt->execute();
    $res = "Film ajouté";
    return $res;
}
