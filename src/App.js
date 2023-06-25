import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/sections/AppHeader";
import BodySection from "./components/sections/BodySection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetailSection from "./components/sections/JobDetailSection";
import FooterSection from "./components/sections/FooterSection";
import LoginForm from "./components/sections/AuthSection/LoginForm";
import SignUpForm from "./components/sections/AuthSection/SignUpForm";
import CompanyInfoSection from "./components/sections/CompanyInfoSection";
import Layout from "./components/common/Layout";

function App() {
	const isAuthPage = ["/login", "/sign-up"].includes(
		window.location.pathname,
	);
	return (
		<>
			{/* <AppHeader /> */}

			{!isAuthPage && <AppHeader />}

			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<BodySection />} />
						<Route
							path="/details/:jobId"
							element={<JobDetailSection />}
						/>
						<Route path="/login" element={<LoginForm />} />
						<Route path="/sign-up" element={<SignUpForm />} />
						<Route
							path="/company-details/:companyHref"
							element={<CompanyInfoSection />}
						/>
					</Routes>
				</Layout>
			</Router>
			{!isAuthPage && <FooterSection />}
			{/* <FooterSection /> */}
		</>
	);
}

export default App;
