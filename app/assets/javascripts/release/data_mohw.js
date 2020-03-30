var dict_mohw = {};
dict_mohw["total_increased"] = 78;
dict_mohw["total_Confirmed"] = 9661;
dict_mohw["total_deisolated"] = 5228;
dict_mohw["total_dead"] = 158;
dict_mohw["total_percentage"] = 18.63;

var korea_confirmed = document.getElementById("korea_confirmed");
var korea_deisolated = document.getElementById("korea_deisolated");
var korea_isolated = document.getElementById("korea_isolated");
var korea_deaths = document.getElementById("korea_deaths");

korea_confirmed.textContent = dict_mohw["total_Confirmed"];
korea_isolated.textContent = dict_mohw["total_Confirmed"] - dict_mohw["total_deisolated"];
korea_deisolated.textContent = dict_mohw["total_deisolated"];
korea_deaths.textContent = dict_mohw["total_dead"];