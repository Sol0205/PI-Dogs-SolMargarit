const initialState = {
  dogs: [],
  allDogs: [],
};

function getDogsByTemperament(temperament, allDogs) {
  debugger;
  return allDogs.filter((el) => {
    return el.temperament?.includes(temperament);
  });
}

function rootReducer(state = initialState, temperament) {
  switch (temperament.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: temperament.payload,
        allDogs: temperament.payload,
      };

    case "FILTER_BY_TEMPERAMENTS":
      const statusFiltered =
        temperament.payload === "allTemperaments"
          ? state.allDogs
          : getDogsByTemperament(temperament.payload, state.allDogs);
      return {
        ...state,
        dogs: statusFiltered,
      };
    case "FILTER_CREATED":
      const allDogs2 = state.allDogs
      const createdFilter =
        temperament.payload === 'created'
        ? allDogs2.filter(el => el.createdInDB)
        : allDogs2.filter(el => !el.createdInDB)
      return {
        ...state,
        dogs: temperament.payload === 'all' ? state.allDogs : createdFilter
      }
    default:
      return state;
  }
}

export default rootReducer;