import { FruitsType } from '../../types';
import { ActionType } from '../../types/redux';
import { ACTION_TYPES } from '../actions/main';

export const initialState: {
  language: 0 | 1;
  name: string;
  surname: string;
  age: number;
  city: string;
  learnMath?: boolean;
  fruit?: FruitsType;
  /**  Correctness for + and - */
  correctnessSimple?: {
    misses?: number;
    matches?: number;
    ratio?: number;
  };
  /**  Correctness for * and / */
  correctnessAdvanced?: {
    misses?: number;
    matches?: number;
    ratio?: number;
  };
} = { name: '', surname: '', age: 0, city: '', language: 0 };

export const reducer = (
  state = initialState,
  action: ActionType<typeof initialState> & {
    payload?: {
      miss?: number;
      hit?: number;
      calculator?: 'simple' | 'advanced';
    };
  }
): typeof state => {
  switch (action.type) {
    case 'INITIAL_LOAD':
      const initalObject = JSON.parse(localStorage.getItem('infos') || 'null');

      return initalObject || state;
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: action.payload?.language || 0,
      };
    case 'BATCH':
      const objectToBeStored = {
        ...state,
        ...action.payload,
      };
      localStorage.setItem(
        'infos',
        JSON.stringify({ ...objectToBeStored, type: undefined })
      );
      return objectToBeStored;
    case ACTION_TYPES.STORE_RESULTS:
      let property: 'correctnessSimple' | 'correctnessAdvanced' =
        'correctnessSimple';

      if (action.payload?.calculator === 'advanced') {
        property = 'correctnessAdvanced';
      }

      let correctness:
        | {
            misses?: number | undefined;
            matches?: number | undefined;
            ratio?: number | undefined;
          }
        | undefined = {
        ...state[property],
      };

      if (action.payload?.miss) {
        correctness.misses = state[property]?.misses
          ? state[property]!.misses! + 1
          : 1;
      } else {
        correctness.matches = state[property]?.matches
          ? state[property]!.matches! + 1
          : 1;
      }
      // Calculate final ratio. Matches/ full lengths of guesses
      let ratio =
        (correctness.matches || 0) /
        ((correctness.misses || 0) + (correctness.matches || 0));

      correctness.ratio = ratio;

      const objectToBeSaved = {
        ...state,
        [property]: correctness,
      };

      localStorage.setItem(
        'infos',
        JSON.stringify({ ...objectToBeSaved, type: undefined })
      );

      return objectToBeSaved;

    case ACTION_TYPES.RESET_SCORE:
      const object = {
        ...state,
        correctnessSimple: undefined,
        correctnessAdvanced: undefined,
      };

      localStorage.setItem(
        'infos',
        JSON.stringify({ ...object, type: undefined })
      );
      return object;
    default:
      return initialState;
  }
};
