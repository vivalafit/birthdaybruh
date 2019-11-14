const config = {
    keys : {
        TELEGRAM_BOT_API_KEY : process.env.TELEGRAM_BOT_API_KEY || 'bruh, no key'
    },
    db : {
        HOST : 'ec2-54-228-243-29.eu-west-1.compute.amazonaws.com',
        PORT : '5432',
        DATABASE : 'd7k336ulcjh45p',
        USERNAME: "tgvwwwcbjuvulq",
        PASSWORD: "c2611f77c1131c06050ab80147c5c6a90c187918de0dc1568a70b7742a9dfb21",
    }
};

module.exports = config;