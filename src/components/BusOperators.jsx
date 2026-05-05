import React from 'react'
import './BusOperators.css'

const operators = [
  { name: 'Phương Trang', rating: 4.8, routes: 120, color: '#e53e3e', initial: 'PT' },
  { name: 'Thành Bưởi', rating: 4.7, routes: 85, color: '#dd6b20', initial: 'TB' },
  { name: 'Hoàng Long', rating: 4.6, routes: 96, color: '#2b6cb0', initial: 'HL' },
  { name: 'Mai Linh', rating: 4.5, routes: 74, color: '#276749', initial: 'ML' },
  { name: 'Kumho Samco', rating: 4.8, routes: 63, color: '#744210', initial: 'KS' },
  { name: 'Quê Hương', rating: 4.6, routes: 58, color: '#553c9a', initial: 'QH' },
  { name: 'Hùng Cường', rating: 4.4, routes: 45, color: '#1a365d', initial: 'HC' },
  { name: 'An Phú Limousine', rating: 4.9, routes: 32, color: '#1d4044', initial: 'AP' },
]

const BusOperators = () => {
  return (
    <section className="operators" id="operators">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">🚌 Đối tác vận chuyển</span>
          <h2>Nhà Xe Uy Tín</h2>
          <p>Hợp tác với những nhà xe hàng đầu Việt Nam, cam kết chất lượng dịch vụ tốt nhất</p>
        </div>

        <div className="operators-grid">
          {operators.map((op, i) => (
            <div className="operator-card" key={i}>
              <div className="operator-avatar" style={{ background: op.color }}>
                {op.initial}
              </div>
              <div className="operator-info">
                <h4>{op.name}</h4>
                <div className="operator-meta">
                  <span className="op-rating">⭐ {op.rating}</span>
                  <span className="op-routes">{op.routes} tuyến</span>
                </div>
              </div>
              <button className="op-btn">Xem →</button>
            </div>
          ))}
        </div>

        <div className="operators-cta">
          <div className="cta-box">
            <span className="cta-icon">🤝</span>
            <div>
              <h3>Bạn là chủ nhà xe?</h3>
              <p>Đăng ký hợp tác cùng VeXeRe để tiếp cận hàng triệu khách hàng</p>
            </div>
            <button className="cta-btn">Đăng ký ngay</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusOperators
