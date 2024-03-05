# This Package is used to perform incremental calculations on results

### How to use

```bash
# install the package
npm install split-add
```

### Example

```javascript
// import the package
import { splitAdd, splitMultiply } from "split-add";

// call the function
number = 1234
const resultAdd = splitAdd(number);
const resultMultiply = splitMultiply(number)
console.log(resultAdd); // 10
console.log(resultAdd); // 24
```

### Output

```javascript
10;
24;
```
