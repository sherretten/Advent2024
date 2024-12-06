import { readFileSync } from "fs";

function retrieveMullFile() {
  const file = readFileSync("./input-day3.txt", "utf-8");

  return file;
}

function main() {
  const file = retrieveMullFile();

  const regex = new RegExp(/mul\([0-9]{1,3},[0-9]{1,3}\)/gm);
  let muls = file.match(regex);

  // console.table(muls);

  let products = 0;

  muls.forEach((mul) => {
    let numbers = mul.match(/[0-9]{1,3}/gm);
    products += Number(numbers[0]) * Number(numbers[1]);
  });

  const findDoRegex = /(?<=do\(\)).*?(?=don\'t\(\))/gm;
  let doMuls = file.match(findDoRegex);

  let doProducts = 0;

  doMuls.forEach((dos) => {
    let mul = dos.match(regex);
    mul.forEach((mul) => {
      let numbers = mul.match(/[0-9]{1,3}/gm);
      doProducts += Number(numbers[0]) * Number(numbers[1]);
    });
  });

  console.debug(products, doProducts);
}

main();
