import * as PathUtil from "../fs/util/path-util";
import { getCommandNames, getCommandOptDef, isCommandSet } from "../emulator-state/CommandMapping";
import { fsSearchAutoComplete } from "../fs/operations/base-operations";

export const suggestCommands = (cmdMapping, partialStr) => {
	const commandNameSeq = getCommandNames(cmdMapping);
	return commandNameSeq.filter((cmd) => partialStr === cmd.substr(0, partialStr.length));
};

export const suggestCommandOptions = (cmdMapping, commandName, partialStr) => {
	if (!isCommandSet(cmdMapping, commandName)) {
		return [];
	}

	const optDefSeq = Object.keys(getCommandOptDef(cmdMapping, commandName)).flatMap((opts) =>
		opts.split(",").map((opt) => opt.trim())
	);
	return optDefSeq.filter((option) => partialStr === option.substr(0, partialStr.length));
};

export const suggestFileSystemNames = (fs, cwd, partialStr) => {
	const path = PathUtil.toAbsolutePath(partialStr, cwd);
	console.log(path);
	const fsPart = fsSearchAutoComplete(fs, path);
	const suggestions = Object.keys(fsPart)
		.filter(
			(suggestion) =>
				PathUtil.getLastPathPart(path) ===
				suggestion.substr(0, PathUtil.getLastPathPart(path).length)
		)
		.map((suggestion) => {
			const pathParts = PathUtil.toPathParts(path).slice(1);
			pathParts[pathParts.length - 1] = suggestion;
			return pathParts.join("/");
		});
	console.log(suggestions);
	return suggestions;
};
