const express = require("express")
const exphbs = require("express-handlebars")
const app = express()
const port = 3000

// 套用express-handlebars的模板引擎
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// 設定route
app.get("/", (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})