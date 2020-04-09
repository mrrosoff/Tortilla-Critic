import React from "react";

import {IconButton} from "@material-ui/core";

const LinkButton = props =>
{
	return (
		<IconButton
			href={props.href}
			target="_blank"
			rel="noopener"
			className={props.className ? props.className : ""}
		>
			{props.icon}
		</IconButton>
	);
};

export default LinkButton;
