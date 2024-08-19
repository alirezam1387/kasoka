import React, { useEffect } from 'react'
import './Footer.css'

// icons
import { FaGithub, FaInstagram, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";


// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// aos
import AOS from "aos";
import "aos/dist/aos.css";

function FooterLink({ title, link = '#' }) {
    return (
        <li className='footer-link'>
            <IoIosArrowBack />
            <a href={link}>{title}</a>
        </li>
    )
}

function FooterLinks({ title }) {
    return (
        <>
            <p className="title">{title}</p>
        </>
    )
}

export default function Footer() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <footer>
            <div className='footer-div'>
                <Row>
                    <Col className='info' sm={6} lg={4} xl={3}>
                        <div className="logo d-flex align-items-center">
                            <img src="./images/logo.png" alt="logo" />
                            <h1>KASOKA</h1>
                        </div>
                        <p>آدرس : خیابان رحمانی کوچه 11 پلاک 10</p>
                        <p> شماره: 09384955031</p>
                        <p>ایمیل: airezam21359640@gmail.com </p>

                        <div className="social-media">
                            <a className="social-box item1 ">
                                <FaGithub />
                            </a>
                            <a className="social-box item2 ">
                                <FaInstagram />
                            </a>
                            <a className="social-box item3 ">
                                <FaTelegramPlane />
                            </a>
                            <a className="social-box item4 ">
                                <FaDiscord />
                            </a>
                        </div>
                    </Col>
                    <Col xs={6} lg={4} xl={3}>
                        <FooterLinks title='لینک های مفید'></FooterLinks>
                        <ul>
                            <FooterLink title='خانه'></FooterLink>
                            <FooterLink title='درباره ما'></FooterLink>
                            <FooterLink title='خدمات'></FooterLink>
                            <FooterLink title='شرایط استفاده از خدمات'></FooterLink>
                            <FooterLink title='سیاست حفظ حریم خصوصی'></FooterLink>
                        </ul>
                    </Col>
                    <Col xs={6} lg={4} xl={3} xxl={2}>
                        <FooterLinks title='خدمات ما'></FooterLinks>
                        <ul>
                            <FooterLink title='طراحی وب سایت'></FooterLink>
                            <FooterLink title='توسعه وب'></FooterLink>
                            <FooterLink title='بازی سازی'></FooterLink>
                            <FooterLink title='بازاریابی'></FooterLink>
                            <FooterLink title='طراحی گرافیک'></FooterLink>
                        </ul>
                    </Col>
                    <Col sm={6} xl={3} xxl={4}>
                        <p className='title'>خبرنامه</p>
                        <p className='sub-title'>شما میتوانید با وارد کردن ایمیل خود در بخش خبر نامه سایت ما ثبت نام کنید</p>

                        <InputGroup className="mb-3 w-100" style={{ direction: 'ltr' }}>
                            <Button className='footer-btn' id="button-addon1">
                                ثبت نام
                            </Button>
                            <Form.Control
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </div>
            <div className="subFooter">
                <center>
                    <p className='m-0'>نوشته شده توسط  <a href="">علیرضا اقدم</a></p>
                </center>
            </div>
        </footer>
    )
}
