import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "../../css/scores.css";


class scores extends React.Component{
	render(){
		return(
			<div>
				<div className='container scoresDocumentation'>
					<div className='header'>
						<h1>Scores and Ranks</h1>
						<p>February 15 - 23, 2019</p>
						<p style={{fontWeight:'bold', textDecoration:'underline', fontStyle:'italic'}}>DISCLAIMER: Points will be determined and awarded at SEC’s discretion.</p>
						<p style={{fontWeight:'bold'}}>See scoring documentation <Link to="/scores/documentation">here</Link></p>
					</div>
					<div>
						<h2>Rankings</h2>
						<Rank/>
						<br/>
						<h2>Scores</h2>
						<Scores/>
					</div>
				</div>
			</div>
		)
	}
}

class Rank extends React.Component{
	render() {
		function createData(rank, org) {
			return { rank, org};
		}

		const largeorg = [
			createData('1', 'SNaP (SHPE, NSBE, Pi Sigma Pi)'),
			createData('2', 'ASME'),
			createData('3', 'LHR (Longhorn Racing)'),
			createData('4', 'IEEE'),
			createData('5', 'SWEEP (WEP Leadership Collaborative Orgs)'),
			createData('6', 'ASCE'),
			createData('7', 'BMESF (AEMB, BMES, BOLT, e-NABLE, WBME)'),
			createData('8', 'Team PGE (SPE, AADE, WPGE, PET, Frac Pac)'),
			createData('9', 'AICHE'),
		];
		const smallorg = [
			createData('1', 'SASE'),
			createData('2', 'HKN'),
			createData('3', 'TxTPEG'),
			createData('4', 'TBP'),
			createData('5', 'EChO'),
			createData('6', 'WIALD'),
			createData('7', 'SFE'),
			createData('8', 'ESW'),
			createData('9', 'AEI'),
			createData('10', 'KTE'),
		];
		return (
			<Paper className={"tableWrapper"}>
				<Table className={"table"}>
					<TableHead style={{backgroundColor: "#64FFDA"}}>
						<TableRow>
							<TableCell style={{fontWeight: "bold"}} align="left" colSpan={2}>Rank</TableCell>
							<TableCell style={{fontWeight: "bold"}} align="left" colSpan={10}>Large Org</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{largeorg.map(row => (
							<TableRow key={row.name}>
								<TableCell align="left" colSpan={2}>{row.rank}</TableCell>
								<TableCell align="left" colSpan={10}>{row.org}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>

				<Table className={"table"}>
					<TableHead  style={{backgroundColor: "#64FFDA"}}>
						<TableRow>
							<TableCell style={{fontWeight: "bold"}} align="left" colSpan={2}>Rank</TableCell>
							<TableCell style={{fontWeight: "bold"}} align="left" colSpan={10}>Small Org</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{smallorg.map(row => (
							<TableRow key={row.name}>
								<TableCell align="left" colSpan={2}>{row.rank}</TableCell>
								<TableCell align="left" colSpan={10}>{row.org}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

class Scores extends React.Component{
	render() {
		function createData(org, attendance, placement, hosting, additionalPoints, total) {
			return { org, attendance, placement, hosting, additionalPoints, total};
		}

		const largeorg = [
			createData('AICHE', '0', '0', '0', '0', '0',),
			createData('ASCE', '0', '0', '0', '0', '0',),
			createData('ASME', '0', '0', '0', '0', '0',),
			createData('BMESF (AEMB, BMES, BOLT, e-NABLE, WBME)', '0', '0', '0', '0', '0',),
			createData('IEEE', '0', '0', '0', '0', '0',),
			createData('LHR (Longhorn Racing)', '0', '0', '0', '0', '0',),
			createData('SNaP (SHPE, NSBE, Pi Sigma Pi)', '0', '0', '0', '0', '0',),
			createData('SWEEP (WEP Leadership Collaborative Orgs)', '0', '0', '0', '0', '0',),
			createData('Team PGE (SPE, AADE, WPGE, PET, Frac Pac)', '0', '0', '0', '0', '0',),


		];
		const smallorg = [
			createData('AEI', '0', '0', '0', '0', '0',),
			createData('EChO', '0', '0', '0', '0', '0',),
			createData('ESW', '0', '0', '0', '0', '0',),
			createData('HKN', '0', '0', '0', '0', '0',),
			createData('KTE', '0', '0', '0', '0', '0',),
			createData('SASE', '0', '0', '0', '0', '0',),
			createData('SFE', '0', '0', '0', '0', '0',),
			createData('TBP', '0', '0', '0', '0', '0',),
			createData('TxTPEG', '0', '0', '0', '0', '0',),
			createData('WIALD', '0', '0', '0', '0', '0',),
		];
		return (
			<Paper className={"tableWrapper"}>
				<Table className={"table"}>
					<TableHead style={{backgroundColor: "#84FFFF"}}>
						<TableRow>
							<TableCell align="left" >Large Orgs</TableCell>
							<TableCell align="center" >Attendance</TableCell>
							<TableCell align="center" >Placement</TableCell>
							<TableCell align="center" >Hosting</TableCell>
							<TableCell align="center" >AdditionalPoints</TableCell>
							<TableCell align="center" >Total</TableCell>

						</TableRow>
					</TableHead>
					<TableBody>
						{largeorg.map(row => (
							<TableRow key={row.name}>
								<TableCell align="left" >{row.org}</TableCell>
								<TableCell align="center" >{row.attendance}</TableCell>
								<TableCell align="center" >{row.placement}</TableCell>
								<TableCell align="center" >{row.hosting}</TableCell>
								<TableCell align="center" >{row.additionalPoints}</TableCell>
								<TableCell align="center" >{row.total}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>

				<Table className={"table"}>
					<TableHead style={{backgroundColor: "#84FFFF"}}>
						<TableRow >
							<TableCell align="left" >Small Orgs</TableCell>
							<TableCell align="center" >Attendance</TableCell>
							<TableCell align="center" >Placement</TableCell>
							<TableCell align="center" >Hosting</TableCell>
							<TableCell align="center" >AdditionalPoints</TableCell>
							<TableCell align="center" >Total</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{smallorg.map(row => (
							<TableRow key={row.name}>
								<TableCell align="left" >{row.org}</TableCell>
								<TableCell align="center" >{row.attendance}</TableCell>
								<TableCell align="center" >{row.placement}</TableCell>
								<TableCell align="center" >{row.hosting}</TableCell>
								<TableCell align="center" >{row.additionalPoints}</TableCell>
								<TableCell align="center" >{row.total}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default scores;
