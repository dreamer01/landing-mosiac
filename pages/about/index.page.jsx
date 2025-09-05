import Styles from './main.module.css';

const Page = () => {
  return (
    <div className={Styles.page}>
      <main className={Styles.main}>
        <header className={Styles.header}>
          <a className={Styles.flex} href='/'>
            <img className={Styles.logo} src='/logo.png' />
            <p className={Styles.name}>LandingMosaic</p>
          </a>
          <a className={Styles.aboutLink} href='/about'>
            About
          </a>
        </header>
        <section>
          <h1 className={Styles.title}>Welcome to Landing Mosaic</h1>
          <p>
            Your ultimate destination for captivating landing page inspirations.
            Immerse yourself in a gallery of cutting-edge design concepts that
            ignite creativity and transform ideas into captivating digital
            experiences.
          </p>
        </section>
        <section>
          <h1 className={Styles.title}>What and why?</h1>
          <p>
            Landing Mosaic serve the purpose to showcase the development of all
            the designs that you see around the web and design platforms. You
            get to check out the designs curated by us to ensure the highest
            quality, and then visit the page site in developed state.
          </p>
          <p>
            We don't own the copyrights to any of the designs, and in the footer
            of each page we have added <strong>Designed by</strong> attribute to
            credit the designer. We do hope with this website the designers will
            get more profile traffic.
          </p>
        </section>
        <section>
          <h1 className={Styles.title}>About Creator ?</h1>
          <p>
            Myself Pushpendra Singh, I’m a Full Stack Developer based in
            Bangalore, India. I have passion for intuitive web and mobile
            design.I love developing applications and solution which tend to
            solve problems. I am also big time sucker for design and
            illustration, when I am free I like to do some graphic design work.
            If I find an amazing color palette or font, I have to build an app
            or website using them, because of this I have many unfinished side
            projects.
          </p>
        </section>
      </main>
    </div>
  );
};

const documentProps = { title: 'About | Landing Mosaic | BytznPxls' };

export { Page, documentProps };
