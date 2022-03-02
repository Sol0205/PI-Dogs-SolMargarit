const initialState = {
  dogs: [],
  allDogs: [],
  detail: {},
};

function getDogsByTemperament(temperament, allDogs) {
  return allDogs.filter((el) => {
    return el.temperament?.includes(temperament);
  });
}

function getPromedio(array) {
  if (array.length === 1) {
    if (isNaN(array[0])) {
      return 0
    }
  return array[0]
}
  return array[0] + array[1]/2
}

function obtenerPesos(string){
  return string.split('-').map(str => {
    const sinExpacion = str.trim()
    const numeroParseado = parseInt(sinExpacion)
    return numeroParseado
  })
}

function rootReducer(state = initialState, { payload, type }) {
  switch (type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: payload,
        allDogs: payload,
      };

    case "SEARCH_NAME_DOGS":
      return {
        ...state,
        dogs: payload
      }

    case "FILTER_BY_TEMPERAMENTS":
      const statusFiltered =
        payload === "allTemperaments"
          ? state.allDogs
          : getDogsByTemperament(payload, state.allDogs);
      return {
        ...state,
        dogs: statusFiltered,
      };
    case "FILTER_CREATED":
      const allDogs2 = state.allDogs
      const createdFilter =
        payload === 'created'
        ? allDogs2.filter(el => el.createdInDB)
        : allDogs2.filter(el => !el.createdInDB)
      return {
        ...state,
        dogs: payload === 'all' ? state.allDogs : createdFilter
      }

    case 'ORDER_BY_NAME':
      const sortedArr = payload === 'asc' ?
        state.dogs.sort(function (a, b) {
          if (a.name > b.name) {
            return 1
          }
          if (b.name > a.name) {
            return -1
          }
          return 0
        }) :
        state.dogs.reverse(function (a, b) {
          if (a.name > b.name) {
            return -1
          }
          if (b.name > a.name) {
            return 1
          }
          return 0
        })
      return{
        ...state,
        dogs: sortedArr
      }
    case 'ODER_BY_KG':
      const sortedArrbyKg = payload === 'minKG' ?
        state.dogs.sort(function(a, b) {
          const losPesosDeA = obtenerPesos(a.weight.metric)
          const promedioDeA = getPromedio(losPesosDeA);
          const losPesosDeB  = obtenerPesos(b.weight.metric)
          const promedioDeB = getPromedio(losPesosDeB);

          if (promedioDeA > promedioDeB) {
            return 1
          }
          if (promedioDeB > promedioDeA) {
            return -1
          }
          return 0
        }) :
        state.dogs.reverse(function (a, b) {
          const losPesosDeA = obtenerPesos(a.weight.metric)
          const promedioDeA = getPromedio(losPesosDeA);
          const losPesosDeB  = obtenerPesos(b.weight.metric)
          const promedioDeB = getPromedio(losPesosDeB);

          if (promedioDeA > promedioDeB) {
            return -1
          }
          if (promedioDeA > promedioDeB) {
            return 1
          }
          return 0
        })
      return{
        ...state,
        dogs: sortedArrbyKg
      }
    case "GET_DETAIL_DOGS":
      debugger
      return{
        ...state,
        detail: payload
      }
    default:
      return state;
  }
}

export default rootReducer;