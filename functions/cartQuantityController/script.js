function createQuantityController(config) {
  const {
    min = 1,
    max = 10,
    step = 1,
    basePrice = 100,
    discountRate = 0.2,
    taxRate = 0.05,
  } = config;

  function validate(value) {
    if (!Number.isInteger(value)) return false;
    if (value < min) return false;
    if (value > max) return false;
    return true;
  }

  // Config Validation (Runs Once)
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("min and max must be intergers");
  }

  if (min > max) {
    throw new Error("min cannot be greater than max.");
  }

  if (!Number.isInteger(step) || step <= 0) {
    throw new Error("step must be positive.");
  }

  if (basePrice < 0) {
    throw new Error("basePrice cannot be negative.");
  }

  if (discountRate < 0 || discountRate > 1) {
    throw new Error("discountRate must be between 0 and 1");
  }

  if (taxRate < 0 || taxRate > 1) {
    throw new Error("taxRate must be between 0  and 1");
  }

  // -------  State ---------
  let quantity = min;

  //  ---------- Private Helper ----------
  function isValidQuantity(value) {
    return Number.isInteger(value) && value >= min && value <= max;
  }

  function calculateSubtotal() {
    return quantity * basePrice;
  }

  function calculateDiscount(subtotal) {
    return subtotal * discountRate;
  }

  function calculateTax(taxableAmount) {
    return taxableAmount * taxRate;
  }

  //   ------------ Public API ------------
  function increase() {
    const next = quantity + step;
    if (!isValidQuantity(next)) return quantity;
    quantity = next;
    return quantity;
  }

  function decrease() {
    const next = quantity - step;
    if (!isValidQuantity(next)) return quantity;
    quantity = next;
    return quantity;
  }

  function set(value) {
    if (!isValidQuantity(value)) return quantity;
    quantity = value;
    return quantity;
  }

  function getQuantity() {
    return quantity;
  }

  function getTotal() {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    const taxableAmount = subtotal - discount;
    const tax = calculateTax(taxableAmount);

    // Business layer returns number (no formatting)

    return subtotal - discount + tax;
  }

  return Object.freeze({
    increase,
    decrease,
    set,
    getQuantity,
    getTotal,
  });
}

// Initialize the manager with a config
const myMananger = createQuantityController({
  min: 1,
  max: 15,
  step: 1,
  basePrice: 500,
  discountRate: 0.2,
  taxRate: 0.05,
});

// use the method and log the results
console.log("Initial value:", myMananger.getQuantity());
console.log("increase:", myMananger.increase());
console.log("decrease:", myMananger.decrease());
console.log(myMananger.getQuantity());

console.log("Total:", myMananger.getTotal());
