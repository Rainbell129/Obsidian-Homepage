---
name: Zhang San
gender: female
birthday: 1968-02-02
email: 10000001@qq.com
phone: 1000000001
tags: family mother closerfamily
---

Name：`=(this.name)`
Age：`$= let date = moment(dv.current().birthday.toString(),"yyyy-MM-DD"); let today = moment().startOf('day'); today.diff(date,"years")`岁
E-mail：`=(this.email)`
Phone：`=(this.phone)`