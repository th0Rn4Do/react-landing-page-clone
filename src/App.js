import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <body className={styles.body}>
        <header>
          <nav className={styles.outercontainer}>
            <div className={styles.innercontainer}>
              <div className={styles.navigationBar}>
                <div className={styles.leftPartNavigationBar}>
                  <div>
                    <a href="#/">bird logo</a>
                  </div>
                  <div>
                    <a href="#/">Landingfolio</a>
                  </div>
                  <ul>
                    <li>
                      <a href="/#">Inspiration</a>
                    </li>
                    <li>
                      <a href="/#">Component Library</a>
                    </li>
                    <li>
                      <a href="/#">Templates</a>
                    </li>
                    <li>
                      <a href="/#">Learn</a>
                    </li>
                    <li>
                      <a href="/#">Tools</a>
                    </li>
                    <li>
                      <a href="/#">Pricing</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className={styles.rightPartNavigationBar}>
                    <span>opens chatbot</span>
                    <span>burger menue opens dropdown</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>my main content</main>
        <footer>my footer</footer>
      </body>
    </>
  );
}
