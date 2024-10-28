module.exports = async (client) => {
    console.log("Client ready.")
    client.user.setPresence({ activity: [{ name: "I'm Kie and I am here to help you !" }], status: 'idle' });
}