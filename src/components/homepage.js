import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import HomePageSlider from './home-page-slider';


export default class HomePage extends Component {
    render() {
        return (
          <div>
           <HomePageSlider name="Vicky" />
          </div>
        )
      }
}