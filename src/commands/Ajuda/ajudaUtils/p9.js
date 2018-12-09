const { RichEmbed } = require("discord.js");

module.exports = client => {
    let embed = new RichEmbed()
    .setTitle(`${client.getEmoji("igor")} | Partner`)
    .setDescription(`Contribua para o bot! Com isso, você nos ajuda a manter ele ativo e a melhorá-lo cada vez mais! ${client.getEmoji("mec")}.\n\n` +
    `:flag_br: :moneybag: PayPal: [Quero contribuir](https://www.google.com).\n\n` +
    `Doando para o Reth, você tem os seguintes benefícios:\n` +
    `:white_small_square: Cargo Especiais dentro do Servidor Oficial do Reth.\n` +
    `:white_small_square: Acesso a testes betas para comandos futuros.\n` +
    `:white_small_square: Comandos vips pra doadores.\n` +
    `:white_small_square: Suporte exclusivo para o bot.`)
    .setColor("36393f")
    .setThumbnail(client.getEmoji("igor").url)
    .setFooter("Página 9 de 9");
    return embed;
};