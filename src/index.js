const tmi = require('tmi.js');

const client = new tmi.Client({
    options: {
        debug: true,
    },
    connection: {
        reconnect: true,
        secure: true,
    },
    identity: {
        username: 'my_bot_name', // REPLACE
        password: 'oauth:my_bot_token' // REPLACE
    },
    channels: ["sssstellar"],
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    // Ignore echoed messages.
    if (self) return;

    if (message.toLowerCase() === '!hello') {
        // "@alca, heya!"
        client.say(channel, `@${tags.username}, heya!`);
    }
});


function sayRandomLearn() {
    const randomLearn = learns[getRandomInt(learns.length)];
    client.say("sssstellar", randomLearn)
}

function loop() {
    const maxIntervalInSeconds = 60;
    const minIntervalInSeconds = 30;
    var randomTimeoutInSeconds = Math.round(Math.random() * (maxIntervalInSeconds - minIntervalInSeconds)) + minIntervalInSeconds;
    const randomTimeoutInMiliSeconds = randomTimeoutInSeconds * 1000;
    console.log(`next random learn in ${randomTimeoutInSeconds} seconds`)
    setTimeout(function () {
        sayRandomLearn();
        loop();
    }, randomTimeoutInMiliSeconds);
};

loop()

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const learns = [
    "Stellar is stellar!",
    "Coding is fun!",
    "Everyone likes tacos!"
];