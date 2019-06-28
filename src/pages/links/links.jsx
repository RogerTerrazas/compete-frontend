import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	button: {
		padding: '2%',
		marginBottom: '1.5%',
	},
	container: {
		margin: '5%',
	},
}));

export default function Links() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Grid container spacing={12} >
				<Grid item xs={12}>
					<Button href="https://sec.engr.utexas.edu/" fullWidth variant="contained" color="primary" className={classes.button}>
							UT Student Engineering Council
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button href="https://www.facebook.com/SECtexas/" fullWidth variant="contained" color="primary" className={classes.button}>
						UT Student Engineering Council Facebook
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button href="https://github.com/eweekweb/" fullWidth variant="contained" color="primary" className={classes.button}>
						EWeek GitHub Repo
					</Button>
				</Grid>
			</Grid>
		</div>

	);
}
