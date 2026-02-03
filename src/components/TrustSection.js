import React from 'react';
import './TrustSection.css';

const TrustSection = () => {
  return (
    <div className="trust-section">
      <div className="trust-header">
        <h2>왜 니집내집을 신뢰할 수 있나요?</h2>
      </div>

      <div className="trust-content">
        <div className="service-info">
          <div className="info-card">
            <div className="icon">🏠</div>
            <h3>이 서비스는 무엇인가요?</h3>
            <p>
              니집내집은 전세 계약 전 매물의 안정성을 검증해주는 서비스입니다. 
              현직 공인중개사가 직접 해당 매물을 확인하여 전세사기 위험을 사전에 차단합니다.
            </p>
          </div>

          <div className="info-card">
            <div className="icon">👨‍💼</div>
            <h3>누가 판단해주나요?</h3>
            <p>
              <strong>대한민국 최고 공인중개사 이민수 공인중개사</strong> 및 
              대한민국 공인중개사 자격증을 보유한 현직 중개사들이 직접 검증합니다. 
              각 지역의 전문 중개사가 해당 매물의 등기부등본, 소유권, 채권자 등을 
              철저히 확인하여 안전한 전세 계약을 도와드립니다.
            </p>
          </div>
        </div>

        <div className="trust-features">
          <div className="feature-item">
            <div className="feature-icon">✅</div>
            <div className="feature-text">
              <strong>공인중개사 검증</strong>
              <span>현직 전문가가 직접 확인</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <div className="feature-text">
              <strong>개인정보 보호</strong>
              <span>안전한 정보 관리</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <div className="feature-text">
              <strong>빠른 응답</strong>
              <span>24시간 내 답변 보장</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">📋</div>
            <div className="feature-text">
              <strong>상세한 검증 리포트</strong>
              <span>매물 안정성 상세 분석</span>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">검증 완료 매물</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">고객 만족도</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">전문 공인중개사</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
