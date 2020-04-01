const { mem, url } = require("../configuration/url");
var mon = require('mongoose');
// created structure mem
var mems = mon.model('dhar', mem, 'users'); // (model , structure, collection)

exports.mems = mems;
mon.connect(url, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log('not connected');
    }
    else {
        console.log('connected');
    }
});
