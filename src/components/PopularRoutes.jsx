import React from 'react'
import './PopularRoutes.css'

const routes = [
  { from: 'Hà Nội', to: 'Đà Nẵng', price: '280.000', duration: '13h', trips: 42, img: '🌉', gradient: 'linear-gradient(135deg,#0ea5e9,#1d4ed8)' },
  { from: 'Hồ Chí Minh', to: 'Đà Lạt', price: '180.000', duration: '7h', trips: 65, img: '🌸', gradient: 'linear-gradient(135deg,#22c55e,#059669)' },
  { from: 'Hồ Chí Minh', to: 'Vũng Tàu', price: '120.000', duration: '2.5h', trips: 88, img: '🌊', gradient: 'linear-gradient(135deg,#f97316,#dc2626)' },
  { from: 'Hà Nội', to: 'Hạ Long', price: '150.000', duration: '3.5h', trips: 54, img: '⛵', gradient: 'linear-gradient(135deg,#a855f7,#6366f1)' },
  { from: 'Đà Nẵng', to: 'Hội An', price: '50.000', duration: '1h', trips: 120, img: '🏮', gradient: 'linear-gradient(135deg,#eab308,#f97316)' },
  { from: 'Hồ Chí Minh', to: 'Cần Thơ', price: '140.000', duration: '3.5h', trips: 76, img: '🚢', gradient: 'linear-gradient(135deg,#14b8a6,#0891b2)' },
]

const PopularRoutes = () => {
  return (
    <section className="popular-routes" id="popular-routes">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">🔥 Được tìm nhiều nhất</span>
          <h2>Tuyến Đường Phổ Biến</h2>
          <p>Những hành trình được hàng triệu hành khách tin chọn mỗi ngày</p>
        </div>

        <div className="routes-grid">
          {routes.map((route, i) => (
            <div className="route-card" key={i} style={{ '--card-gradient': route.gradient }}>
              <div className="route-card__banner">
                <span className="route-card__emoji">{route.img}</span>
                <div className="route-card__badge">{route.trips}+ chuyến/ngày</div>
              </div>
              <div className="route-card__body">
                <div className="route-card__journey">
                  <span className="city-from">{route.from}</span>
                  <span className="journey-arrow">→</span>
                  <span className="city-to">{route.to}</span>
                </div>
                <div className="route-card__meta">
                  <span className="meta-duration">⏱ {route.duration}</span>
                  <div className="meta-price">
                    <span>Từ</span>
                    <strong>{route.price}₫</strong>
                  </div>
                </div>
                <button className="route-card__btn">Xem chuyến xe</button>
              </div>
            </div>
          ))}
        </div>

        <div className="routes-more">
          <button className="btn-more">Xem tất cả tuyến đường →</button>
        </div>
      </div>
    </section>
  )
}

export default PopularRoutes
