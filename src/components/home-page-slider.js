import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import bannerImage01 from '../assets/background-image.jpg';
import bannerImage02 from '../assets/background-image-01.jpg';
import bannerImage03 from '../assets/background-image-02.jpg';
import '../App.css'

export default class HomePageSlider extends Component {
    render() {
        return (
                <AwesomeSlider animation="cubeAnimation" className="slider-sec">
                  <div data-src={bannerImage01}/>
                  <div data-src={bannerImage02} />
                  <div data-src= {bannerImage03} />
                </AwesomeSlider> 
        )
      }
}