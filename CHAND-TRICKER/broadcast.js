module.exports = function() {

async function BroadCast() {

    try {

        var logger = require('./logger');

            var axios = require('axios');

                var { data } =  await axios.get("https://raw.githubusercontent.com/Mrchandu7/fca-chand/main/FCA-CHAND.json");

            var random = await data[Math.floor(Math.random() * data.length)] || "Thank You For Using FCA Chand \n This fca made by Mr Chand";

        logger(random, "[ CHAND-TRICKER ]");

    }	

    catch (e) {

        console.log(e);

        return;

    }

}

setInterval(async function () { await BroadCast() },1800 * 1000);

BroadCast();



}
