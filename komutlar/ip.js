const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('#00f5ff')
  .setFooter(' HeartCrown \'İstatistiklerim', bot.user.avatarURL)
  .addField("» **Sunucu Yönetici**", "<@757221452352061572> <@476121325061013514>")
  .addField("» **Sunucu IP**", "play.gamer-tr.com / play.heartcorwn.ml")
 return message.channel.send(istatistikler);
  };



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'hcbilgi'],
  permLevel: 0
};

exports.help = {
  name: "ip",
  description: "Bot i",
  usage: "istatistik"
};