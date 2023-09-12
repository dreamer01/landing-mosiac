import Styles from './main.module.css';

const NAVS = ['Home', 'Service', 'Team', 'Blog', 'Contact'];

export const Page = () => {
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
        <div className={Styles.heroContent}>
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
    </div>
  );
};
