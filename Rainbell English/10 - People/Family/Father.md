---
name: Wang Wu
gender: male
birthday: 1958-08-01
email: 10000000@qq.com
phone: 1000000000
tags: family father closerfamily
---

Name：`=(this.name)`
Age：`$= let date = moment(dv.current().birthday.toString(),"yyyy-MM-DD"); let today = moment().startOf('day'); today.diff(date,"years")`岁
E-mail：`=(this.email)`
Phone：`=(this.phone)`