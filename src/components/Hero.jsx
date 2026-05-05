import React, { useState } from 'react'
import './Hero.css'

const CITIES = [
  'Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Nha Trang', 'Đà Lạt',
  'Huế', 'Hội An', 'Cần Thơ', 'Vũng Tàu', 'Phan Thiết',
  'Sapa', 'Hạ Long', 'Buôn Ma Thuột', 'Pleiku', 'Quy Nhơn',
]

const Hero = () => {
  const [tripType, setTripType] = useState('one-way')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [passengers, setPassengers] = useState(1)

  const today = new Date().toISOString().split('T')[0]

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  return (
    <section className="hero">
      {/* Background */}
      <div className="hero__bg">
        <div className="hero__bg-gradient"></div>
        <div className="hero__bg-pattern"></div>
        <div className="hero__floating-el el1">🏔️</div>
        <div className="hero__floating-el el2">🌴</div>
        <div className="hero__floating-el el3">⛱️</div>
        <div className="hero__floating-el el4">🚌</div>
      </div>

      <div className="hero__content">
        <div className="hero__headline">
          <span className="hero__tag">🎟️ Đặt vé dễ dàng</span>
          <h1>Khám Phá Việt Nam<br /><span className="hero__highlight">Không Lo Vé Xe</span></h1>
          <p>Hơn 300+ nhà xe uy tín · 1000+ tuyến đường · Thanh toán an toàn</p>
        </div>

        {/* Search Box */}
        <div className="search-box">
          {/* Trip type tabs */}
          <div className="search-box__tabs">
            <button
              className={`tab-btn ${tripType === 'one-way' ? 'active' : ''}`}
              onClick={() => setTripType('one-way')}
            >
              ➜ Một chiều
            </button>
            <button
              className={`tab-btn ${tripType === 'round-trip' ? 'active' : ''}`}
              onClick={() => setTripType('round-trip')}
            >
              ⇆ Khứ hồi
            </button>
          </div>

          {/* Search Fields */}
          <div className="search-box__fields">
            {/* From */}
            <div className="field-wrap">
              <label>
                <span className="field-icon">📍</span> Điểm đi
              </label>
              <select value={from} onChange={e => setFrom(e.target.value)}>
                <option value="">Chọn điểm đi</option>
                {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Swap button */}
            <button className="swap-btn" onClick={swap} title="Đổi điểm">
              ⇄
            </button>

            {/* To */}
            <div className="field-wrap">
              <label>
                <span className="field-icon">🏁</span> Điểm đến
              </label>
              <select value={to} onChange={e => setTo(e.target.value)}>
                <option value="">Chọn điểm đến</option>
                {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Date */}
            <div className="field-wrap">
              <label>
                <span className="field-icon">📅</span> Ngày đi
              </label>
              <input
                type="date"
                value={date}
                min={today}
                onChange={e => setDate(e.target.value)}
              />
            </div>

            {/* Return date (round trip) */}
            {tripType === 'round-trip' && (
              <div className="field-wrap">
                <label>
                  <span className="field-icon">📅</span> Ngày về
                </label>
                <input
                  type="date"
                  value={returnDate}
                  min={date || today}
                  onChange={e => setReturnDate(e.target.value)}
                />
              </div>
            )}

            {/* Passengers */}
            <div className="field-wrap field-passengers">
              <label>
                <span className="field-icon">👤</span> Hành khách
              </label>
              <div className="passengers-ctrl">
                <button onClick={() => setPassengers(Math.max(1, passengers - 1))}>−</button>
                <span>{passengers}</span>
                <button onClick={() => setPassengers(Math.min(10, passengers + 1))}>+</button>
              </div>
            </div>

            {/* Search Button */}
            <button className="search-btn">
              🔍 Tìm chuyến xe
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          <div className="stat">
            <strong>10M+</strong>
            <span>Hành khách</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <strong>300+</strong>
            <span>Nhà xe</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <strong>1000+</strong>
            <span>Tuyến đường</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <strong>4.8⭐</strong>
            <span>Đánh giá</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
