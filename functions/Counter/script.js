const makeCounter = function () {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
};

const counter1 = makeCounter();

counter1();
console.log((counter1.count = 999));
counter1();
