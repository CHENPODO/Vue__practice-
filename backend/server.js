import express from "express"
import cors from "cors"
import fs from "fs"

// 讀取 JSON 檔案（同步或異步都可以）
const brands = JSON.parse(fs.readFileSync(new URL("./db.json", import.meta.url)))
// 使用 express 來建立伺服器
const app = express()
const port = 3000
app.use(cors()) // 啟用 CORS

//API 路由
app.get("/get", (req, res) => {
	res.json(brands)
	console.log("已回傳品牌資料")
})
// 啟動伺服器
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
