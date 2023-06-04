import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function JobDetailDescriptionSection({description}) {
	return (
		<>
			<Box
				sx={{
					// display: "flex",
					p: 2,
				}}
			>
				<Typography
					sx={{
						fontSize: "22px",
						fontWeight: 600,
					}}
				>
					Job Description{" "}
				</Typography>

				<Box
					sx={{
						mt: 1.5,
					}}
				>
					<Typography
						sx={{
							mb: 1,

							fontSize: "18px",
							fontWeight: 600,
						}}
					>
						Responsibilities of the Candidate:
					</Typography>
					<Typography>
						{/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Tempore laboriosam temporibus nobis vero aspernatur
						rerum quis! Vel minima quas animi. Sed ullam veniam
						impedit ab, iusto nemo perspiciatis, et in expedita
						minima ipsa! Magni a sunt modi. Unde mollitia nisi animi
						blanditiis! Laborum, placeat porro quae impedit tenetur
						illo assumenda error neque earum eos laudantium
						molestiae officiis! Minima soluta laborum doloremque
						debitis similique. Consequatur minus unde dolor optio
						adipisci impedit, quibusdam sed assumenda nihil rem
						repellendus eveniet nulla aperiam voluptatem quis
						inventore ullam laboriosam commodi facere earum
						veritatis perspiciatis ad. Minus et, veniam nobis labore
						corporis sequi mollitia! Corporis corrupti aliquam
						reprehenderit officia inventore quia labore ab aliquid,
						laboriosam repellendus? Voluptatum quibusdam laboriosam
						vitae pariatur explicabo perferendis, commodi blanditiis
						molestias nostrum recusandae perspiciatis veritatis sit
						deleniti quo voluptas exercitationem voluptates earum?
						Qui magni at eveniet impedit aliquam illum repellat
						obcaecati. */}
						{description}
					</Typography>
				</Box>
				<Box
					sx={{
						mt: 1.5,
					}}
				>
					<Typography
						sx={{
							mb: 1,
							fontSize: "18px",
							fontWeight: 600,
						}}
					>
						Requirements:
					</Typography>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Tempore laboriosam temporibus nobis vero aspernatur
						rerum quis! Vel minima quas animi. Sed ullam veniam
						impedit ab, iusto nemo perspiciatis, et in expedita
						minima ipsa! Magni a sunt modi. Unde mollitia nisi animi
						blanditiis! Laborum, placeat porro quae impedit tenetur
						illo assumenda error neque earum eos laudantium
						molestiae officiis! Minima soluta laborum doloremque
						debitis similique. Consequatur minus unde dolor optio
						adipisci impedit, quibusdam sed assumenda nihil rem
						repellendus eveniet nulla aperiam voluptatem quis
						inventore ullam laboriosam commodi facere earum
						veritatis perspiciatis ad. Minus et, veniam nobis labore
						corporis sequi mollitia! Corporis corrupti aliquam
						reprehenderit officia inventore quia labore ab aliquid,
						laboriosam repellendus? Voluptatum quibusdam laboriosam
						vitae pariatur explicabo perferendis, commodi blanditiis
						molestias nostrum recusandae perspiciatis veritatis sit
						deleniti quo voluptas exercitationem voluptates earum?
						Qui magni at eveniet impedit aliquam illum repellat
						obcaecati.
					</Typography>
				</Box>
			</Box>
		</>
	);
}
