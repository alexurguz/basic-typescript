// Void es lo opuesto de Any representa la ausencia de tipo
// se usa como tipo de retorno en funciones

// Tipo explicito
function showInfo(user: any): any {
	console.log('User Info', user.id, user.username, user.firstName);
	// return 'hola';
}

showInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });

// Tipo Inferido
function showFormattedInfo(user: any) {
	console.log(
		'User Info',
		`
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `
	);
}

showFormattedInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });

// tipo void, como tipo de dato en variable
let unusable: void;
unusable = null;
unusable = undefined;
