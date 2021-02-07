const express = require("express");
const route = require("./route/routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes method
app.use(route);

app.listen(3000, () => {
  console.log(" SERVER BERHASIL ");
});
