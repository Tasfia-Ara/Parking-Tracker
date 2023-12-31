import React, { useState } from 'react';
import '/Users/tasfia_ara/Web3AppsHAckathon2023/hedera-example-metamask-counter-dapp/src/styles/App.css'; // Import the CSS file

function InputBoxes() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setInput3(e.target.value);
  };
  const handleInputChange4 = (e) => {
    setInput4(e.target.value);
  };
  const handleInputChange5 = (e) => {
    setInput5(e.target.value);
  };
  const handleInputChange6 = (e) => {
    setInput6(e.target.value);
  };

  return (
    <div className="input-container">
      <input 
        type="text" 
        value={input1} 
        onChange={handleInputChange1} 
        placeholder="Name" 
        className="input-box"
      />
      <br />
      <input 
        type="text" 
        value={input2} 
        onChange={handleInputChange2} 
        placeholder="Phone Number" 
        className="input-box"
      />
      <br />
      <input 
        type="text" 
        value={input3} 
        onChange={handleInputChange3} 
        placeholder="Email" 
        className="input-box"
      />
      <br />
      <input 
        type="text" 
        value={input4} 
        onChange={handleInputChange4} 
        placeholder="Password" 
        className="input-box"
      />
      
    </div>
  );
}

export default InputBoxes;
