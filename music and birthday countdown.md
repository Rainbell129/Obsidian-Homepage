---
defines-react-components: true
---


```jsx:component:Show

const files = app.vault.getMarkdownFiles();
let count = 0;
let final = ""

for (var ita=0;ita<files.length;ita++){
	let today = new Date();
	let year = today.getFullYear();
	let yearString = year.toString();
	const basename = files[ita].basename;
	
	const meta = app.metadataCache.getFileCache(files[ita]).frontmatter;
	if (typeof(meta) != "undefined"){
		const birthday = app.metadataCache.getFileCache(files[ita]).frontmatter.birthday;
		if (birthday){
			let birthdaySlice = birthday.slice(4);
			let nextBirthdayString = yearString+birthdaySlice;
			let birthdayMonth = birthday.slice(5,7);
			let birthdayDay = birthday.slice(8,10);
			if (birthdayMonth.slice(0,1)==0){
				birthdayMonth = birthdayMonth.slice(1);
			} 
			if (birthdayDay.slice(0,1)==0){
				birthdayDay = birthdayDay.slice(1);
			} 
			let hanBirthday = birthdayMonth + "月" + birthdayDay + "日";
			let nextBirthdayNumber = new Date(nextBirthdayString);
			let diffBetween = Math.floor((nextBirthdayNumber-today)/3600000/24);
			let N = 0;
			diffBetween>=0? N = diffBetween:N = diffBetween+365;
			if (N < 31){
				count = count+1;
				final += `${basename}生日在${hanBirthday}，还有${N+1}天 \n`
			}
		}
	}
}

const element = <p>未来一个月有{count}个生日:</p>;

const div3Style = {
		frameborder:"no", 
		border:"0",
		marginwidth:"0",
		marginheight:"0",
		width:330,
		height:86,
}
	  

const stateList = ["Next Month","Work","To-do"]
const [state, setState] = useState("Next Month")
const div1 =  (
	<div class="musicBirthday">
		<div style={{flex: 1, textAlign: 'center', whiteSpace: 'pre-wrap'}}>
			<p><b>MUSIC OF THE MONTH</b></p>
			<iframe  style={div3Style}  src="https://music.163.com/outchain/player?type=2&id=33111884&auto=1&height=66"></iframe>
		</div>
		<div style={{flex: 1, textAlign: 'center', whiteSpace: 'pre-wrap'}}>
			<p><b>UPCOMING BIRTHDAYS</b></p>
			<p>{element}{final} </p>
		</div>
	</div>
)

const div2 = 
	  <div style={{whiteSpace:"pre-wrap"}}>
	  	<div>目前还没有什么工作。</div>
		</div>
	  

const div3 = 
	  	 <div style={{whiteSpace:"pre-wrap"}}>
	  	<div>目前也没有什么待办。</div>
		</div>
const button = stateList.map((state)=>{
	return(
		<button onClick={()=>{setState(state)}}>{state}</button>
	)
})
let render

if(state=="Next Month"){
	render = div1
}else if(state=="Work"){
	render = div2
}else{
	render = div3
}
return (
	<div>
		<nav style={{textAlign: "left"}}>
			{button}
		</nav>	
		{render}
	</div>
)

```

```jsx:
<Show></Show>
```

<iframe style={div3Style}  frameborder="no" border="0" marginwidth="0" marginheight="0" width=240 height=100 src="http://music.163.com/outchain/player?type=0&id=372634278&auto=0&height=430"></iframe>

<iframe  style={div3Style}  src="https://music.163.com/outchain/player?type=2&id=33111884&auto=1&height=66"></iframe>
