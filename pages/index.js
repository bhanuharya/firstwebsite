import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Wishnu's Website!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

       <div className={styles.grid}>  
          <a href="" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Find more information about me!</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>See what kind of cool projects that have been made!</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Blog &rarr;</h3>
            <p>Discover my thoughts on anything</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Resume &rarr;</h3>
            <p>
              See my detail information and download my resume
            </p>
          </a>
        </div> 
      </main>

      <footer className={styles.footer}>

        <a
          href="https://www.linkedin.com/in/wishnumurti/"
          target="_blank"
          rel="noopener noreferrer"
          class="socmed"
        >
          LinkedIn 
          
        </a>
        <a
          href="https://www.instagram.com/wishnumurti/"
          target="_blank"
          rel="noopener noreferrer"
          class="socmed"
        >
          Instagram
        </a>
        <a
          href="https://github.com/salt0330"
          target="_blank"
          rel="noopener noreferrer"
          class="socmed"
        >
          Github
        </a>
        
      </footer>
    </div>
  )
}
