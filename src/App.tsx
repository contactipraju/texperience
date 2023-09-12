import './App.scss';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './core/Header/Header';
import NavBar from './core/NavBar/NavBar';

import { ProfileContextProvider } from './pages/summary/ProfileContext';

import SummaryPage    from './pages/summary/SummaryPage';
import SkillsPage     from './pages/skills/SkillsPage';
import ExperiencePage from './pages/experience/ExperiencePage';
import PortfolioPage  from './pages/portfolio/PortfolioPage';

function App() {
	return (
		<div className="App">
			<ProfileContextProvider>
				<Router>
					<Header />
					<NavBar />

					<Routes>
						<Route path="/summary" element={<SummaryPage />} />
						<Route path="/skills" element={<SkillsPage />} />
						<Route path="/experience" element={<ExperiencePage />} />
						<Route path="/portfolio" element={<PortfolioPage />} />
						<Route path="*" element={<Navigate to="/summary" />} />
					</Routes>
				</Router>
			</ProfileContextProvider>
		</div>
	)
}

export default App;
