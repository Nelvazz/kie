const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, ChannelType, PermissionsBitField } = require('discord.js');
module.exports = async (client, interaction) => {
    if (!interaction.guild) return;
    try {
        if (interaction.isButton()) {
            if (interaction.channel.name.substr(0,7) === `ticket-`) {
                switch (interaction.customId) {
                    case 'close_ticket':
                        if (!interaction.member.roles.cache.has('984932188510388274')) return interaction.deferUpdate();
                        interaction.channel.delete()
                        break;
                    case 'pick_ticket':
                        if (!interaction.member.roles.cache.has('984932188510388274')) return interaction.deferUpdate();
                        const close_ticket = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setStyle(ButtonStyle.Secondary)
                                .setEmoji('❌')
                                .setCustomId('close_ticket'),
                        )
                        interaction.message.embeds[0].data.description = `${interaction.message.embeds[0].description.replace(/A staff member will take care of you in a few moments, please wait.../, `Your ticket is handled by **${interaction.user}** ! Ask him all the questions you have.`)}`
                        interaction.message.embeds[0].data.color = parseInt('0EE348', 16)
                        interaction.message.edit({ embeds: [interaction.message.embeds[0]], components: [close_ticket]})
                        interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
                            SendMessages: false,
                            ViewChannel: false
                        })
                        interaction.channel.permissionOverwrites.edit(interaction.member.user.id, {
                            SendMessages: true,
                            ViewChannel: true,
                            ManageChannels: true,
                            ManageMessages: true
                        })
                        interaction.channel.permissionOverwrites.edit(interaction.guild.roles.cache.find(r => r.id == "984932188510388274"), {
                            SendMessages: false,
                            ViewChannel: true,
                            ManageChannels: false,
                            ManageMessages: false
                        })
                        interaction.deferUpdate()
                        break;
                }
            }
        }
    } catch (err) { console.log(err) }
    // Select Menus
    try {
        if (interaction.isStringSelectMenu()) {
            if (interaction.guild.channels.cache.find(c => c.topic == interaction.member.user.id)) {
                return interaction.reply({ content: "You already have a ticket opened, you can't recreate one until the first one is deleted.", ephemeral: true });
            }
            let reason;
            switch (interaction.values[0]) {
                case 'report':
                    reason = `⛔ ׀ Report a User / Raid`;
                    break;
                case 'recruitment':
                    reason = `💼 ׀ Recruitment Demand`;
                    break;
                case 'unblacklist':
                    reason = `⚖️ ׀ Unblacklist Demand`;
                    break;
                case 'other':
                    reason = `💭 ׀ Others`;
                    break;
            }

            let channel_ticket = await interaction.guild.channels.create({
                name: `ticket-${interaction.member.user.username}`,
                type: ChannelType.GuildText,
                topic: interaction.member.user.id,
                parent: "877558852927778846",
                permissionOverwrites: [{
                    id: interaction.guild.id,
                    deny: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel]
                },
                {
                    id: interaction.member.user.id,
                    allow: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel]
                },
                {
                    id: "984932188510388274",
                    allow: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.ManageChannels, PermissionsBitField.Flags.ManageMessages]
                }]
            })

            // let pingStaff = await channel_ticket.send("<@&984932188510388274>").then( setTimeout(() => { pingStaff.delete() }, 1000) )
            let pingUser = await channel_ticket.send(`<@${interaction.member.user.id}>`).then( setTimeout(() => { pingUser.delete() }, 1000) )
            let TimeStampHello;
            var today = new Date();
            var curHr = today.getHours();

            const buttons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setEmoji('🚩')
                    .setCustomId('pick_ticket'),
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setEmoji('❌')
                    .setCustomId('close_ticket')
            )

            if (curHr < 18) TimeStampHello = "Good morning";
            if (curHr >= 18) TimeStampHello = "Good afternoon";

            const embed = new EmbedBuilder()
                .setColor('#ffa200')
                .setThumbnail(interaction.member.user.displayAvatarURL({ format: 'png', dynamic: true }))
                .setTitle(`A new ticket has been created !`)
                .setDescription(`> ${TimeStampHello} **${interaction.member.user.username}** you just opened a ticket !\n> Ticket Subject : \`${reason}\`\n\n> A staff member will take care of you in a few moments, please wait...`)
                .setFooter({ text: "Tickets System - Kie's Extension", iconURL: 'https://media.discordapp.net/attachments/813117085193601095/1039294433750958110/1f5c3.png' })
            channel_ticket.send({ embeds: [embed], components: [buttons] })
        }
    } catch (err) { console.log(err) }
}