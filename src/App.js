import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import logo from './pages/assets/logo.png'
import { HomePage } from './pages/home/home-page'
import { RoadmapPage } from './pages/roadmap/roadmap-page'
import { PrivacyPage } from './pages/privacy/privacy-page'
import { Sticky } from './components/sticky/sticky'
import { TermUse } from './pages/term-use/term-use'
import { Navbar } from './components/Navbar/Navbar'
import { Menu } from './components/Menu/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet'
import Banner from './pages/assets/Home.png'



function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <>
      <Link className="navbar-brand" to="/">
        <img src={logo} width="100%" className="d-inline-block align-top" alt="logo" />
      </Link>
      {window.innerWidth > 935 ? <Navbar /> : <FontAwesomeIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className="icon-menu" icon={faBars} />}
      <Sticky />
      {isMenuOpen ? <Menu setIsMenuOpen={setIsMenuOpen} /> : null}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/roadmap" exact component={RoadmapPage} />
        <Route path="/privacy" exact component={PrivacyPage} />
        <Route path="/term-of-use" exact component={TermUse} />
      </Switch>
    </>
  );
}

export default App;
