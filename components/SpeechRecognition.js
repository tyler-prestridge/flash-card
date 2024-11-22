"use client";

import { useState, useEffect } from 'react';

const SpeechRecognition = () => {
    const words = [
        'why',
        'the',
        'from',
        'and',
        'get',
        'his',
        'for',
        'where',
        'who',
        'new',
        'stop',
        'will',
        'put',
        'have',
        'want',
        'you',
        'see',
        'was',
        'what',
        'went',
        'said',
        'come',
        'like',
        'zero',
        'again',
        'all',
        'also',
        'another',
        'around',
        'been',
        'both',
        'boy',
        'could',
        'day',
        'does',
        'done',
        'down',
        'every',
        'everyone',
        'eye',
        'first',
        'friend',
        'black',
        'blue',
        'brown',
        'gray',
        'one',
        'two',
        'three'
    ];
    const [isListening, setIsListening] = useState(false);
    const [message, setMessage] = useState('');
    const [currentWord, setCurrentWord] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        // Set the initial word
        setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    }, []);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onstart = () => {
                setIsListening(true);
            };

            recognition.onend = () => {
                setIsListening(false);
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
                }, 2000);
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                let complete = false;
                if (currentWord.toLowerCase() === 'for') {
                    let homophones = ['for', 'fore', 'four'];
                    complete = homophones.some((word) => {
                        if (transcript.toLowerCase().includes(word)) {
                            setMessage(`You did it!`)
                            return true;
                        }
                        return false;
                    });
                }
                if (!complete) {
                    if (transcript.toLowerCase().includes(currentWord.toLowerCase())) {
                        setMessage(`You did it!`);
                    } else {
                        setMessage('Try again!');
                        console.log(transcript);
                    }
                }
            };

            if (isListening) {
                recognition.start();
                setTimeout(() => {
                    recognition.stop();
                }, 3000);
            }

            return () => {
                recognition.abort();
            };
        } else {
            setMessage('Speech Recognition is not supported in this browser.');
        }
    }, [isListening, currentWord]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px' }}>
            <p style={{ fontSize: '36px', marginBottom: '40px', textAlign: 'center' }}>{currentWord}</p>
            <button
                onClick={() => setIsListening(true)}
                style={{
                    backgroundColor: isListening ? 'green' : 'red',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginBottom: '20px'
                }}
            >
                {isListening ? 'Listening...' : 'Activate Microphone'}
            </button>
            {showMessage &&
                <p style={{
                    fontSize: '34px',
                    color: 'hotpink',
                    maxWidth: '80%',
                    wordWrap: 'break-word',
                    textAlign: 'center' }}>
                    {message}
                </p>}
        </div>
    );
};

export default SpeechRecognition;
