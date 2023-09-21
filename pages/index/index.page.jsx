import Image from '../../components/Image';
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
            <Image
              className={Styles.heroImg}
              placeholder='/pattern-small.png'
              src='/pattern.png'
            />
          </div>
        </section>

        <section className={Styles.gallery}>
          <div className={Styles.galleryView}>
            <a className={Styles.card} href='/neo-brutalism'>
              <Image
                loading='lazy'
                className={Styles.siteSnapshot}
                placeholder='/neo-seo-small.png'
                src='/neo-seo.png'
              />
              <div className={Styles.siteMeta}>Neo Brutalism</div>
            </a>
            <a className={Styles.card} href='/3d-web'>
              <Image
                loading='lazy'
                className={Styles.siteSnapshot}
                placeholder='/3d-seo-small.png'
                src='/3d-seo.png'
              />
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
