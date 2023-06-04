import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/sections/AppHeader";
import BodySection from "./components/sections/BodySection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetailSection from "./components/sections/JobDetailSection";

function App() {
	return (
		<>
			<AppHeader />

			<Router>
				<Routes>
					<Route path="/" element={<BodySection />} />
					<Route path="/details/:jobId" element={<JobDetailSection />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
