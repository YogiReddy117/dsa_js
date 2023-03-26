import OneDimensionalArray from "./OneDimensionalArray.js";
import TwoDimensionalArray from "./TwoDimensionalArray.js";

const arr2D = new TwoDimensionalArray(3, 3);
arr2D.insert(0, 0, 10);
arr2D.insert(0, 1, 20);
arr2D.insert(0, 2, 30);
arr2D.insert(1, 0, 40);
arr2D.insert(1, 1, 50);
arr2D.insert(1, 2, 60);
arr2D.insert(2, 0, 70);
arr2D.insert(2, 1, 80);
arr2D.insert(2, 2, 90);
// arr2D.my2DArray[2][2] = 10;
arr2D.accessCell(2, 2);
arr2D.accessCell(21, 21);
// console.log(arr2D.my2DArray[1][2]);
// console.log(arr2D.my2DArray[2][2]);
arr2D.traverseArray();
arr2D.searchInArray(60);
arr2D.searchInArray(66);
arr2D.deleteValue(2, 1);
arr2D.deleteValue(1, 1);
arr2D.traverseArray();
