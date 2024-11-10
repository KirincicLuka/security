import React, { useState } from 'react';

const XSSAttack = () => {
    const [comment, setComment] = useState('');
    const [displayComment, setDisplayComment] = useState('');
    const [xssProtection, setXssProtection] = useState(false);

    const example1 = `
    <div onmouseover="alert('XSS Attack');">Hover over me!</div>
  `;
    const example2 = `
    <iframe src="javascript:alert('XSS Attack');"></iframe>
    `;
    const example3 = `
    <img src="invalid.jpg" onerror="alert('XSS Attack');">
  `;
    const example4 = `
    <a href="javascript:alert('XSS Attack');">Click me</a>
  `;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (xssProtection) {
            setDisplayComment(
                comment
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#x27;")
            );
                    } else {
            setDisplayComment(comment);
        }
    };

    return (
        <div>
            <h2>XSS Attack</h2>
            <h4>Short instructions: <br></br> <br></br>
            You can test functionality with one of these examples below: <br></br></h4>
            <h5>
            {example1}<br></br>
            {example2}<br></br>
            {example3}<br></br>
            {example4}<br></br>
            </h5>
            <form onSubmit={handleSubmit}>
                <label>
                    Comment:
                    <textarea
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <div>
                <label>
                    Enable XSS Protection:
                    <input
                        type="checkbox"
                        checked={xssProtection}
                        onChange={() => setXssProtection(!xssProtection)}
                    />
                </label>
            </div>
            <h3>XSS Protection Status: {xssProtection ? "Enabled" : "Disabled"}</h3>
            <h3>Displayed Comment:</h3>
            <p dangerouslySetInnerHTML={{ __html: displayComment }} />
        </div>
    );
};

export default XSSAttack;
