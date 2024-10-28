module.exports = (client, fs) => {
    const eventsDirs = fs.readdirSync('./container/events/');

    eventsDirs.forEach((evtDir) => {
        const eventsFiles = fs.readdirSync(`./container/events/${evtDir}/`).filter(f => f.endsWith('.js'));

        eventsFiles.forEach((file) => {
            const event = require(`../container/events/${evtDir}/${file}`);
            const eventName = file.split('.')[0].trim();

            client.on(eventName, event.bind(null, client));
        });
    });
}