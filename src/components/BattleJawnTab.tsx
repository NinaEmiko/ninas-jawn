import React from 'react';
import gif1 from '../gifs/create-battle.gif'
import gif2 from '../gifs/store-inventory.gif'

const BattleJawnTab: React.FC = () => {
  return (
        <section className='app-tab'>
        <h2 data-testid="battle-jawn-title">Battle Jawn</h2>
        <div className="app-content">
          <div>
            <a href="https://github.com/NinaEmiko/battle-jawn" target="_blank" rel="noopener noreferrer" className='external-link' data-testid="battle-jawn-repo-link">
                Github Repo
            </a>
         <p data-testid="battle-jawn-text1">
            Battle Jawn is a turn-based fighting game with a React frontend and a SpringBoot backend, deployed through Railway.
            Version 1 was created with vanilla JavaScript while I was first learning to code.
            Version 2 was created using React and SpringBoot.
        </p>
        <p data-testid="battle-jawn-text2">
            Website currently under renovation.
        </p>

        <h3 data-testid="battle-jawn-list-title">Currently available:</h3>
        <ul data-testid="battle-jawn-list">
            <li>Character creation/deletion</li>
            <li>4 classes</li>
            <li>2 class specific talent trees per class</li>
            <li>1 Map</li>
            <li>Store</li>
            <li>Arena for battling</li>
            <li>Loot</li>
            <li>4 enemies</li>
            <li>Leader board</li>
            <li>Character experience and levels</li>
            <li>Win streaks</li>
            <li>Probably more that I forgot</li>
        </ul>

      </div>
      <div>
        <h3 data-testid="battle-jawn-ux-title">User Experience</h3>
        <span className="gif-container">
        <img src={gif1} data-testid="battle-jawn-ux-gif1" alt="Battle Jawn Demo" className='battle-jawn-gif' />
        <img src={gif2} data-testid="battle-jawn-ux-gif2" alt="Battle Jawn Demo" className='battle-jawn-gif' />
        </span>
      </div>
          </div>
      </section>
  );
};

export default BattleJawnTab;
