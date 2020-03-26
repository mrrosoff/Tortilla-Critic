import React, {useState} from "react";

import {CardContent, Collapse, Grid, IconButton, Typography} from "@material-ui/core";

const CollapseArea = props =>
{
	const [OS, setOS] = useState(getOS(props.produceSnackBar));

	if(OS === "iOS" || OS === "Android")
	{
		return (
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
						<Typography>Download the {OS} client.</Typography>
						<IconButton>

						</IconButton>
					</Grid>
					<Grid item>
						<Typography>Or, view the web client.</Typography>
						<IconButton>

						</IconButton>
					</Grid>
				</Grid>
			</CardContent>
		</Collapse>
	);
};


function getOS(produceSnackbar)
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
}

export default CollapseArea;
