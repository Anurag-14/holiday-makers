import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu'

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '36px',
      top: '4px',
      right:'4px'
    },
    bmBurgerBars: {
      background: '#e1ad01'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#e1ad01'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width:'120px',
      background: '#282c34'
    },
    bmMorphShape: {
        display:'none'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      width:'120px',
      left:'0px',
      background:'#282c34',
      marginTop:'42px'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      width:'120px',
      right:'0px'
    }
  }

export default class HamburgerMenu extends Component {
    render() {
        var isMenuOpen = function(state) {
            console.log(state);
            return state.isOpen;
          };
        return (
                 <div className='hb-menu-sec'>
                       <Menu styles={styles} onStateChange={isMenuOpen} right>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a  className="menu-item">Settings</a>
                 </Menu>
                 </div>
                
          
        );
    }

}