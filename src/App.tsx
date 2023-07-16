import './App.scss';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './core/Header/Header';
import NavBar from './core/NavBar/NavBar';

import { ProfileContextProvider } from './pages/profile/ProfileContext';

import ProfilePage   from './pages/profile/ProfilePage';
import SkillsPage    from './pages/skills/SkillsPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';

function App() {
		return (
			<div className="App">
				<ProfileContextProvider>
					<Router>
						<Header />
						<NavBar />

						<Routes>
							<Route path="/profile" element={<ProfilePage />} />
							<Route path="/experience" element={<SkillsPage />} />
							<Route path="/portfolio" element={<PortfolioPage />} />
							<Route path="*" element={<Navigate to="/skills" />} />
						</Routes>
					</Router>
				</ProfileContextProvider>
			</div>
		)
}

export default App;
