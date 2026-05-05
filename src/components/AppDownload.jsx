import React from 'react'
import './AppDownload.css'

const features = [
  { icon: '⚡', title: 'Đặt vé siêu nhanh', desc: 'Chỉ 3 bước để có vé xe trong tay' },
  { icon: '🔔', title: 'Thông báo real-time', desc: 'Cập nhật trạng thái chuyến xe tức thì' },
  { icon: '💳', title: 'Thanh toán dễ dàng', desc: 'Hỗ trợ 15+ phương thức thanh toán' },
  { icon: '🎫', title: 'Vé điện tử tiện lợi', desc: 'Không cần in vé, xuất trình bằng điện thoại' },
]

const AppDownload = () => {
  return (
    <section className="app-download" id="app-download">
      <div className="app-download__inner">
        <div className="app-download__content">
          <span className="section-tag" style={{ background: 'rgba(255,215,0,0.2)', color: 'var(--accent)', borderColor: 'rgba(255,215,0,0.4)' }}>
            📱 Tải ứng dụng
          </span>
          <h2>Trải Nghiệm Tốt Hơn<br />Trên Di Động</h2>
          <p>
            Tải ngay ứng dụng VeXeRe để đặt vé xe khách nhanh chóng,
            nhận ưu đãi độc quyền và quản lý hành trình dễ dàng hơn.
          </p>

          <div className="app-features">
            {features.map((f, i) => (
              <div className="app-feature" key={i}>
                <span className="feature-icon">{f.icon}</span>
                <div>
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="app-download__btns">
            <a href="#" className="store-btn appstore">
              <span className="store-icon">🍎</span>
              <div>
                <span>Tải trên</span>
                <strong>App Store</strong>
              </div>
            </a>
            <a href="#" className="store-btn googleplay">
              <span className="store-icon">▶️</span>
              <div>
                <span>Tải trên</span>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
        </div>

        <div className="app-download__mockup">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="mock-header">
                <span>🚌 VeXeRe</span>
                <span>📍 TP. HCM</span>
              </div>
              <div className="mock-search">
                <div className="mock-field">📍 Hồ Chí Minh</div>
                <div className="mock-swap">⇄</div>
                <div className="mock-field">🏁 Đà Lạt</div>
              </div>
              <div className="mock-date">📅 Hôm nay · 1 khách</div>
              <div className="mock-btn">🔍 Tìm chuyến xe</div>
              <div className="mock-promo">
                <span>⚡ Flash Sale</span>
                <span>Giảm đến 50K</span>
              </div>
              <div className="mock-trips">
                {['Phương Trang', 'Thành Bưởi', 'Kumho Samco'].map((name, i) => (
                  <div className="mock-trip" key={i}>
                    <div>
                      <strong>{name}</strong>
                      <span>07:{i * 30 + 30 < 60 ? '30' : '00'} • Giường nằm</span>
                    </div>
                    <strong>{180 + i * 20}.000₫</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="phone-glow"></div>
        </div>
      </div>
    </section>
  )
}

export default AppDownload
