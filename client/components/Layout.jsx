import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import PropTypes from 'prop-types'

require('../css/foodStyle.less')

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <link href='https://fonts.googleapis.com/css?family=Permanent+Marker|Roboto:400,500' rel='stylesheet' />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css'
        type='text/css' />
      <script
        defer src='https://use.fontawesome.com/releases/v5.3.1/js/all.js'
        integrity='sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB'
        crossOrigin='anonymous'
      />
    </Head>

    <header className='row'>
      <nav className='row col-xs-12 middle-xs'>
        <div className='col-xs-6'>
          <Link href='/'>
            <a>
              <div className='logo'>
                <img src='/static/feed-me.svg' />
              </div>
              <h3>Feeme</h3>
            </a>
          </Link>
        </div>
        <div className='col-xs-6 end-xs link'>
          <a href='#'>
            Go To FindNiya
          </a>
        </div>
      </nav>
      <span className='logoShadow' />
    </header>

    {children}

    <footer className='row end-xs'>
      <p className='col-xs-12'>
        A Find Niya App
      </p>
    </footer>
  </div>
)

Layout.defaultProps = {
  title: 'Feeme App'
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}
export default Layout
