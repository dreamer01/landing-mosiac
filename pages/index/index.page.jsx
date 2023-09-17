import Styles from './main.module.css';

const Page = () => {
  return (
    <div className={Styles.page}>
      <main className={Styles.main}>
        <header className={Styles.header}>
          <div className={Styles.flex}>
            <img className={Styles.logo} src='/logo.png' />
            <p className={Styles.name}>LandingMosaic</p>
          </div>
          <a className={Styles.aboutLink} href='/about'>
            About
          </a>
        </header>
        <section className={Styles.hero}>
          <div className={Styles.heroContent}>
            <h1 className={Styles.heroHeading}>
              Make the best first impression
            </h1>
            <p>
              A collection of trendy landing pages, a perfect way to showcase
              your products and reach your audience. Immerse yourself in a
              gallery of cutting-edge design concepts, and check what style of
              design suits your product and brand the best.
            </p>
          </div>
          <div className={Styles.heroImgView}>
            <img className={Styles.heroImg} src='/pattern.png' />
          </div>
        </section>
        {/* <section className={Styles.display}>
          <h1 className={Styles.heading}>Transforming Ideas into</h1>
          <h1 className={`${Styles.heading} ${Styles.accent}`}>
            Captivating Landings
          </h1>
          <p className={Styles.info}>
            Your ultimate destination for captivating landing page inspirations.
            Immerse yourself in a gallery of cutting-edge design concepts that
            ignite creativity and transform ideas into captivating digital
            experiences.
          </p>
        </section> */}
        <section className={Styles.gallery}>
          <div className={Styles.galleryView}>
            <a className={Styles.card} href='/neo-brutalism'>
              <img className={Styles.siteSnapshot} src='/neo-seo.png' />
              <div className={Styles.siteMeta}>Neo Brutalism</div>
            </a>
            <a className={Styles.card} href='/3d-web'>
              <img className={Styles.siteSnapshot} src='/3d-seo.png' />
              <div className={Styles.siteMeta}>3D Modern Web</div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

const documentProps = { title: 'Landing Mosaic' };

export { Page, documentProps };
