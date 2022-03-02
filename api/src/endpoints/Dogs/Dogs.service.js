const axios = require("axios");
const { Dog, Temperament, YOUR_API_KEY } = require("../../db");

const getDogByIdFromProvider = async (id) => {
  const result = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?apiKey=${YOUR_API_KEY}`);
  return result.data;
};

const getById = async (id) => {
  const dogFound = await getDogByIdFromProvider(id);
  return dogFound;
};

const urlProvider = `https://api.thedogapi.com/v1/breeds?apiKey=${YOUR_API_KEY}`;


const getAllDogsFromProvider = async () => {
  try {
    const data = await axios.get(urlProvider)
    return data.data
  } catch (err) {
    throw err
  }
};

const getAllDogsFromDB = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      }
    }
  });
};

const getAll = async () => {
  try {
    const allDogsFromProvider = await getAllDogsFromProvider();

    const allDogsFromProviderDB = await getAllDogsFromDB();

    const allInfo = allDogsFromProvider.concat(allDogsFromProviderDB)
    return allInfo
  } catch (err) {
    throw (err)
  }
};

module.exports = { getAll, getById }