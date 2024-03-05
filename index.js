/**
 * @param {number} number - Input of random integer number.
 * @returns {number} - The total number added up.
 */

export default function splitAdd(number) {
	return (
		// change the input number to string
		String(number)
			// Change the string into an array of each of character string, with delimiter empty space.
			.split("")
			// Change every character into Number back. Why not doing that in the first place? because we need to split the String of number so we can using .reduce() later.
			.map((each) => Number(each))
			// add all of the numbers
			.reduce((a, b) => a + b)
	);
}


/**
 * @param {number} number - Input of random integer number.
 * @returns {number} - The total number mutliplied up.
 */

export default function splitAdd(number) {
	return (
		// change the input number to string
		String(number)
			// Change the string into an array of each of character string, with delimiter empty space.
			.split("")
			// Change every character into Number back. Why not doing that in the first place? because we need to split the String of number so we can using .reduce() later.
			.map((each) => Number(each))
			// multiply all of the numbers
			.reduce((a, b) => a * b)
	);
}
