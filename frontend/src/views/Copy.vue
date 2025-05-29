<!-- 每晚練習用 -->
<script setup>
import { computed, handleError, onMounted, reactive, ref, watch } from "vue"

// 基礎版
const bookList = ["原子習慣", "蛤蟆先生去看心理師", "別對每件事都有反應", "持續買進"]
const bookIndex = 0
const bookState = false
// 進階版 顯示一本 or 多本 and 下一本
const bookList_Updated = ["原子習慣", "蛤蟆先生去看心理師", "別對每件事都有反應", "持續買進"]
const isSingleShowBook = ref(false)
const bookIndex_Updated = ref(0)
const toggleAllBtn = () => {
	isSingleShowBook.value = !isSingleShowBook.value
}
const nextBook = () => {
	bookIndex_Updated.value = (bookIndex_Updated.value + 1) % bookList.length
}
// v-show
const ans = ref(false) //一開始不顯示
const ShowAns = () => {
	ans.value = !ans.value
	if (ans.value) startTimer()
}
const label = computed(() => {
	return ans.value ? `隱藏答案  ${countDown.value} ` : "顯示答案"
})
// 監聽
const countDown = ref(5)
const timer = ref(null)
const startTimer = () => {
	countDown.value = 5
	clearInterval(timer.value)

	timer.value = setInterval(() => {
		countDown.value -= 1
		if (countDown.value === 0) {
			ans.value = false
			clearInterval(timer.value)
			timer.value = null
		}
	}, 1000)
}
watch(ans, (newVal, oldVal) => {
	// 當來源值變動時要執行的邏輯
	if (newVal) {
		startTimer()
	} else {
		clearInterval(timer.value)
		timer.value = null
	}
})

// 計算屬性 跟 方法 區別
const countMethodsAndComputed = ref(0)
const ski = reactive(["vue3", "React", "vue2", "Ruby"])
const getVueSki = () => {
	console.log("調用 getVueSki() 方法")
	return ski.filter((vue) => vue.includes("vue"))
}
const getComputed = computed(() => {
	console.log("調用 getComputed () 方法")
	return ski.filter((vue) => vue.includes("vue"))
})
const handleClick = () => {
	countMethodsAndComputed.value += 1
}
// 練習監聽器密碼
const password = ref("")
const passwordStrength = ref("")

watch(password, (newVal) => {
	if (newVal === "") {
		passwordStrength.value = "請輸入密碼"
	} else if (newVal.length < 6) {
		passwordStrength.value = "密碼太短"
	} else if (/[a-zA-Z]/.test(newVal) && /\d/.test(newVal)) {
		passwordStrength.value = "密碼強度:強"
	} else if (/^[a-zA-Z]+$/.test(newVal) || /^\d+$/.test(newVal)) {
		passwordStrength.value = "密碼強度:中"
	} else {
		passwordStrength.value = "密碼格式不符"
	}
})

// 引入axios
import axios from "axios"

const inkBooks = ref([])

onMounted(async () => {
	const res = await axios.get("http://localhost:3000/inkBook")
	inkBooks.value = res.data
	// console.log(res.data)
})
</script>

<template>
	<h1 class="label">每日練習區</h1>

	<!-- 練習 if if-else-if if-else -->
	<div class="box">
		<!--基礎版 -->
		<p class="text-p">if if-else-if if-else</p>
		<p class="text-list" v-if="bookList.length === 0">暫無書籍</p>
		<p class="text-list" v-else-if="bookState">{{ bookList[bookIndex] }}</p>
		<ul v-else>
			<li class="text-list" v-for="(book, index) in bookList">{{ index + 1 }}.{{ book }}</li>
		</ul>
	</div>
	<div class="box">
		<!-- 進階版 顯示一本 or 多本 and 下一本 -->
		<p class="text-p">進階版 顯示一本 or 多本 and 下一本</p>
		<button class="bookListBtn" type="button" @click="toggleAllBtn">{{ isSingleShowBook ? "全部顯示" : "顯示一本" }}</button>
		<button type="button" class="bookListBtn" @click="nextBook" :disabled="!isSingleShowBook">下一本:{{ bookIndex_Updated + 1 }}</button>
		<p v-if="bookList_Updated.length === 0">暫無書籍</p>
		<p class="text-list" v-else-if="isSingleShowBook">{{ bookList_Updated[bookIndex_Updated] }}</p>
		<ul v-else>
			<li class="text-list" v-for="(book, index) in bookList_Updated" :key="index">{{ index + 1 }}.{{ book }}</li>
		</ul>
	</div>

	<!-- v-show和使用計算屬性 + 監聽 -->
	<div class="box">
		<p class="text-p">computed屬性切換</p>
		<div class="padding">
			<p class="text-list">Q: Vue是一個什麼樣的框架?</p>
			<p v-show="ans" class="text-list">Y: Vue是一套用於構建用戶介面的漸進式框架</p>
			<button @click="ShowAns" class="bookListBtn">{{ label }}</button>
		</div>
	</div>
	<!-- 監聽器 -->
	<div class="box">
		<p class="text-p">練習：密碼強度偵測 (watch)</p>
		<input v-model="password" type="text" placeholder="請輸入密碼" class="bookListBtn" />
		<p class="text-list">提示：{{ passwordStrength }}</p>
	</div>

	<!-- 計算屬性 computed -->
	<div class="box">
		<p class="text-p">computed 和 methods 區別</p>
		<div class="important_msg">
			<p>computed 本質上有快取機制，只有依賴變化時才會重新執行</p>
		</div>
		<div class="box1">
			<p class="text-list" v-for="vue in getVueSki()">methods:{{ vue }}</p>
		</div>
		<div class="box2">
			<p v-for="v in getComputed">computed:{{ v }}</p>
		</div>
		<button class="bookListBtn" @click="handleClick">點擊{{ countMethodsAndComputed }}</button>
	</div>
	<div class="box">
		<h1 class="text-p">前後端串接</h1>
		<table class="inkBooks-table">
			<thead>
				<tr>
					<th>ID</th>
					<th>型號</th>
					<th>吋</th>
					<th>容量</th>
					<th>價格</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="ink in inkBooks" :key="ink.id">
					<td>{{ ink.id }}</td>
					<td>{{ ink.name }}</td>
					<td>{{ ink.inches }}</td>
					<td>{{ ink.storage }}</td>
					<td>{{ ink.priceNTD }}元</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="box">
		<p class="text-p">下拉選單</p>
		<div class="nav-container">
			<!-- 資料夾1 -->
			<div class="nav-item">
				<ul>
					<a href="#">資料夾1</a>
				</ul>
				<div class="selectP">
					<a href="#">Vue 練習</a>
					<a href="#">JS 功能</a>
					<a href="#">CSS 排版</a>
				</div>
			</div>

			<!-- 資料夾2 -->
			<div class="nav-item">
				<ul>
					<a href="#">資料夾2</a>
				</ul>
				<div class="selectP">
					<a href="#">後端連接</a>
					<a href="#">API 測試</a>
				</div>
			</div>

			<!-- 資料夾3 -->
			<div class="nav-item">
				<ul>
					<a href="#">資料夾3</a>
				</ul>
				<div class="selectP">
					<a href="#">生活紀錄</a>
					<a href="#">每日練習</a>
				</div>
			</div>
			<div class="nav-item">
				<ul>
					<a href="#">讓我上岸</a>
				</ul>
				<div class="selectP">
					<a href="#">持續投履歷</a>
					<a href="#">研究所</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* 基礎版 */
.label {
	margin-left: 20px;
	font-size: 24px;
	font-weight: bold;
	position: relative;
	color: #516b7e;
	margin-bottom: 12px;
}
.label::after {
	content: "";
	position: absolute;
	left: -7px;
	top: 5px;
	height: 23px;
	width: 3px;
	border-radius: 2px;
	background-color: #516b7e;
	border: #5d7d94 1px solid;
}
.box {
	background-color: #c8d5f4;
	width: 400px;
	margin: 10px auto;
	padding: 5px;
	border-radius: 8px;
}
.text-p {
	margin: 10px auto;
	font-weight: 700;
	font-size: 20px;
	background-color: #688ba1;
	color: whitesmoke;
	padding: 10px;
	width: fit-content;
	border-radius: 5px;
}
.text-list {
	font-weight: 700;
	list-style: none;
}
.bookListBtn {
	margin-left: 30px;
	padding: 10px 5px;
	background-color: #688ba1;
	color: whitesmoke;
	font-weight: 700;
	border: none;
	border-radius: 3px;
}
.bookListBtn:hover {
	padding: 10px 5px;
	background-color: #597789;
	cursor: pointer;
}
.bookListBtn:disabled {
	background-color: #a0a0a0;
	color: #dddddd;
	cursor: not-allowed;
}
.padding {
	padding: 25px;
}

/* 前後端交互 */
.inkBooks-table {
	width: 100%;
	border-collapse: collapse;
}
.inkBooks-table th {
	background-color: #f5f5f5;
	color: #333;
}
.inkBooks-table tr,
.inkBooks-table td {
	border: #516b7e 1px solid;
	text-align: center;
}
.inkBooks-table td:nth-child(even) {
	background-color: #312a727d;
}
.inkBooks-table td:nth-child(odd) {
	background-color: #de9595;
}
/* 下拉選單 */
.nav-container {
	display: flex;
	gap: 10px;
	background-color: #a3d2f4;
}
.nav-item {
	position: relative;
}
.nav-item ul {
	border-radius: 3px;
	padding: 5px;
	cursor: pointer;
}
.nav-item ul a:hover {
	color: #efefef;
	background-color: #82a9c4;
}
.selectP {
	display: none;
	background-color: #ebe7e7;
	color: #333;
	position: absolute;
	width: 100%;
	top: 55px;
	left: 10px;
	padding: 10px;
}
.selectP a {
	background-color: #fff;
	padding: 5px;
	display: block;
}
.selectP a:hover {
	background-color: #bdbbbb;
}
.nav-item:hover .selectP {
	display: block;
}
</style>
