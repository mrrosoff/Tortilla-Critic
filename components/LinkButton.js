import React from "react";

import {IconButton, Link} from "@material-ui/core";

const LinkButton = props =>
{
	return (
		<Link href={props.href}
			  target="_blank"
			  rel="noopener"
			  component={IconButton}
			  className={props.className ? props.className : ""}
		>
			{props.icon}
		</Link>
	);
};

export default LinkButton;
