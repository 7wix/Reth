const { RichEmbed } = require("discord.js");

module.exports = (client, prefix) => {
    let embed = new RichEmbed()
    .setTitle(`${client.getEmoji("pipoca")} | Entretenimento`)
    .setDescription(`**•Prefixo: ${prefix}**\n\n` +
    `~~${prefix}ship~~\n` +
    `${prefix}gato\n` +
    `${prefix}matar\n` +
    `${prefix}emoji\n`)
    .setColor("36393f")
    .setThumbnail(client.getEmoji("pipoca").url)
    .setFooter("Página 5 de 9");
    return embed;
};