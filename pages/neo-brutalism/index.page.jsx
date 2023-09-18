import { useState } from 'react';
import Styles from './main.module.css';
import { GoArrow, Growth, Mobile, NextIcon, PrevIcon, Web } from './Icons';

const SERVICES = [
  {
    id: 'mobile',
    title: 'Mobile Experience',
    logo: Mobile,
    text: 'building hybrid mobile application for android and iOS users across the world with high performance and rich ui/ux',
  },
  {
    id: 'web',
    title: 'Web Experience',
    logo: Web,
    text: 'creating responsive website allowing user to access the product instantly without app friction on any desktop/mobile device',
  },
  {
    id: 'customer',
    title: 'Customer Growth',
    logo: Growth,
    text: 'seo rich apps to increase audience reach and retention, performance gain with use of adaptive tech for poor network to offline support',
  },
];

const WHY_US = [
  {
    id: 'experience',
    title: 'Years of Experience',
    highlight: '5+',
    text: `For the past ten years, we've been dedicated to delivering unmatched design and development services. Our journey has been a testament to our commitment, innovation, and unwavering dedication to our clients.`,
  },
  {
    id: 'clients',
    title: 'Happy Clients',
    highlight: '86',
    text: `We'll listen to your goals and complete a free audit to discover if we're a great fit to work with each other to built a awesome project.`,
  },
  {
    id: 'partners',
    title: 'Business Partner',
    highlight: '32+',
    text: 'We help the most exciting brands unlock growth through carefully crafted paid media campaigns and digital experiences.',
  },
];

const PROJECTS = [
  {
    id: 'web-design',
    tag: 'Web design',
    color: '#9bd3d0',
    title: 'Web design project title goes here',
    cover:
      'https://images.unsplash.com/photo-1576595580361-90a855b84b20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVpJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=40',
    text: `We provide you with a customized website design that's perfect for your business or personal site.`,
  },
  {
    id: 'web-dev',
    tag: 'Development',
    color: '#feccb3',
    title: 'Development project title goes here',
    cover:
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=40',
    text: `We will develop an online tool, to create a unique widget with a specific functionality for your business website.`,
  },
  {
    id: 'ecomm',
    tag: 'Ecommerce',
    color: '#fdc449',
    title: 'Ecommerce project title goes here',
    cover:
      'https://images.unsplash.com/photo-1574271143515-5cddf8da19be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=40',
    text: `We provide assistance to customers with everything from making online purchase decisions.`,
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Olga Zara',
    pic: '/assets/neo-brutalism/olga.png',
    position: 'CBO of Rosey',
    text: `Perfect agency for small businesses who want to grow, but haven't got time to take care of social media. Already seen growth with online orders.`,
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
    text: `Perfect agency for small businesses who want to grow, but haven't got time to take care of social media. Already seen growth with online orders.`,
  },
];

export const Page = () => {
  const [current, setCurrent] = useState(0);

  const renderService = ({ id, title, logo: Logo, text }) => (
    <div key={id} className={`${Styles.serviceCard} ${Styles[id]}`}>
      <div className={Styles.serviceIconView}>
        <Logo className={Styles.serviceIcon} />
      </div>
      <h3 className={Styles.serviceTitle}>{title}</h3>
      <p className={Styles.serviceText}>{text}</p>
    </div>
  );

  const renderWhyUsInfo = ({ id, title, highlight, text }) => (
    <section key={id} className={Styles.whyInfoSection}>
      <div className={Styles.inlineView}>
        <h2 className={Styles.highlight}>{highlight}</h2>
        <h4 className={Styles.title}>{title}</h4>
      </div>
      <p className={Styles.text}>{text}</p>
    </section>
  );

  const renderProjects = ({ id, title, cover, text, tag, color }) => (
    <div key={id} className={Styles.projectsList}>
      <div className={Styles.projectContent}>
        <span style={{ backgroundColor: color }} className={Styles.tag}>
          {tag}
        </span>
        <h3 className={Styles.projectTitle}>{title}</h3>
        <p className={Styles.projectText}>{text}</p>
        <button className={`${Styles.button} ${Styles.seeProjectBtn}`}>
          See Full Project
        </button>
      </div>
      <div
        style={{ boxShadow: `20px 20px ${color}` }}
        className={Styles.coverView}
      >
        <img className={Styles.projectCover} src={cover} />
      </div>
    </div>
  );

  const renderTestimonial = ({ pic, name, position, text }) => (
    <div className={Styles.carouselView}>
      <div className={Styles.picView}>
        <img className={Styles.profilePic} src={pic} />
      </div>
      <div style={{ flex: 1 }}>
        <h3 className={Styles.quote}>
          ❝<i>{text}</i>❞
        </h3>
        <div className={Styles.header}>
          <div>
            <p className={Styles.name}>{name}</p>
            <p className={Styles.label}>{position}</p>
          </div>
          <div className={Styles.inlineView}>
            <button
              className={`${Styles.stepBtn} ${Styles.prev}`}
              onClick={() => {
                if (current === 0) setCurrent(TESTIMONIALS.length - 1);
                else setCurrent((c) => c - 1);
              }}
            >
              <PrevIcon />
            </button>
            <button
              className={`${Styles.stepBtn} ${Styles.next}`}
              onClick={() => {
                if (current === TESTIMONIALS.length - 1) setCurrent(0);
                else setCurrent((c) => c + 1);
              }}
            >
              <NextIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={Styles.page}>
      <main className={Styles.main}>
        <header className={Styles.header}>
          <a href='/'>
            <img className={Styles.logo} src='./s2d-logo.png' />
          </a>
          <menubar>
            <nav className={Styles.active}>Home</nav>
            <nav>Project</nav>
            <nav>Services</nav>
            <nav>About Us</nav>
          </menubar>
          <button className={Styles.button}>Contact Us</button>
        </header>
        <section className={Styles.heroView}>
          <div className={Styles.callout}>
            <h1 className={Styles.heading}>Grow Your Business With</h1>
            <div className={Styles.inlineView}>
              <h1 className={Styles.heading}>Us</h1>
              <GoArrow className={Styles.arrowIcon} />
            </div>
            <p className={Styles.subText}>
              Developing and designing the digital solutions, to reach your true
              audience.
            </p>
            <button className={`${Styles.button} ${Styles.primaryBtn}`}>
              Get Started
              <img
                className={Styles.nextIcon}
                src='./assets/neo-brutalism/next.png'
              />
            </button>
          </div>
          <div className={Styles.heroImgView}>
            <img
              className={Styles.heroImg}
              src='/assets/neo-brutalism/heroImg.png'
            />
          </div>
        </section>
      </main>
      <div className={Styles.collab}>Collabs</div>
      <div className={Styles.serviceContent}>
        <h1 className={Styles.serviceHeading}>
          Save time managing your businesses with our services
        </h1>
        <p className={Styles.serviceMessage}>
          We help the most exciting brands unlock growth through carefully
          crafted user campaigns and digital experiences
        </p>
        <section className={Styles.servicesView}>
          {SERVICES.map(renderService)}
        </section>
      </div>
      <div className={Styles.whyUsView}>
        <div className={Styles.whyImgView}>
          <img
            className={Styles.whyImg}
            src='/assets/neo-brutalism/sahil.png'
          />
        </div>
        <div className={Styles.whyContent}>
          <h1 className={Styles.heading}>Why us?</h1>
          <div>{WHY_US.map(renderWhyUsInfo)}</div>
        </div>
      </div>
      <div className={Styles.projectView}>
        <h1 className={Styles.heading}>See Our Projects</h1>
        <p className={Styles.subText}>
          Check out the cool work we've done together. Every brand is unique
          with a different products, target audience and business goal.
        </p>
        {PROJECTS.map(renderProjects)}
        <button
          style={{ margin: '50px auto' }}
          className={`${Styles.button} ${Styles.primaryBtn}`}
        >
          See All Projects
          <img
            className={Styles.nextIcon}
            src='./assets/neo-brutalism/next.png'
          />
        </button>
      </div>
      <div className={Styles.testimonialsView}>
        <h2 className={Styles.heading}>What Our Client Say</h2>
        <div>{renderTestimonial(TESTIMONIALS[current])}</div>
      </div>
      <div className={Styles.contact}>
        <form className={Styles.contactForm}>
          <h1>Ready to start your project</h1>
          <input className={Styles.input} placeholder='Name' />
          <br />
          <input className={Styles.input} placeholder='Email' />
          <button type='button' className={Styles.input}>
            Get Quote
          </button>
        </form>
        <div className={Styles.contactContent}>
          <p className={Styles.projectText}>
            Check out the cool work we've done together. Every brand is unique
            with a different products, target audience and business goal.
          </p>
          <button className={`${Styles.button} ${Styles.callBtn}`}>
            Book a Call
            <img
              className={Styles.nextIcon}
              src='./assets/neo-brutalism/next.png'
            />
          </button>
        </div>
      </div>
      <footer>
        <div className={Styles.footerInfo}>
          <div style={{ flex: 1 }}>
            <img className={Styles.logo} src='./s2d-white.png' />
            <p className={Styles.footerText}>
              We help the most exciting brands unlock growth through carefully
              crafted paid media campaigns and digital experiences
            </p>
          </div>
          <div className={Styles.listView}>
            <p className={Styles.heading}>Products</p>
            <li>Overview</li>
            <li>Marketplace</li>
            <li>Workers</li>
          </div>
          <div className={Styles.listView}>
            <p className={Styles.heading}>Resources</p>
            <li>Blog</li>
            <li>FAQs</li>
            <li>ROI Calculator</li>
          </div>
          <div style={{ flex: 1 }}>
            <p className={Styles.heading}>Subscribe to our newsletter</p>
            <p>Stay updated</p>
            <div className={Styles.inputView}>
              <input placeholder='Enter your email' />
              <button className={`${Styles.button} ${Styles.subBtn}`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className={Styles.header}>
          <a className={Styles.credit} href='https://stud2design.in'>
            &copy; Stud2Design
          </a>
          <a
            className={Styles.credit}
            href='https://www.behance.net/gallery/177079721/Flowy-Digital-Agency-Landing-Page/modules/1000188899'
          >
            Designed By : Akib Tanjil
          </a>
          <div>Social Icons</div>
        </div>
      </footer>
    </div>
  );
};

export const documentProps = { title: 'Neo Brutalism' };
