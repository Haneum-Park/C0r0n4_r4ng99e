function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
};
numberCounter.prototype.counter = function () {
    var self = this;
    this.diff = this.target_count - this.count;

    if (this.diff > 0) {
        self.count += Math.ceil(this.diff / 5);
    }

    this.target_frame.textContent = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (this.count < this.target_count) {
        this.timer = setTimeout(function () { self.counter(); }, 30);
    } else {
        clearTimeout(this.timer);
    }
};

function update_info() {
    var today_date = new Date();
    this_month = (today_date.getMonth() + 1);
    this_day = today_date.getDate();

    var last_update = document.querySelectorAll(".last_update");
    for (var update_count = 0; update_count < last_update.length; update_count++) {
        last_update[update_count].textContent = this_month + "/" + this_day + " " + common_info["Last_Update"];
    }
}

function crawlered_data() {
    new numberCounter("gwangju_confirmed", dict_gwangju['Confirmed']);
    new numberCounter("gwangju_isolation", dict_gwangju['Hospital_Isolation'] + dict_gwangju['Self_Isolation'] + dict_gwangju['Facility_Isolation']);
    new numberCounter("gwangju_recovered", dict_gwangju['Finish_Self_Isolation']);
    new numberCounter("korea_confirmed", dict_mohw["total_Confirmed"]);
    new numberCounter("korea_deisolated", dict_mohw["total_Confirmed"] - dict_mohw["total_deisolated"]);
    new numberCounter("korea_isolated", dict_mohw["total_deisolated"]);
    new numberCounter("korea_deaths", dict_mohw["total_dead"]);
};


window.addEventListener("DOMContentLoaded", function () {
    update_info()
    crawlered_data();
});