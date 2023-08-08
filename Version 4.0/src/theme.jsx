import './App.css'

import React, { useState } from 'react';

// Define the two style objects

const lightTheme = {
    backgroundColor: 'white',
    color: 'black',
};

const darkTheme = {
    backgroundColor: 'black',
    color: 'white',
};

function ThemeToggle(props) {
    // Initialize the theme state with the light theme
    const [theme, setTheme] = useState(lightTheme);

    // Define the function to toggle the theme
    function toggleTheme() {
        if (theme === lightTheme) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    }

    // Render the component with the current theme styles applied

    return (
        <div style={theme} className='maindiv' >
            <button onClick={toggleTheme}>Toggle Theme</button>
            {props.children}
        </div>
    );

}


// Example usage

export default ThemeToggle;


