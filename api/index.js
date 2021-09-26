
const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const expressPrettier = require('express-prettier')


const moment = require('moment');
var fs = require('fs');
const { html } = require('cheerio/lib/api/manipulation');
const { resolveNaptr } = require('dns');
const app = express();
var today = moment().locale('it').format('DD-MMMM-YYYY');
var today_pretty =  moment().locale('it').format('DD MMMM YYYY');
var every_thursday = moment().day(-3).locale('it').format('DD');
var every_next_wednesday = moment().day(+3).locale('it').format('DD');
var year = moment().year();
var month = '0' + (moment().month() + 1);
var month_string = moment().locale('it').format('MMMM');
var last_thursday = moment().day(-3).locale('it').format('YYYY/MM/DD');
const BASE_URL_BRESZNY = 'https://www.internazionale.it/oroscopo/';
let BASE_URL_FOX = 'https://zon.it/oroscopo-del-giorno-paolo-fox-'+today+'/'



app.get('/doc', function (req, res) {
    res.sendFile(__dirname + '/indexAPI.html');
}),


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
}),


app.get('/horoscope', function (req, res) {
    // The scraping magic will happen here
    let sign = req.query.sign;
    let astrologer = req.query.astrologer;
    if (sign == null & astrologer == null  ) {
        res.sendFile(__dirname + '/endpoint.html');

    } else {
        if (astrologer == 'breszny' & sign != null ) {

            let breszny_url = BASE_URL_BRESZNY + last_thursday + '/' + sign + '-' + every_thursday + '-' + every_next_wednesday + '-' + month_string + '-' + year;
            console.log(breszny_url);
            console.log();
            request(breszny_url, function (error, response, body) {

                // Magic happens here
                if (!error) {
                    var $ = cheerio.load(body);
                    var prediction = $('div.item_text > p').text();
                    if (prediction == '') {
                        if (sign == ''){
                            sign = 'null'
                        }
                        var json_error = {
                            sign: sign,
                            text: ' No messages from stars for '+sign,
                            error_code : ' 404 ',
                            error_desc : ' Sign not found '
                        }
                        res.setHeader('content-type', 'application/json')
                        json_error = JSON.stringify(json_error, null, 4);
                        res.send(json_error);
                    } else {
                        
                        var json = {
                            sign: sign,
                            text: prediction,
                            start_date: every_thursday + ' ' + month_string + ' ' + year,
                            end_date: every_next_wednesday + ' ' + month_string + ' ' + year,
                        };

                        // Send the JSON as a response to the client
                        res.setHeader('content-type', 'application/json')
                        json = JSON.stringify(json, null, 4);
                        // Send the JSON as a response to the client
                        res.send(json);
                    }
                }
                // And now, the JSON format we are going to expose




            });




        } else {
            if (astrologer == 'fox' & sign != null ) {

                let fox_url = BASE_URL_FOX

                if(sign == 'ariete'){
                    fox_url = fox_url;
                }

                if(sign == 'toro'){
                    fox_url = fox_url+'2/';
                }

                if(sign == 'gemelli'){
                    fox_url = fox_url+'3/';

                }

                if(sign == 'cancro'){
                    fox_url = fox_url+'4/';

                }
                
                if(sign == 'leone'){
                    fox_url = fox_url+'5/';

                }

                if(sign == 'vergine'){
                    fox_url = fox_url+'6/';

                }

                if(sign == 'bilancia'){
                    fox_url = fox_url+'7/';

                }

                if(sign == 'scorpione'){
                    fox_url = fox_url+'8/';

                }

                if(sign == 'sagittario'){
                    fox_url = fox_url+'9/';

                }

                if(sign == 'capricorno'){
                    fox_url = fox_url+'10/';

                }

                if(sign == 'acquario'){
                    fox_url = fox_url+'11/';

                }

                if(sign == 'pesci'){
                    fox_url = fox_url+'12/';

                }

                

                



                console.log(fox_url);
                request(fox_url, function (error, response, body) {

                    // Magic happens here
                    if (!error) {
                        var $ = cheerio.load(body);
                        var prediction = $('div.td-post-content > p').text();
                        
                        console.log(prediction)

                        if (prediction == '') {
                            if (sign == ''){
                                sign = 'null'
                            }
                            var json_error = {
                                sign: sign,
                                text: ' No messages from stars for '+sign,
                                error_code : ' 404 ',
                                error_desc : ' Sign not found '
                            }
                            res.setHeader('content-type', 'application/json')
                            json_error = JSON.stringify(json_error, null, 4);
                            res.send(json_error);
                        } else {
                            var json = {
                                sign: sign,
                                text: prediction,
                                date: today_pretty
                            };
                            res.setHeader('content-type', 'application/json')
                            json = JSON.stringify(json, null, 4);
                            // Send the JSON as a response to the client
                            res.send(json);
                        }
                    }
                    // And now, the JSON format we are going to expose




                });
            }else {
                var json_error = {
                    astrologer: astrologer,
                    sign: sign,
                    text: ' I can not read stars, i am '+astrologer+ ' not Paolo Fox or Rob Breszny',
                    error_code : ' 404 ',
                    error_desc : ' Astrologer not found '
                }
                res.setHeader('content-type', 'application/json')
                json_error = JSON.stringify(json_error, null, 4);
                res.send(json_error);
        }
    }

}


});




module.exports = {
    path: '/api',
    handler: app
}









