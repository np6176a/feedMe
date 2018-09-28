import Link from 'next/link'
import Head from 'next/head'

require('../css/foodStyle.less')
// props = { title: "Feed Me App", children }
export default ({children, title = 'Feed Me App'}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8'/>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'/>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
            type="text/css"/>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
              integrity="sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB"
              crossorigin="anonymous"></script>
    </Head>

    <header>
      <nav>
        <Link href='/'><a>Find Food</a></Link>
      </nav>
    </header>

    {children}

    <footer>
      <p>Find Niya Funsy</p>
    </footer>

  </div>
);