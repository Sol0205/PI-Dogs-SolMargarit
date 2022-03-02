import axios from "axios";

export function getDogs() {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/dogs`, {});
    return dispatch({
      type: "GET_DOGS",
      payload: json.data,
    });
  };
}

export function searchNameDogs(name) {
  return async function(dispatch){
    try {
      var json = await axios.get('http://localhost:3001/dogs?name=' + name)
      return dispatch({
        type: 'SEARCH_NAME_DOGS',
        payload: json.data
      })
    }
    catch(err) {
      console.log(err)
    }
  }
}

export function filterDogsByTemperaments(payload) {
  console.log(payload);
  return {
    type: "FILTER_BY_TEMPERAMENTS",
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByKg(payload) {
  return {
    type: "ODER_BY_KG",
    payload,
  }
}

export function getDetails(id) {
  debugger
  return async function(dispatch){
    try {
      debugger
      var json = await axios.get('http://localhost:3001/Dogs/' + id)
      var image = await axios.get('https://api.thedogapi.com/v1/images/' + json.data.reference_image_id)
      return dispatch({
        type: "GET_DETAIL_DOGS",
        payload: {
          ...json.data,
          image: image.data.url
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
}
