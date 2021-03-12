export const ACTION_TYPES = {
  FIRST_BATCH: 'FIRST_BATCH',
  SECOND_BATCH: 'SECOND_BATCH',
  BATCH: 'BATCH',
  INITIAL_LOAD: 'INITIAL_LOAD',
  STORE_RESULTS: 'STORE_RESULTS',
  RESET_SCORE: 'RESET_SCORE',
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
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

export const resetScore = () => {
  return {
    type: ACTION_TYPES.RESET_SCORE,
  };
};

export const changeLanguage = (ln: 0 | 1) => {
  return {
    type: ACTION_TYPES.CHANGE_LANGUAGE,
    payload: {
      language: ln,
    },
  };
};
