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

export default ({ style={}, colorFill="#0BCDCF" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 50 50">
      <G>
       <Path
          d="M8.297,33.683a3.79,3.79 0,0 0,0 7.578,3.794 3.794,0 0,0 3.788,-3.79 3.79,3.79 0,0 0,-3.788 -3.788zM40.082,33.683a3.79,3.79 0,0 0,0 7.578,3.79 3.79,0 0,0 0,-7.578zM18.193,13.813c0,-0.631 -0.513,-1.146 -1.144,-1.146 -0.63,0 -1.143,0.515 -1.143,1.146v1.793h2.286v-1.793z"
          fill={colorFill} />
        <Path
          d="M50,16.635l-36.692,0.023c-1.987,0 -4.061,2.644 -6.066,5.202 -1.816,2.314 -3.53,4.5 -5.272,4.82 -2.128,0.39 -2.202,6.396 -1.74,10.348h2.41a5.694,5.694 0,0 1,5.67 -5.24,5.69 5.69,0 0,1 5.665,5.24h20.41a5.69,5.69 0,0 1,5.666 -5.24,5.691 5.691,0 0,1 5.664,5.24h4.269l-0.025,-13.167 0.041,-7.226zM18.155,27.478L14.93,27.478v-0.885h3.225v0.885zM18.599,25.486L5.855,25.486l6.858,-7.737h5.886v7.737zM37.759,25.816h-3.11v3.104L32.88,28.92v-3.104h-3.097v-1.77h3.097v-3.103h1.769v3.103h3.11v1.77zM49.404,34.746h-1.7v-4.13h1.7v4.13zM12.653,11.212l1.97,1.306 -0.487,0.735 -1.97,-1.306 0.487,-0.735zM21.399,11.211l0.489,0.735 -1.969,1.31 -0.489,-0.735 1.969,-1.31zM16.608,8.739h0.884v2.409h-0.884v-2.41z"
          fill={colorFill} />
      </G>
    </Svg>
  </View>
);