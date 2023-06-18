import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

export default function SalaryTable({ salaryData }) {
	function salary(data){
		data = data.split('(');
		return data[0];
	}
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							style={{
								background: "#f2f2f2",
								fontSize: "18px",
								fontWeight: "600",
							}}
						>
							Designation
						</TableCell>
						<TableCell
							style={{
								background: "#f2f2f2",
								fontSize: "18px",
								fontWeight: "600",
							}}
						>
							Avg Salary
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{salaryData.map((data, index) => (
						<TableRow key={index}>
							<TableCell style={{
                                fontSize:"16px"
                            }}>
								{data.job} <br />
                                <span style={{
                                    fontSize:"14px"
                                }}>
								Experience {salary(data.experience)}

                                </span>
							</TableCell>
							<TableCell >{data.salary}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
