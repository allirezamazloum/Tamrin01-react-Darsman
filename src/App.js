import React, { useState } from 'react';
import CompApp from './components/CompApp';
import './styles/style.css';

const App = () => {
  const accordionData = {
    title: 'Digital Products',
  };

  const { title } = accordionData;
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <div className="accordion">
            <div className="accordion-item">
                <div className={isActive ? "accordion-title active" : "accordion-title"} onClick={() => setIsActive(!isActive)}>
                
                    <div>{title}</div>
                    <div><i className={isActive ? "fa-solid fa-chevron-down headerIcon active" : "fa-solid fa-chevron-down headerIcon"}></i></div>
                </div>
            {isActive && <div className="accordion-content"><CompApp/></div>}
            </div>
        </div>

    </React.Fragment>
  );
};

export default App;