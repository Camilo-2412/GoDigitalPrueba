const fetch = require("cross-fetch");

const getMovies = async (req, res) => {
  if (!req.params.type) return res.stautus(400).send("Error");

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${req.params.type}?api_key=68c2f8b1ce88338b06bd8a94aee8cc6f&language=es-MX&page=${req.params.pag}`
    );
    

    if (response.status === 401) return "La película no existe";
    if (response.status !== 200) return "Fallo";

    const data = await response.json();
    const movies = data.results;
    return res.status(200).send({ movies });
  } catch (error) {
    throw new Error(error);
  }
};

const getDetails = async (req, res) => {
  if (!req.params.id) return res.status(400).send(error);
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=68c2f8b1ce88338b06bd8a94aee8cc6f&language=es-MX`
    );

    if (response.status === 401) return "La película no existe";
    if (response.status !== 200) return "Fallo";

    const data = await response.json();

    return res.status(200).send({ data });
  } catch (error) {
    throw new Error(error);
  }
};

const getByName = async(req,res) =>{
    if (!req.params.name) return res.status(400).send("error");
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=68c2f8b1ce88338b06bd8a94aee8cc6f&language=es-MX&query=${req.params.name}&page=${req.params.pag}`
    );
        
    if (response.status === 401) return "La película no existe";
    if (response.status !== 200) return "Fallo";

    const data = await response.json();
    const movies = data.results;
    return res.status(200).send({ movies });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getMovies, getDetails, getByName };
