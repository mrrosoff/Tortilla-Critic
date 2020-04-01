import React from "react";

import {Button, CardContent, Container, Collapse, Grid, Typography} from "@material-ui/core";

const CollapseArea = props =>
{
	return (
		<Collapse in={props.expanded} timeout="auto" unmountOnExit>
			<CardContent>
				<Container>
					<InternalGrid produceSnackbar={props.produceSnackBar}/>
				</Container>
			</CardContent>
		</Collapse>
	);
};

const InternalGrid = props =>
{
	return (
		<Grid container
			  justify={'center'}
			  alignItems={'center'}
			  alignContent={'center'}
			  spacing={3}
		>
			<Grid item xs={12}>
				<Typography variant={'h6'} align={'center'} gutterBottom>Project Explorer</Typography>
				<Typography variant={'body2'} align={'center'}>
					View my projects! With this interactive client built on the Electron framework, you can demo some
					of my creations at home! This explorer showcases a live demo, but to view the source code for my
					projects, check out my GitHub page.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				{getClientOptions(props.produceSnackBar)}
			</Grid>
		</Grid>
	)
};

const getClientOptions = (produceSnackBar) =>
{
	let OS = getOS(produceSnackBar);

	if(OS === "iOS" || OS === "Android")
	{
		return <Button variant="contained" color={"primary"} size={'small'}>View the Web Client</Button>;
	}

	else
	{
		return (
			<Grid container
				  justify={'center'}
				  alignItems={'center'}
				  alignContent={'center'}
				  spacing={2}
			>
				<Grid item>
					<Button variant="contained" color={"primary"} size={'small'}>Download the {OS} Client</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" color={"primary"} size={'small'}>View the Web Client</Button>
				</Grid>
			</Grid>
		);
	}
};

const getOS = (produceSnackbar) =>
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

	else
	{
		produceSnackbar("You are using an unspecified platform. Some effects may not operate correctly.", "warning")
	}

	return os;
};

export default CollapseArea;
