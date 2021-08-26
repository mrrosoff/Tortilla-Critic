import React from "react";

import { Box, Button, Typography } from "@material-ui/core";

import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export const SocialList = ["Resume", "GitHub", "LinkedIn", "Facebook", "Instagram", "Twitter"];

export const SocialButton = (props) => {
	switch (props.socialName) {
		case "Resume":
			return <ResumeButton />;
		case "GitHub":
			return <GitHubButton />;
		case "LinkedIn":
			return <LinkedInButton />;
		case "Facebook":
			return <FacebookButton />;
		case "Instagram":
			return <InstagramButton />;
		case "Twitter":
			return <TwitterButton />;
	}
	return null;
};

export const ResumeButton = () => {
	return (
		<LinkButtonWithIcon href={"https://bit.ly/rosoff-resume"}>
			<Box display={"flex"} alignItems={"center"}>
				<DescriptionIcon />
				<Box pl={2}>
					<Typography>Resume</Typography>
				</Box>
			</Box>
		</LinkButtonWithIcon>
	);
};

export const GitHubButton = () => {
	return (
		<LinkButtonWithIcon href={"https://www.github.com/mrrosoff"}>
			<Box display={"flex"} alignItems={"center"}>
				<GitHubIcon />
				<Box pl={2}>
					<Typography>GitHub</Typography>
				</Box>
			</Box>
		</LinkButtonWithIcon>
	);
};

export const LinkedInButton = () => {
	return (
		<LinkButtonWithIcon href={"https://www.linkedin.com/in/max-rosoff"}>
			<Box display={"flex"} alignItems={"center"}>
				<LinkedInIcon />
				<Box pl={2}>
					<Typography>LinkedIn</Typography>
				</Box>
			</Box>
		</LinkButtonWithIcon>
	);
};

export const FacebookButton = () => {
	return (
		<LinkButtonWithIcon href={"https://www.facebook.com/maxr.rosoff"}>
			<Box display={"flex"} alignItems={"center"}>
				<FacebookIcon />
				<Box pl={2}>
					<Typography>Facebook</Typography>
				</Box>
			</Box>
		</LinkButtonWithIcon>
	);
};

export const InstagramButton = () => {
	return (
		<LinkButtonWithIcon href={"https://www.instagram.com/thenameismr.r/"}>
			<Box display={"flex"} alignItems={"center"}>
				<InstagramIcon />
				<Box pl={2}>
					<Typography>Instagram</Typography>
				</Box>
			</Box>
		</LinkButtonWithIcon>
	);
};

export const TwitterButton = () => {
	return (
		<LinkButtonWithIcon href={"https://twitter.com/MrRosoff"}>
			<Box display={"flex"} alignItems={"center"}>
				<TwitterIcon />
				<Box pl={2}>
					<Typography>Twitter</Typography>
				</Box>
			</Box>
		</LinkButtonWithIcon>
	);
};

const LinkButtonWithIcon = (props) => {
	return (
		<Button
			href={props.href}
			target={"_blank"}
			rel={"noopener"}
			className={props.className ? props.className : ""}
			startIcon={props.icon}
			size={"large"}
		>
			{props.children}
		</Button>
	);
};

export default SocialButton;
