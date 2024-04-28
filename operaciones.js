const fs = require('fs');
const citasPath = './citas.json';

function registrar(nombre, edad, tipoAnimal, color, enfermedad) {
	const nuevaCita = { nombre, edad, tipoAnimal, color, enfermedad };
	fs.readFile(citasPath, (err, data) => {
		if (err) throw err;
		const citas = JSON.parse(data);
		citas.push(nuevaCita);
		fs.writeFile(citasPath, JSON.stringify(citas, null, 2), (err) => {
			if (err) throw err;
			console.log('Cita registrada con éxito.');
		});
	});
}

function leer() {
	fs.readFile(citasPath, (err, data) => {
		if (err) throw err;
		const citas = JSON.parse(data);
		console.log(citas);
	});
}

module.exports = { registrar, leer };
