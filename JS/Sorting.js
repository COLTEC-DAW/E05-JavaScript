"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SortTypes;
(function (SortTypes) {
    SortTypes[SortTypes["Increasing"] = 0] = "Increasing";
    SortTypes[SortTypes["Decreasing"] = 1] = "Decreasing";
})(SortTypes || (SortTypes = {}));
function SortArray(input, order) {
    let swap = (j) => {
        buffer = input[j + 1];
        input[j + 1] = input[j];
        input[j] = buffer;
    };
    let buffer;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length - 1; j++) {
            switch (order) {
                case SortTypes.Increasing:
                    if (input[j] > input[j + 1])
                        swap(j);
                    break;
                case SortTypes.Decreasing:
                    if (input[j] < input[j + 1])
                        swap(j);
                    break;
            }
        }
    }
    return input;
}
let toSort = [3, 45, 2, -16, 14, 13, 2, 4, 7, 10, -22];
console.log(toSort);
console.log(SortArray(toSort, SortTypes.Increasing));
console.log(SortArray(toSort, SortTypes.Decreasing));
//# sourceMappingURL=Sorting.js.map