{
	//Połączenie dwóch stringów
	const str1 = 'Hello '
	const str2 = 'World!'
	const fullStr = (`${str1}${str2}`)
	console.log(fullStr)
}

{
	//Operacja mnożenia dwóch wartości a i b
	let multiply = (a, b = '1') => { return a * b }
	console.log(multiply(5,5))
}

{
	// Srednia arytmetyczną wszystkich argumentów
	let count = 0
	let sum = 0
	const average = (...args) => args.forEach( arg => {
		sum += arg
		count += 1 
		// console.log(arg, sum, count)
		if (count === args.length){ 
       		console.log("Średnia arytmetyczna to: " + sum/count ); 
       		count = 0
       		sum = 0
   		}
	})
	average(5,5,5,10)
	// Tablica z ocenami 
	const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
	average(...grades)
}

{
	// Wyciągnięcie z tablicy zmiennych firstname oraz lastname
	const data = [1, 4, 'Iwona', false, 'Nowak']
	const [,, Firstname,, Lastname] = data
	console.log(Firstname, Lastname)
}