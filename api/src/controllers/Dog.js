const axios = require("axios");
const { Dog, Temperament, YOUR_API_KEY } = require("../db");

const getApiInfo = async () => {
  try {
    const apiInfo = await axios.get(
      `https://api.thedogapi.com/v1/breeds?apiKey=${YOUR_API_KEY}`
    );

    const perro = await apiInfo.data.map((elemento) => {
      return {
        id: elemento.id,
        name: elemento.name,
        temperament: elemento.temperament,
        height: elemento.height,
        weight: elemento.weight,
        life_span: elemento.life_span,
        image: elemento.image,
      };
    });
    return perro;
  } catch (err) {
    throw err;
  }
};

getApiInfo();

const getDbInfo = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const allInfoApiDb = async () => {
  try {
    let datosApi = await getApiInfo();
    let datosDb = await getDbInfo();
    let allInfo = datosApi.concat(datosDb);
    return allInfo;
  } catch (error) {
    throw error;
  }
};

const getDogById = async () => {
  let datosApi = await getDogByIdFromProvider();
  let datosDb = await getDbInfo();
  let allInfo = datosApi.concat(datosDb);
  return allInfo;
};

const dogs = async (req, res) => {
  try {
    const { name } = req.query;
    const allData = await allInfoApiDb();

    if (name) {
      let dogName = await allData.filter((dog) =>
        dog.name
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(name.toLowerCase().split(" ").join(""))
      );
      // console.log("dogName: ", dogName);
      dogName.length != 0
        ? res.status(200).json(dogName)
        : res.status(404).send("Dog does not exist");
    } else res.status(200).json(allData);
  } catch (err) {
    res.json({ err });
  }
};

const newDog = async (req, res) => {
  let { name, height, weight, life_span, image, temperament } = req.body;

  try {
    if (!name || !image) {
      return res.json(
        "Debe introducir un nombre y una imagen para crear al perro"
      );
    }
    let dogCreated = await Dog.create({
      name,
      height,
      weight,
      life_span,
      image,
    });

    let temperamentDb = await Temperament.findAll({
      where: { name: temperament },
    });
    await dogCreated.addTemperament(temperamentDb);

    res.send("Creado con exito!");
  } catch (err) {
    res.json({ err });
  }
};

const dogsById = async (req, res) => {
  const { id } = req.params;
  let allInfo = await getDogById(id);

  try {
    if (id) {
      let infoFilter = await allInfo.filter((dog) => dog.id == id);
      infoFilter.length != 0
        ? res.status(200).json(infoFilter)
        : res.status(404).send("HOLA! Perro no encontrado");
    }
  } catch (err) {
    res.json({ err });
  }
};

module.exports = { dogs, dogsById, newDog };
