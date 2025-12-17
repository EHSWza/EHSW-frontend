import React, { useState } from 'react';

function Query({ onReport, onBack }) {
    const [numberPlate, setNumberPlate] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleQuery = async () => {
        if (!numberPlate) {
            alert('Please enter a number plate!');
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch(
                `http://localhost:8080/reports?numberPlate=${encodeURIComponent(numberPlate)}`
            );

            if (!response.ok) {
                const message = await response.text();
                throw new Error(message);
            }

            const data = await response.json();
            // console.log(data);
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setResult(data);
        } catch (err) {
            console.error("FULL ERROR:", err);
            setError(err.toString());
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="page query">
            <button onClick={onBack} className="back-btn">← Home</button>

            <h2>Query Driver</h2>

            <input
                type="text"
                placeholder="Enter number plate (no spaces)"
                value={numberPlate}
                onChange={(e) =>
                    setNumberPlate(e.target.value.replace(/\s/g, ''))
                }
            />

            <button className="primary-btn" onClick={handleQuery}>
                Check
            </button>

            {loading && <p>Checking reports...</p>}

            {error && <p className="error">{error}</p>}

            {result && (
                <div className="result">
                    {result.length > 0 ? (
                        <p>This driver has been reported {result.length} time(s).</p>
                    ) : (
                        <p>No reports found for this driver.</p>
                    )}
                </div>
            )}

            <button className="secondary-btn" onClick={onReport}>
                Report a Driver
            </button>
        </div>
    );
}

export default Query;
