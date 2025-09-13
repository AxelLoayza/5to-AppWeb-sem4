const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router.get("/nuevo-pokemon", pokemonController.formulario);
router.post("/nuevo-pokemon", pokemonController.guardar);
router.get("/pokemones", pokemonController.listar);

module.exports = router;
