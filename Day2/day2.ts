import { readFileSync } from "fs";

function retrieveReports() {
  const file = readFileSync("./input-day2.txt", "utf-8");

  return file;
}

function main() {
  const reports = retrieveReports();

  let safeReports = 0;
  reports.split("\n").forEach((report) => {
    let row = report.split(" ").map((i) => +i);
    let increasing = row[1] > row[0];
    let numberOfErrors = 0;
    for (let index = 0; index < row.length; index++) {
      let indexDifference = row[index] - row[index + 1];
      if (Math.abs(indexDifference) > 3) {
        return;
      }
      if (
        (increasing && indexDifference >= 0) ||
        (!increasing && indexDifference <= 0)
      ) {
        numberOfErrors++;
      }

      if (index === row.length - 1 && numberOfErrors <= 1) {
        safeReports++;
      }
    }
  });

  console.log("Safe Reports: ", safeReports);
}

main();
