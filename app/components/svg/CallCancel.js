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
    <Svg width="100%" height="100%" viewBox="0 0 52 52">
      <Path 
        d="M26 0C11.664 0 0 11.663 0 26C0 40.337 11.664 52 26 52C40.336 52 52 40.337 52 26C52 11.663 40.336 0 26 0ZM26 50C12.767 50 2 39.233 2 26C2 12.767 12.767 2 26 2C39.233 2 50 12.767 50 26C50 39.233 39.233 50 26 50Z" 
        fill="#515572"/>
      <Path 
        d="M35.707 16.293C35.316 15.902 34.684 15.902 34.293 16.293L26 24.586L17.707 16.293C17.316 15.902 16.684 15.902 16.293 16.293C15.902 16.684 15.902 17.316 16.293 17.707L24.586 26L16.293 34.293C15.902 34.684 15.902 35.316 16.293 35.707C16.488 35.902 16.744 36 17 36C17.256 36 17.512 35.902 17.707 35.707L26 27.414L34.293 35.707C34.488 35.902 34.744 36 35 36C35.256 36 35.512 35.902 35.707 35.707C36.098 35.316 36.098 34.684 35.707 34.293L27.414 26L35.707 17.707C36.098 17.316 36.098 16.684 35.707 16.293Z" 
        fill="#515572"/>
    </Svg>
  </View>
);