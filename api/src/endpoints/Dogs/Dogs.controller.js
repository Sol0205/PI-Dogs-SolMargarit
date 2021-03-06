const { Dog, Temperament } = require("../../db");
const provider  = require("./Dogs.service");

const getAll = async (req, res) => {
  try {
    const { name } = req.query;
    const dogs = await provider.getAll()

    if (name) {
      let dogName = dogs.filter((dog) =>
        dog.name
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(name.toLowerCase().split(" ").join(""))
      );

      dogName.length != 0
      ? res.status(200).json(dogName)
      : res.status(404).send("the dog does not exist")
    } else res.status(200).json(dogs)
  } catch (err) {
    res.json({ err })
  }
}

const create = async (req, res) => {
  const {
    name,
    height,
    weight,
    life_span,
    image,
    temperament
  } = req.body

  try {
    // valida name y image
    if (!name || !image) {
      return res.json('Debe ingresar un nombre y una imagen para crear una receta')
    }

    // este metodo guarda el perro en la base de datos
    const dogCreated = await Dog.create({
      name,
      temperament,
      height,
      weight,
      life_span,
      image
    })

    // busca todos los temperamentos que cpincidad con los temperamentos que se pasan
    const temperamentDb = await Temperament.findAll({ where: { name: temperament } })

    // es  un promesa que al perro creado le añade el temperamento
    await dogCreated.addTemperament(temperamentDb)

    res.send('Creado con exito!')
  } catch (err) {
    res.json({ err })
  }
}

const getById = async (req, res) => {
  const { id } = req.params

  let infoOfOneDog = await provider.getById(id)

  try {
    if (id) {
      Boolean(infoOfOneDog)
       ? res.status(200).json(infoOfOneDog)
       : res.status(404).json('Perro no encontrado')
    }
  } catch (err) {
    res.json({ err })
  }
}

module.exports = { getAll, create, getById }