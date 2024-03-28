module.exports = async (params) => {

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
    // **  必须编辑成你自己的主页路径  **
    // **  MUST EDIT TO YOUR OWN PATH  **
        const filePath = "80 - Obsidian/主页/00. Homepage.md"
    // **  必须编辑成你想要显示的文件路径（替换“YYYY年MM月DD日#段标题”为你自己的日记格式）  **
    // **  MUST EDIT TO YOUR OWN FORMAT (REPLACE "YYYY年MM月DD日#heading" TO YOUR OWN DAILY NOTE FORMAT)  **
        const todayDiaryFormat = "![[" + year + "年" + month + "月" + day + "日#日记]]";
        const todayAgendaFormat = "![[" + year + "年" + month + "月" + day + "日#日程]]";
        const yesterdayParrotFormat = "![[" + year + "年" + month + "月" + yesterday + "日#鸟崽]]";
    // 读写文件
    // READ AND EDIT FILE
        let data = await app.vault.adapter.read(filePath);
        // 将年，月，日，#鸟崽等标题 替换成你自己的格式
        // replace the characters with your own format (e.g if you have a section named "YYYY-MM-DD#Dairy
        // you should adopt regex like this
        // /\!\[\[(\d{4})-(\d{2})-(\d{2})\#Diary\]\]/g
        // ")
        var result = data.replace(/\!\[\[(\d{4})年(\d{2})月(\d{2})日\#日记\]\]/g,todayDiaryFormat);
        var result = result.replace(/\!\[\[(\d{4})年(\d{2})月(\d{2})日\#日程\]\]/g,todayAgendaFormat);
        var result = result.replace(/\!\[\[(\d{4})年(\d{2})月(\d{2})日\#鸟崽\]\]/g,yesterdayParrotFormat);
        app.vault.adapter.write(filePath, result)
    
    }