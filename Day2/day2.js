"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function retrieveReports() {
    var file = (0, fs_1.readFileSync)("./input-day2.txt", "utf-8");
    return file;
}
function main() {
    var reports = retrieveReports();
    // const reports = `7 6 4 2 1
    // 1 2 7 8 9
    // 9 7 6 2 1
    // 1 3 2 4 5
    // 8 6 4 4 1
    // 1 3 6 7 9`;
    var safeReports = 0;
    reports.split("\n").forEach(function (report) {
        var row = report.split(" ").map(function (i) { return +i; });
        console.debug(row);
        var increasing = row[1] > row[0];
        for (var index = 0; index < row.length; index++) {
            var indexDifference = row[index] - row[index + 1];
            if (Math.abs(indexDifference) > 3) {
                // console.debug("big difference", row);
                return;
            }
            if ((increasing && indexDifference >= 0) ||
                (!increasing && indexDifference <= 0)) {
                // console.debug("Wrong direction", row);
                return;
            }
            if (index === row.length - 1) {
                // console.debug(row);
                safeReports++;
            }
        }
    });
    console.log("Safe Reports: ", safeReports);
}
main();
