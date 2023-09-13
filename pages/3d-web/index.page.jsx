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

export const Page = () => {
  const renderServices = ({ id, title, img, text }) => (
    <section className={Styles.serviceCard} key={id}>
      <img className={Styles.serviceImg} src={img} />
      <h3>{title}</h3>
      <p className={Styles.serviceText}>{text}</p>
    </section>
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
    </div>
  );
};
