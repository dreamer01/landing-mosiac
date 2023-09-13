import { Calendar, Time } from './Icons';
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

const COLORS = ['#dbedf7', '#f9d27a', '#F990B695'];

export const Page = () => {
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

  return (
    <div className={Styles.page}>
      <div className={Styles.hero}>
        <header>
          <img className={Styles.logo} src='/s2d-white.png' />
          <menubar>
            {NAVS.map((title) => (
              <nav key={title}>{title}</nav>
            ))}
          </menubar>
        </header>
        <div className={Styles.sectionContainer}>
          <div className={Styles.contentView}>
            <h1 className={Styles.heroHeading}>
              Get business solution with Stud2Design.
            </h1>
            <p className={Styles.heroText}>
              Power your business to new heights with our award-winning digital
              marketing services and technology platform.
            </p>

            <button>Get Started</button>
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

          <button className={Styles.primaryBtn}>Lets Talk</button>
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
    </div>
  );
};
