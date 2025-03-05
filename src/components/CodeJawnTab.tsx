import React from 'react';
import gif from '../gifs/CodeJawnWebUserExperience.gif';

const CodeJawnTab: React.FC = () => {
  return (
        <section className='app-tab'>
            <h2 data-testid="code-jawn-title">Code Jawn</h2>
            <div className="app-content">
            <div>
            <a href="https://codejawn.up.railway.app/" target="_blank" rel="noopener noreferrer" className='external-link' data-testid="code-jawn-external-link">
                Visit Code Jawn
            </a>
            <a href="https://github.com/NinaEmiko/code-jawn" target="_blank" rel="noopener noreferrer" className='external-link' data-testid="code-jawn-repo-link">
                Github Repo
            </a>
                <p data-testid="code-jawn-text1">
                    Code Jawn is a duo-like app with a React front-end and a Spring Boot backend, deployed through Railway.
                    It's purpose is to gamify learning to code, making the barrier to entry easier for those not from
                    the traditional computer science backgrounds.
                </p>
                <p data-testid="code-jawn-text2">
                    In it's current form, there is one lesson available: Java Data Types(Strings). Content will continually be added in the future.
                </p>
                    <h3 data-testid="code-jawn-list-title1">Feel free to poke around with this account:</h3>
                    <ul data-testid="code-jawn-list1">
                        <li>Username: update</li>
                        <li>Password: update</li>
                        <h5>*Account deletion/updates are disabled for this account.*</h5>
                    </ul>
                
                    <h3 data-testid="code-jawn-list-title2">Navigation</h3>
                    <ul data-testid="code-jawn-list2">
                        <li>Select 'Go to Java lessons'</li>
                        <li>Click different lessons to see what will soon be available</li>
                        <li>Select the Strings lesson in the Data Types tab</li>
                        <li>Go through the lesson to get a feel for the website.</li>
                        <li>Don't worry! When a wrong answer is selected, it will explain why the answer is incorrect.</li>
                        <li>You have as many guesses as it takes to get the correct answer, and it will explain why the answer was correct as well!</li>
                    </ul>

            </div>
            <div>
                <h3 data-testid="code-jawn-ux-title">User Experience</h3>
                <h5 data-testid="code-jawn-ux-subtitle">Web</h5>
                <img src={gif} data-testid="code-jawn-ux-gif" alt="Code Jawn Demo" />
                {/* <h5>Mobile</h5>
                <img src='' alt="Code Jawn Demo" /> */}
            </div>
            </div>
        </section>
  );
};

export default CodeJawnTab;
