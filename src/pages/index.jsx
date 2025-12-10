import Layout from "./Layout.jsx";

import Dashboard from "./Dashboard";

import Topics from "./Topics";

import Chat from "./Chat";

import Quizzes from "./Quizzes";

import Progress from "./Progress";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Dashboard: Dashboard,
    
    Topics: Topics,
    
    Chat: Chat,
    
    Quizzes: Quizzes,
    
    Progress: Progress,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Dashboard />} />
                
                
                <Route path="/Dashboard" element={<Dashboard />} />
                
                <Route path="/Topics" element={<Topics />} />
                
                <Route path="/Chat" element={<Chat />} />
                
                <Route path="/Quizzes" element={<Quizzes />} />
                
                <Route path="/Progress" element={<Progress />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}