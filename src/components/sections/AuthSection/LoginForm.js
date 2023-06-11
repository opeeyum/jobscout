import React, { useState } from "react";
import AuthLayout from "../Layouts/AuthLayout";
import CustomTextField from "../../common/CustomTextField";
import {
	Box,
	Divider,
	IconButton,
	InputAdornment,
	Typography,
} from "@mui/material";
import { Visibility, VisibilityOff, WindowSharp } from "@mui/icons-material";
import PrimaryButton from "../../common/PrimaryButton";
import OutlinedButton from "../../common/OutlinedButton";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSignIn = () => {
		
	};

	const handleSignUp = () => {
		window.open("/sign-up", "_self" )
	};

	return (
		<AuthLayout>
			<CustomTextField
				title={"Email"}
				// label={"Enter your email"}
				required
				value={email}
				placeholder={"Enter your email"}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
			/>

			<CustomTextField
				title={
					<span
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						Password *
						{/* <span
                style={{
                  marginBottom: "4px",
                  color: "#1B222C",
                  marginTop: "8px",
                  cursor: "pointer",
                }}
                onClick={() => handleForgotPassword()}
              >
                Forgot Password?
              </span> */}
					</span>
				}
				type={showPassword ? "text" : "password"}
				placeholder="Enter your password"
				value={password}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={togglePasswordVisibility}>
								{showPassword ? (
									<Visibility />
								) : (
									<VisibilityOff />
								)}
							</IconButton>
						</InputAdornment>
					),
				}}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					mb: "18px",
				}}
			>
				<PrimaryButton
					sx={{ marginTop: "24px", width: "70%" }}
					onClick={() => handleSignIn()}
					disabled={!email || !password}
				>
					Login
				</PrimaryButton>
			</Box>
			<Divider />

			<Box
				sx={{
					marginTop: "18px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography
					sx={{
						fontSize: "14px",
						fontWeight: "600",
					}}
				>
					New to JobScout ? Join our platform
					{/* <AppLink
						href="/auth/sign-up"
						sx={{
							ml: "8px",
						}}
					>
						Create now
					</AppLink> */}
					<OutlinedButton
						sx={{
							ml: "8px",
							height: "32px",
							// borderColor: (theme) => theme.palette.text.heading,
							// color: (theme) => theme.palette.text.heading,
							"&:hover": {
								//   borderColor: (theme) => theme.palette.text.heading,
							},
						}}
						 onClick={() => handleSignUp()}
					>
						Sign Up
					</OutlinedButton>
				</Typography>
			</Box>
		</AuthLayout>
	);
}
