import React, { useState } from 'react';
import './PropertyCheckForm.css';

const PropertyCheckForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    contact: '',
    contactType: 'phone',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.contact.trim()) {
      newErrors.contact = '연락처를 입력해주세요.';
    } else if (formData.contactType === 'phone') {
      const phoneRegex = /^[0-9-]+$/;
      if (!phoneRegex.test(formData.contact) || formData.contact.replace(/-/g, '').length < 10) {
        newErrors.contact = '올바른 전화번호를 입력해주세요.';
      }
    } else if (formData.contactType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.contact)) {
        newErrors.contact = '올바른 이메일을 입력해주세요.';
      }
    }

    if (!formData.address.trim()) {
      newErrors.address = '주소를 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 에러 초기화
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="property-check-form">
      <div className="form-intro">
        <h2>전세사기 안정성 확인</h2>
        <p>현직 공인중개사가 해당 매물의 안정성을 검증해드립니다</p>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="contactType">연락 수단 선택</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="contactType"
                value="phone"
                checked={formData.contactType === 'phone'}
                onChange={handleChange}
              />
              <span>핸드폰 번호</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="contactType"
                value="email"
                checked={formData.contactType === 'email'}
                onChange={handleChange}
              />
              <span>이메일</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact">
            {formData.contactType === 'phone' ? '핸드폰 번호' : '이메일 주소'}
          </label>
          <input
            type={formData.contactType === 'phone' ? 'tel' : 'email'}
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder={formData.contactType === 'phone' ? '010-1234-5678' : 'example@email.com'}
            className={errors.contact ? 'error' : ''}
          />
          {errors.contact && <span className="error-message">{errors.contact}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="address">매물 주소</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="서울시 강남구 테헤란로 123"
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <button type="submit" className="submit-button">
          안정성 확인 요청하기
        </button>
      </form>
    </div>
  );
};

export default PropertyCheckForm;
