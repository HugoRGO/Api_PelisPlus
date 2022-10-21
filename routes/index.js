const express = require("express");
const router = express.Router();
const userRouter = require("./User.route");
const peliculaRouter = require("./Pelicula.route");

router.get("/", (req, res) => {
  res.send(`
    <h1>Bienvenido a la API_PelisPlus!</h1>
    `);
});

router.use("/user", userRouter);
router.use("/pelicula", peliculaRouter);

module.exports = router;
