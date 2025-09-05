import { useState } from 'react';

import { Calendar, Next, Prev, Time } from './Icons';
import Styles from './main.module.css';

const NAVS = ['Home', 'Service', 'Team', 'Blog', 'Contact'];

const SERVICES = [
  {
    id: 'grow',
    title: 'Grow your traffic',
    img: '/assets/3d-web/growth.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 'leads',
    title: 'Get quality leads',
    img: '/assets/3d-web/leads.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 'sales',
    title: 'Drive more sales',
    img: '/assets/3d-web/sales.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const BLOGS = [
  {
    id: 'list',
    img: '/assets/3d-web/blog-list.png',
    date: '13 April, 2023',
    readTime: '12',
    title: 'Waiting list management',
    subtext: `The waitlist is an invaluable marketing tool when used appropriately.  Here's how to capture those contacts.`,
  },
  {
    id: 'ecomm',
    img: '/assets/3d-web/blog-ecomm.png',
    date: '15 May, 2023',
    readTime: '8',
    title: 'E-commerce update',
    subtext: `The waitlist is an invaluable marketing tool when used appropriately.  Here's how to capture those contacts.`,
  },
  {
    id: 'shopify',
    img: '/assets/3d-web/blog-shopify.png',
    date: '18 July, 2023',
    readTime: '16',
    title: 'Shopify’s Q2 Report',
    subtext: `The waitlist is an invaluable marketing tool when used appropriately.  Here's how to capture those contacts.`,
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Olga Zara',
    pic: '/assets/neo-brutalism/olga.png',
    position: 'CBO of Rosey',
    text: `Perfect agency for small businesses who want to grow, but haven't got time to take care of social media. Already seen growth with online orders...`,
  },
  {
    id: 2,
    name: 'Yogendra Singh',
    pic: '/assets/neo-brutalism/mitchell.png',
    position: 'CEO of Rabta',
    text: `We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us.`,
  },
  {
    id: 3,
    name: 'Christiana Matt',
    pic: '/assets/neo-brutalism/christina.png',
    position: 'CMO of Oval',
    text: `Perfect agency for small businesses who want to grow, but haven't got time to take care of social media. Already seen growth with online orders...`,
  },
];

const COLORS = ['#dbedf7', '#f9d27a', '#F990B695'];

export const Page = () => {
  const [current, setCurrent] = useState(0);

  const renderServices = ({ id, title, img, text }) => (
    <section className={Styles.serviceCard} key={id}>
      <img className={Styles.serviceImg} src={img} />
      <h3>{title}</h3>
      <p className={Styles.serviceText}>{text}</p>
    </section>
  );

  const renderBlogs = ({ date, title, readTime, img, subtext }, index) => (
    <div className={Styles.blogCard}>
      <div style={{ backgroundColor: COLORS[index], textAlign: 'center' }}>
        <img className={Styles.blogImg} src={img} />
      </div>
      <div className={Styles.blogContent}>
        <div className={Styles.blogMeta}>
          <span className={Styles.blogMeta}>
            <Calendar style={{ marginRight: 8 }} /> {date}
          </span>
          <span className={Styles.blogMeta}>
            <Time style={{ marginRight: 8 }} /> {readTime}m
          </span>
        </div>
        <h3>{title}</h3>
        <p className={Styles.subtext}>{subtext}</p>
      </div>
    </div>
  );

  const renderTestimonial = ({ id, name, position, text, pic }) => (
    <div className={Styles.sayCard} key={id}>
      <div className={Styles.sayHeader}>
        <img className={Styles.sayAvatar} src={pic} />
        <div>
          <p className={Styles.sayName}>{name}</p>
          <p className={Styles.sayPosition}>{position}</p>
        </div>
      </div>
      <p className={Styles.sayText}>{text}</p>
    </div>
  );

  const isLast = current === TESTIMONIALS.length - 1;

  return (
    <div className={Styles.page}>
      <div className={Styles.hero}>
        <header className={Styles.header}>
          <a href='/'>
            <span
              className={Styles.logo}
              style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}
            >
              Bytes & Pixels
            </span>
          </a>
          <menubar className={Styles.menubar}>
            {NAVS.map((title) => (
              <nav className={Styles.nav} key={title}>
                {title}
              </nav>
            ))}
          </menubar>
        </header>
        <div className={Styles.sectionContainer}>
          <div className={Styles.contentView}>
            <h1 className={Styles.heroHeading}>
              Get business solution with BytznPxls.
            </h1>
            <p className={Styles.heroText}>
              Power your business to new heights with our award-winning digital
              marketing services and technology platform.
            </p>

            <button className={Styles.button}>Get Started</button>
          </div>
          <div className={Styles.heroImgView}>
            <img className={Styles.heroImg} src='/assets/3d-web/heroImg.png' />
          </div>
        </div>
      </div>
      <div className={Styles.clients}>Companies</div>
      <div className={Styles.servicesView}>{SERVICES.map(renderServices)}</div>
      <div className={`${Styles.sectionContainer} ${Styles.whyView}`}>
        <div className={Styles.whyImgView}>
          <img className={Styles.whyImg} src='/assets/3d-web/whyUs.png' />
        </div>
        <div className={Styles.whyContent}>
          <h1 className={Styles.whyHeading}>We take care of your business</h1>
          <p className={Styles.whyText}>
            Power your business to new heights with our award-winning digital
            marketing services and technology platform.
          </p>
          <li className={Styles.whyPoints}>
            <span className={Styles.whyNumbers}>1</span>
            <p>Power your business to new heights with our award-winning</p>
          </li>
          <li className={Styles.whyPoints}>
            <span className={`${Styles.whyNumbers} ${Styles.second} `}>2</span>
            <p>
              Our award-winning digital marketing services and technology
              platform.
            </p>
          </li>
          <li className={Styles.whyPoints}>
            <span className={`${Styles.whyNumbers} ${Styles.third} `}>3</span>
            <p>
              Business to new heights with our award-winning digital marketing.
            </p>
          </li>
        </div>
      </div>
      <div className={Styles.sectionContainer}>
        <div className={Styles.numberContent}>
          <h1>Our Numbers</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <button className={`${Styles.button} ${Styles.primaryBtn}`}>
            Lets Talk
          </button>
        </div>
        <div className={Styles.numberGraphics}>
          <div className={`${Styles.numberCard} `}>300+ Projects</div>
          <div className={`${Styles.numberCard} ${Styles.secondCard} `}>
            140K User
          </div>
          <div className={`${Styles.numberCard} ${Styles.thirdCard} `}>
            50M Visits
          </div>
        </div>
      </div>
      <div className={Styles.blogView}>
        <h1>From Blogs</h1>
        <div className={Styles.blogCardView}>{BLOGS.map(renderBlogs)}</div>
      </div>

      <div className={Styles.sectionContainer}>
        <div className={Styles.sayView}>
          <img className={Styles.sayImg} src='/assets/3d-web/testimonial.png' />
          <h2>What they say?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
        </div>
        <div className={Styles.testimonialContent}>
          <div className={Styles.carouselView}>
            {renderTestimonial(TESTIMONIALS[current])}
            {renderTestimonial(TESTIMONIALS[isLast ? 0 : current + 1])}
          </div>
          <div>
            <button
              className={Styles.button}
              style={{ marginBottom: 12 }}
              onClick={() => {
                if (current === TESTIMONIALS.length - 1) setCurrent(0);
                else setCurrent((c) => c + 1);
              }}
            >
              <Next />
            </button>
            <button
              className={Styles.button}
              onClick={() => {
                if (current === 0) setCurrent(TESTIMONIALS.length - 1);
                else setCurrent((c) => c - 1);
              }}
            >
              <Prev />
            </button>
          </div>
        </div>
      </div>

      <div className={Styles.contactView}>
        <h3>Get the best project estimation</h3>
        <form className={Styles.contactForm}>
          <input className={Styles.input} placeholder='Enter your email' />{' '}
          <button className={Styles.button}>Send</button>
        </form>
        <img className={Styles.mailbox} src='/assets/3d-web/mailbox.png' />
      </div>

      <footer className={Styles.footer}>
        <span
          className={Styles.logo}
          style={{ color: '#4239f4', fontWeight: 'bold', fontSize: '24px' }}
        >
          Bytes & Pixels
        </span>

        <a
          className={Styles.credit}
          href='https://www.behance.net/gallery/103082395/Noren-Landing-page-Free-Download/modules/594121511'
        >
          Designed By, Ghassan Hani
        </a>
        <a className={Styles.credit} href='https://stud2design.in'>
          &copy; BytznPxls
        </a>
      </footer>
    </div>
  );
};

export const documentProps = {
  title: '3D Modern Web | Landing Mosaic | BytznPxls',
};
