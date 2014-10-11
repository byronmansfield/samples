
// Example of Recusion

// Recusion is useful to loop through just about anything

function recursiveFunction(n) {
	// First we define out base case
	// which is important because
	// it will break our loop once we hit zero

	if (n <= 0) {
		return 1;
	}

	// otherwise we will return this function 
	// and multiply it by the current number
	// and pass it one less than the current number
	// this is what keeps it looping and stepping down
	return (recursiveFactorial(n - 1));
}

// example of how to call it

recursiveFunction(23);
