import React from 'react'
import { View } from 'react-native' 
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg'

export default ({ style={} }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 114 114">
      <Path 
        d="M57.2431 28.3853C62.4181 28.3853 66.6522 32.6196 66.6522 37.7949C66.6522 42.9702 62.4181 47.2046 57.2431 47.2046C52.068 47.2046 47.8339 42.9702 47.8339 37.7949C47.8339 32.6196 52.068 28.3853 57.2431 28.3853ZM57.2431 70.7287C69.9454 70.7287 84.5296 76.798 85.4706 80.1384V84.8432H29.0156V80.1854C29.9565 76.798 44.5407 70.7287 57.2431 70.7287ZM57.2431 18.9756C46.846 18.9756 38.4248 27.3972 38.4248 37.7949C38.4248 48.1926 46.846 56.6142 57.2431 56.6142C67.6402 56.6142 76.0614 48.1926 76.0614 37.7949C76.0614 27.3972 67.6402 18.9756 57.2431 18.9756ZM57.2431 61.3191C44.6819 61.3191 19.6064 67.6235 19.6064 80.1384V94.2529H94.8797V80.1384C94.8797 67.6235 69.8043 61.3191 57.2431 61.3191Z" 
        fill="#8364FF"/>
    </Svg>
  </View>
);