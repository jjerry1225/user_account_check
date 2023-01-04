const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

// 引用路由器，路徑設定為 /routes 就會自動去尋找目錄下叫做 index 的檔案。
const routes = require("./routes");

// 套用express-handlebars的模板引擎
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// 設定route
app.use(routes);

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
