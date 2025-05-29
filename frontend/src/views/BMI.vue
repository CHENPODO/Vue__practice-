<script setup>
import { ref, onMounted } from "vue"

const height = ref(0)
const weight = ref(0)
const bmiResult = ref("")

const calculateBMI = () => {
	if (height.value <= 0 || weight.value <= 0) {
		bmiResult.value = "請輸入正確資料!"
	}
	const bmi = weight.value / (height.value * height.value)
	bmiResult.value = bmi.toFixed(2)
}

onMounted(() => {
	calculateBMI()
})
</script>

<template>
	<h1 class="label">BMI</h1>
	<h2>BMI</h2>
	<p class="notic">注意身高要換算成公尺</p>
	<div class="container">
		<div class="screen">
			<div class="background">
				<div class="box1">
					<div class="left-box">
						<span class="text">身高:</span>
						<input type="number" v-model.number="height" placeholder="m" />
					</div>
					<div class="right-box">
						<span class="text">體重:</span>
						<input type="number" v-model.number="weight" placeholder="kg" />
					</div>
					<div class="sent-btn">
						<button type="button" @click="calculateBMI">計算</button>
					</div>
				</div>
			</div>
			<div class="result-box">
				<span class="text">BMI</span>
				<input type="text" :value="bmiResult" disabled />
			</div>
		</div>
	</div>
</template>

<style scoped>
body {
	background-color: rgba(0, 0, 0, 0.092);
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
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
h2 {
	text-align: center;
}
.notic {
	text-align: center;
}
.container {
	margin: 0 auto;
	width: 500px;
	height: 280px;
	border-radius: 18px;
	display: flex;
	background-image: linear-gradient(to right, #cf2424, #515fc8);
	justify-content: center;
	align-items: center;
	box-shadow: 10px 12px 8px rgba(0, 0, 0, 0.2);
}
.screen {
	display: flex;
	background-color: rgb(255, 255, 255);
	width: 350px;
	justify-content: center;
	height: 280px;
}
.background {
	display: flex;
	padding: 10px;
	width: 400px;
	border-radius: 10px;
}
.box1 {
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.left-box {
	margin: 13px 8px;
	padding: 10px;
}
.left-box:hover {
	border-radius: 10px;
	background: rgba(128, 128, 128, 0.084);
	cursor: pointer;
}

.right-box {
	margin: 0px 8px;
	padding: 10px;
}
.right-box:hover {
	border-radius: 10px;
	background: rgba(128, 128, 128, 0.084);
	cursor: pointer;
}

input {
	width: 50px;
	height: 30px;
	border: none;
	text-align: center;
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.1);
}

.sent-btn {
	display: flex;
	margin-top: 15px;
	justify-content: center;
}
.sent-btn button {
	border: none;
	padding: 10px 18px;
	border-radius: 5px;
}
.sent-btn button:hover {
	background-color: rgb(0, 0, 0);
	color: white;
	cursor: pointer;
}
.text {
	font-weight: 700;
}
.result-box {
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 300px;
	padding: 10px;
}

.result-box input {
	width: 120px;
	height: 50px;
}
</style>
