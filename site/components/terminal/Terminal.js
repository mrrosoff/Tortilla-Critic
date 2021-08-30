import React, { forwardRef, useEffect, useState } from "react";

import { Box, Grid, Typography } from "@material-ui/core";
import { Emulator } from "../../../javascript-terminal";

import CommandInput from "./CommandInput";

import OutputHeader from "./output/OutputHeader";
import OutputText from "./output/OutputText";
import OutputError from "./output/OutputError";

const Terminal = (props, ref) => {
	const [showMOTD, setShowMOTD] = useState(true);
	const [input, setInput] = useState("");
	const [emulatorState, setEmulatorState] = useState(props.emulatorState);
	const [outputs, setOutputs] = useState([]);
	const [historyIndex, setHistoryIndex] = useState(-1);

	let emulator = new Emulator();

	const onKeyDown = (e) => {
		switch (e.key) {
			case "ArrowUp":
				e.preventDefault();
				const historyUp = emulatorState.getHistory();
				setHistoryIndex((prevState) => {
					const nextIndexValue =
						prevState < historyUp.length - 1 ? prevState + 1 : prevState;
					setInput(historyUp[historyUp.length - nextIndexValue - 1]);
					return nextIndexValue;
				});
				break;

			case "ArrowDown":
				e.preventDefault();
				const historyDown = emulatorState.getHistory();
				setHistoryIndex((prevState) => {
					const nextIndexValue = prevState > -1 ? prevState - 1 : prevState;
					const nextInputValue = historyDown[historyDown.length - nextIndexValue - 1];
					setInput(nextInputValue ? nextInputValue : "");
					return nextIndexValue;
				});
				break;

			case "Tab":
				e.preventDefault();
				setInput(emulator.autocomplete(emulatorState, input));
				setOutputs(calculateOutputs());
				break;

			case "Enter":
				e.preventDefault();
				setEmulatorState(emulator.execute(emulatorState, input, props.errorStr));
				setInput("");
				setHistoryIndex(-1);
				setOutputs(calculateOutputs());
				break;
		}
	};

	if (!emulatorState) {
		return null;
	}

	const calculateOutputs = () => {
		if (showMOTD && emulatorState.getHistory().includes("clear")) {
			setShowMOTD(false);
		}
		return emulatorState.getOutputs().map((content, key) => (
			<Grid item key={key} container direction={"column"}>
				<Grid item>
					<OutputHeader cwd={content.cwd} {...props}>
						{content.command}
					</OutputHeader>
				</Grid>
				{content.output.map((output, key) =>
					output.type === "error" ? (
						<Grid item key={key}>
							<OutputError {...props}>{output.output}</OutputError>
						</Grid>
					) : (
						<Grid item key={key}>
							<OutputText {...props}>{output.output}</OutputText>
						</Grid>
					)
				)}
			</Grid>
		));
	};

	useEffect(() => setOutputs(calculateOutputs()), [input]);

	const MOTDText = `
		Welcome To Rosoff OS BETA v4.1.2
			* Documentation: https://github.com/mrrosoff
			* Management: https://linkedin.com/in/max-rosoff
			* Support: maxrosoff1@gmail.com
		0 packages can be updated.
		0 updates are ready to be installed.
	`;

	return (
		<>
			{showMOTD && (
				<>
					{MOTDText.split("\n").map((line, key) => {
						return (
							<Box key={key} display={"flex"}>
								{line.trim().charAt(0) === "*" && <Box width={20} />}
								<Box style={{ color: props.theme.outputColor }}>{line.trim()}</Box>
							</Box>
						);
					})}
					<Box height={20} />
				</>
			)}
			<Grid container direction={"column"} justifyContent={"flex-start"} spacing={1}>
				{outputs}
				<Grid item key={outputs.length}>
					<CommandInput
						ref={ref}
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={onKeyDown}
						emulatorState={emulatorState}
						{...props}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default forwardRef(Terminal);
