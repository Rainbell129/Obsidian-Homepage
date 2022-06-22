---
项目名称: 示例库
相对路径: -
文件名称: -
代码名称: 小鸟dataview检索
CUID: 20220518002237
所在行: -
语言: javascript
框架: dataview
简述: 简化对应js代码。
tags: code_snippet
---

## 代码名称
Dataview小鸟检索
## 代码描述
- 倒计时
- 纪念日
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

## 使用注意
- 可以在使用页添加`cssclass: zettelkasten`或者`cssclass: cards`作出卡片视图。

## 评论
- 2022-5-20 13:19:00 在discord @mnvwvnm 的帮助下新建了相应代码。效果：
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


## 最近代码片段
```dataview
table
		语言,
 		框架,
		简述,
		file.cday AS "创建时间"
from #code_snippet and !"40 - Obsidian/模板"
where date(today) - file.ctime <=dur(7 days)
sort file.mtime desc
limit 10
```

[[00. 代码库|代码管理主页]]

---

注：感谢 @咖啡豆 提供模板！

