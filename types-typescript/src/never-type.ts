// Tipo: Never representa un tipo de valor que nuca ocurre
// funciones que lanzan excepciones
// funciones que nunca retornan un valor

function handleError(code: number, message: string): never {
	// Process your code here
	// Generate a message
	throw new Error(`${message}. Code: ${code}`);
}

try {
	handleError(404, 'Not Found');
} catch (error) {}

function sumNumbers(limit: number): never {
	let sum = 0;
	while (true) {
		sum++;
	}
	// return sum;
}

sumNumbers(10);
// ciclo infinito, programa nunca termina
