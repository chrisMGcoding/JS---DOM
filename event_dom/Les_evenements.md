
# Les événements 
Un événement est une **réaction** à une **action** émise par l'utilisateur, comme le clic sur un bouton ou la saisie d'un texte dans un formulaire. 

Un événement en JS est représenté par un nom (`click`, `mousemove`...) qui signifie le **type d'événement** et une fonction qui se déclenche lors de l'événement que l'on appelle un `callback`. 

Un événement est par défaut **propagé**, càd que si on ne spécifie pas à l'événement qu'on traite qu'il doit se cantonner à son élément, il sera **transmis** à l'élément parent, et ainsi de suite jusqu'à l'élément racine. 

La **fonction** `callback` c'est nous qui allons la spécifier. Elle sera appelée chaque fois que l'action que l'on désire suivre est exécutée. 

Par exemple : si l'on veut suivre le clic de l'utilisateur sur un élément, la fonction sera appelée à chaque fois que l'utilisateur clique sur cet élément.
## Ecouter les événements
Afin de réagir lors d'un événement il faut **écouter** celui-ci. Pour cela nous allons utiliser `addEventListener()`
> Réagir à un événement, c'est faire une action lorsque celui-ci se déclenche. Ecouter, c'est vouloir être averti quand l'événement se déclenche.

`addEventListener(<typeOfEvent>, <function>)`  prend en **premier** paramètre le **type** de l'événement à écouter, et la **fonction** à appeler pour réagir à l'événement en **deuxième**. 

### Propriétés de l'événement
Pour utiliser plus d'**informations** de notre événement on peut demander des détails de ses propriétés via notre événement qui est un **objet**. 
Par exemple :

    element.addEventListener("click", function(event){
		console.log(event);
	});
>Le console.log va nous rendre comme valeur tous les détails de l'événement sous forme d'objet. Son type, sa position sur notre page, sa cible... 

Par exemple, si on veut connaître le **type d'événement** ou encore combien de **temps s'est écoulé** depuis l'arrivée sur la page et cet événement (dans le cadre d'un clic combien de temps s'est écoulé depuis le moment où on a ouvert la page et le moment où on a cliqué).


Liste non-exhaustive de propriétés de l'objet :
 - `.type`
 - `.timeStamp`
 - `.target`
	 - `.target.id`
	 - `.target.className`
	 - `.target.classList`
 - `.clientY` 
 - `.clientX`

#### click
Si l'on souhaite réagir au click sur un lien. Il faut d'abord récupérer l'élément ciblé dans l'HTML puis lui appliquer : `element.addEventListener("click", <function>);`

Dans notre fonction on va faire en sorte d'afficher un message quand on clique sur l'élément.

Exemple : 

    let elt = document.getElementById("mon_lien");    // On récupère l'élément sur lequel on veut détecter le clic
	elt.addEventListener("click", function() {          // On écoute l'événement clic
	    elt.innerHTML = "J'ai cliqué chef !";               // On change le contenu de notre élément pour afficher "J'ai cliqué chef !"
	});

#### mouseover
C'est un événement qui se produit lorsqu'on passe sa souris sur un élément. Il fonctionne comme le **hover**. 

#### mousedown
C'est un événement qui se produit lorsqu'on reste cliqué sur un élément. Il fonctionne comme le **focus**. 

### Fonction
Dans la fonction, il est possible d'utiliser **`this`** comme on le fait lors de déclaration de class dans un constructor ou dans une méthode d'un objet.

Par exemple :

    element.addEventListener("click", function(){
		this.innerHTML = "J'ai cliqué chef !";
	});

Il est aussi possible de définir la fonction **hors** de l'`addEventListener` pour pouvoir, par exemple, l'utiliser autre part dans notre code ou par préférence de syntaxe. 

	let btn = document.querySelector("button");
	let maFonction = () => {
	    btn.innerHTML = "J'ai cliqué chef !";
    };
    element.addEventListener("click", maFonction);
 Si on décide d'utiliser cette méthode, il ne faut **pas mettre les `()`** à la fin du nom de la fonction dans l'`addEventListener` car on ne veut **pas qu'elle s'exécute directement** mais seulement lors de l'événement.
 
De plus, avec cette méthode il n'est pas possible d'utiliser **`this`**
 
[De la doc sur l'event listener](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
 [Liste des événements existants](https://developer.mozilla.org/fr/docs/Web/Events)
## Fonctions de base
### preventDefault()
Il est possible de ne pas activer le **comportement par défaut** d'un élément. On va utiliser la fonction `.preventDefault()` 

Pour ce faire, nous allons le spécifier dans notre **fonction** car celle ci prend un paramètre. En appelant le `.preventDefault()` dans la fonction on demande au gestionnaire d'événement de ne **pas exécuter** le comportement par défaut de l'élément auquel on l'applique. 

Par exemple : 
 
    let elt = document.getElementById("mon_lien");    // On récupère l'élément sur lequel on veut détecter le clic
	elt.addEventListener("click", function(event) {     // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
	    event.preventDefault();                         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
	});

### stopPropagation()
Comme `preventDefault()`, `stopPropagation()` est une fonction a intégrer dans le *callback* (fonction de base). Son rôle est d'**empêcher la propagation** de l'événement vers son parent. 

En effet, quand un élément est déclenché, il est d'abord reçu par l'élément cible, mais il est ensuite **répercuté vers les éléments parents**. 

Grâce à `stopPropagation()` on empêche que d'autres éléments ne reçoivent l'événement.

Par exemple, si nous avons un élément pour lequel nous voulons **afficher un message** lorsqu'on clique dessus mais qu'**à l'intérieur** de cet élément nous en avons un autre qui doit afficher un **message différent** lors du clic on peut utiliser `stopPropagation()`. 

Par défaut, si on clique sur l'élément intérieur, le message va s'afficher, puis notre élément parent va lui aussi recevoir l'événement du clic et encore changer le message. Pour éviter ce problème on va devoir **stopper la propagation** de l'événement. 

    elementInterieur.addEventListener("click", function(event){
	    event.stopPropagation();
	    elementAvecMessage.innerHTML = "Message de l'élément intérieur";
	});

Comme ça si on clique sur l'élément enfant, l'`innerHTML` de l'élément parent ne **prendra pas la valeur de celui de son enfant.** 
