//ввожу блок
const div = document.querySelector('div');
//функция рандома
let getRand = (min,max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//массивы со свойствами
const stylesModes = ['overlay', 'soft-light', 'hard-light', 'darken', 'multiply', 'color-burn', 'lighten', 'screen', 'color-dodge', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
const stylesPath = ['circle', 'ellipse', 'polygon'];
//переменная с ссылкой на фото
let pic = prompt('Введите ссылку на картинку', 'https://sun9-east.userapi.com/sun9-17/s/v1/ig2/-hRS1sN0I1EyHsEr2eO4I3DahfvmFH0n7ldR9dHmbiOfegCezOrzABOhh5gmEwfYENZCs2FXkr2cI7w3pIq2CcII.jpg?size=736x920&quality=96&type=album');
div.style.background = `url('${pic}')`;
//опция включения рамок
let option = confirm('Включить появление рамок?');
//время появления эффекта
let timShow = prompt('Введите появления эффекта в миллисекундах', 500);
div.style.transition = `all ${timShow}ms ease`;
//случайное присвоение блоку цвета, режима наложения и clip-path
let changeEffecto = () => {
	//цвета и режим наложения
	let colorBack = `rgb(${getRand(0,255)},${getRand(0,255)},${getRand(0,255)})`;

	let oneOfModes = getRand(0,14);
	let mode = stylesModes[oneOfModes];

	div.style.backgroundColor = colorBack;
	div.style.backgroundBlendMode = mode;

	//сlip-path
	if (option == 1) {
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
	}
};
