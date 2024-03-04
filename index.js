function add(number) {
	return String(number)
		.split("")
		.map(Number)
		.reduce((a, b) => a + b);
}

module.export = add;
