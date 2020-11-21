import React from 'react'
import { Switch, Route } from  'react-router-dom'
import {HomePage} from './pages/home/home-page'
import {RoadmapPage } from './pages/roadmap/roadmap-page'
import { PrivacyPage } from './pages/privacy/privacy-page'
import { Sticky } from './components/sticky/sticky'
import { TermUse } from './pages/term-use/term-use'
import { Navbar } from './components/Navbar/Navbar'
import { Menu } from './components/Menu/Menu'


function App() {
  return (
    <>
      
      <Navbar/>
      <Sticky/>
      {/* <Menu /> */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/roadmap" exact component={RoadmapPage} />
        <Route path="/privacy" exact component={PrivacyPage}/>
        <Route path="/term-of-use" exact component={TermUse}/>
      </Switch>
    </>
  );
}

export default App;
