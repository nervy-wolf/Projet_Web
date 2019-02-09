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
	"Veuillez renseigner la rŽfŽrence.",
	"La rŽfŽrence ne doit contenir que des chiffres ou des lettres non accentuŽes, dont au moins une lettre.",
	"Veuillez renseigner le titre.",
	"Veuillez renseigner l'auteur.",
	"Veuillez renseigner l'Žditeur.",
	"Veuillez renseigner l'Ždition.",
	"L'Ždition doit tre un nombre.",
	"Veuillez renseigner l'annŽe d'Ždition.",
	"L'annŽe d'Ždition doit tre un nombre de 4 chiffres.",
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
	var ok;
	var c;
	for (i = 0; i < longueur; i++)
	{
		ok = false;
		c = reference.charAt(i);
		XXXXXXXXXXXXXXXXXXXXXXXXXXXX
	return vuUneLettre;
	}
}

// Affiche le resume de l'ouvrage dans le champ de meme nom
function afficherResume(ouvrage)
{
	var resume = ouvrage[indiceReference] + "\n" + 
		ouvrage[indiceTitre] + "\n" + 
		ouvrage[indiceAuteurs] + "\n" +
//completer
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
	var excluPret = "AutorisŽ au prt";
	if (ouvrage[indiceExcluPret])
	{
		excluPret = "Exclu du prêt";
	}
	resume = resume + excluPret + "\n" + ouvrage[indiceCommentaires];
	document.formulaire1.resume.value = resume;
}

// Validation et ajout d'un ouvrage
function validation()
{
	var reference = new String(document.formulaire1.reference.value);
	if (reference.length == 0)
	{
	//	aficher l'erreur corespondants
		return;
	}

	if (!verifier(reference))
	{
		
	}
	
	var titre = new String(document.formulaire1.titre.value);
	if (titre.length == 0)
	{
		XXXXXXXXXXXXXXXXXXXXX
	}
	
	var auteurs = new String(document.formulaire1.auteurs.value);
	if (auteurs.length == 0)
	{
		XXXXXXXXXXXXXXXXXXXX
	}
	
	var editeur = new String(document.formulaire1.editeur.value);
	if (editeur.length == 0)
	{
		XXXXXXXXXXXXXXXXXXX
	}
	
	var edition = new String(document.formulaire1.edition.value);
	if (edition.length == 0)
	{
		XXXXXXXXXXXXXXXXXXXXXXX
	}
	if (isNaN(edition))
	{
		XXXXXXXXXX
	}
	
	var annee = new String(document.formulaire1.annee.value);
	if (annee.length == 0)
	{
		afficheErreur(anneeNonRenseignee);
		return;
	}
	if (isNaN(annee) || annee.length != 4)
	{
		XXXXXXXXXXXX
	}
	
	var isbn = new String(document.formulaire1.isbn.value);
	if (isbn.length == 0)
	{
		XXXXXXXXXXXXX
	}
	if (isNaN(isbn))
	{
		XXXXXXXXXXXXX
	}
	
	var nombreExemplaires = new String(document.formulaire1.nombreExemplaires.value);
	if (nombreExemplaires.length == 0)
	{
		afficheErreur(nombreExemplairesNonRenseigne);
		return;
	}
	if (isNaN(nombreExemplaires))
	{
		// Afficher Erreur Correspondante
		return;
	}
	
	var disponibilite = document.formulaire1.disponibilite.checked;
	
	var excluPret = document.formulaire1.excluPret.checked;
	
	var commentaires = new String(document.formulaire1.commentaires.value);
	// crŽation d'un ouvrage 
	var ouvrage = new Array();
	ouvrage[indiceReference] = reference;
	// Completer l'ouvrage

	ouvrages[nombreOuvrages] = ouvrage;
	nombreOuvrages++;

	afficherResume(ouvrage);
}