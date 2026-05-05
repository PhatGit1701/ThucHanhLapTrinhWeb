import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <span className="logo__icon">🚌</span>
          <span className="logo__text">
            <span className="logo__ve">Ve</span>
            <span className="logo__xe">Xe</span>
            <span className="logo__re">Re</span>
          </span>
        </a>

        {/* Nav Links */}
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#popular-routes">Tuyến phổ biến</a></li>
          <li><a href="#promotions">Khuyến mãi</a></li>
          <li><a href="#operators">Nhà xe</a></li>
          <li><a href="#app-download">Ứng dụng</a></li>
        </ul>

        {/* Auth Buttons */}
        <div className="navbar__auth">
          <button className="btn-login">Đăng nhập</button>
          <button className="btn-register">Đăng ký</button>
        </div>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
