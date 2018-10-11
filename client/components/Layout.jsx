import Link from 'next/link'
import Head from 'next/head'

require('../css/foodStyle.less')
// props = { title: "Feed Me App", children }
export default ({children, title = 'Feeme App'}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8'/>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'/>

      <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
            type="text/css"/>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
              integrity="sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB"
              crossOrigin="anonymous"></script>
    </Head>

    <header className='row center-xs'>
      <nav className='col-xs-12'>
        <Link href='/'><a>
          <img src="/static/feed-me.svg" />
        </a></Link>
      </nav>
    </header>

    {children}

    <footer className='row center-xs'>
      <div className='col-xs-12'>
        <p>Pattern:<a href="https://www.freepik.com/free-vector/sketchy-kitchen-pattern_792937.htm"> Designed by Freepik</a></p>
        <p className='copy'>A Find Niya App</p>
      </div>
    </footer>
  </div>
);