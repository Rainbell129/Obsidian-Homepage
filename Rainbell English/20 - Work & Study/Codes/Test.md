---
project: 
path: 
filename: 
codename: 
CUID: 20220518002237
line: 
language: python
framework: 
description: To use for what?
tags: code_snippet
---

## codename
Fill in Name of the code
## Code Description
List Functions
```python
python
```

## To Use
使用时候要注意以下几点

## Comments
- 2022-3-27 17 :05: 12 Is the shit-like code written by me?
- 2022-3-27 17 :07: 34 Architecture needed modifying. 
- 2022-3-27 17 :07: 59 Finished. 

## Recent Codes
```dataview
table
		language,
 		framework,
		description,
		file.cday AS "Time"
from #code_snippet and !"40 - Obsidian/Templates"
where date(today) - file.ctime <=dur(7 days)
sort file.mtime desc
limit 10
```

[[00. myCodes|代码管理主页]]

---

Thank @咖啡豆 for the template. 