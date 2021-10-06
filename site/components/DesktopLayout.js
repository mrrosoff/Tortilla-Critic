import React, { useRef, useState } from "react";

import { Avatar, Box, Paper } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';

import SocialButton, { SocialList } from "./SocialButtons";

import Profile from "../../static/images/profile.jpg";

import BootUp from "./BootUp";
import TerminalEmbed from "./TerminalEmbed";

const DesktopLayout = (props) => {
	const [bootingUp, setBootingUp] = useState(process.env.NODE_ENV !== "development");
	const [open, setOpen] = useState(false);

	let inputRef = useRef(null);

	const creationDate = new Date();
	creationDate.setMinutes(creationDate.getMinutes() - 8);
	creationDate.setHours(creationDate.getHours() - 2);
	creationDate.setDate(creationDate.getDate() - 5);

	return (
		<Box width={"100vw"} height={"100vh"}>
			<Box
				p={8}
				style={{ width: "100%", height: "100%", overflow: "hidden" }}
				onClick={() => inputRef.current && inputRef.current.focus()}
			>
				<div style={{ position: "relative" }}>
					<Box style={{ position: "absolute", top: 0, right: 20 }}>
						<CodeIcon style={{ fontSize: 20 }} />
					</Box>
					<Box style={{ position: "absolute", top: 65, right: 0 }}>
						{open ? <UserCard open={open} setOpen={setOpen} {...props} /> : null}
					</Box>
					<Avatar
						alt="Max Rosoff"
						src={Profile}
						onClick={() => setOpen(!open)}
						style={{
							width: 45,
							height: 45,
							borderStyle: "solid",
							borderWidth: "1px",
							borderColor: "#FFFFFF",
							boxShadow: "0px 0px 10px 0 rgba(255, 255, 255, 0.4), 0px 0px 30px 0 rgba(255, 255, 255, 0.25)",
							position: "absolute",
							top: 0,
							right: 0
						}}
					/>
				</div>
				<div style={{ width: "100%", height: "100%", overflowY: "scroll" }}>
					{bootingUp ? (
						<BootUp setBootingUp={setBootingUp} creationDate={creationDate.toString()} />
					) : (
						<TerminalEmbed ref={inputRef} />
					)}
				</div>
			</Box>
		</Box>
	);
};

const UserCard = (props) => {
	return (
		<Paper style={{ width: 350 }}>
			<Box p={2} display={"flex"} flexWrap={"wrap"}>
				{SocialList.map((socialName, index) => (
					<Box key={index} mr={1}>
						<SocialButton socialName={socialName} />
					</Box>
				))}
			</Box>
		</Paper>
	);
};

export default DesktopLayout;
