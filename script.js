//ввожу блок
const div = document.querySelector('div');
//функция рандома
let getRand = (min,max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//массивы со свойствами
const stylesModes = ['overlay', 'soft-light', 'hard-light', 'darken', 'multiply', 'color-burn', 'lighten', 'screen', 'color-dodge', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
const stylesPath = ['circle', 'ellipse', 'polygon'];

//случайное присвоение блоку цвета, режима наложения и clip-path
setInterval(() => {
	//цвета и режим наложения
	let colorBack = `rgb(${getRand(0,255)},${getRand(0,255)},${getRand(0,255)})`;

	let oneOfModes = getRand(0,14);
	let mode = stylesModes[oneOfModes];

	div.style.backgroundColor = colorBack;
	div.style.backgroundBlendMode = mode;

	//сlip-path
	let oneOfPath = getRand(0,2);
	let path = stylesPath[oneOfPath];

	if (oneOfPath == 0) {
		div.style.clipPath = path + `(${getRand(0,100)}% at ${getRand(0,100)}% ${getRand(0,100)}%)`;
	}
	if (oneOfPath == 1) {
		div.style.clipPath = path + `(${getRand(0,100)}% ${getRand(0,100)}% at ${getRand(0,100)}% ${getRand(0,100)}%)`;
	}
	if (oneOfPath == 2){
		div.style.clipPath = path + `(${getRand(0,100)}% ${getRand(0,100)}%, ${getRand(0,100)}% ${getRand(0,100)}%, ${getRand(0,100)}% ${getRand(0,100)}%, ${getRand(0,100)}% ${getRand(0,100)}%)`;
	}
},1000);
