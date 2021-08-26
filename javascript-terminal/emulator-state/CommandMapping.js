import commands from "../commands.js";

export const create = (commandMapping = commands) => {
	for (const [commandName, command] of Object.entries(commandMapping)) {
		if (!command.functionDef || !command.optDef) {
			throw Error(`Failed To Initialize Terminal: Invalid Command (${commandName})`);
		}
	}
	return commandMapping;
};

export const isCommandSet = (commandMapping = commands, commandName) => {
	return commandName in commandMapping;
};

export const getCommandFn = (commandMapping = commands, commandName) => {
	if (commandName in commandMapping) {
		return commandMapping[commandName].functionDef;
	}
	return undefined;
};

export const getCommandOptDef = (commandMapping = commands, commandName) => {
	if (commandName in commandMapping) {
		return commandMapping[commandName].optDef;
	}
	return undefined;
};

export const getCommandNames = (commandMapping = commands) => {
	return Object.keys(commandMapping);
};

export default { create, isCommandSet, getCommandFn, getCommandOptDef, getCommandNames };
