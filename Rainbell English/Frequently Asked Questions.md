# ==How can I change the sidepane icon?==

1. Open the folder that contain css file snippets and find `sidepane.css`;
2. Change the texts to the name of your md file; 
![[50021653820977_.pic.jpg]]
3. You can also change the provided svg code to any code online (though you'll have to modify parts of the code for it to work in Obsidian.)

# ==How can I make multi-column blocks?==


```ad-flex

<div>
111
</div>


<div>
222
</div>

<div>
333
</div>

```


```ad-col2

111

222

```

````ad-flex
<div>

### Recently Modified
```dataview
table WITHOUT ID file.link AS "Title",file.mtime as "Modified"
from !"模板" and !"kanban"
sort file.mtime desc
limit 10
```
</div>

<div>

### Recently Created
```dataview
table file.ctime as Created
where date(today) - file.ctime <=dur(3 days)
sort file.ctime desc
limit 10
```
</div>
````

(Note the number of \` that are used to enclose the dataview codeblocks)