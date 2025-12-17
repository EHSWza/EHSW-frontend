import React from 'react';

function Report({ onBack }) {
    const handleGoogleLogin = () => {
        alert('TODO: Implement Google login and reporting.');
    };

    return (
        <div className="page report">
            <button onClick={onBack} className="back-btn">← Back</button>
            <h2>Report a Driver</h2>
            <p>Login with your Google account to report a driver.</p>
            <button className="primary-btn" onClick={handleGoogleLogin}>
                Login with Google
            </button>
        </div>
    );
}

export default Report;
