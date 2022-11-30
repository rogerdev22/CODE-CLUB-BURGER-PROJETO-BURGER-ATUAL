//const app = require("./app");
import app  from "./app"

app.listen(5432)

const mainRoutes = require("./routes")


app.use(mainRoutes)

