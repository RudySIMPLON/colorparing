// good luck !
// ## 1ere étape 
// Les boutons doivent avoir leur fond de la couleur qui se trouvve dans le
// data attribute data-color





var TousLesInputs = $("input");
console.log(TousLesInputs);

for (var parcour = 0; parcour<TousLesInputs.length; parcour++ ){

	var recupcouleur = $(TousLesInputs [parcour]).data("color");
	$(TousLesInputs[parcour]).css("backgroundColor",recupcouleur);
}

// ## 2e étape 
// Un click sur le bouton doit mettre cette couleur en fond



function checked() {

	return $("#modify-texte").is(":checked")

};

$("input").click(function(){

	var selectionCouleur=$(this).data("color");

	if (checked()) {

		$("main").css("color",selectionCouleur)
	}

	else {

		$("main").css("backgroundColor",selectionCouleur)

	};
});
// });

// });

