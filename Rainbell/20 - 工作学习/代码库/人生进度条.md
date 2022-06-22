---
tags: code_snippet
项目名称: -
相对路径: -
文件名称: -
代码名称: 人生进度条
CUID: 
所在行: -
语言: javascript
框架: -
简述: 展示年月周的进度条。
---


<div class="life-container" style="width:100%;">
	<div class="life-progress progress-day">0%</div>
</div>

<div class="month-text">本月已经过去了：</div>
<div class="life-container" style="width:100%;">
	<div class="life-progress progress-month">0%</div>
</div>

<div class="year-text">今年已经过去了：</div>
<div class="life-container" style="width:100%;">
	<div class="life-progress progress-year">0%</div>
</div>
<br>

```dataviewjs
setInterval(refreshBar,1000) // 刷新间隔为1秒, 更改第二个参数可修改刷新间隔

const monthsLeap = [31,29,31,30,31,30,31,31,30,31,30,31]
const monthsCommon = [31,28,31,30,31,30,31,31,30,31,30,31]

const greenBG = 'repeating-linear-gradient(45deg, #13ce66 0, #13ce66 10px, #36d57d 10px, #36d57d 20px)'; // 进度条在 0~25% 之间的背景, 背景为绿色
const blueBG = 'repeating-linear-gradient(45deg, #50bfff 0, #50bfff 10px, #6ac9ff 10px, #6ac9ff 20px)'; // 进度条在 25~50% 之间的背景, 背景为蓝色
const yellowBG = 'repeating-linear-gradient(45deg, #f7ba2a 0, #f7ba2a 10px, #f8c44a 10px, #f8c44a 20px)'; // 进度条在 50~75% 之间的背景, 背景为黄色
const redBG = 'repeating-linear-gradient(45deg, #ff4949 0, #ff4949 10px, #ff6464 10px, #ff6464 20px)'; // 进度条在 75%~100% 之间的背景, 背景为红色

function refreshBar(){
	let date = new Date()
	let passMinutes = date.getHours() * 60 + date.getMinutes()
    let passDate = date.getDate()
	let month = date.getMonth()
	let year = date.getFullYear()

	let barsDay = document.getElementsByClassName("progress-day")
    let barsMonth = document.getElementsByClassName("progress-month")
    let barsYear = document.getElementsByClassName("progress-year")

	for(let i = 0; i < barsDay.length; i++){
		let per = passMinutes / (24*60)
		if(per < 0.25){
			barsDay[i].style.backgroundImage = greenBG;
		} else if(per < 0.5){
			barsDay[i].style.backgroundImage = blueBG;
		} else if(per < 0.75){
			barsDay[i].style.backgroundImage = yellowBG;
		} else {
			barsDay[i].style.backgroundImage = redBG;
		}
		barsDay[i].style.width = per * 100 + "%"
		barsDay[i].innerHTML = (per * 100).toFixed(0) + "%"
	}

	let textsDay = document.getElementsByClassName("day-text")
	for(let i = 0; i < textsDay.length; i++){
		textsDay[i].innerHTML = "今天已经过去了：" + date.getHours() + "小时" + date.getMinutes() + "分钟"
	}

    for(let i = 0; i < barsMonth.length; i++){
		let per;
		if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
			per = passDate / monthsLeap[month]
		} else {
			per = passDate / monthsCommon[month]
		}
		if(per < 0.25){
			barsMonth[i].style.backgroundImage = greenBG;
		} else if(per < 0.5){
			barsMonth[i].style.backgroundImage = blueBG;
		} else if(per < 0.75){
			barsMonth[i].style.backgroundImage = yellowBG;
		} else {
			barsMonth[i].style.backgroundImage = redBG;
		}
		barsMonth[i].style.width = per * 100 + "%"
		barsMonth[i].innerHTML = (per * 100).toFixed(0) + "%"
	}

	let textsMonth = document.getElementsByClassName("month-text")
	for(let i = 0; i < textsMonth.length; i++){
		textsMonth[i].innerHTML = "本月已经过去了：" + date.getDate() + "天"
	}

	for(let i = 0; i < barsYear.length; i++){
		let per;
		let passDays = date.getDate();
		if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
		for(let i = 0; i < month; i++){
			passDays += monthsLeap[i]
		}
			per = passDays / 366
		} else {
		for(let i = 0; i < month; i++){
			passDays += monthsCommon[i]
		}
			per = passDays / 365
		}
		if(per < 0.25){
			barsYear[i].style.backgroundImage = greenBG;
		} else if(per < 0.5){
			barsYear[i].style.backgroundImage = blueBG;
		} else if(per < 0.75){
			barsYear[i].style.backgroundImage = yellowBG;
		} else {
			barsYear[i].style.backgroundImage = redBG;
		}
		barsYear[i].style.width = per * 100 + "%"
		barsYear[i].innerHTML = (per * 100).toFixed(0) + "%"
	}

	let textsYear = document.getElementsByClassName("year-text")
	for(let i = 0; i < textsYear.length; i++){
		textsYear[i].innerHTML = "今年已经过去了：" + date.getMonth() + "个月" + date.getDate() + "天"
	}
}
```