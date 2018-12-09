const { RichEmbed } = require("discord.js");

module.exports = (client, prefix) => {
    let embed = new RichEmbed()
    .setTitle(`${client.getEmoji("batepapo")} | Contato`)
    .setDescription(`**•Prefixo: ${prefix}**\n\n` +
    `~~${prefix}bug | Envia um texto reportando o erro.~~`)
    .setColor("36393f")
    .setThumbnail(client.getEmoji("batepapo").url)
    .setFooter("Página 8 de 9");
    return embed;
};