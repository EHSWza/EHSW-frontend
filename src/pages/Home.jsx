import React from 'react';

function Home({ onGetStarted }) {
    return (
        <>
            <div className="page home">
                <h1>Welcome to eHailingSafetyWatch</h1>
                <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
                    Check if an Uber/Bolt driver has been reported before or report a new case.
                </p>
                <button className="primary-btn" onClick={onGetStarted}>
                    Get Started
                </button>
            </div>

            <div className="page" style={{
                marginTop: '2rem',
                padding: '2rem',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                textAlign: 'left',
                border: '1px solid #dee2e6'
            }}>
                <h2 style={{
                    color: '#00b14f',
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    textAlign: 'center'
                }}>
                    About eHailingSafetyWatch
                </h2>

                <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                        Our Mission
                    </h3>
                    <p style={{ color: '#555', lineHeight: '1.6' }}>
                        eHailingSafetyWatch is a community-driven platform that empowers riders to report unsafe
                        or abusive drivers from ride-sharing services like Uber and Bolt. We make it easier
                        for riders to share legitimate safety concerns and for others to check if a driver
                        has been reported before taking a ride.
                    </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                        Why We Started
                    </h3>
                    <p style={{ color: '#555', lineHeight: '1.6' }}>
                        Many people rely on ride-sharing services to get home safely. Unfortunately, some
                        drivers have abused this trust, often putting vulnerable riders... especially women
                        and children... at risk. While companies have taken some steps, there hasn't been
                        enough transparency or information-sharing to truly protect riders.
                    </p>
                    <p style={{ color: '#555', lineHeight: '1.6', marginTop: '0.5rem' }}>
                        eHailingSafetyWatch was created to bridge this gap, giving people a place to share honest
                        experiences while maintaining fairness for drivers who can dispute false or mistaken claims.
                    </p>
                </div>

                <div>
                    <h3 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                        Our Commitments
                    </h3>
                    <ul style={{
                        color: '#555',
                        lineHeight: '1.8',
                        paddingLeft: '1.5rem',
                        margin: '0.5rem 0'
                    }}>
                        <li><strong>Safety First:</strong> Enable riders to report unsafe or abusive behavior</li>
                        <li><strong>Transparency:</strong> Let others search for drivers and view verified reports</li>
                        <li><strong>Fairness:</strong> Give drivers a way to challenge false or mistaken claims</li>
                        <li><strong>Privacy:</strong> Keep all personal data private and compliant with the law</li>
                    </ul>
                </div>

                <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #dee2e6',
                    fontStyle: 'italic',
                    textAlign: 'center'
                }}>
                    Together, we can create safer rides for everyone.
                </p>
            </div>
        </>
    );
}

export default Home;