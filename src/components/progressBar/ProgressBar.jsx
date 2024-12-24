import React from 'react'

const ProgressBar = ({ score, maxScore = 10, barColor = '#D59962', bgColor = '#e0e0e0', height = '8px' }) => {
    const percentage = Math.min((score / maxScore) * 100, 100); // 100%를 초과하지 않도록 제한

    return (
        <div style={{
            width: '100%',
            height,
            backgroundColor: bgColor,
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                width: `${percentage}%`,
                height: '100%',
                backgroundColor: barColor,
                borderRadius: '4px',
                position: 'absolute',
                transition: 'width 0.3s ease'
            }}></div>
        </div>
    );
};

export default ProgressBar;