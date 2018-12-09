module.exports = async (client, message, args, prefix) => {
    var utils = client.ajudaUtils;
    var paginas = [
        utils.p1(client, prefix),
        utils.p2(client, prefix),
        utils.p3(client, prefix),
        utils.p4(client, prefix),
        utils.p5(client, prefix),
        utils.p6(client, prefix),
        utils.p7(client, prefix),
        utils.p8(client, prefix),
        utils.p9(client, prefix)
    ];
    var emojis = [
        client.getEmoji("voltar"),
        client.getEmoji("suporte2"),
        client.getEmoji("punido"),
        "📋",
        client.getEmoji("pipoca"),
        client.getEmoji("igorpicapica"),
        client.getEmoji("online"),
        client.getEmoji("batepapo"),
        client.getEmoji("igor")
    ];
    let msg = await message.channel.send(paginas[0]);
    const filter = (reaction, user) => {
        // A linha 31/32 desse arquivo ja filtra os emojis entao essa abaixo se torna inutil
        return /*emojis.some(e => e.name === reaction.emoji.name || e === reaction.emoji.name) &&*/ user.id === message.author.id;
    };
    msg.createReactionCollector(filter, {time: 4000 * 60}).on("collect", async e => {
        let index = emojis.findIndex(i => i.name ? i.name === e.emoji.name : i === e.emoji.name);
        if (index < 0) return;
        await msg.edit(paginas[index]).catch(()=>{});
    }).on("end", () => {
        msg.delete().catch(()=>{});
    });
    // Nao troque este 'for' por um 'forEach'
    // Alem de ser mais lento os emojis vao estar na ordem errada
    for (let i = 0; i < emojis.length; ++i) {
        await msg.react(emojis[i]).catch(()=>{});
    }
};