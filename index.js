function add(number) {
	return String(number)
		.split("")
		.map(Number)
		.reduce((a, b) => a + b);
}

export default add;
