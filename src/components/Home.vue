<template>
	<div>
		<h2 class="label">Home</h2>
		<div class="nav-grid">
			<RouterLink class="nav-item" to="/bmi">BMI</RouterLink>
			<RouterLink class="nav-item" to="/todo-simple">ToDo Simple</RouterLink>
			<RouterLink class="nav-item" to="/if-else">v 指令</RouterLink>
			<RouterLink class="nav-item" to="if-else-copy">每日練習區</RouterLink>
			<!-- 更多 RouterLink 可以一直加 -->
		</div>
		<router-view />
	</div>
</template>

<style scoped>
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
.nav-grid {
	max-width: 90%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	background-color: #adcad6;
	padding: 20px;
	justify-content: flex-start; /* 或 center / space-around 看你要什麼感覺 */
}

.nav-item {
	flex: 0 0 auto;
	padding: 10px 20px;
	background-color: #5d7d94;
	color: white;
	border-radius: 8px;
	text-decoration: none;
	text-align: center;
	transition: 0.3s;
}

.nav-item:hover {
	background-color: #879faa;
	transform: scale(1.05);
}
</style>
