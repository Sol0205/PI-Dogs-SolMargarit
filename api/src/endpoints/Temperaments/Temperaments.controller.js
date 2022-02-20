const axios = require('axios')
const { Temperament, YOUR_API_KEY } = require("../../db");


const temperamentsTypes = async (req, res) => {
  try {
    // hago un request
    const { data: perros } = await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${YOUR_API_KEY}`);


    // mapeo los temperamentos
    const temperaments = perros
      .map(function (dog) {
        // me devuelve un string con varios temperamentos
        // .split = dividido la cadena de texto por una coma
        // .trim = elimina los espacios en blanco en ambos extremos del string
        // temperament? = si el temperamento me devuelve null o undefined me lo devuelve en la consola
        return dog.temperament?.split(',').map(s => s.trim());
      })
      // .flat = aplano un array ya que devuelve un array de arrays
      // .filter = lo utilizo para que me devuelva el mismo valor como true o false, en este caso necesito todos true
      .flat()
      .filter(e => e)
    // ['', '', '',]

    // crea un array sin elementos duplicados(temperamentos)
    const temperamentsWithoutDuplicates = [...new Set(temperaments)];
    console.log('temperamentsWithoutDuplicates: ', temperamentsWithoutDuplicates);

    // ejecuto una vez por elementos del arrar
    temperamentsWithoutDuplicates.forEach((temperament) => {
      Temperament.findOrCreate({
        where: { name: temperament },
      });
    });

    const allTemperaments = await Temperament.findAll();
    res.status(200).json(allTemperaments);
  } catch (err) {
    res.json({ err });
    console.log(err)
    throw err
  }
};

module.exports = { temperamentsTypes };
