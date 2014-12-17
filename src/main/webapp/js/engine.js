const DEBUG = false;

var phonecatApp = angular.module('simpleAccount', []);

phonecatApp.controller('SimpleAccount1', function ($scope, $http, $interval) {

    $scope.view = {
        builds: []
    };

    $scope.load = function () {
        console.log("start load data...");
        $http({
            method: "GET",
            url: "json"
        }).success(function (data) {
            $scope.view.builds = angular.fromJson(data);
            console.log("load " + $scope.view.builds.length + " builds");
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };

    $scope.load();

});

Number.prototype.asDuration = function () {
    const oneSecond = 1000;
    const oneMinute = 60 * oneSecond;
    const oneHour = 60 * oneMinute;

    var period = this;

    if (period >= oneHour) return (period / oneHour).format(0, 3, "", "") + "h";
    else if (period >= oneMinute) return (period / oneMinute).format(0, 3, "", "") + "m";
    else if (period >= oneSecond) return (period / oneSecond).format(0, 3, "", "") + "s";
    else return "";
};

/**
 * Number.prototype.format(n, x, s, c)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function (n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

String.prototype.format = function (format) {
    return new Date(this).format(format);
};

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),    //day
        "h+": this.getHours(),   //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
        "S": this.getMilliseconds() //millisecond
    };

    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};

function getStartOfDay() {
    var result = new Date();
    result.setMilliseconds(0);
    result.setSeconds(0);
    result.setHours(0);
    return result;
}

function getStartOfMonth() {
    var result = new Date();
    result.setMilliseconds(0);
    result.setSeconds(0);
    result.setHours(0);
    result.setDate(0);
    return result;
}