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
    <Svg width="100%" height="100%" viewBox="0 0 18 18">
      <Path 
        d="M18 12.1817C18 9.948 16.7186 7.95453 14.7994 6.98485C14.7398 11.2676 11.2676 14.7398 6.98485 14.7994C7.95453 16.7186 9.948 18 12.1817 18C13.2289 18 14.2474 17.7211 15.1422 17.1911L17.9746 17.9746L17.1911 15.1422C17.7211 14.2474 18 13.2289 18 12.1817Z" 
        fill="#519DFF"/>
      <Path 
        d="M13.7461 6.87305C13.7461 3.08318 10.6629 0 6.87305 0C3.08318 0 0 3.08318 0 6.87305C0 8.10818 0.328766 9.31078 0.953064 10.3666L0.0252686 13.7207L3.37953 12.793C4.43532 13.4173 5.63791 13.7461 6.87305 13.7461C10.6629 13.7461 13.7461 10.6629 13.7461 6.87305ZM5.81836 5.27344H4.76367C4.76367 4.11026 5.70987 3.16406 6.87305 3.16406C8.03622 3.16406 8.98242 4.11026 8.98242 5.27344C8.98242 5.86382 8.73248 6.43126 8.29646 6.83006L7.40039 7.65019V8.47266H6.3457V7.18575L7.58441 6.05196C7.80579 5.8494 7.92773 5.57295 7.92773 5.27344C7.92773 4.69185 7.45464 4.21875 6.87305 4.21875C6.29146 4.21875 5.81836 4.69185 5.81836 5.27344ZM6.3457 9.52734H7.40039V10.582H6.3457V9.52734Z" 
        fill="#519DFF"/>
    </Svg>
  </View>
);