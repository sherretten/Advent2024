"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function retrieveReports() {
    var file = (0, fs_1.readFileSync)("./input-day2.txt", "utf-8");
    return file;
}
function main() {
    var reports = retrieveReports();
    var safeReports = 0;
    reports.split("\n").forEach(function (report) {
        var row = report.split(" ").map(function (i) { return +i; });
        var increasing = row[1] > row[0];
        var numberOfErrors = 0;
        for (var index = 0; index < row.length; index++) {
            var indexDifference = row[index] - row[index + 1];
            if (Math.abs(indexDifference) > 3) {
                return;
            }
            if ((increasing && indexDifference >= 0) ||
                (!increasing && indexDifference <= 0)) {
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
