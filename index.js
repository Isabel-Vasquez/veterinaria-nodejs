const fs = require('fs');
const { registrar, leer } = require('./operaciones');

const operacion = process.argv[2];

switch (operacion) {
	case 'registrar':
		const [nombre, edad, tipoAnimal, color, enfermedad] = process.argv.slice(3);
		registrar(nombre, edad, tipoAnimal, color, enfermedad);
		break;
	case 'leer':
		leer();
		break;
	default:
		console.log('Operación no soportada.');
}
