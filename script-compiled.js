'use strict';

{
	//Połączenie dwóch stringów
	var str1 = 'Hello ';
	var str2 = 'World!';
	var fullStr = '' + str1 + str2;
	console.log(fullStr);
}

{
	//Operacja mnożenia dwóch wartości a i b
	var multiply = function multiply(a) {
		var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
		return a * b;
	};
	console.log(multiply(5, 5));
}

{
	// Srednia arytmetyczną wszystkich argumentów
	var count = 0;
	var sum = 0;
	var average = function average() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return args.forEach(function (arg) {
			sum += arg;
			count += 1;
			// console.log(arg, sum, count)
			if (count === args.length) {
				console.log("Średnia arytmetyczna to: " + sum / count);
				count = 0;
				sum = 0;
			}
		});
	};
	average(5, 5, 5, 10);
	// Tablica z ocenami 
	var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
	average.apply(undefined, grades);
}

{
	// Wyciągnięcie z tablicy zmiennych firstname oraz lastname
	var data = [1, 4, 'Iwona', false, 'Nowak'];
	var Firstname = data[2],
	    Lastname = data[4];

	console.log(Firstname, Lastname);
}
