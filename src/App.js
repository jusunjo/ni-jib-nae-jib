import React, { useState } from 'react';
import './App.css';
import PropertyCheckForm from './components/PropertyCheckForm';
import TrustSection from './components/TrustSection';
import LoadingMessage from './components/LoadingMessage';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (formData) => {
    setIsSubmitting(true);
    // 실제로는 API 호출을 여기서 처리
    // setTimeout으로 시뮬레이션
    setTimeout(() => {
      // 실제 구현에서는 API 응답을 처리
    }, 3000);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="logo">니집내집</h1>
          <p className="tagline">전세사기 안정성 확인 서비스</p>
        </header>

        <main className="main-content">
          {!isSubmitting ? (
            <>
              <PropertyCheckForm onSubmit={handleSubmit} />
              <TrustSection />
            </>
          ) : (
            <LoadingMessage />
          )}
        </main>

        <footer className="footer">
          <p>&copy; 2024 니집내집. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
