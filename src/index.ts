export * from "./selection";
export * from "./calculate";
export * from "./data";
export * from "./types";

import * as calculate from "./calculate";
import * as data from "./data";
import * as selection from "./selection";

// Make the library easier to navigate by making the major defining sections objects which categorizes the types of
// functions available.
export const Selection = selection;
export const Calculate = calculate;
export const Data = data;
