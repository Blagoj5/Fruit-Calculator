export const ACTION_TYPES = {
  FIRST_BATCH: 'FIRST_BATCH',
  SECOND_BATCH: 'SECOND_BATCH',
  BATCH: 'BATCH',
  INITIAL_LOAD: 'INITIAL_LOAD',
  STORE_RESULTS: 'STORE_RESULTS',
  RESET_SCORE: 'RESET_SCORE',
} as const;

// Action creators
export const storeResults = ({
  actionType,
  calculator,
}: {
  actionType: 'miss' | 'hit';
  calculator: 'simple' | 'advanced';
}) => {
  return {
    type: ACTION_TYPES.STORE_RESULTS,
    payload: {
      [actionType]: 1,
      calculator,
    },
  };
};

// Action creators
export const resetScore = () => {
  return {
    type: ACTION_TYPES.RESET_SCORE,
  };
};
