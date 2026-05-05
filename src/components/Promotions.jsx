import React from 'react'
import './Promotions.css'

const promos = [
  {
    tag: 'HOT',
    title: 'Giảm 50K cho chuyến đầu tiên',
    desc: 'Áp dụng cho khách hàng mới đặt vé lần đầu tiên qua ứng dụng VeXeRe',
    code: 'NEWBIE50',
    expires: '31/12/2025',
    color: '#ff4757',
    icon: '🎁',
  },
  {
    tag: 'FLASH',
    title: 'Flash Sale cuối tuần -30%',
    desc: 'Ưu đãi đặc biệt cho các tuyến TP.HCM – Đà Lạt, TP.HCM – Vũng Tàu',
    code: 'WEEKEND30',
    expires: '15/01/2026',
    color: '#ffa502',
    icon: '⚡',
  },
  {
    tag: 'MỚI',
    title: 'Miễn phí phí dịch vụ tháng này',
    desc: 'Đặt vé qua app, được miễn toàn bộ phí dịch vụ trong tháng 12',
    code: 'FREEFEE',
    expires: '31/12/2025',
    color: '#2ed573',
    icon: '🆓',
  },
]

const Promotions = () => {
  return (
    <section className="promotions" id="promotions">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">💰 Tiết kiệm hơn mỗi chuyến đi</span>
          <h2>Ưu Đãi & Khuyến Mãi</h2>
          <p>Đừng bỏ lỡ những ưu đãi hấp dẫn dành riêng cho bạn</p>
        </div>

        <div className="promos-list">
          {promos.map((promo, i) => (
            <div className="promo-card" key={i} style={{ '--promo-color': promo.color }}>
              <div className="promo-card__left">
                <span className="promo-icon">{promo.icon}</span>
              </div>
              <div className="promo-card__body">
                <span className="promo-tag">{promo.tag}</span>
                <h3>{promo.title}</h3>
                <p>{promo.desc}</p>
                <div className="promo-meta">
                  <div className="promo-code">
                    <span>Mã:</span>
                    <strong>{promo.code}</strong>
                    <button className="copy-btn" onClick={() => navigator.clipboard?.writeText(promo.code)}>
                      📋 Sao chép
                    </button>
                  </div>
                  <span className="promo-expires">Hết hạn: {promo.expires}</span>
                </div>
              </div>
              <button className="promo-use-btn">Dùng ngay</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Promotions
