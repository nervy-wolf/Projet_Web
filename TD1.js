// Initialisation du tableau contenant les ouvrages
ouvrages = new Array();
nombreOuvrages = 0;

// Indice des éléments dans le tableau d'un ouvrage
indiceReference = 0;
indiceTitre = 1;
indiceAuteurs = 2;
indiceEditeur = 3;
indiceEdition = 4;
indiceAnnee = 5;
indiceIsbn = 6;
indiceNombreExemplaires = 7;
indiceDisponibilite = 8;
indiceExcluPret = 9;
indiceCommentaires = 10;

// Indices des messages d'erreur dans le tableau des erreurs
referenceNonRenseignee = 0;
referenceLettreRequise = 1;
titreNonRenseigne = 2;
auteursNonRenseignes = 3;
editeurNonRenseigne = 4;
editionNonRenseignee = 5;
editionDoitEtreNombre = 6;
anneeNonRenseignee = 7;
anneeDoitEtreNombre4Chiffres = 8;
isbnNonRenseigne = 9;
isbnDoitEtreNombre = 10;
nombreExemplairesNonRenseigne = 11;
nombreExemplairesDoitEtreNombre = 12;

// Initialisation du tableau des erreurs
tableauErreurs = new Array(
	"Veuillez renseigner la référence.",
	"La référence ne doit contenir que des chiffres ou des lettres non accentuées, dont au moins une lettre.",
	"Veuillez renseigner le titre.",
	"Veuillez renseigner l'auteur.",
	"Veuillez renseigner l'éditeur.",
	"Veuillez renseigner l'édition.",
	"L'édition doit tre un nombre.",
	"Veuillez renseigner l'année d'édition.",
	"L'année d'édition doit tre un nombre de 4 chiffres.",
	"Veuillez renseigner l'ISBN.",
	"L'ISBN doit tre un nombre.",
	"Veuillez renseigner le nombre d'exemplaires.",
	"Le nombre d'exemplaires doit tre un nombre.");




// Affiche le message de l'erreur dont le numero est passe en argument
function afficheErreur(numeroErreur)
{
	alert(tableauErreurs[numeroErreur]);
}

// Vérifie que la cha”ne ne contient que des chiffres ou des lettres non accentuee A-Z, a-z
// et au moins une lettre
function verifier(reference)
{
	var longueur = reference.length;
	var vuUneLettre = false;
	var i;
	var ok = false;
	var c;
	for (i = 0; i < longueur; i++)
	{
		c = reference.charAt(i);
		if(c.match(/[0-9]/i))
			ok=true
		else if(c.match(/[A-Za-z]/i))
			vuUneLettre = true;
		else
			return false
		
	}
	return vuUneLettre;
}

// Affiche le resume de l'ouvrage dans le champ de meme nom
function afficherResume(ouvrage)
{
	var resume = ouvrage[indiceReference] + "\n" + 
		ouvrage[indiceTitre] + "\n" + 
		ouvrage[indiceAuteurs] + "\n" +
//completer
		ouvrage[indiceEditeur] + "\n" +
		ouvrage[indiceEdition] + "\n" + 
		ouvrage[indiceAnnee] + "\n" +
		ouvrage[indiceIsbn] + "\n" + 
		ouvrage[indiceNombreExemplaires] + "\n";
	var disponibilite = "Non disponible";
	if (ouvrage[indiceDisponibilite])
	{
		disponibilite = "Disponible";
	}
	resume = resume + disponibilite + "\n";
	var excluPret = "Autorisé au prêt";
	if (ouvrage[indiceExcluPret])
	{
		excluPret = "Exclu du prêt";
	}
	resume = resume + excluPret + "\n" + ouvrage[indiceCommentaires];
	document.getElementById("resume").value = resume;
}

// Validation et ajout d'un ouvrage
function validation()
{
	var reference = new String(document.getElementById("reference").value);
	if (reference.length == 0)
	{
		return afficheErreur(referenceNonRenseignee);
	}

	if (!verifier(reference))
	{
		return afficheErreur(referenceLettreRequise);		
	}
	
	var titre = new String(document.getElementById("titre").value);
	if (titre.length == 0)
	{
		return afficheErreur(titreNonRenseigne);
	}
	
	var auteurs = new String(document.getElementById("auteurs").value);
	if (auteurs.length == 0)
	{
		return afficheErreur(auteursNonRenseignes);
	}

	var editeur = new String(document.getElementById("editeur").value);
	if (editeur.length == 0)
	{
		return afficheErreur(editeurNonRenseigne);
	}
	
	var edition = new String(document.getElementById("edition").value);
	if (edition.length == 0)
	{
		return afficheErreur(editionNonRenseignee);
		
	}
	if (isNaN(edition))
	{
		return afficheErreur(editionDoitEtreNombre);
		
	}
	
	var annee = new String(document.getElementById("annee").value);
	if (annee.length == 0)
	{
		return afficheErreur(anneeNonRenseignee);
		
	}
	if (isNaN(annee) || annee.length != 4)
	{
		return afficheErreur(anneeDoitEtreNombre4Chiffres);
		
	}
	
	var isbn = new String(document.getElementById("isbn").value);
	if (isbn.length == 0)
	{
		return afficheErreur(isbnNonRenseigne);
	}
	if (isNaN(isbn))
	{
		return afficheErreur(isbnDoitEtreNombre);
		
	}
	
	var nombreExemplaires = new String(document.getElementById("nombreExemplaires").value);
	if (nombreExemplaires.length == 0)
	{
		return afficheErreur(nombreExemplairesNonRenseigne);
		
	}
	if (isNaN(nombreExemplaires))
	{
		// Afficher Erreur Correspondante
		return afficheErreur(isbnDoitEtreNombre);
		
	}

	var disponibilite = document.getElementById("Disponibilite").checked;
	var excluPret = document.getElementById("excluPret").checked;
	var commentaires = new String(document.getElementById("Commentaires").value);
	// crŽation d'un ouvrage 
	
	var ouvrage = new Array();
	ouvrage[indiceReference] = reference;
	// Completer l'ouvrage
	ouvrage[indiceTitre] = titre;
	ouvrage[indiceAuteurs] = auteurs;
	ouvrage[indiceEditeur] = editeur;
	ouvrage[indiceEdition] = edition;
	ouvrage[indiceAnnee] = annee;
	ouvrage[indiceIsbn] = isbn;
	ouvrage[indiceNombreExemplaires] = nombreExemplaires;
	ouvrage[indiceDisponibilite] = disponibilite;
	ouvrage[indiceExcluPret] = excluPret;
	ouvrage[indiceCommentaires] = commentaires;
	ouvrages[nombreOuvrages] = ouvrage;
	nombreOuvrages++;
	
	afficherResume(ouvrage);
	
	
}