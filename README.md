# Obsidian-Homepage
A dashboard for your obsidian vault.


<img width="403" alt="IMG_7055" src="https://user-images.githubusercontent.com/58488160/147173306-3bdd2289-6dd1-4603-9ba7-24d8510dd29f.PNG">
![IMG_7051](https://user-images.githubusercontent.com/58488160/147173319-ebe4c5ef-d5f8-4a09-9315-ed58a7422966.JPG)


Currently the homepage features 
1. a dashboard that leads to different parts in your vaults (such as your daily notes, weekly notes an other periodic notes), 
2. Three button tabs that allow you to switch between different parts you'd like to display. Currently there's a music of the month and automatic birthday countdown featured.  
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
6. Admonition: create an "ad-col2" view with no background colors and no codeblock names;
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
