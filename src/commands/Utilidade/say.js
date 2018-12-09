module.exports = async (client, message, args) => {
    if (args.length < 1) {
        message.reply("Digite alguma coisa.");
        return 0;
    }
    var say = args.join(' ');

    /**
     * Caso deseje que o bot não mencione usuários nem cargos, adicione '/' na linha 11 coluna 5
    */
    /*
    let roles = new RegExp(/<@&[0-9]{18}>/g);
    let rolesArr = say.match(roles);
    if (rolesArr) {
        for (let i = 0; i < rolesArr.length; ++i) {
            let roleId = rolesArr[i].slice(rolesArr[i].length - 19, rolesArr[i].length - 1);
            let role = message.guild.roles.get(roleId);
            if (role) {
                say = say.replace(`${rolesArr[i]}`, `@${role.name}`);
            }
        }
    }
    let users = new RegExp(/<@!?[0-9]{18}>/g);
    let usersArr = say.match(users);
    if (usersArr) {
        for (let i = 0; i < usersArr.length; ++i) {
            let userId = usersArr[i].slice(usersArr[i].length - 19, usersArr[i].length - 1);
            let user = message.guild.members.get(userId);
            if (user) {
                say = say.replace(`${usersArr[i]}`, `@${user.user.tag}`);
            }
        }
    }
    //*/
    say = say.replace(/@here/g, "@​here");
    say = say.replace(/@everyone/g, "@​everyone");
    message.channel.send(say);
};