import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/sections/AppHeader";
import BodySection from "./components/sections/BodySection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetailSection from "./components/sections/JobDetailSection";
import FooterSection from "./components/sections/FooterSection";

function App() {
	return (
		<>
			<AppHeader />

			<Router>
				<Routes>
					<Route path="/" element={<BodySection />} />
					<Route
						path="/details/:jobId"
						element={<JobDetailSection />}
					/>
				</Routes>
			</Router>
			<FooterSection />
		</>
	);
}

export default App;
