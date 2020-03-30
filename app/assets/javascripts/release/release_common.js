var today_date = new Date();
this_month = (today_date.getMonth() + 1);
this_day = today_date.getDate();

var common_info = {};
common_info["Last_Update"] = "21시 3분";

var last_update = document.getElementById("last_update");
last_update.textContent = this_month + "/" + this_day + " " + common_info["Last_Update"];