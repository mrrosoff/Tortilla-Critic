import { Box, Button, Typography } from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const SocialList = [
	{
		name: "Resume",
		url: "https://bit.ly/rosoff-resume",
		icon: DescriptionIcon
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/max-rosoff",
		icon: LinkedInIcon
	},
	{
		name: "GitHub",
		url: "https://www.github.com/mrrosoff",
		icon: GitHubIcon
	},
	{
		name: "Facebook",
		url: "https://www.facebook.com/maxr.rosoff",
		icon: FacebookIcon
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/thenameismr.r/",
		icon: InstagramIcon
	},
	{
		name: "Twitter",
		url: "https://twitter.com/MrRosoff",
		icon: TwitterIcon
	}
];

export const SocialButtonList = (props) => {
	return (
		<Box p={2} display={"flex"} flexWrap={"wrap"}>
			{SocialList.map((socialDetails, index) => (
				<Box key={index} mr={1}>
					<SocialButton
						href={socialDetails.url}
						icon={socialDetails.icon}
						text={socialDetails.name}
					/>
				</Box>
			))}
		</Box>
	);
};

export const SocialButton = (props) => {
	const Icon = props.icon;
	return (
		<Button
			className={"social-button"}
			href={props.href}
			target={"_blank"}
			rel={"noopener"}
			size={"large"}
			{...props}
		>
			<Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
				<Icon />
				<Box pl={2}>
					<Typography>{props.text}</Typography>
				</Box>
			</Box>
		</Button>
	);
};
