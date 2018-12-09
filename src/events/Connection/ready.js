module.exports = client => {
    console.log(`Logado como ${client.user.tag}`);
    client.user.setStatus("invisible");
};