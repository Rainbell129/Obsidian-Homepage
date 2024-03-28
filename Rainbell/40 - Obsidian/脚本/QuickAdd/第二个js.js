var fs = require('fs')

const date = new Date()
const year  = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");

date.setDate(date.getDate() - 1);
const yesterday = date.getDate().toString().padStart(2, "0");

const filePath = "/Users/Riddle/Library/Mobile Documents/iCloud~md~obsidian/Documents/八喜/测试文件.md"

const todayDiaryFormat = "![[" + year + "年" + month + "月" + day + "日#日记]]";
const todayAgendaFormat = "![[" + year + "年" + month + "月" + day + "日#日程]]";
const yesterdayParrotFormat = "![[" + year + "年" + month + "月" + yesterday + "日#鸟崽]]";

fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
        }
    var result = data.replace(/\!\[\[(\d{4})年(\d{2})月(\d{2})日\#日记\]\]/g,todayDiaryFormat);
    var result = data.replace(/\!\[\[(\d{4})年(\d{2})月(\d{2})日\#日程\]\]/g,todayAgendaFormat);
    var result = data.replace(/\!\[\[(\d{4})年(\d{2})月(\d{2})日\#鸟崽\]\]/g,yesterdayParrotFormat);

    fs.writeFile(filePath, result, 'utf8', function (err) {
        if (err) return console.log(err);
     });
});