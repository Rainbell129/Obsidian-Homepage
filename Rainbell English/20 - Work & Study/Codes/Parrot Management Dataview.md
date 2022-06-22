---
project: 示例库
path: -
filename: -
codename: Parrot Management
CUID: 20220518002237
line: -
language: javascript
framework: dataview
description: Simplified js code. 
tags: code_snippet
---

## Code Name
Parrot Management Dataview
## Code Description
- Countdown
- Anniversary
````javascript

```dataview
TABLE WITHOUT ID
    ("![](" + photo + ")") as Photo,
    file.link as Name,
    "Birthday: " + dateformat(birthday, "yyyy-MM-dd") AS Birthday,
    "Age: " + split(string((date(today) - birthday).year), "\.", 1) + " years" AS Age,
    "Anniversary: " + dateformat(choice(BD < date(today), BD + dur(1 year), BD), "yyyy-MM-dd") AS Anniversary,
    "Countdowns: " + (choice(BD < date(today), BD + dur(1 year), BD) - date(today)).days + "天" AS Countdowns
FROM #parrot
WHERE photo
FLATTEN date(date(today).year + "-" + dateformat(birthday, "MM-dd")) AS BD
SORT choice(BD < date(today), BD + dur(1 year), BD) ASC
```
````

## To Use
- Add `cssclass: zettelkasten` or `cssclass: cards` for card view. 

## Comments
- 2022-5-20 13:19:00 @mnvwvnm on Discord helped translate my dataviewjs code into dataview query language. 

```dataview
TABLE WITHOUT ID
    ("![](" + photo + ")") as Photo,
    file.link as Name,
    "Birthday: " + dateformat(birthday, "yyyy-MM-dd") AS Birthday,
    "Age: " + split(string((date(today) - birthday).year), "\.", 1) + " years" AS Age,
    "Anniversary: " + dateformat(choice(BD < date(today), BD + dur(1 year), BD), "yyyy-MM-dd") AS Anniversary,
    "Countdowns: " + (choice(BD < date(today), BD + dur(1 year), BD) - date(today)).days + "天" AS Countdowns
FROM #parrot
WHERE photo
FLATTEN date(date(today).year + "-" + dateformat(birthday, "MM-dd")) AS BD
SORT choice(BD < date(today), BD + dur(1 year), BD) ASC
```


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
