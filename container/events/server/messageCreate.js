const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonStyle } = require('discord.js');
module.exports = async (client, message) => {
    /*if (message.content == "ticket") {
        const buttons = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('ticketeng')
                .setEmoji('🇬🇧')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('ticketfr')
                .setEmoji('🇫🇷')
                .setStyle(ButtonStyle.Secondary)
        )
        const select = new ActionRowBuilder()
        .addComponents([
            new StringSelectMenuBuilder()
                .setCustomId('customid')
                .setPlaceholder("Choose the topic.")
                .setMaxValues(1)
                .setMinValues(1)
                .addOptions([
                    {
                        label: '⛔ ׀ Report a User / Raid',
                        value: 'report',
                    },
                    {
                        label: '💼 ׀ Recruitment Demand',
                        value: 'recruitment',
                    },
                    {
                        label: '⚖️ ׀ Unblacklist Demand',
                        value: 'unblacklist',
                    },
                    {
                        label: '💭 ׀ Others',
                        value: 'other',
                    }
                ])
        ])

        const embed = new EmbedBuilder()
            .setColor('#f12e2e')
            .setThumbnail('https://cdn.discordapp.com/attachments/783617098780901397/1055548380383813663/Logo-RaidCleaner-Bot-New-2.png')
            .setTitle("What do you need help for ?")
            .setDescription(`
> To open a ticket, you just have to click on the menu below and select the topic of your ticket.
> 
> Don't forget that any abuse with the tickets system can get you ban from the Support Server.
`)
            .setImage('https://cdn.discordapp.com/attachments/783617098780901397/1055578479401390110/Banner-Embed-Ticket.png')
            .setFooter({ text: "Tickets System - Kie's Extension", iconURL: 'https://media.discordapp.net/attachments/813117085193601095/1039294433750958110/1f5c3.png' })
           message.channel.send({ embeds: [embed], components: [select, buttons]})
    }*/
}