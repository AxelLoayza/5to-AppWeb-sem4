const pokemones = [];

exports.formulario = (req, res) => {
  res.render("pokemonForm");
};

exports.guardar = (req, res) => {
  const { nombre, tipo, nivel, habilidad, imagen } = req.body;
  pokemones.push({ nombre, tipo, nivel, habilidad, imagen });
  res.redirect("/pokemones");
};

exports.listar = (req, res) => {
  res.render("pokemonLista", { pokemones });
};
