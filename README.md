# 🚌 VeXeRe Clone – Đặt Vé Xe Khách Online

> Đồ án cuối môn – Trang chủ website đặt vé xe khách tương tự Vexere.com  
> Xây dựng bằng **ReactJS + Vite**

---

## 🚀 Cách chạy dự án

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Truy cập: [http://localhost:5173](http://localhost:5173)

### 3. Build cho production

```bash
npm run build
```

---

## 📁 Cấu trúc thư mục

```
vexere-clone/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Header điều hướng cố định
│   │   ├── Navbar.css
│   │   ├── Hero.jsx          ← Banner chính + Form tìm kiếm
│   │   ├── Hero.css
│   │   ├── PopularRoutes.jsx ← Grid tuyến đường phổ biến
│   │   ├── PopularRoutes.css
│   │   ├── Promotions.jsx    ← Danh sách khuyến mãi
│   │   ├── Promotions.css
│   │   ├── BusOperators.jsx  ← Nhà xe uy tín + CTA
│   │   ├── BusOperators.css
│   │   ├── AppDownload.jsx   ← Section tải ứng dụng
│   │   ├── AppDownload.css
│   │   ├── Footer.jsx        ← Footer đầy đủ
│   │   └── Footer.css
│   ├── App.jsx               ← Root component
│   ├── App.css               ← Global styles
│   ├── index.css             ← CSS variables & reset
│   └── main.jsx              ← Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🎨 Các tính năng giao diện

| Section | Mô tả |
|---------|-------|
| **Navbar** | Điều hướng cố định, đổi màu khi scroll, responsive |
| **Hero** | Nền gradient động, form tìm kiếm đầy đủ (1 chiều/khứ hồi), thống kê |
| **Tuyến phổ biến** | Grid 6 tuyến, hover animation, badge số chuyến/ngày |
| **Khuyến mãi** | Danh sách deal với mã coupon có thể copy |
| **Nhà xe** | Grid 8 nhà xe + CTA đăng ký hợp tác |
| **Tải app** | Mockup điện thoại + nút App Store/Google Play |
| **Footer** | 4 cột links + thanh toán + mạng xã hội |

---

## 🛠️ Tech Stack

- **ReactJS 18** – UI Library
- **Vite 4** – Build tool siêu nhanh
- **CSS Modules** – Styling theo component
- **Google Fonts** – Raleway + Nunito
