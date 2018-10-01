const Command = require('../../structures/Command');
const isTuesday = require('is-tuesday');

module.exports = class IsTuesdayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'is-tuesday',
			aliases: ['is-it-tuesday', 'tuesday'],
			group: 'events',
			memberName: 'is-tuesday',
			description: 'Determines if today is Tuesday.'
		});
	}

	run(msg) {
		return msg.say(`Today is${isTuesday() ? '' : ' **not**'} Tuesday.`);
	}
};
