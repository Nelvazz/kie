const { PermissionsBitField, ChannelType, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
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
            /*if (interaction.guild.channels.cache.find(c => c.topic == interaction.member.user.id)) {
                const embed = new EmbedBuilder()
                    .setColor('#2b2d31')
                    .setDescription(`You already have a ticket opened : <#${interaction.guild.channels.cache.find(c => c.topic == interaction.member.user.id).id}>`)
                    .setFooter({ text: "Tickets System - Kie's Extension", iconURL: 'https://media.discordapp.net/attachments/813117085193601095/1039294433750958110/1f5c3.png' })
                return interaction.message.reply({ embeds: [embed], ephemeral: true });
            }*/

            const report = new ModalBuilder()
			.setCustomId('report')
			.setTitle("Report a User / Raid")
            .addComponents(
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('type')
                        .setLabel("What do you want to report ?")
                        .setPlaceholder("User - Raid")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Short)
                        .setMaxLength(4)
                        .setMinLength(4)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('explanation')
                        .setLabel("Brief explanation")
                        .setPlaceholder("Give a short explanation of the problem.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Paragraph)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('informations')
                        .setLabel("Informations needed")
                        .setPlaceholder("Please add IDS, proofs (Imgur Link Only) or any informations that can be useful.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Paragraph)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('none')
                        .setLabel("Information")
                        .setValue("Once submitted, we will recontact you if precision are needed.\nMake sure your DMs are open.")
                        .setPlaceholder("Once submitted, we will recontact you if precision are needed.\nMake sure your DMs are open.")
                        .setRequired(false)
                        .setStyle(TextInputStyle.Paragraph)
                )
            )

            const bug = new ModalBuilder()
			.setCustomId('bug')
			.setTitle("Report a Bug")
            .addComponents(
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('title')
                        .setLabel("Bug title")
                        .setPlaceholder("A short title to describe the bug.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Short)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('explanation')
                        .setLabel("Detailed explanation")
                        .setPlaceholder("Give a detailed explanation of the bug and on how to do it.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Paragraph)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('none')
                        .setLabel("Information")
                        .setValue("Once submitted, we will recontact you if precision are needed.\nMake sure your DMs are open.")
                        .setPlaceholder("Once submitted, we will recontact you if precision are needed.\nMake sure your DMs are open.")
                        .setRequired(false)
                        .setStyle(TextInputStyle.Paragraph)
                )
            )

            const idea = new ModalBuilder()
			.setCustomId('idea')
			.setTitle("Suggest an Idea")
            .addComponents(
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('name')
                        .setLabel("Name of your idea")
                        .setPlaceholder("A short name for your idea.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Short)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('explanation')
                        .setLabel("Brief explanation")
                        .setPlaceholder("Give a short explanation of your idea.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Paragraph)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('none')
                        .setLabel("Information")
                        .setValue("Once submitted, we will recontact you if precision are needed.\nMake sure your DMs are open.")
                        .setPlaceholder("Once submitted, we will recontact you if precision are needed.\nMake sure your DMs are open.")
                        .setRequired(false)
                        .setStyle(TextInputStyle.Paragraph)
                )
            )

            const recruitment = new ModalBuilder()
			.setCustomId('recruitment')
			.setTitle("Recruitment Demand")
            .addComponents(
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('post')
                        .setLabel("The post you want to apply")
                        .setPlaceholder("Post intitulate.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Short)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('motivation')
                        .setLabel("Show your motivation")
                        .setPlaceholder("Give a short explanation of your motivations to integrate the Team.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Paragraph)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('none')
                        .setLabel("Information")
                        .setValue("Once submitted, we will recontact you if precision are needed.\nMake sure your DMs are open.")
                        .setPlaceholder("Once submitted, we will recontact you if precision are needed.\nMake sure your DMs are open.")
                        .setRequired(false)
                        .setStyle(TextInputStyle.Paragraph)
                )
            )

            const other = new ModalBuilder()
			.setCustomId('other')
			.setTitle("Other")
            .addComponents(
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('topic')
                        .setLabel("The topic of your demand")
                        .setPlaceholder("A short title for your demand.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Short)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('explanation')
                        .setLabel("Explanation")
                        .setPlaceholder("Give a short explanation of your demand.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Paragraph)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('details')
                        .setLabel("Other details")
                        .setPlaceholder("Feel free to add some details if you want.")
                        .setRequired(true)
                        .setStyle(TextInputStyle.Paragraph)
                ),
                new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('none')
                        .setLabel("Information")
                        .setValue("Once submitted, we will recontact you if precision are needed.\nMake sure your DMs are open.")
                        .setPlaceholder("Once submitted, we will recontact you if precision are needed.\nMake sure your DMs are open.")
                        .setRequired(false)
                        .setStyle(TextInputStyle.Paragraph)
                )
            )

            switch (interaction.values[0]) {
                case 'report':
                    await interaction.showModal(report);
                    break;
                case 'bug':
                    await interaction.showModal(bug);
                    break;
                case 'idea':
                    await interaction.showModal(idea);
                    break;
                case 'recruitment':
                    await interaction.showModal(recruitment);
                    break;
                case 'other':
                    await interaction.showModal(other);
                    break;
                default:
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
                    interaction.reply({ content: `Ticket opened : ${channel_ticket}`, ephemeral: true });

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
                        .setDescription(`> ${TimeStampHello} **${interaction.member.user.username}** you just opened a ticket !\n> A staff member will take care of you in a few moments, please wait...`)
                        .setFooter({ text: "Tickets System - Kie's Extension", iconURL: 'https://media.discordapp.net/attachments/813117085193601095/1039294433750958110/1f5c3.png' })
                    channel_ticket.send({ embeds: [embed], components: [buttons] })
            }
        }
    } catch (err) { console.log(err) }
    try {
        if (interaction.isModalSubmit()) {
            console.log(interaction)
            switch (interaction.customId) {
                case 'report':
                    // Mlem
                break;
                case 'bug':
                    // Super Mlem
                break;
                case 'idea':
                    // Mega Mlem
                break;
                case 'recruitment':
                    // Giga Mlem
                break;
                case 'other':
                    // Extra Mlem
                break;
            }
        }
    } catch (err) { console.log(err) }
}