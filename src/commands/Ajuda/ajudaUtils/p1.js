const { RichEmbed } = require("discord.js");

module.exports = client => {
    let embed = new RichEmbed()
    .setTitle(`• Olá, eu sou o Reth! ${client.getEmoji("mec")} Um bot escrito em discord.js. ${client.getEmoji("JS")} Precisa de ajuda? Siga as instruções abaixo! ${client.getEmoji("bobo")}`)
    .setDescription(`${client.getEmoji("suporte2")} | Módulos\n` +
    `${client.getEmoji("punido")} | Moderação\n` +
    `:clipboard: | Registro\n` +
    `${client.getEmoji("pipoca")} | Entretenimento\n` +
    `${client.getEmoji("igorpicapica")} | Utilidades\n` +
    `${client.getEmoji("online")} | Status\n` +
    `${client.getEmoji("batepapo")} | Contato\n` +
    `${client.getEmoji("igor")} | Partner\n` +
    `${client.getEmoji("voltar")} | Menu inicial\n\n` +
    `**${client.getEmoji("hu")} [Discord](https://www.google.com) | ` +
    `${client.getEmoji("yes")} [Votação](https://www.google.com) | ` +
    `${client.getEmoji("suporte")} [Servidor de Suporte](https://www.google.com)**`)
    .setColor("36393f")
    .setThumbnail(client.getEmoji("ok").url)
    .setFooter("Página 1 de 9");
    return embed;
};