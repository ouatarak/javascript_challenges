Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.


// developer.mozilla.org
https://edabit.com/


function progressDays(runs) {
	let progress = 0
  runs.forEach((num, i) => num < runs[i+1] ? progress++ : null);
  return progress
}


Make a Circle with OOP have two getters getArea() (PIr^2) and getPerimeter() (2PI*r)

// developer.mozilla.org
https://edabit.com/


class Circle {
	constructor (radius) {
	this.radius = radius;
	}
	getArea() {
		return Math.PI * Math.pow(this.radius,2);
	}
  getPerimeter() {
	  return 2 * Math.PI * this.radius;
}
}

Create a function that takes a number as its argument and returns an array of all its factors.


// developer.mozilla.org
https://edabit.com/


function factorize(num) {
	let factors = []
	for (i = 1; i <= num; i++) {
		if (num % i === 0) {
			factors.push(i)
		}
	}
	return factors
}
