/* Modules are similar to factory functions
 * However, they differ in how they are created.
 * Notably, instead of creating a factory to use repeatedly,
 * the factory is wrapped in an...
 * Immediately Invoked Function Expression >> IIFE
 */

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

/* calculator is now the object that was returned from the 
 * anonymous function, or module.
 */

calculator.add(3,5) // 8
calculator.sub(6,2) // 4
calculator.mul(14,5534) // 77476

