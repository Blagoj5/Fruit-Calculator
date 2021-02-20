import { ACTION_TYPES } from '../store/actions/main';

export type ActionType<ReducerState> = {
  // Maybe all available types
  type: typeof ACTION_TYPES[keyof typeof ACTION_TYPES];
  payload?: Partial<ReducerState>;
};

export type DispatchFunction<ReducerState> = (
  payload: ActionType<ReducerState>
) => void;
