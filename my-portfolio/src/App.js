import React, { Component } from "react";
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../src/Routes/Main/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              MyPortfolio
            </Link>} scroll>
            <Navigation>
              <Link to="/Resume">Resume</Link>
              <Link to="/AboutMe">AboutMe</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            MyPortfolio
            </Link>}>
            <Navigation>
              <Link to="/Resume">Resume</Link>
              <Link to="/AboutMe">AboutMe</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}


export default App;
