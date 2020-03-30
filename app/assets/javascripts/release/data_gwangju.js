var dict_gwangju = {};
dict_gwangju['Confirmed'] = 20;
dict_gwangju['Hospital_Isolation'] = 6;
dict_gwangju['Self_Isolation'] = 1;
dict_gwangju['Facility_Isolation'] = 0;
dict_gwangju['Finish_Self_Isolation'] = 13;

dict_gwangju['Checked'] = 7042;
dict_gwangju['Positive'] = 20;
dict_gwangju['Negative'] = 6996;
dict_gwangju['Checking'] = 26;

dict_gwangju['Contact'] = 1203;
dict_gwangju['Contact_Isolation'] = 59;
dict_gwangju['Contact_Finish_Isolation'] = 1144;

var gwangju_confirmed = document.getElementById("gwangju_confirmed");
var gwangju_isolation = document.getElementById("gwangju_isolation");
var gwangju_recovered = document.getElementById("gwangju_recovered");

gwangju_confirmed.textContent = dict_gwangju['Confirmed'];
gwangju_isolation.textContent = dict_gwangju['Hospital_Isolation'] + dict_gwangju['Self_Isolation'] + dict_gwangju['Facility_Isolation'];
gwangju_recovered.textContent = dict_gwangju['Finish_Self_Isolation'];