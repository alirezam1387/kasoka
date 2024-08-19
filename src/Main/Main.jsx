import React, { Component } from 'react';
import './Main.css';
import { ServiceBox } from './ServicesBox';
import Slider from './slider';
import { useEffect } from 'react';

// icons
import { FaPlusCircle, FaGithub, FaInstagram, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaLink, FaLocationDot } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";
import { BiSpreadsheet } from "react-icons/bi";
import { CiChat1, CiSettings, CiFlag1 } from "react-icons/ci";
import { IoMdHappy, IoIosCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";


// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// counter
import CountUp from 'react-countup';



class ComponayText extends Component {
    render() {
        return (
            <li className='company-text'>
                <TiTickOutline />
                <span>{this.props.text}</span>
            </li>
        )
    }
}

function Proprety({ title, desc, delay, children }) {
    return (
        <div className='proprety' data-aos="zoom-in-down" data-aos-delay={delay}>
            {children}
            <div className='proprety-info'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

        </div>
    )
}

function MainTitle({ title }) {
    return (
        <div className='title-div' data-aos="flip-left"
            data-aos-duration="800">
            <p className='title'>{title}</p>
            <h2>{title} ما را برسی کنید</h2>
        </div>
    )
}

function SentenceBox({ title, children }) {

    return (
        <div className='sentence-box'>
            <h2 className='title'>{title}</h2>
            {children}
            <button data-aos="zoom-in-down" className='title-btn'>{title}</button>
        </div>
    )
}

function PortfolioTitle({ title, isActive }) {
    return (
        isActive ? <p className='portfolio-title active'>{title}</p> : <p className='portfolio-title'>{title}</p>

    )
}

function PortfolioImgBox({ img, title }) {
    return (
        <div className="portfolio-img" data-aos="fade-down" data-aos-duration="1000">
            <img src={img} alt={title} />
            <div className='info'>
                <h3>{title}</h3>
                <div className='icons'>
                    <FaPlusCircle />

                    <FaLink />

                </div>
            </div>
        </div>
    )
}

function Statistics({ num, info, icon }) {

    return (
        <Col sm={6} xs={12} className='statistics'>
            <div className='d-flex align-items-center'>
                {icon}
                <CountUp className='num' end={num} duration={3} enableScrollSpy={true} scrollSpyDelay={750} />
            </div>
            <p className='info-text fw-bold'>{info}</p>
        </Col>
    )
}

function TeamCard({ img, name, job, delay }) {
    return (
        <Col xl={3} lg={4} sm={6} xs={12} data-aos="flip-up" data-aos-delay={delay} data-aos-duration="800">
            <Card className='team-card'>
                <Card.Img variant="top" src={img} />
                <div className="social-media position-absolute">
                    <div className="social-box item1 ">
                        <FaGithub />
                    </div>
                    <div className="social-box item2 ">
                        <FaInstagram />
                    </div>
                    <div className="social-box item3 ">
                        <FaTelegramPlane />
                    </div>
                    <div className="social-box item4 ">
                        <FaDiscord />
                    </div>
                </div>
                <Card.Body className='team-card-body'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {job}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

function Information({ title, subtitle, icon, delay }) {
    return (
        <>
            <div className='info-box d-flex' data-aos="fade-left" data-aos-delay={delay} data-aos-duraion="800">
                <div className="icon">
                    {icon}
                </div>
                <div className="text-info-box">
                    <h4>{title} :</h4>
                    <span>{subtitle}</span>
                </div>

            </div>

        </>
    )
}

function Main() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const propreties = [
        { delay: 50, title: "تبلیغ سختی است", desc: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند" },
        { delay: 150, title: "کدام یک از اینهاست", desc: "کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند" },
        { delay: 250, title: "یا کور شده است", desc: "یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند" },
        { delay: 350, title: "حقیقت مبارک", desc: "آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند" }
    ];

    const services = [
        { delay: 50, title: "دردهای بزرگ", info: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { delay: 150, title: "دردهای بزرگ", info: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { delay: 250, title: "دردهای بزرگ", info: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { delay: 350, title: "دردهای بزرگ", info: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { delay: 450, title: "دردهای بزرگ", info: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { delay: 550, title: "دردهای بزرگ", info: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
    ];

    return (
        <main>
            <div className="company-main">
                <div className='company'>
                    <div className='img-div' data-aos="fade-right" data-aos-duration="500">
                        <img src="./images/company.jpg" alt="company" />
                    </div>
                    <ul className='company-info' data-aos="fade-left" data-aos-duration="500">
                        <h2>شرکت دیجیتال کاسوکا</h2>
                        <span>شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند. فضای دیجیتال تحول شگرف در ارتباطات و نحوه تعامل مردم با یکدیگر بوجود آورده است. ابزارها و پلتفرم های بوجود آمده در این عصر، قدرت چانه زنی و انتخاب را برای مردم افزایش داده و موجب سهولت در ارزیابی و مقایسه برندها و محصولات مختلف گردیده است. ما این تغییر نگرش در انتخاب یک برند و محصول را نوعی فرصت برای خود و مشتریانمان به حساب می آوریم. در فضای دیجیتال به راحتی می توان بازار هدف را شناسایی، نیازها، خواسته ها و علایق آنها را کشف و با استفاده از اطلاعاتی که بدست می آید به خلق و توسعه محصولات، برند و تجربیات مناسب که از ادغام تکنولوژی و خلاقیت در کنار متد بازاریابی نوین ناشی میشود، اقدام کرد. در نوآد ما آماده پذیرفتن چالش های جدید هستیم و با هر قیمت که شده به تعهدات خود پایبند می مانیم.</span>
                        <ComponayText text="۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی"></ComponayText>
                        <ComponayText text="تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد."></ComponayText>
                        <ComponayText text="برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید"></ComponayText>
                    </ul>
                </div>
            </div>

            <Slider></Slider>

            <div className="propreties-main">
                <div className="propreties">
                    <div className='propretys-box'>
                        <Proprety {...propreties[0]}><BiSpreadsheet /></Proprety>
                        <Proprety {...propreties[1]}><CiChat1 /></Proprety>
                        <Proprety {...propreties[2]}><CiSettings /></Proprety>
                        <Proprety {...propreties[3]}><CiFlag1 /></Proprety>
                    </div>
                    <div className='proprety-img' data-aos="zoom-out-left" data-aos-duration="500"></div>

                </div>
            </div>

            <div className="services-main">
                <div className="services">
                    <MainTitle title="خدمات"></MainTitle>

                    <div className="services-box">
                        <ServiceBox {...services[0]}></ServiceBox>
                        <ServiceBox {...services[1]}></ServiceBox>
                        <ServiceBox {...services[2]}></ServiceBox>
                        <ServiceBox {...services[3]}></ServiceBox>
                        <ServiceBox {...services[4]}></ServiceBox>
                        <ServiceBox {...services[5]}></ServiceBox>
                    </div>
                </div>
            </div>

            <div className="sentence-main-box">
                <SentenceBox title="فراخوانی برای اقدام">
                    <p>اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.</p>
                </SentenceBox>
            </div>

            <div className='portfolio-main'>
                <div className='portfolio'>
                    <MainTitle title='نمونه کار ها'></MainTitle>
                </div>
                <div className="portfolio-title-box" data-aos="flip-left" data-aos-duration="1000">
                    <PortfolioTitle title='اینترنت'></PortfolioTitle>
                    <PortfolioTitle title='محصول'></PortfolioTitle>
                    <PortfolioTitle title='برنامه'></PortfolioTitle>
                    <PortfolioTitle title='همه' isActive={true}></PortfolioTitle>
                </div>
                <div className="portfolio-img-box">
                    <PortfolioImgBox title='برنامه' img='./images/Portfolio/portfolio-1.jpg'></PortfolioImgBox>
                    <PortfolioImgBox title='برنامه' img='./images/Portfolio/portfolio-5.jpg'></PortfolioImgBox>
                    <PortfolioImgBox title='برنامه' img='./images/Portfolio/portfolio-2.jpg'></PortfolioImgBox>
                    <PortfolioImgBox title='برنامه' img='./images/Portfolio/portfolio-6.jpg'></PortfolioImgBox>
                    <PortfolioImgBox title='برنامه' img='./images/Portfolio/portfolio-2.jpg'></PortfolioImgBox>
                    <PortfolioImgBox title='برنامه' img='./images/Portfolio/portfolio-3.jpg'></PortfolioImgBox>
                    <PortfolioImgBox title='برنامه' img='./images/Portfolio/portfolio-4.jpg'></PortfolioImgBox>
                    <PortfolioImgBox title='برنامه' img='./images/Portfolio/portfolio-5.jpg'></PortfolioImgBox>
                    <PortfolioImgBox title='برنامه' img='./images/Portfolio/portfolio-6.jpg'></PortfolioImgBox>
                </div>
            </div>

            <div className="counts-main">
                <Row className="counts">
                    <Col lg={6} xs={12} className='info-nav' data-aos="fade-right" data-aos-duration="800">
                        <h2 className='title'>شایسته ترین لذت را به هر حال ارائه می دهد</h2>
                        <p className="sub-title">خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
                        <Row>
                            <Statistics icon={<IoMdHappy />} num={65} info='مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم' />
                            <Statistics icon={<IoMdHappy />} num={65} info='مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم' />
                            <Statistics icon={<IoMdHappy />} num={65} info='مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم' />
                            <Statistics icon={<IoMdHappy />} num={65} info='مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم' />
                        </Row>
                    </Col>
                    <Col lg={6} className='img-nav' data-aos="fade-left" data-aos-duration="800"></Col>
                </Row>
            </div>

            <div className="team-main">
                <div className="team">
                    <MainTitle title='تیم'></MainTitle>
                    <Row style={{ rowGap: '20px' }}>
                        <TeamCard delay={50} img='./images/team/p2.png' job='حسابدار' name='علی عزیزی'></TeamCard>
                        <TeamCard delay={150} img='./images/team/p1.png' job='مدیر پروژه' name='ساره اسماعیلی'></TeamCard>
                        <TeamCard delay={250} img='./images/team/p3.png' job='برنامه نویس' name='محدثه حبیبی'></TeamCard>
                        <TeamCard delay={350} img='./images/team/p1.png' job='حسابدار' name='علی عزیزی'></TeamCard>
                    </Row>
                </div>

            </div>

            <div className="contact-us-main">
                <div className="contact-us">
                    <MainTitle title='اطلاعات'></MainTitle>
                    <Row style={{ rowGap: '20px' }}>
                        <Col md={7} xs={12} className='form'>
                            <form data-aos="zoom-in" data-aos-duration='800'>
                                <Row style={{ rowGap: '20px' }}>
                                    <Col xs={12} sm={6}>
                                        <Form.Control type="text" placeholder="نام و نام خانوادگی" />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Control type="email" placeholder="ایمیل" />
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Control type="text" placeholder="عنوان" />
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Control as="textarea" rows={3} placeholder='متن پیام' />
                                    </Col>
                                    <button type='submit'>ارسال پیام</button>

                                </Row>
                            </form>
                        </Col>

                        <Col md={5} xs={12} className='info'>
                            <Information delay={50} title="مکان" subtitle="خیابان رحمانی کوچه 11 پلاک 10" icon={<FaLocationDot />} ></Information>
                            <Information delay={150} title="ایمیل" subtitle="alirezam@gmail.com" icon={<MdAlternateEmail />} ></Information>
                            <Information delay={250} title="تماس" subtitle="09384955031" icon={<IoIosCall />} ></Information>
                        </Col>

                    </Row>
                </div>

            </div>

            <br /><br /><br /><br />


        </main>
    )
}

export default Main