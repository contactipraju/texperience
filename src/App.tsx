import './App.scss';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './core/Header/Header';
import NavBar from './core/NavBar/NavBar';

import { ProfileContextProvider } from './pages/profile/ProfileContext';

import PortfolioPage from './pages/portfolio/PortfolioPage';
import SkillsPage    from './pages/skills/SkillsPage';
import ProfilePage   from './pages/profile/ProfilePage';

function App() {
		return (
			<div className="App">
				<ProfileContextProvider>
					<Router>
						<Header />
						<NavBar />

						<Routes>
							<Route path="/portfolio" element={<PortfolioPage />} />
							<Route path="/experience" element={<SkillsPage />} />
							<Route path="/contact" element={<ProfilePage />} />
							<Route path="*" element={<Navigate to="/portfolio" />} />
						</Routes>
					</Router>
				</ProfileContextProvider>
			</div>
		)
}

export default App;
