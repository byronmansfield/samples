
// Inheritance



// Function inheritance

// Base object constructor function
function base(spec) {
    var that = {}; // Create an empty object
    that.name = spec.name; // Add it a "name" property
    return that; // Return the object
}

// Construct a child object, inheriting from "base"
function child(spec) {
    var that = base(spec); // Create the object through the "base" constructor
    that.sayHello = function() { // Augment that object
        return 'Hello, I\'m ' + that.name;
    };
    return that; // Return it
}

// Usage
var object = child({ name: 'a functional object' });
result.textContent = object.sayHello();




// Prototypal inheritance

// Function wiring prototypes to achieve inheritance
function inherits(Parent, Child) {
    function F() {}
    F.prototype = Parent;
    Child.prototype = new F();
}

// Base class
function Base(spec) {
    this.name = spec.name; // Define the "name" property
}

// Child class
function Child(spec) {
    Base.call(this, spec); // Call the base class constructor
}
inherits(Base, Child); // Wire prototypes
Child.prototype.sayHello = function () { // Define the "sayHello" method
    return 'Hello, I\'m ' + this.name;
};

// Usage
var object = new Child({ name: 'a prototypal object' });
result.textContent = object.sayHello();
