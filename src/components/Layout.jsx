import {useState} from 'react';
import {Link,NavLink,useLocation} from 'react-router-dom';

const links=[['/bamboo','Бамбук'],['/acoustic','Акустика'],['/calculator','Калькулятор'],['/projects','Проекты'],['/dealer','Дилерам'],['/contact','Контакты']];

export function Layout({children}){
  const[menu,setMenu]=useState(false),loc=useLocation();
  return <>
    <div className="announcement">Панели для жилых и коммерческих интерьеров · Казахстан и Кыргызстан <Link to="/contact">Получить точный расчёт →</Link></div>
    <header className={`nav ${menu?'mobile-open':''}`}>
      <Link className="brand" to="/" aria-label="Kapitik Art Studio">
        <img className="brand-logo" src="/assets/logo.png" alt="Kapitik Art Studio" />
      </Link>
      <nav className="nav-links">
        {links.map(([to,label])=><NavLink key={to} to={to}>{label}</NavLink>)}
        {loc.pathname==='/'&&<><a href="#process">Как заказать</a><a href="#faq">FAQ</a></>}
      </nav>
      <Link className="btn btn-primary nav-cta" to="/contact">Получить расчёт</Link>
      <button className="menu-toggle" onClick={()=>setMenu(v=>!v)} aria-label="Меню">☰</button>
      {menu&&<div className="mobile-panel">
        {links.map(([to,label])=><Link key={to} to={to} onClick={()=>setMenu(false)}>{label}</Link>)}
        {loc.pathname==='/'&&<><a href="#process" onClick={()=>setMenu(false)}>Как заказать</a><a href="#faq" onClick={()=>setMenu(false)}>FAQ</a></>}
        <Link to="/contact" onClick={()=>setMenu(false)}>Получить расчёт</Link>
      </div>}
    </header>
    {children}<Footer/>
  </>
}

export function Footer(){
  return <footer className="footer">
    <div className="footer-main">
      <div>
        <Link className="footer-logo-link" to="/" aria-label="Kapitik Art Studio">
          <img className="footer-logo" src="/assets/logo.png" alt="Kapitik Art Studio" />
        </Link>
        <p>ECO панели для жилых и коммерческих интерьеров.</p>
      </div>
      <div className="footer-links"><Link to="/bamboo">Бамбук</Link><Link to="/acoustic">Акустика</Link><Link to="/calculator">Калькулятор</Link><Link to="/dealer">Дилерам</Link><Link to="/projects">Проекты</Link><Link to="/contact">Контакты</Link></div>
      <div className="footer-contact">
        <span className="footer-label">КОНТАКТЫ</span>
        <a className="icon-link" href="tel:+77784844190"><img src="/assets/phone.png" alt=""/>+7 778 484 41 90</a>
        <a className="icon-link" href="mailto:weasellux@gmail.com"><img src="/assets/email.png" alt=""/>weasellux@gmail.com</a>
        <a className="icon-link" href="https://www.instagram.com/kapitik_art.kz/" target="_blank" rel="noreferrer"><img src="/assets/instagram.png" alt=""/>Instagram ↗</a>
      </div>
    </div>
    <div className="footer-bottom"><span>© 2026 Kapitik Art Studio · Prototype</span><span>Алматы · Астана · Бишкек</span><a href="https://www.instagram.com/kapitik_art.kz/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
  </footer>
}
