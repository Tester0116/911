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

export default ({ style={}, colorFill="#FF842C" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 114 114">
      <G clipPath="url(#prefix__clip03)">
        <Path 
          d="M43.0522 52.7112C53.4493 52.7112 61.8705 44.2895 61.8705 33.8918C61.8705 23.4942 53.4493 15.0725 43.0522 15.0725C32.655 15.0725 24.2338 23.4942 24.2338 33.8918C24.2338 44.2895 32.655 52.7112 43.0522 52.7112ZM43.0522 24.4822C48.2272 24.4822 52.4613 28.7165 52.4613 33.8918C52.4613 39.0672 48.2272 43.3015 43.0522 43.3015C37.8771 43.3015 33.643 39.0672 33.643 33.8918C33.643 28.7165 37.8771 24.4822 43.0522 24.4822ZM43.0522 62.1209C30.4909 62.1209 5.41553 68.4253 5.41553 80.9402V90.3499H80.6888V80.9402C80.6888 68.4253 55.6134 62.1209 43.0522 62.1209ZM14.8247 80.9402C15.8597 77.5527 30.3968 71.5305 43.0522 71.5305C55.7545 71.5305 70.3387 77.5998 71.2796 80.9402H14.8247ZM71.656 24.7174C75.6078 30.2691 75.6078 37.4675 71.656 43.0192L79.5597 50.9704C89.063 41.4666 89.063 27.1169 79.5597 16.7663L71.656 24.7174ZM95.1319 0.958008L87.4634 8.62689C100.495 22.8355 100.495 44.1954 87.4634 59.1568L95.1319 66.8257C113.48 48.5239 113.527 20.0126 95.1319 0.958008Z" 
          fill={colorFill}/>
      </G>
      <Defs>
        <ClipPath id="prefix__clip03">
          <Rect width="112.91" height="112.916" fill="#FFFFFF" transform="translate(0.710938 0.958008)"/>
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);