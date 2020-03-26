import React, {useState} from 'react';

import clsx from 'clsx';
import makeStyles from "@material-ui/core/styles/makeStyles";

import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Collapse,
	Grid,
	IconButton,
	Typography
} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Profile from '../static/profile.jpg'

const useStyles = makeStyles(theme => ({
	card: {width: "50vw"},
	media: {height: '55vh'},
	name: {paddingLeft: '10px'},
	right: {marginLeft: 'auto'},
	expand: {
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {duration: theme.transitions.duration.shortest}),
	},
	expandOpen: {transform: 'rotate(180deg)'},
}));

const Layout = () =>
{
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);
	const [OS, setOS] = useState(getOS());

	const handleExpandClick = () => setExpanded(!expanded);

	return (
		<Grid container
			  justify={'center'}
			  alignItems={'center'}
			  alignContent={'center'}
			  style={{height: '100vh'}}
		>
			<Grid item>
				<Card className={classes.card}>
					<CardMedia image={Profile} title={'Max Rosoff'} className={classes.media}/>
					<Buttons expanded={expanded} handleExpandClick={handleExpandClick}/>
					<CollapseArea expanded={expanded} OS={OS}/>
				</Card>
			</Grid>
		</Grid>
	);
};

const Buttons = props => {

	const classes = useStyles();
	return(
		<CardActions disableSpacing>
			<Typography variant={'h6'} className={classes.name}>Max Rosoff</Typography>
			<IconButton aria-label="Facebook" className={classes.right}>
				<FacebookIcon/>
			</IconButton>
			<IconButton aria-label="Instagram">
				<InstagramIcon/>
			</IconButton>
			<IconButton aria-label="LinkedIn">
				<LinkedInIcon/>
			</IconButton>
			<IconButton aria-label="GitHub">
				<GitHubIcon/>
			</IconButton>
			<IconButton
				onClick={props.handleExpandClick}
				aria-label="More"
				className={clsx(classes.expand, {[classes.expandOpen]: props.expanded})}
			>
				<ExpandMoreIcon/>
			</IconButton>
		</CardActions>
	);
};

const CollapseArea = props => {
	if (props.OS === "iOS" || props.OS === "Android") {
		return(
			<Collapse in={props.expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography>View the web client.</Typography>
				</CardContent>
			</Collapse>
		)
	}

	return (
		<Collapse in={props.expanded} timeout="auto" unmountOnExit>
			<CardContent>
				<Grid container
					  justify={'center'}
					  alignContent={'center'}
					  alignItems={'center'}
				>
					<Grid item>
						<Typography>Download the {props.OS} client.</Typography>
						<IconButton>
							<GitHubIcon/>
						</IconButton>
					</Grid>
					<Grid item>
						<Typography>Or, view the web client.</Typography>
						<IconButton>
							<GitHubIcon/>
						</IconButton>
					</Grid>
				</Grid>
			</CardContent>
		</Collapse>
	);
};


function getOS()
{
	let userAgent = window.navigator.userAgent;
	let platform = window.navigator.platform;

	let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
	let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
	let iosPlatforms = ['iPhone', 'iPad', 'iPod'];
	let os = null;

	if(macosPlatforms.indexOf(platform) !== -1)
	{
		os = 'Mac OS';
	}

	else if(iosPlatforms.indexOf(platform) !== -1)
	{
		os = 'iOS';
	}

	else if(windowsPlatforms.indexOf(platform) !== -1)
	{
		os = 'Windows';
	}

	else if(/Android/.test(userAgent))
	{
		os = 'Android';
	}

	else if(/Linux/.test(platform))
	{
		os = 'Linux';
	}

	return os;
}

export default Layout;
