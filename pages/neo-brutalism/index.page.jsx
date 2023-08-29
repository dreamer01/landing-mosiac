import Styles from './main.module.css';

const SERVICES = [
  {
    id: 'mobile',
    title: 'Mobile Experience',
    logo: '',
    text: 'building hybrid mobile application for android and iOS users across the world with high performance and rich ui/ux',
  },
  {
    id: 'web',
    title: 'Web Experience',
    logo: '',
    text: 'creating responsive website allowing user to access the product instantly without app friction on any desktop/mobile device',
  },
  {
    id: 'customer',
    title: 'Customer Growth',
    logo: '',
    text: 'seo rich apps to increase audience reach and retention, performance gain with use of adaptive tech for poor network to offline support',
  },
];

const WHY_US = [
  {
    id: 'experience',
    title: 'Years of Experience',
    highlight: '5+',
    text: 'Viverra ultricies habitant convallis dui. Sit mauris, tellus nunc sollicitudin consequat sagittis ullamcorper eu. Aenean pretium ac at pulvinar amet.',
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

const Page = () => {
  const renderService = ({ id, title, logo, text }) => (
    <div key={id} className={`${Styles.serviceCard} ${Styles[id]}`}>
      <div className={Styles.serviceIconView}>
        <img src={logo} />
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

  return (
    <div className={Styles.page}>
      <main className={Styles.main}>
        <header className={Styles.header}>
          <img className={Styles.logo} src='./s2d-logo.png' />
          <menubar>
            <nav className={Styles.active}>Home</nav>
            <nav>Project</nav>
            <nav>Services</nav>
            <nav>About Us</nav>
          </menubar>
          <button>Contact Us</button>
        </header>
        <section className={Styles.heroView}>
          <div className={Styles.callout}>
            <h1 className={Styles.heading}>Grow Your Business With</h1>
            <div className={Styles.inlineView}>
              <h1 className={Styles.heading}>Us</h1>
              <img
                className={Styles.arrowIcon}
                src='./assets/neo-brutalism/goarrow.png'
              />
            </div>
            <p className={Styles.subText}>
              Developing and designing the digital solutions, to reach your true
              audience.
            </p>
            <button className={Styles.primaryBtn}>
              Get Started
              <img
                className={Styles.nextIcon}
                src='./assets/neo-brutalism/next.png'
              />
            </button>
          </div>
          <div className={Styles.heroImg}>Img</div>
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
        <div className={Styles.whyImg}>Why Img</div>
        <div className={Styles.whyContent}>
          <h1 className={Styles.heading}>Why us?</h1>
          <div>{WHY_US.map(renderWhyUsInfo)}</div>
        </div>
      </div>
    </div>
  );
};

export { Page };
