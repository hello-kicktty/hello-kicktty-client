import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsQR from "jsqr";
import './QRcode.css'
function QRCodeScanner() {
  const navigate = useNavigate();
  useEffect(() => {
    const video = document.createElement('video');
    const canvasElement = document.getElementById('canvas');
    const canvas = canvasElement.getContext('2d');
    const loadingMessage = document.getElementById('loadingMessage');
    const outputContainer = document.getElementById('output');
    const outputMessage = document.getElementById('outputMessage');
    const outputData = document.getElementById('outputData');

    function drawLine(begin, end, color) {
      canvas.beginPath();
      canvas.moveTo(begin.x, begin.y);
      canvas.lineTo(end.x, end.y);
      canvas.lineWidth = 4;
      canvas.strokeStyle = color;
      canvas.stroke();
    }

    // Request access to the user's camera
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(function (stream) {
      video.srcObject = stream;
      video.setAttribute('playsinline', true); // iOS 사용시 전체 화면을 사용하지 않음을 전달
      video.play();
      requestAnimationFrame(tick);
    });

    function tick() {
      loadingMessage.innerText = '⌛ 스캔 기능을 활성화 중입니다.';
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        loadingMessage.hidden = true;
        canvasElement.hidden = false;
        outputContainer.hidden = false;

        canvasElement.height = video.videoHeight;
        canvasElement.width = video.videoWidth;

        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);

        // You'll need to include the jsQR library for this part

        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });

        if (code) {
          drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF0000');
          drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF0000');
          drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF0000');
          drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF0000');

          outputMessage.hidden = true;
          outputData.parentElement.hidden = false;

          outputData.innerHTML = code.data;
          navigate('/map');
          localStorage.setItem('Kickid', code.data);

        } else {
          outputMessage.hidden = false;
          outputData.parentElement.hidden = true;
        }
      }

      requestAnimationFrame(tick);
    }
  }, [navigate]);

  return (
    <div>
      <main>
        <div id="test">
          <h1></h1>
          <div id="output">
            <div id="outputMessage"></div>
            <div id="outputLayer" hidden>
              <span id="outputData"></span>
            </div>
          </div>
        </div>
        <div>&nbsp;</div>
        <div>
          <h1></h1>
          <div id="frame">
            <div id="loadingMessage">🎥 카메라에 접근할 수 없습니다.<br />카메라가 활성화되어 있는지 확인하십시오</div>
            <canvas id="canvas"></canvas>
          </div>
        </div>
      </main>
    </div>
  );
}

export default QRCodeScanner;
