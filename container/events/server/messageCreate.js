const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonStyle } = require('discord.js');
module.exports = async (client, message) => {
    if (message.author.id !== "438387747128999937") return;
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
                        description: "You saw someone misbehaving ? Tell us !",
                        value: 'report',
                    },
                    {
                        label: '🐜 ׀ Report a Bug',
                        description: "You identified a bug ? Let us fix it !",
                        value: 'bug',
                    },
                    {
                        label: '💡 ׀ Suggest an Idea',
                        description: "You have a suggestion for the bot ? Come up with it !",
                        value: 'idea',
                    },
                    {
                        label: '💼 ׀ Recruitment Demand',
                        description: "You want to be part of our Team ? Try your best !",
                        value: 'recruitment',
                    },
                    {
                        label: '🔄 ׀ Direct Talk',
                        description: "You want to talk with a Staff of RaidCleaner ? Click Here !",
                        value: 'direct',
                    },
                    {
                        label: '💭 ׀ Others',
                        description: "Not listed here ? We still have the answer !",
                        value: 'other',
                    }
                ])
        ])

        const embed = new EmbedBuilder()
            .setColor('#2b2d31')
            .setTitle("Contact our team")
            .setDescription(`To open a ticket, you just have to click on the menu below and select the topic of your ticket.

Don't forget that any abuse with the tickets system can get you ban from the Support Server.`)
            .setImage('https://cdn.discordapp.com/attachments/783617098780901397/1055578479401390110/Banner-Embed-Ticket.png')
            .setFooter({ text: "Tickets System - Kie's Extension", iconURL: 'https://media.discordapp.net/attachments/813117085193601095/1039294433750958110/1f5c3.png' })
           message.channel.send({ embeds: [embed], components: [select, buttons]})
    }*/
}