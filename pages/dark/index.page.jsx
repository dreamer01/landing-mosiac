import Styles from './main.module.css';

export const Page = () => {
  return (
    <div className={Styles.page}>
      <main className={Styles.hero}>
        <header className={Styles.header}>
          <a href='/'>
            <img className={Styles.logo} src='/s2d-white.png' />
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
          magna semper orci a tincidunt.{' '}
        </p>
      </div>
    </div>
  );
};

export const documentProps = {
  title: 'Dark Landing Page | Landing Mosaic | Stud2Design',
};
