# Obsidian-Homepage
A dashboard for your obsidian vault.


<img width="403" alt="IMG_7055" src="https://user-images.githubusercontent.com/58488160/147173306-3bdd2289-6dd1-4603-9ba7-24d8510dd29f.PNG">
![IMG_7051](https://user-images.githubusercontent.com/58488160/147173319-ebe4c5ef-d5f8-4a09-9315-ed58a7422966.JPG)


Currently the homepage features 
1. A dashboard that leads to different parts in your vaults (such as your daily notes, weekly notes an other periodic notes), 
2. Three button tabs that allow you to switch between different parts you'd like to display. Currently there's a music of the month and automatic birthday countdown featured (this part is supported by React Components).  
3. A dynamic view of different sections in your daily note (in my case they are diaries, daily agendas, and my parrot logs)
4. A project tracking for notes with the tag #project.
5. A Currently Reading section yet to be automatized
6. Obsidian activity.


To use this homepage:

1. Install Dataview, Banners, React Components, Admonition and Obsidian Activity;
2. The theme Blue Topaz is suggested for its extra support for Admonition: After the theme is installed, download the plugin Style Settings and enable Admonition Support in it (Otherwise you might not have the flex view with sections taken from your daily notes)
3. Enable React Components; Create a components folder and put "music and birthday countdown.md" in it;
4. Add the two css files to your css snippets;
5. Dataview: enable dataviewjs and inline queries;
6. Admonition: create an "ad-col2" view with no background colors and no codeblock names (21/12/27: If you have updated to Obsidian v13.14, the admonition blocks might now be successfully rendered. It is expected it will be fixed in the following versions of Admonition, but right now Obsidian v12.19 is recommended);
7. Open the 00.Homepage note in your vault and get all sections personalized. 

Extra notes:
1. To use birthday countdown function, you'll need to create a page with the name of the persons/pets you'd like to have a countdown for and add "birthday: YYYY-MM-DD" in the YAML.
2. To use project tracking you'll need to have a
```
target: 10000
status: in progress
tags: project
```
in the YAML section of your single note project. It's based on https://gist.github.com/chrisgrieser/ac16a80cdd9e8e0e84606cc24e35ad99 so you can check there for more info. 


# Obsidian 主页

目前主页功能
1. 一个**导航**，可通向您的Obsidian库中的不同部分（例如您的每日笔记、每周笔记和其他定期笔记），
2. 三个选项标签，可让您在要显示的不同部分之间切换。目前有**本月音乐**和自动**生日倒计时**功能。
3. **每日笔记**中不同部分的动态视图（在我的情况下，它们是日记、每日议程和我的鹦鹉日志）
4. 带有标签#project 的笔记**项目跟踪**。
5. **目前阅读**部分尚未自动化
6. Obsidian动态记录。


要使用此主页：

1. 安装Dataview、Banners、React Components、Admonition和Obsidian Activity；
2. . 建议使用 Blue Topaz 主题，因为它对 Admonition 的额外支持：安装主题后，下载插件 Style Settings 并在其中启用 Admonition Support（否则您可能没有包含日常笔记部分的分栏视图）
4. 启用React Components；创建一个components文件夹，把“音乐和生日倒计时.md”放进去；
5. 将这两个 css 文件添加到您的 css 片段中；
6. Dataview：启用dataviewjs和inline queries；
7. Admonition：创建一个没有背景颜色和代码块名称的“ad-col2”；
8. 在您的 Vault 中打开 00.Homepage，并让所有部分都个性化。

额外说明：
1. 要使用生日倒计时功能，您需要创建一个页面，其中包含您想要倒计时的人/宠物的名称，并在 YAML 中添加“birthday：YYYY-MM-DD”。
2. 要使用项目跟踪，您需要有一个
``
目标：10000
状态：进行中
标签： project
``
在单笔记项目的 YAML 部分。它基于 https://gist.github.com/chrisgrieser/ac16a80cdd9e8e0e84606cc24e35ad99，因此您可以在此处查看更多信息。
