import React from "react";

import { Avatar, Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import Profile from "../static/images/profile.jpg";

const useStyles = makeStyles((theme) => ({
	largeAvatar: {
		width: theme.spacing(25),
		height: theme.spacing(25)
	}
}));

const MobileLayout = (props) => {
	const classes = useStyles();
	return (
		<Grid
			container
			direction={"column"}
			style={{ width: "100vw", height: "100vh" }}
			justify={"center"}
			alignItems={"center"}
			alignContent={"center"}
		>
			<Grid
				item
				container
				direction={"column"}
				spacing={6}
				justify={"center"}
				alignItems={"center"}
				alignContent={"center"}
			>
				<Grid item>
					<Avatar alt="Max Rosoff" src={Profile} className={classes.largeAvatar} />
				</Grid>
				<Grid item>
					<Grid
						container
						direction={"column"}
						spacing={1}
						justify={"center"}
						alignItems={"center"}
						alignContent={"center"}
					>
						<Grid item>
							<LinkButtonWithIcon href={"https://bit.ly/3x5nCbg"}>
								<Box display={"flex"} alignItems={"center"}>
									<DescriptionIcon />
									<Box pl={2}>
										<Typography>Resume</Typography>
									</Box>
								</Box>
							</LinkButtonWithIcon>
						</Grid>
						<Grid item>
							<LinkButtonWithIcon href={"https://www.github.com/mrrosoff"}>
								<Box display={"flex"} alignItems={"center"}>
									<GitHubIcon />
									<Box pl={2}>
										<Typography>GitHub</Typography>
									</Box>
								</Box>
							</LinkButtonWithIcon>
						</Grid>
						<Grid item>
							<LinkButtonWithIcon href={"https://www.linkedin.com/in/max-rosoff"}>
								<Box display={"flex"} alignItems={"center"}>
									<LinkedInIcon />
									<Box pl={2}>
										<Typography>LinkedIn</Typography>
									</Box>
								</Box>
							</LinkButtonWithIcon>
						</Grid>
						<Grid item>
							<LinkButtonWithIcon href={"https://www.facebook.com/maxr.rosoff"}>
								<Box display={"flex"} alignItems={"center"}>
									<FacebookIcon />
									<Box pl={2}>
										<Typography>Facebook</Typography>
									</Box>
								</Box>
							</LinkButtonWithIcon>
						</Grid>
						<Grid item>
							<LinkButtonWithIcon href={"https://www.instagram.com/thenameismr.r/"}>
								<Box display={"flex"} alignItems={"center"}>
									<InstagramIcon />
									<Box pl={2}>
										<Typography>Instagram</Typography>
									</Box>
								</Box>
							</LinkButtonWithIcon>
						</Grid>
						<Grid item>
							<LinkButtonWithIcon href={"https://twitter.com/MrRosoff"}>
								<Box display={"flex"} alignItems={"center"}>
									<TwitterIcon />
									<Box pl={2}>
										<Typography>Twitter</Typography>
									</Box>
								</Box>
							</LinkButtonWithIcon>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export const LinkButtonWithIcon = (props) => {
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

export default MobileLayout;
