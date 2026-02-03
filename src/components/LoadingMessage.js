import React from 'react';
import './LoadingMessage.css';

const LoadingMessage = () => {
  return (
    <div className="loading-message">
      <div className="loading-icon">
        <div className="spinner"></div>
      </div>
      <h2>잠시만 기다리세요!</h2>
      <p className="main-message">
        현직 공인중개사가 해당 매물을 확인중이에요.
      </p>
      <p className="sub-message">
        곧 답변 드릴게요
      </p>
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default LoadingMessage;
