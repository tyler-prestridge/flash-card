// components/BackToHomeButton.tsx
import React from 'react';

const BackToHomeButton: React.FC = () => {
    return (
        <div style={styles.container}>
            <a href="/" >
                Back
            </a>
            <br/>
            <br/>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'right',
        justifyContent: 'right',
        height: '10vh',
        textAlign: 'right' as const,
    },

};


export default BackToHomeButton;
