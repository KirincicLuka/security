import React, { useState } from 'react';
import axios from 'axios';

const SensitiveDataExposure = () => {
    const [data, setData] = useState('');
    const [retrievedData, setRetrievedData] = useState('');
    const [encryption, setEncryption] = useState(false);

    const saveData = async () => {
        await axios.post('https://security-backend-1.onrender.com/api/toggle-encryption', { encryptionEnabled: encryption });
        await axios.post('https://security-backend-1.onrender.com/api/save-data', { data });
    };

    const getData = async () => {
        const response = await axios.get('https://security-backend-1.onrender.com/api/get-data');
        setRetrievedData(response.data.data);
    };

    return (
        <div>
            <h2>Sensitive Data Exposure</h2>
            <label>
                Sensitive Data:
                <input
                    type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
            </label>
            <button onClick={saveData}>Save Data</button>
            <button onClick={getData}>Retrieve Data</button>
            <div>
                <label>
                    Enable Encryption:
                    <input
                        type="checkbox"
                        checked={encryption}
                        onChange={() => setEncryption(!encryption)}
                    />
                </label>
            </div>
            <h3>Encryption Status: {encryption ? "Enabled" : "Disabled"}</h3>
            <h3>Retrieved Data:</h3>
            <p>{retrievedData}</p>
        </div>
    );
};

export default SensitiveDataExposure;
