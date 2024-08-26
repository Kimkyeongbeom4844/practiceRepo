import { test } from "./a.js";
console.log("module_b");
export const sayHello = () => {
  console.log("hello~!", test);
};
export const sayBye = () => {
  console.log("bye~!");
};
