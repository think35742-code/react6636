import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const products = [
    { name: '걘역시 S26 Ultra', tone: 'graphite', originalPrice: '1,698,400원', price: '84,920원' },
    { name: '걘역시 S26+', tone: 'silver', originalPrice: '1,353,000원', price: '67,650원' },
    { name: '걘역시 S26', tone: 'mint', originalPrice: '1,155,000원', price: '57,750원' },
  ]

  const benefits = [
    ['01', '갤럭시 워치9 혜택', '스마트워치와 함께 더 알뜰하게'],
    ['02', '다이렉트 휴대폰 쿠폰', '기간 한정 최대 5만원 할인'],
    ['03', '매월 7% 요금 할인', '부담을 낮추는 다이렉트 혜택'],
    ['04', '인기 사은품 선택', 'S26에 딱 맞는 선물을 골라보세요'],
    ['05', '액세서리 패키지', '필수 액세서리 4종과 클리어 케이스'],
  ]

  return (
    <div className="kt-container">
      <nav className="top-nav" aria-label="주요 메뉴">
        <a className="brand" href="#top" aria-label="KDH SHOP 홈">KDH <span>SHOP</span></a>
        <div className="nav-links">
          <a href="#products">상품</a>
          <a href="#benefits">혜택</a>
          <a href="#apply">신청</a>
        </div>
      </nav>

      <header className="kt-header">
        <div className="event-meta"><span>KDH SHOP 기획전</span><span>2026.02.26부터</span><span>조회수 5,982,723</span></div>
        <div className="hero-copy">
          <p className="eyebrow">KDH SHOP x SAMSUNG</p>
          <h1>걘역시 S26 Series</h1>
          <p>새로운 기준의 걘역시 S26을<br className="mobile-break" /> KDH SHOP에서 만나보세요.</p>
          <a className="hero-link" href="#products">제품 둘러보기 <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero-device" aria-hidden="true">
          <div className="device device-back device-back-left"><span className="camera camera-one"></span><span className="camera camera-two"></span><span className="camera camera-three"></span></div>
          <div className="device device-front"><span className="screen-glow"></span></div>
          <div className="device device-back device-back-right"><span className="camera camera-one"></span><span className="camera camera-two"></span><span className="camera camera-three"></span></div>
        </div>
      </header>

      <main>
        <section id="products" className="product-section">
          <div className="section-heading">
            <div><p className="eyebrow">CHOOSE YOUR GALAXY</p><h2>S26 시리즈는 역시 KDH SHOP에서</h2></div>
            <p>원하는 모델을 선택하고<br />나에게 맞는 혜택을 확인하세요.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className={`product-visual ${product.tone}`} aria-label={`${product.name} 제품 이미지`}>
                  <div className="product-phone"><span className="product-camera"></span><span className="product-camera second"></span><span className="product-camera third"></span></div>
                </div>
                <div className="product-info"><h3>{product.name}</h3><p><del>{product.originalPrice}</del><strong>{product.price}</strong><em>95% 할인</em></p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="benefits" className="benefits-section">
          <div className="section-heading"><div><p className="eyebrow">SHOPPING BENEFITS</p><h2>S26 시리즈 구매 혜택</h2></div><span className="section-number">05 BENEFITS</span></div>
          <div className="benefit-grid">
            {benefits.map(([number, title, description]) => <article className="benefit-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b aria-hidden="true">↗</b></article>)}
          </div>
        </section>

        <section id="apply" className="promo-section">
          <div className="promo-counter-box">
            <div><p className="eyebrow">KDH DIRECT BENEFIT</p><h2>지금 신청하면 추가 혜택 적용!</h2><p>현재 실시간 혜택 신청 인원: <strong>{count}</strong>명</p></div>
          <button
            type="button"
            className="kt-btn-primary"
            onClick={() => setCount((count) => count + 1)}
          >
            혜택 신청하기 <span aria-hidden="true">→</span>
          </button>
          </div>
        </section>
      </main>

      <footer className="kt-footer">
        <p>KDH SHOP</p><span>걘역시 S26 Series Exhibition</span><small>© KDH SHOP. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App