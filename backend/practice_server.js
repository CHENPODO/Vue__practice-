// // json-server --watch xxx.json --port 3000
// // express /cors /fs

import express from "express"
import fs from "fs"
import cors from "cors"

const port = 3000
const app = express()
app.use(cors())
//json 讀取
const inkBooks = JSON.parse(fs.readFileSync(new URL("./db_ver2.json", import.meta.url)))

app.get("/", (req, res) => {
	res.send(inkBooks)
})

app.listen(port, () => {
	console.log(`Server is running in port:${port}`)
})
