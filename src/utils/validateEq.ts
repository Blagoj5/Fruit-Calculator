import { Operator } from './calculator';

export type EqArr = [number, number, Operator, number];

export const validateEq = (
  oldValues: EqArr | null | undefined,
  newValues: EqArr
) => {
  if (oldValues) {
    let same = 0;
    for (let index in oldValues) {
      if (oldValues[index] === newValues[index]) {
        same = same + 1;
      }
    }

    // if same is 3, that means equation is same as old one
    if (same === 4) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
