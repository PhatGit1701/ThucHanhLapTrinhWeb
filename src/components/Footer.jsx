import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span>🚌</span>
              <span>
                <span style={{ color: 'var(--primary)' }}>Ve</span>
                <span style={{ color: 'var(--secondary)' }}>Xe</span>
                <span style={{ color: 'var(--primary-dark)' }}>Re</span>
              </span>
            </a>
            <p>Nền tảng đặt vé xe khách trực tuyến hàng đầu Việt Nam. Kết nối hành khách và nhà xe mọi nơi, mọi lúc.</p>
            <div className="footer__social">
              <a href="#" title="Facebook">📘</a>
              <a href="#" title="Zalo">💬</a>
              <a href="#" title="YouTube">▶️</a>
              <a href="#" title="Instagram">📸</a>
            </div>
          </div>

          {/* Links */}
          <div className="footer__col">
            <h4>Về VeXeRe</h4>
            <ul>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Tin tức</a></li>
              <li><a href="#">Đối tác nhà xe</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Hỗ trợ khách hàng</h4>
            <ul>
              <li><a href="#">Câu hỏi thường gặp</a></li>
              <li><a href="#">Chính sách đổi vé</a></li>
              <li><a href="#">Chính sách hoàn tiền</a></li>
              <li><a href="#">Điều khoản dịch vụ</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Liên hệ</h4>
            <ul>
              <li>📞 1900 6910</li>
              <li>✉️ support@vexere.com</li>
              <li>🕐 7:00 – 22:00 hàng ngày</li>
            </ul>
            <div className="footer__stores">
              <a href="#" className="footer__store-btn">🍎 App Store</a>
              <a href="#" className="footer__store-btn">▶️ Google Play</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__inner footer__bottom-inner">
          <p>© 2025 VeXeRe. Thiết kế bởi nhóm sinh viên – Đồ án cuối môn.</p>
          <div className="footer__payment">
            {['💳 Visa', '💳 MasterCard', '🏦 Momo', '🏦 ZaloPay', '🏦 VNPay'].map((p, i) => (
              <span key={i} className="payment-badge">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
