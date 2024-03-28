[中文示例库最新版下载](https://github.com/Rainbell129/Obsidian-Homepage/releases/tag/v2.0.1)  
**To download the newest Example Vault in English: **
Please download the source code folder named Rainbell English and open it in Obsidian. I have not compiled a final version yet but I am trying to do it. 

<img width="1544" alt="Screen Shot 2022-06-01 at 12 05 27" src="https://user-images.githubusercontent.com/58488160/171325346-836f4183-b163-4e97-8b15-78384a2cb7b1.png">

2022-10-17
Warning:
1. Rainbell users have repetitively reported problems with one specific plug-in that is Icon Folder. It can cause various problems such as disabling searching or causing trouble for synchronization. I recommend that you disable this plugin or use its older version （v1.0.61). 
雨铃库使用者经常在插件icon folder上遇到问题，该插件可能导致搜索功能失效或对同步造成麻烦（尤其是坚果云同步），推荐使用该插件老版本(v1.0.61）或者卸载该插件。

2022-05-19 
Update:
1. Added an example vault in English.

2022-05-13 Update:
1. Added an example vault (in Chinese). An English example vault will also be released this month. 
<img width="1544" alt="Screen Shot 2022-05-13 at 11 35 00 AM" src="https://user-images.githubusercontent.com/58488160/168206254-eb7f5370-6a4c-4be7-9244-27773caff64c.png">

<!-- 
<img width="400" alt="Screen Shot 2022-05-13 at 11 37 19 AM" src="https://user-images.githubusercontent.com/58488160/168206454-f3393dcf-eef5-4668-994b-2cbe5861ad4a.png">

<img width="400" alt="Screen Shot 2022-05-13 at 11 37 35 AM" src="https://user-images.githubusercontent.com/58488160/168206474-fa111951-e7f5-41c6-99d0-4e281652e31b.png">


<img width="400" alt="Screen Shot 2022-05-13 at 11 38 02 AM" src="https://user-images.githubusercontent.com/58488160/168206517-bb8fb779-50c0-4655-9718-5ab4c28e5479.png">

 -->

---

2022-04-14 Update:
1. Added banner icon as date today in `homepage setting.css`;
2. Added stickie css for birthday countdown in `homepage setting.css`;

<img width="400" alt="WeChat5e2e0344e00b1c22b7cce116230b8e6b" src="https://user-images.githubusercontent.com/58488160/163300022-5ba0e48d-7ba1-455c-babc-170b2b146df9.png">

2022-02-24 Update:
1. Added task-based Project Tracking which would present a progress bar of finished_tasks/all_tasks in the project page. (To use, include `target: tasks` and `tags: project` in the YAML section and enable `sharetype.css` for special tag styling.
2. Deleted Profile photo; Added Banners Icon.

<img width="400" alt="Screen Shot 2022-02-24 at 8 39 04 PM" src="https://user-images.githubusercontent.com/58488160/155525663-69fd4c53-10a2-4a25-a13c-93b18e9a6d18.png">

---

2022-01-11 Update:
1. Added status bar styling to the project tracking section. 


<img width="400" alt="Screen Shot 2022-01-11 at 3 46 06 PM" src="https://user-images.githubusercontent.com/58488160/148901554-0a82fbd2-8404-4589-82f3-af82c0a793bb.png">
<img width="400" alt="Screen Shot 2022-01-11 at 3 50 43 PM" src="https://user-images.githubusercontent.com/58488160/148902155-a1c2770f-3737-456b-893f-96b9da660342.png">


---

2022-01-07 Update:
1. Fixed mobile view of the homepage;
2. Made modifications to allow an all-theme homepage view.

---

# Obsidian-Homepage
A dashboard for your obsidian vault.


<img width="403" alt="IMG_7055" src="https://user-images.githubusercontent.com/58488160/147173306-3bdd2289-6dd1-4603-9ba7-24d8510dd29f.PNG">

## Features
Currently the homepage features:
1. A map of contents that leads to different parts in your vaults (such as your daily notes, weekly notes an other periodic notes);

<img width="403" alt="IMG_6675" src="https://user-images.githubusercontent.com/58488160/148902450-b1e55944-619b-471c-bf90-763f7f9725bc.GIF">


2. Three button tabs that allow you to switch between different parts you'd like to display. Currently there's a music of the month and automatic birthday countdown featured (this part is supported by the plugin React Components);
3. A dynamic view of different sections in your daily note (in my case they are diaries, daily agendas, and my parrot logs);
<img width="400" alt="Screen Shot 2022-01-11 at 3 54 05 PM" src="https://user-images.githubusercontent.com/58488160/148902583-89cfc58f-4300-4495-ba6f-1eb93c915f20.png">

- using dataviewjs to to present the daily note embeds is convenient but it has one drawback which I simply cannot endure, that is, it will crash down every time you edit the daily note (which I do a lot through quickadd while staying on homepage). There is now an alternative to this which I recommend using quickadd macro. Please check `### QA automatic date update` for more information;

4. A project tracking for notes with the tag #project;
5. A Currently Reading section yet to be automatized;
6. Obsidian activity.


## To use this homepage

1. Install Dataview, Banners, React Components, Admonition and Activity History (Quickadd optional);
2. The theme Blue Topaz is suggested;
3. Enable React Components; Create a components folder and put "music and birthday countdown.md" in it;
4. Add the two css files to your css snippets folder; (\* The css file disable hover preview for wiki links)
5. Dataview: enable dataviewjs and inline queries;
6. Admonition: create an "ad-col2" view with no background colors and no codeblock names;

<img width="400" alt="Screen Shot 2022-01-11 at 11 48 36 PM" src="https://user-images.githubusercontent.com/58488160/148975172-0553c210-6b53-4f39-b00e-e8bfd28cabc9.png">


7. Open the `00. Homepage.md` note in your vault and get all sections personalized. 

## Extra notes
1. To use birthday countdown function, you'll need to create a page with the name of the persons/pets you'd like to have a countdown for and add "birthday: YYYY-MM-DD" in the YAML.
2. To use project tracking you'll need to have a
```
target: 10000
status: in progress
tags: project
```
in the YAML section of your single note project. It's based on [WordCountTable](https://gist.github.com/chrisgrieser/ac16a80cdd9e8e0e84606cc24e35ad99) so you can check there for more info. 

If your project is tasks-based, and you want the progress bar to depict finished_tasks/all_tasks instead, use the YAML
```
target: tasks
status: in progress
tags: project
```
Enable `sharetype.css` for special tag styling.

## Tricks
### Customizable Page Header
With this plugin you can quickly access your homepage (Homepage plugin required) from anywhere, both on PC and your phone. 

<img width="400" alt="Screen Shot 2022-01-11 at 11 27 19 PM" src="https://user-images.githubusercontent.com/58488160/148972407-0d7b57c5-39bf-4f90-9d1a-e77ff380d163.png">

Settings:

<img width="400" alt="Screen Shot 2022-01-11 at 11 45 03 PM" src="https://user-images.githubusercontent.com/58488160/148974533-0a0386c6-368d-4c51-b957-3b3c1b0a54f5.png">

### Advanced URI

With the plugin Advanced URI you can create a url for literally anything. Currently I am only using this for running two commands:
1. open big calendar
2. open memos
<img width="400" alt="Screen Shot 2022-01-11 at 11 37 18 PM" src="https://user-images.githubusercontent.com/58488160/148973246-454388c4-e1cf-4e2e-8a59-d737c49f03bf.png">
3. I also strongly recommend using Advanced URI to generate buttons for open daily notes (or monthly, weekly notes), for the dataviewjs code in the next section proves to be unreliable on mobile and cannot create the daily note when it doesn't exist.

<img width="400" alt="Screen Shot 2022-04-20 at 8 14 16 PM" src="https://user-images.githubusercontent.com/58488160/164228044-b1e28c45-79c9-4c6c-8976-a9c2fa0a1885.png">

### Dynamic Buttons
There are several kinds of dynamic buttons in the MOC part.

1. Periodic Notes

Supposing you have a daily note formatted YYYY-MM-DD, you should write the md link as followed:

```
- `$= '[['+moment().format("YYYY-MM-DD")+'|Today]]'`
```

It'll create a button displaying "Today" that leads to your daily note.

Some other suggestions with Advanced URI
- you can change the current daily note button to link to the `command: open daily note` which would create the daily note with your chosen template when it does not exist. 


2. URL scheme

If you are using Apple products, both MacOS and IOS have extensive URL schemes that allow you to open almost any app using URL, even perfoming some actions within the app (e.g. open a specific note; open a specific book in IBooks, etc.) I have installed a RSS reader called REEDER and am using this button to open it

```
- [Reeder](reeder://)
```

### QA Automatic Date Update

This is a roundabout way to display dynamic daily notes embeds in our homepage. Originally, we used Dataviewjs to achieve this, but with dvjs we have to refresh the page every time we made modifications to the daily note (I frequently modified daily note while staying on my homepage with quickadd).

Now there is a more stable way using quickadd macro. 

We will start with this codeblock (it is present in the `00. homepage.md` file, but hidden with %%).

```ad-col2

![[2022年01月19日#日记]]

![[2022年01月19日#日程]]

![[Pasted image 20211221152043.png#center|200]]

![[2022年01月18日#鸟崽]]

```

In which I display three sections of my daily note.

<img width="400" alt="Screen Shot 2022-01-19 at 9 46 36 AM" src="https://user-images.githubusercontent.com/58488160/150048127-213a5749-de87-4e08-b82f-4866ce395a9e.png">

Then, we install quickadd, click on `manage macros`, then add a new macro `Date Update` set to run on plugin load. 

<img width="400" alt="Screen Shot 2022-01-19 at 9 48 11 AM" src="https://user-images.githubusercontent.com/58488160/150048302-26ad414a-fec3-4d9c-b585-a013e5b84e7c.png">

Next, download the `DateUpdate.js` script to anyplace in your vault. 

Open the script with any editor, and change the homepage filepath and section formats according to the instructions. 

<img width="400" alt="Screen Shot 2022-01-19 at 9 51 37 AM" src="https://user-images.githubusercontent.com/58488160/150048614-8c6bab56-b9a2-48f1-8674-9a892bbc44b6.png">


<img width="400" alt="Screen Shot 2022-01-19 at 9 51 50 AM" src="https://user-images.githubusercontent.com/58488160/150048633-827172ac-de75-41f0-a8ff-1ee09614ca99.png">



Configure the new macro, and you'll see DateUpdate listed in the userscript. 

<img width="400" alt="Screen Shot 2022-01-19 at 9 50 11 AM" src="https://user-images.githubusercontent.com/58488160/150048472-962cc7ba-40b9-45c6-aa0d-b01802cef72f.png">

Add it. 

<img width="400" alt="Screen Shot 2022-01-19 at 9 52 38 AM" src="https://user-images.githubusercontent.com/58488160/150048708-833d43fa-9e77-41a1-8762-ebeeba1ac9f7.png">

Then you are all set! Now the date will automatically update whenever you open Obsidian. 




# Obsidian 主页

<img width="400" alt="Screen Shot 2022-01-11 at 3 48 37 PM" src="https://user-images.githubusercontent.com/58488160/148901893-49b31f09-b23a-4d4c-853e-de8f42d09d76.png">

## 目前主页功能

1. 一个**导航**，可通向您的Obsidian库中的不同部分（例如您的每日笔记、每周笔记和其他定期笔记），
<img width="403" alt="IMG_6675" src="https://user-images.githubusercontent.com/58488160/148902450-b1e55944-619b-471c-bf90-763f7f9725bc.GIF">

2. 三个选项标签，可让您在要显示的不同部分之间切换。目前有**本月音乐**和自动**生日倒计时**功能。
3. **每日笔记**中不同部分的动态视图（在我的情况下，它们是日记、每日议程和我的鹦鹉日志）

（注：该功能由dataview js实现，但是dvjs有一个重大缺陷：每次在对源文件修改时，主页中的嵌入部分都会坍缩。如果你想避免这个问题，请参见文末### 通过Quickadd自动更新主页日期）

4. 带有标签#project 的笔记**项目跟踪**。
5. **目前阅读**部分尚未自动化
6. Obsidian动态记录。


## 要使用此主页

1. 安装Dataview、Banners、React Components、Admonition和Activity History (推荐下载 Quickadd，加速工作流）；
2. 建议使用 Blue Topaz 主题，效果总体较好；
4. 启用React Components；创建一个components文件夹，把“音乐和生日倒计时.md”放进去；
5. 将这两个 css 文件添加到您的 css 片段中；
6. Dataview：启用dataviewjs和inline queries；
7. Admonition：创建一个没有背景颜色和代码块名称的“ad-col2”，配置如下图；
<img width="400" alt="Screen Shot 2022-01-11 at 11 48 36 PM" src="https://user-images.githubusercontent.com/58488160/148975172-0553c210-6b53-4f39-b00e-e8bfd28cabc9.png">
8. 在您的 Vault 中打开 00.Homepage，并让所有部分都个性化。

## 额外说明
1. 要使用生日倒计时功能，您需要创建一个页面，其中包含您想要倒计时的人/宠物的名称，并在 YAML 中添加“birthday：YYYY-MM-DD”。
2. 要使用项目跟踪，您需要有一个
```
target：10000
status：进行中
tags： project
```
在单笔记项目的 YAML 部分。它基于 https://gist.github.com/chrisgrieser/ac16a80cdd9e8e0e84606cc24e35ad99
因此您可以在此处查看更多信息。

如果你想使用“完成任务/总任务”来进行项目进度追踪，请使用如下YAML：
```
target: tasks
status: in progress
tags: project
```

如果需要标签效果，请启用`sharetype.css`css片段。

## 技巧
### Customizable Page Header
使用此插件，您可以在 PC 和手机上的任何地方快速访问您的主页（需要Homepage插件）。


<img width="400" alt="Screen Shot 2022-01-11 at 11 27 19 PM" src="https://user-images.githubusercontent.com/58488160/148972407-0d7b57c5-39bf-4f90-9d1a-e77ff380d163.png">


设置：

<img width="400" alt="Screen Shot 2022-01-11 at 11 45 03 PM" src="https://user-images.githubusercontent.com/58488160/148974533-0a0386c6-368d-4c51-b957-3b3c1b0a54f5.png">


### Advanced URI

使用插件 Advanced URI，您可以为几乎任何内容和操作创建一个 url。目前我只使用它来运行两个命令：

1.打开Big Calendar

2.打开Memos

<img width="400" alt="Screen Shot 2022-01-11 at 11 37 18 PM" src="https://user-images.githubusercontent.com/58488160/148973246-454388c4-e1cf-4e2e-8a59-d737c49f03bf.png">

3. 我也强烈推荐你使用这个插件来生成每日日记、每周周记、每月月记的按钮，因为在下一个章节会说到的Dataviewjs方案并不太可靠（在某个版本上它在手机上失效）。使用advanced uri还有一个好处，就是你没有日记的时候也可以点击该按钮直接生成日记，dataviewjs则做不到。
<img width="400" alt="Screen Shot 2022-04-20 at 8 14 16 PM" src="https://user-images.githubusercontent.com/58488160/164228044-b1e28c45-79c9-4c6c-8976-a9c2fa0a1885.png">

### 动态按钮
MOC部分有几种动态按钮。

1. 定期笔记

假设您有一个格式为 YYYY-MM-DD 的每日笔记，您应该如此编写 md 链接，如下所示：
```
- `$= '[['+moment().format("YYYY-MM-DD")+'|今天]]'`
```
它将创建一个显示“今天”的按钮并指向您的每日笔记。

2. URL方案

如果您使用的是 Apple 产品，MacOS 和 IOS 都有详尽的 URL 方案，允许您使用 URL 打开几乎任何应用程序，甚至可以在应用程序内执行某些操作（例如打开特定笔记；在 IBooks 中打开特定书籍等）我安装了一个名为 REEDER 的 RSS 阅读器，并使用此按钮打开它
```
- [Reeder](reeder://)
```

### 通过Quickadd自动更新主页日期

这是一种在我们的主页中动态显示嵌入的每日笔记的迂回方式。 本来，我们使用Dataviewjs来实现这一点，但是，使用dvjs的话，每次修改日记，主页中的嵌入都会坍缩（我经常在主页页面上使用quickadd修改每日笔记）。

现在有一种更稳定的方式，即使用 quickadd 宏。

我们将从这个代码块开始（它存在于 `00.homepage.md` 文件中，但用 %% 隐藏）。

```ad-col2

![[2022年01月19日#日记]]

![[2022年01月19日#日程]]

![[Pasted image 20211221152043.png#center|200]]

![[2022年01月18日#鸟崽]]

```

我在其中展示了我的Daily Note的三个部分。

<img width="400" alt="Screen Shot 2022-01-19 at 9 46 36 AM" src="https://user-images.githubusercontent.com/58488160/150048127-213a5749-de87-4e08-b82f-4866ce395a9e.png">

然后，我们安装 quickadd，点击“管理宏 (manage macros)”，然后添加一个新的宏“日期更新”，设置为在插件加载时运行(run on plugin load)。

<img width="400" alt="Screen Shot 2022-01-19 at 9 48 11 AM" src="https://user-images.githubusercontent.com/58488160/150048302-26ad414a-fec3-4d9c-b585-a013e5b84e7c.png">

接下来，将 `DateUpdate.js` 脚本下载到库中的任何位置。

使用任何编辑器打开脚本，并根据说明更改主页文件路径和部分格式。

<img width="400" alt="Screen Shot 2022-01-19 at 9 51 37 AM" src="https://user-images.githubusercontent.com/58488160/150048614-8c6bab56-b9a2-48f1-8674-9a892bbc44b6.png">


<img width="400" alt="Screen Shot 2022-01-19 at 9 51 50 AM" src="https://user-images.githubusercontent.com/58488160/150048633-827172ac-de75-41f0-a8ff-1ee09614ca99.png">



配置新宏，您将看到用户脚本中列出的DateUpdate。

<img width="400" alt="Screen Shot 2022-01-19 at 9 50 11 AM" src="https://user-images.githubusercontent.com/58488160/150048472-962cc7ba-40b9-45c6-aa0d-b01802cef72f.png">

添加。

<img width="400" alt="Screen Shot 2022-01-19 at 9 52 38 AM" src="https://user-images.githubusercontent.com/58488160/150048708-833d43fa-9e77-41a1-8762-ebeeba1ac9f7.png">

一切准备就绪！ 现在，只要您打开 Obsidian，日期就会自动更新。 
