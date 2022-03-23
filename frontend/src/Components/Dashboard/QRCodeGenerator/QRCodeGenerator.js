import React, {useState, useEffect} from 'react';
import './QRCodeGenerator.css';

const QRCodeGenerator = () => {
    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [size, setSize] = useState(150);
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");
    
    // Changing the URL only when the user
    // changes the input
    useEffect(() => {
      setQrCode
   (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
    }, [word, size, bgColor]);
    
    // Updating the input word when user
    // click on the generate button
    function handleClick() {
      setWord(temp);
    }
    
    return (
      <div className="App">
        <div className="input-box">
          {/* <div className="gen">
            <input type="text" onChange={
              (e) => {setTemp(e.target.value)}}
              placeholder="Enter text to encode" />
            <button className="button" 
              onClick={handleClick}>
              Generate
            </button>
          </div> */}
        </div>
        <div >
          <img src={qrCode} alt="" className="dashboard_qrcode"/>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 qrcode_text">QR Code scanner</h2>
        </div>
      </div>)
}

export default QRCodeGenerator