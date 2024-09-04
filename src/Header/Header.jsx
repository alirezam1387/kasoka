import './header.css'
import { useEffect } from 'react';

// icons
import { FaUserGraduate, FaShoppingBasket, FaChartLine } from "react-icons/fa";
import { TiMediaPlayReverse } from "react-icons/ti";
import { CiTextAlignJustify } from "react-icons/ci";

// images
import logo from '../images/logo.png'

// aos
import AOS from "aos";
import "aos/dist/aos.css"

function NavLink({ name }) {
    return (
        <a href="#" className="nav-link over">{name}</a>
    )
}

function HeaderBox({ title, delay, children }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="header-box-info-div" data-aos="zoom-in" data-aos-delay={delay}>
            <div className='header-box-info'>
                {children}
                <a href='#' className='header-box-title'>{title}</a>
            </div>
        </div>
    )
}

function Header() {

    return (
        <div className='header-box'>
            <div className='header-con'>
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h1>KASOKA</h1>
                    </div>
                    <div className="nav-links">
                        <NavLink name="تماس با ما"></NavLink>
                        <NavLink name="لیست کشویی"></NavLink>
                        <NavLink name="تیم"></NavLink>
                        <NavLink name="نمونه کار"></NavLink>
                        <NavLink name="خدمات"></NavLink>
                        <NavLink name="درباره ما"></NavLink>
                        <NavLink name="خانه"></NavLink>
                    </div>
                    <div className="start-btn-div">
                        <button>شروع</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                        </svg>
                    </div>
                </div>

                <div className="header-info">
                    <h2 data-aos="fade-up"  data-aos-duration="1000">
                        <span>Kasuka</span>
                        راه حل های قدرتمند دیجیتال با
                    </h2>
                    <p>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
                </div>

                <div className="header-boxs">
                    <HeaderBox delay={50} title="اطلاعات ذخیره شده">
                        <FaUserGraduate />
                    </HeaderBox>
                    <HeaderBox delay={150} title="عملکرد های پایانی">
                        <FaShoppingBasket />
                    </HeaderBox>
                    <HeaderBox delay={250} title="نمونه کار ها">
                        <TiMediaPlayReverse />
                    </HeaderBox>
                    <HeaderBox delay={350} title="نمودار کیفی">
                        <FaChartLine />
                    </HeaderBox>
                    <HeaderBox delay={450} title="متن نمایشی">
                        <CiTextAlignJustify />
                    </HeaderBox>
                </div>
            </div>
        </div>
    )
}

export default Header