import React, { Component } from 'react';
import Scroll from './Scroll';
import { useStaticQuery, graphql, Link } from "gatsby"
import LogoImage from './LogoImage';
import Img from "gatsby-image"
import TopBar from "./TopBar";
import MainBar from "./MainBar";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <div>
        
      <nav
        className={` navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
      <TopBar/>
        
      <MainBar />

      </nav>
      </div>
    );
  }
}

