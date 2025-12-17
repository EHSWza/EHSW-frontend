import React, { useState } from 'react';
import Home from './pages/Home.jsx';
import Query from './pages/Query.jsx';
import Report from './pages/Report.jsx';

function App() {
    const [page, setPage] = useState('home'); // home, query, report

    return (
        <div className="app">
            {page === 'home' && <Home onGetStarted={() => setPage('query')} />}
            {page === 'query' && (
                <Query
                    onReport={() => setPage('report')}
                    onBack={() => setPage('home')}
                />
            )}
            {page === 'report' && <Report onBack={() => setPage('query')} />}
        </div>
    );
}

export default App;
