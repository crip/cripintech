import React from 'react'
import { SiteData } from 'react-static'
import styled from 'styled-components'

const LogoStyles = styled.div`
  display: inline-block;
  box-sizing: border-box;
  font-size: ${props => props.width};
  color: ${props => props.color};

  h1,
  svg {
    display: inline-block;
    vertical-align: middle;
    color: inherit;
  }

  h1 {
    margin: 0;
    padding: 0;
    margin-left: 0.4em;
    font-size: 0.8em;
  }
`
const Logo = ({ fill = 'white', width = '100px', height = 'auto' }) => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox="0 0 140.533 168"
    enableBackground="new 0 0 140.533 168"
    xmlSpace="preserve"
    fill={fill}
  >
    <g>
      <circle cx="84" cy="84.666" r="17.977" />
      <path
        d="M104.593,105.968c-0.777-0.796-1.815-1.204-2.861-1.204c-0.81,0-1.622,0.244-2.322,0.744
    c-4.425,3.156-9.638,4.825-15.076,4.825c-14.337,0-26.001-11.663-26.001-26s11.664-26,26.001-26c5.253,0,10.314,1.561,14.638,4.513
    c0.686,0.468,1.472,0.697,2.255,0.697c1.041,0,2.075-0.406,2.851-1.193L139.382,26.5c0.774-0.786,1.189-1.856,1.147-2.958
    c-0.042-1.103-0.537-2.138-1.368-2.863C123.866,7.344,104.276,0,84,0C37.682,0,0,37.682,0,84s37.682,84,84,84
    c20.261,0,39.84-7.334,55.13-20.651c0.83-0.724,1.326-1.756,1.37-2.856c0.044-1.1-0.367-2.169-1.137-2.956L104.593,105.968z
     M103.566,143.023c-6.291,2.107-12.874,3.177-19.567,3.177c-33.93,0-61.534-27.604-61.534-61.534s27.604-61.534,61.534-61.534
    c6.693,0,13.276,1.069,19.567,3.177c2.618,0.877,4.029,3.711,3.152,6.33c-0.878,2.619-3.712,4.03-6.33,3.152
    c-5.265-1.764-10.778-2.659-16.39-2.659c-28.415,0-51.534,23.118-51.534,51.534c0,28.416,23.119,51.534,51.534,51.534
    c5.611,0,11.125-0.895,16.39-2.659c2.617-0.873,5.452,0.533,6.33,3.152C107.595,139.311,106.184,142.145,103.566,143.023z"
      />
    </g>
  </svg>
)

const LogoWrapper = props => (
  <SiteData>
    {({ title }) => (
      <LogoStyles width={props.width} color={props.color}>
        <Logo width="1em" fill={props.color} />
        <h1 rel="name">{title}</h1>
      </LogoStyles>
    )}
  </SiteData>
)

export { LogoWrapper }

export default Logo
