import { readFileSync } from "fs";

// Read file, return left and right list
function retrieveBothLists() {
  let left: number[] = [];
  let right: number[] = [];

  const file = readFileSync("./input-day1.txt", "utf-8");

  file.split("\n").forEach((input) => {
    const numbers = input.split("   ");
    left.push(+numbers[0]);
    right.push(+numbers[1]);
  });

  return [left, right];
}

function calculateDistance(leftList: number[], rightList: number[]) {
  leftList.sort();
  rightList.sort();

  let totalDifference = 0;

  for (let index = 0; index < leftList.length; index++) {
    const leftItem = leftList[index];
    const rightItem = rightList[index];

    if (leftItem >= rightItem) {
      totalDifference += leftItem - rightItem;
    } else {
      totalDifference += rightItem - leftItem;
    }
  }

  return totalDifference;
}

function calculateSimilarity(leftList: number[], rightList: number[]) {
  let score = 0;

  leftList.forEach((left) => {
    let leftInRight = 0;
    rightList.forEach((right) => {
      if (right === left) {
        leftInRight++;
      }
    });
    score += left * leftInRight;
  });
  return score;
}

function main() {
  const [left, right] = retrieveBothLists();
  const distance = calculateDistance(left, right);
  console.debug("distance: ", distance);

  const similarityScore = calculateSimilarity(left, right);
  console.debug("similarity: ", similarityScore);
}

main();
