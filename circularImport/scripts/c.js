console.log("module_c");
import { sayHello } from "./b.js";
export const sayHello2 = () => {
  sayHello();
  sayHello();
};
