function crawlered_data() {
    var today_date = new Date();
    this_month = (today_date.getMonth() + 1);
    this_day = today_date.getDate();

    var gwangju_confirmed = document.getElementById("gwangju_confirmed");
    var gwangju_isolation = document.getElementById("gwangju_isolation");
    var gwangju_recovered = document.getElementById("gwangju_recovered");

    var korea_confirmed = document.getElementById("korea_confirmed");
    var korea_deisolated = document.getElementById("korea_deisolated");
    var korea_isolated = document.getElementById("korea_isolated");
    var korea_deaths = document.getElementById("korea_deaths");

    console.log(gwangju_confirmed);
    console.log(dict_gwangju);

    gwangju_confirmed.textContent = dict_gwangju['Confirmed'];
    gwangju_isolation.textContent = dict_gwangju['Hospital_Isolation'] + dict_gwangju['Self_Isolation'] + dict_gwangju['Facility_Isolation'];
    gwangju_recovered.textContent = dict_gwangju['Finish_Self_Isolation'];

    korea_confirmed.textContent = dict_mohw["total_Confirmed"];
    korea_isolated.textContent = dict_mohw["total_Confirmed"] - dict_mohw["total_deisolated"];
    korea_deisolated.textContent = dict_mohw["total_deisolated"];
    korea_deaths.textContent = dict_mohw["total_dead"];

    var last_update = document.querySelectorAll(".last_update");
    for (var update_count = 0; update_count < last_update.length; update_count++) {
        last_update[update_count].textContent = this_month + "/" + this_day + " " + common_info["Last_Update"];
    }
    console.log(dict_gwangju['Confirmed']);

};