import React, { useState } from "react";
import OutlinedButton from "../../common/OutlinedButton";
import { Box, Divider, Grid, Typography } from "@mui/material";
import PrimaryButton from "../../common/PrimaryButton";
import AuthLayout from "../Layouts/AuthLayout";
import validator from "validator";
import CustomTextField from "../../common/CustomTextField";

export default function SignUpForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailError, setEmailError] = React.useState("");
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleSignUp = () => {
		console.log("esrgedrloikg");
	};
	const handleButtonDisable = !email || !password || !firstName;

	const handleEmailChange = (e) => {
		const value = e.target.value;
		setEmail(value);
	};

	const handleEmailBlur = (e) => {
		const value = e.target.value;
		if (value && !validator.isEmail(value)) {
			setEmailError("Please enter a valid email address");
		} else {
			setEmailError("");
		}
	};

	return (
		<AuthLayout headingTitle="Signup">
			{/* <TextInput
            title={"First name"}
            // label={"First name"}
            type="text"
            value={firstName}
            placeholder={"Enter your first name"}
            required
            onChange={(e) => setFirstName(e.target.value)}
        />
        <TextInput
            title={"Last name"}
            // label={"Last name"}
            type="text"
            value={lastName}
            placeholder={"Enter your last name"}
            required
            onChange={(e) => setLastName(e.target.value)}
        /> */}
			<Grid container spacing={1} >
				<Grid item xs={6}>
					<CustomTextField
						title={"First name"}
						type="text"
						value={firstName}
						placeholder={"Enter your first name"}
						required
						onChange={(e) => setFirstName(e.target.value)}
						labelStyles={
							{
								// marginTop: "-8px",
								// mb: 0,
							}
						}
					/>
				</Grid>
				<Grid item xs={6}>
					<CustomTextField
						title={"Last name"}
						type="text"
						value={lastName}
						placeholder={"Enter your last name"}
						required
						onChange={(e) => setLastName(e.target.value)}
						labelStyles={
							{
								// marginTop: "-8px",
								// mb: 0,
							}
						}
					/>
				</Grid>
			</Grid>
			<CustomTextField
				// label={"Email"}
				title={"Email"}
				type="email"
				value={email}
				placeholder={"Enter your email"}
				error={emailError}
				helperText={emailError}
				onChange={handleEmailChange}
				onBlur={handleEmailBlur}
				required
			/>
			<CustomTextField
				// label={"Password"}
				type={showPassword ? "text" : "password"}
				title={"Password"}
				// type="password"
				value={password}
				placeholder={"Enter your password"}
				required
				//   InputProps={{
				//     endAdornment: (
				//       <PasswordValidator
				//         showPassword={showPassword}
				//         setShowPassword={setShowPassword}
				//       />
				//     ),
				//   }}
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
					onClick={() => handleSignUp()}
					disabled={handleButtonDisable}
				>
					Create Account
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
					Have an existed account?
					{/* <AppLink
                    href="/auth/login"
                    sx={{
                        ml: "8px",
                    }}
                >
                    Sign in
                </AppLink> */}
					<OutlinedButton
						sx={{
							ml: "8px",
							height: "32px",

							// borderColor: (theme) => theme.palette.text.heading,
							// color: (theme) => theme.palette.text.heading,
							// "&:hover": {
							//   borderColor: (theme) => theme.palette.text.heading,
							// },
						}}
						//   onClick={() => router.push("/auth/login")}
						onClick={() => window.open("/login", "_self")}
					>
						Sign in
					</OutlinedButton>
				</Typography>
			</Box>
			{/* <Box
      sx={{
        marginTop: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
        }}
      >
        By proceeding, you agree to our{" "}
        <AppLink
          style={{
            color: (theme) => theme.palette.text.heading,
            cursor: "pointer",
            fontWeight: "600",
            textDecoration: "underline",
            fontSize: "12px",
          }}
          href={"/legal/terms-and-conditions"}
        >
          Terms of Service
        </AppLink>
        {"  "}
        and <br />
        <AppLink
          style={{
            color: (theme) => theme.palette.text.heading,
            cursor: "pointer",
            fontWeight: "600",
            textDecoration: "underline",

            display: "flex",
            justifyContent: "center",
            fontSize: "12px",
          }}
          // href={"/legal/private-policy"}
          href={`/legal/privacy-policy`}
        >
          Privacy Policy
        </AppLink>
      </Typography>
    </Box> */}

			{/* <Box sx={{ marginTop: "16px" }}>
            <AppLink href="/auth/login" sx={{ paddingTop: "16px" }}>
                Log in
            </AppLink>
        </Box> */}
		</AuthLayout>
	);
}
