---
project: -
path: -
filename: -
codename: Dataviewjs References
CUID: 20220518002237
line: -
language: javascript
framework: dataview
description: Tips for using dataviewjs.
tags: code_snippet
---


## codename
Dataview Javascript References
## Code Description
Check out the [CustomJS plugin](https://github.com/samlewis0602/obsidian-custom-js) as allows you to define your own functions elsewhere and use/re-use them from dataview JS by just deconstructing the API with a one-liner so your notes don't have to have to have huge code blocks and you don't need to copy/paste repeated functionality.

Since you're new I'll share some stuff that helped me along the way. Just gonna drop my notes in here. You probably already know some of this but I hope it helps.

1.  **CTRL+SHIFT+I is your friend**: You can console.log(x) and object and then look inside it to see it's structure so you know how to work with it.
    
2.  **Iterating through YAML metadata fields**: I found these objects to be difficult to work with and the most reliable method for iteration was `for (let key of Object.keys(x)){ }` or `for (let [key, val] of Object.entries(x)){ }`
    
3.  **Outputting & styling your data**: Aside from `dv.list()`and `dv.Table`the docs don't give a lot of guidance on how to actually output your data. You can use `dv.el()` to create HTML elements but it is quite limited compared to using `createEl()` from the Obsidian API as this function can add classes and IDs to elements among other things. dataviewjs creates a container which you can reference as `this.container` so for example `this.container.createEl('p',{text:"Hello", cls: ["hello-box"]})` would insert `<p class="hello-box">Hello</p>` which would allow you to style that element however you want using CSS snippets.
    
4.  **Calling other plugins**: You can call other plugins in your dataviewjs scripts. For example calling a Templater user function in dataviewjs: `let tpl = this.app.plugins.plugins['templater-obsidian'].templater;` followed by `let output = await tpl.current_functions_object.user.myFunction({v1:val1,v2,val2});`will allow you to to pass a values to an external program to do processing and then display the results in Obsidian. Being able to call any program opens up a lot of possibilities and when I first tried this and saw that it correctly got the results from my Python script and displayed them I was pretty impressed that it all worked so seamlessly. Use tip #1 to help find the functions you need.
    
5.  **Building tables manually**: You can create an array of arrays `rows` and feed it to `dv.table(["Col1", "Col2", "etc"], rows.map(v => v) );` and in this manner put any data you want into a table. (But you already knew this one =P)
6. 

## To Use
使用时候要注意以下几点

## Comments
- 2022-05-18 10:53 From [reddit](https://www.reddit.com/r/ObsidianMD/comments/ur3f7d/holy_hell_dataview/) @TSPhoenix
- 
## Recent Codes
```dataview
table
		language AS "Language",
 		framework as "Framework",
		description as "Description",
		file.cday AS "Time"
from #code_snippet and !"40 - Obsidian/Templates"
where date(today) - file.ctime <=dur(7 days)
sort file.mtime desc
limit 10
```

[[00. myCodes|⬅️ Back to Codes Homepage]]

---

Thank @咖啡豆 for the template. 