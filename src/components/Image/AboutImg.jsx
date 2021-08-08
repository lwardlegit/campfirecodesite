import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from '../../images/fire.png';


console.log(Img)
function AboutImg(){
  return <img src={Img} alt="about image" height="450px" width="350px"/>
}

export default AboutImg;
