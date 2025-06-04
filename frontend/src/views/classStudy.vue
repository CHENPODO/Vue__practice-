<script setup>
import { ref } from "vue"
const WeekDay = ref([{ Mon: "一" }, { Tue: "二" }, { Wed: "三" }, { Thur: "四" }, { Fri: "五" }, { Sat: "六" }, { Sun: "日" }])
const timeline = ref([""])
</script>
<template>
	<h2 class="label">讀書計畫</h2>
	<div>
		<table>
			<thead class="study-table">
				<tr>
					<th>星期</th>
					<th>時間</th>
					<th>科目 / 任務</th>
					<th>科目任務</th>
				</tr>
			</thead>
			<tbody v-for="w in WeekDay">
				<!-- 第一行 -->
				<tr>
					<th>{{ w.Mon }}</th>
				</tr>
				<tr>
					<th>{{ w.Tue }}</th>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style>
.study-table {
	width: 100%;
	border-collapse: collapse;
}
.study-table tr,
.study-table td {
	padding: 10px;
	border: 1px solid #626262;
}
.study-table th {
	background-color: #f5f5f5;
	color: #333;
}
</style>
