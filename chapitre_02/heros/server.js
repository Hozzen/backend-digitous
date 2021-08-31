const express = require("express")
const app = express();
const PORT = 3000;
const morgan = require("morgan");
const cors = require("cors");

let superHeros = [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricity", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]

app.use(cors())

// Permet de vérifier quelle route a été solicitée
app.use(morgan("tiny"));

app.use(express.json())

app.get("/heroes", (req,res) => {
    res.json(superHeros)
})

app.get("/heroes/:name", (req,res) => {
    const heroName = req.params.name;
    console.log(heroName);
    let superHero = superHeros.filter((hero) => hero.name.toLowerCase().replace(" ", "") === heroName)

    res.json(superHero)
})

app.get("/heroes/:name/power", (req, res)=> {
    const heroName = req.params.name;
    console.log(heroName);
    let superHero = superHeros.filter((hero) => hero.name.toLowerCase().replace(" ", "") === heroName)
    console.log(superHero)

    res.json(superHero[0].power)
})

app.patch("/heroes", (req,res) => {
    const newHero = req.body;
    console.log(newHero)
    superHeros.push(newHero);
    console.log(superHeros);

    res.json({
        message: "Ok, Nouveau héro ajouté ! ",
        preuve: superHeros
    })
})





app.listen(PORT, () => {
    console.log(`Serveur est lancé sur le port ${PORT}!`)
})