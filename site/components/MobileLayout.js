import React from "react";

import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Profile from "../../static/images/profile.jpg";
import SocialButton, { SocialList } from "./SocialButtons";

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
						{SocialList.map((socialName, index) => (
							<Grid item key={index}>
								<SocialButton socialName={socialName} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default MobileLayout;
