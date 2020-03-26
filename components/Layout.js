import React, {useState} from 'react';

import clsx from 'clsx';
import makeStyles from "@material-ui/core/styles/makeStyles";

import {Card, CardActions, CardMedia, Grid, IconButton, Typography} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import LinkButton from "./LinkButton";
import CollapseArea from "./CollapseArea";

import Profile from '../static/profile.jpg';

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

const Layout = props =>
{
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

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
					<CollapseArea expanded={expanded} produceSnackbar={props.produceSnackBar}/>
				</Card>
			</Grid>
		</Grid>
	);
};

const Buttons = props =>
{
	const classes = useStyles();
	return (
		<CardActions disableSpacing>
			<Typography variant={'h6'} className={classes.name}>Max Rosoff</Typography>
			<LinkButton href={"https://www.facebook.com/max.rosoff.75"} icon={<FacebookIcon/>}
						className={classes.right}/>
			<LinkButton href={"https://www.instagram.com/thenameismr.r/"} icon={<InstagramIcon/>}/>
			<LinkButton href={"https://www.linkedin.com/in/max-rosoff"} icon={<LinkedInIcon/>}/>
			<LinkButton href={"https://www.github.com/mrrosoff"} icon={<GitHubIcon/>}/>
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

export default Layout;
