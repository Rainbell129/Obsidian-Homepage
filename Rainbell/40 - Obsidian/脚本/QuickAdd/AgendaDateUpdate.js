module.exports = async (params) => {

//有可能需要安装node.js
//need node.js implemented
    var fs = require('fs')
//获取今日日期的字符串
//obtain date strings
    const date = new Date()
    const year  = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
//获取昨日日期字符串
//obtain yesterday date string
    date.setDate(date.getDate() - 1);
    const yesterday = date.getDate().toString().padStart(2, "0");
// **  必须编辑成你自己的主页今日路程路径  **
// **  MUST EDIT TO YOUR OWN PATH  **
    const filePath = "/Users/Riddle/Library/Mobile Documents/iCloud~md~obsidian/Documents/八喜/40 - Obsidian/主页/今日日程.md"
// **  必须编辑成你想要显示的文件路径（替换“YYYY年MM月DD日#段标题”为你自己的日记格式）  **
// **  MUST EDIT TO YOUR OWN FORMAT (REPLACE "YYYY年MM月DD日#heading" TO YOUR OWN DAILY NOTE FORMAT)  **
    const todayAgendaFormat = "![[" + year + "年" + month + "月" + day + "日";
// 读写文件
// READ AND EDIT FILE
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
            }
        // 将年，月，日，#鸟崽等标题 替换成你自己的格式
        // replace the characters with your own format (e.g if you have a section named "YYYY-MM-DD#Dairy
        // you should adopt regex like this
        // /\!\[\[(\d{4})-(\d{2})-(\d{2})\#Diary\]\]/g
        // ")
        var result = data.replace(/\!\[\[(\d{4})年(\d{2})月(\d{2})日/g,todayAgendaFormat);

        fs.writeFile(filePath, result, 'utf8', function (err) {
            if (err) return console.log(err);
         });
    });
}