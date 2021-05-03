import React, { useRef, useState } from "react";

import { Avatar, Box, Button, Grid, Paper, Typography } from "@material-ui/core";

import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import Profile from "../static/images/profile.jpg";

import BootUp from "./BootUp";
import TerminalEmbed from "./TerminalEmbed";

const DesktopLayout = (props) => {
	const [bootingUp, setBootingUp] = useState(true);
	const [open, setOpen] = useState(false);

	let inputRef = useRef(null);

	return (
		<Box width={"100vw"} height={"100vh"}>
			<Box
				p={8}
				style={{ width: "100%", height: "100%", overflow: "hidden" }}
				onClick={() => inputRef.current && inputRef.current.focus()}
			>
				<div style={{ position: "relative" }}>
					<Box style={{ position: "absolute", top: -16, right: -20 }}>
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
							position: "absolute",
							top: 0,
							right: 0
						}}
					/>
				</div>
				<div style={{ width: "100%", height: "100%", overflowY: "scroll" }}>
					{bootingUp ? (
						<BootUp setBootingUp={setBootingUp} />
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
				<Buttons {...props} />
			</Box>
		</Paper>
	);
};

const Buttons = (props) => {
	return (
		<>
			<LinkButtonWithIcon href={"https://bit.ly/3x5nCbg"}>
				<Box display={"flex"} alignItems={"center"}>
					<DescriptionIcon />
					<Box pl={2}>
						<Typography>Resume</Typography>
					</Box>
				</Box>
			</LinkButtonWithIcon>
			<LinkButtonWithIcon href={"https://www.github.com/mrrosoff"}>
				<Box display={"flex"} alignItems={"center"}>
					<GitHubIcon />
					<Box pl={2}>
						<Typography>GitHub</Typography>
					</Box>
				</Box>
			</LinkButtonWithIcon>
			<LinkButtonWithIcon href={"https://www.linkedin.com/in/max-rosoff"}>
				<Box display={"flex"} alignItems={"center"}>
					<LinkedInIcon />
					<Box pl={2}>
						<Typography>LinkedIn</Typography>
					</Box>
				</Box>
			</LinkButtonWithIcon>
			<LinkButtonWithIcon href={"https://www.facebook.com/maxr.rosoff"}>
				<Box display={"flex"} alignItems={"center"}>
					<FacebookIcon />
					<Box pl={2}>
						<Typography>Facebook</Typography>
					</Box>
				</Box>
			</LinkButtonWithIcon>
			<LinkButtonWithIcon href={"https://www.instagram.com/thenameismr.r/"}>
				<Box display={"flex"} alignItems={"center"}>
					<InstagramIcon />
					<Box pl={2}>
						<Typography>Instagram</Typography>
					</Box>
				</Box>
			</LinkButtonWithIcon>
			<LinkButtonWithIcon href={"https://twitter.com/MrRosoff"}>
				<Box display={"flex"} alignItems={"center"}>
					<TwitterIcon />
					<Box pl={2}>
						<Typography>Twitter</Typography>
					</Box>
				</Box>
			</LinkButtonWithIcon>
		</>
	);
};

export const LinkButtonWithIcon = (props) => {
	return (
		<Button
			target="_blank"
			rel="noopener"
			style={{ height: 50, justifyContent: "flex-start" }}
			{...props}
		>
			<Box p={1}>{props.children}</Box>
		</Button>
	);
};

const doDownload = (link) => {
	let a = document.createElement("a");
	a.href = link;
	a.download = "project-explorer.deb";
	document.body.appendChild(a);
	a.click();
	setTimeout(() => document.body.removeChild(a), 0);
};

export default DesktopLayout;
