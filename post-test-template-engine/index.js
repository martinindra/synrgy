const { default: axios } = require("axios");
const express = require("express");
const app = express();

app.set(`view engine`, `ejs`);

app.get(`/`, (req, res) => {
  res.render(`index`, { title: "Home" });
});

app.get(`/about`, (req, res) => {
  res.render("about", { title: `About` });
});
app.get(`/news`, (req, res) => {
  const url = `https://berita-indo-api.vercel.app/v1`;
  axios
    .get(`${url}/cnbc-news`)
    .then((result) => {
      res.render(`news`, { title: "berita", news: result.data.data });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get(`/corona`, (req, res) => {
  const url = `https://api.kawalcorona.com/indonesia/provinsi`;
  axios
    .get(`${url}`)
    .then((result) => {
      res.render("corona", { title: "Data Corona", corona: result.data });
    })
    .catch((err) => {
      res.send(err);
    });
});
app.listen(`3030`, () => {
  console.log(`Server is start on 3030`);
});
