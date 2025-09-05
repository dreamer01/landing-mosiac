import { Next } from './Icons';
import Styles from './main.module.css';

const SERVICES = [
  {
    id: 'branding',
    title: 'Branding',
    text: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    img: '/assets/dark/brand.png',
  },
  {
    id: 'dev',
    title: 'Web Development',
    text: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    img: '/assets/dark/dev.png',
  },

  {
    id: 'marketing',
    title: 'Digital Marketing',
    text: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    img: '/assets/dark/market.png',
  },
  {
    id: 'mobile',
    title: 'Mobile App',
    text: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    img: '/assets/dark/mobile.png',
  },
  {
    id: 'seo',
    title: 'SEO',
    text: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    img: '/assets/dark/seo.png',
  },
  {
    id: 'testing',
    title: 'User Testing',
    text: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    img: '/assets/dark/testing.png',
  },
];

const PROJECTS = [
  { id: 1, title: 'Creative landing page', tag: 'Website', cover: 'Yes' },
  { id: 2, title: 'Creative Branding', tag: 'Branding', cover: '' },
  { id: 3, title: 'Deploy now with one click', tag: 'Development', cover: '' },
  { id: 4, title: 'User data for growth', tag: 'Marketing', cover: '' },
  { id: 5, title: 'How We Optimized Our SEO', tag: 'SEO', cover: 'Yes' },
  { id: 6, title: 'A cozy travel experience', tag: 'Mobile', cover: '' },
];

export const Page = () => {
  const renderServices = ({ id, img, title, text }) => (
    <div className={Styles.serviceCard} key={id}>
      <img className={Styles.serviceIcon} src={img} />
      <h3 className={Styles.serviceTitle}>{title}</h3>
      <p className={Styles.serviceText}>{text}</p>
    </div>
  );

  const renderProjects = ({ id, cover, tag, title }) => (
    <div className={Styles.serviceCard} key={id}>
      {/* <img className={Styles.serviceIcon} src={cover} /> */}
      {cover && <div className={Styles.cover}></div>}
      <p className={Styles.tag}>{tag}</p>
      <h3 className={Styles.serviceTitle}>{title}</h3>
      <div className={Styles.readMore}>
        <span className={Styles.accentText}>Read More</span>
        <Next style={{ marginLeft: 12 }} />
      </div>
    </div>
  );

  return (
    <div className={Styles.page}>
      <main className={Styles.hero}>
        <header className={Styles.header}>
          <a href='/'>
            <span
              className={Styles.logo}
              style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}
            >
              Bytes & Pixels
            </span>
          </a>
          <menubar className={Styles.inlineView}>
            <nav className={Styles.nav}>Company</nav>
            <nav className={Styles.nav}>Services</nav>
            <nav className={Styles.nav}>Blog</nav>
            <nav className={Styles.nav}>Contact</nav>
          </menubar>
        </header>
        <section className={Styles.heroView}>
          <div className={Styles.heroContent}>
            <h1 className={`${Styles.heading}`}>Attract</h1>
            <h1 className={`${Styles.heading} ${Styles.gradientText}`}>
              NewLeads
            </h1>
            <h1 className={`${Styles.heading}`}>like never before</h1>
            <p className={Styles.accentText}>
              Developing and designing the digital solutions, to reach your true
              audience. Developing and designing the digital solutions, to reach
              your true audience.
            </p>
            <div className={`${Styles.inlineView} ${Styles.inputBox}`}>
              <input
                placeholder='Enter Email'
                className={`${Styles.input} ${Styles.textBox}`}
              />
              <button className={`${Styles.input} ${Styles.button}`}>
                Attract
              </button>
            </div>
          </div>
        </section>
      </main>
      <div className={Styles.companyView}>Company</div>
      <div className={Styles.services}>
        <h2 className={Styles.sectionHeading}>We Offer</h2>
        <p className={`${Styles.accentText} ${Styles.sectionSubtext}`}>
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
          magna semper orci a tincidunt.
        </p>
        <div className={Styles.servicesView}>
          {SERVICES.map(renderServices)}
        </div>
      </div>
      <div className={Styles.whyView}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img
            className={Styles.searchingImg}
            src='/assets/dark/searching.png'
          />
        </div>
        <div style={{ flex: 1 }}>
          <h2 className={Styles.sectionHeading}>Why Choose Us</h2>
          <p className={Styles.accentText}>
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac
            libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu
            elit. Morbi aliquam porttitor mattis consequat neque, tellus
            blandit.
          </p>
          <button className={Styles.btn}>Lets Connect</button>
        </div>
      </div>
      <div className={Styles.projects}>
        <div className={Styles.projectContent}>
          <h2>Some pieces of our work</h2>
          <p className={Styles.accentText}>
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            consequat magna semper orci a tincidunt.{' '}
          </p>
          <button className={Styles.btn}>Show More</button>
        </div>
        <div className={Styles.projectList}>
          {PROJECTS.slice(0, 3).map(renderProjects)}
        </div>
        <div className={Styles.projectList}>
          {PROJECTS.slice(3).map(renderProjects)}
        </div>
      </div>
      <div className={Styles.testimonial}>
        <h3>Hear what our customers say :)</h3>
      </div>
      <div className={Styles.contact}>
        <div className={Styles.contactView}>
          <h2 className={Styles.sectionHeading}>Let’s discuss the idea</h2>
          <p className={Styles.contactText}>
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit.{' '}
          </p>
          <div className={`${Styles.inlineView} ${Styles.inputBox}`}>
            <input
              placeholder='Enter Email'
              className={`${Styles.input} ${Styles.textBox} ${Styles.contactInput} `}
            />
            <button
              className={`${Styles.input} ${Styles.button} ${Styles.contactBtn}`}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <footer className={Styles.footer}>
        <div className={Styles.footerCol}>
          Company
          <p className={Styles.accentText}>About Us</p>
          <p className={Styles.accentText}>Team</p>
          <p className={Styles.accentText}>Careers</p>
        </div>
        <div className={Styles.footerCol}>
          Services
          <p className={Styles.accentText}>Branding</p>
          <p className={Styles.accentText}>Web Development</p>
          <p className={Styles.accentText}>Digital Marketing</p>
          <p className={Styles.accentText}>Mobile App</p>
          <p className={Styles.accentText}>SEO</p>
        </div>
        <div className={Styles.footerCol}>
          Resources
          <p className={Styles.accentText}>Blog</p>
          <p className={Styles.accentText}>Case Study</p>
          <p className={Styles.accentText}>Testimonial</p>
        </div>
        <div className={Styles.footerCol}>
          Follow Us
          <p className={Styles.accentText}>Twitter</p>
          <p className={Styles.accentText}>LinkedIn</p>
          <p className={Styles.accentText}>Instagram</p>
        </div>
        <div style={{ flex: 2 }}>
          <span
            className={Styles.logo}
            style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}
          >
            Bytes & Pixels
          </span>
          <p className={Styles.accentText}>Get latest updates</p>

          <input
            placeholder='Enter Email'
            className={`${Styles.input} ${Styles.textBox}`}
          />
        </div>
      </footer>
    </div>
  );
};

export const documentProps = {
  title: 'Dark Landing Page | Landing Mosaic | BytznPxls',
};
