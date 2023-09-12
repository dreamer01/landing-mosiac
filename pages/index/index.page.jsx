import Styles from './main.module.css';

const Page = () => {
  return (
    <div className={Styles.page}>
      <main className={Styles.main}>
        <header className={Styles.header}>
          <img className={Styles.logo} src='/logo.png' />
          <p className={Styles.name}>LandingMosaic</p>
        </header>
        <section className={Styles.hero}>
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
        </section>
        <section>
          <a href='/neo-brutalism'>Neo Brutalism</a>
          <a href='/3d-web'>3D Web</a>
        </section>
      </main>
    </div>
  );
};

export { Page };
