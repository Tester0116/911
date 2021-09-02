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
    <Svg width="100%" height="100%" viewBox="0 0 16 16">
      <Path 
        d="M11.82 8.01345L14.4733 5.36012C14.7333 5.10012 14.7333 4.68012 14.4733 4.42012L11.58 1.52679C11.32 1.26679 10.9 1.26679 10.64 1.52679L7.98666 4.18012L5.33333 1.52679C5.19999 1.40012 5.03333 1.33345 4.85999 1.33345C4.69333 1.33345 4.51999 1.40012 4.39333 1.52679L1.49999 4.42012C1.23999 4.68012 1.23999 5.10012 1.49999 5.36012L4.15333 8.01345L1.49999 10.6668C1.23999 10.9268 1.23999 11.3468 1.49999 11.6068L4.39333 14.5001C4.65333 14.7601 5.07333 14.7601 5.33333 14.5001L7.98666 11.8468L10.64 14.5001C10.7733 14.6335 10.94 14.6935 11.1133 14.6935C11.2867 14.6935 11.4533 14.6268 11.5867 14.5001L14.48 11.6068C14.74 11.3468 14.74 10.9268 14.48 10.6668L11.82 8.01345ZM7.99999 6.00012C8.36666 6.00012 8.66666 6.30012 8.66666 6.66679C8.66666 7.03345 8.36666 7.33345 7.99999 7.33345C7.63333 7.33345 7.33333 7.03345 7.33333 6.66679C7.33333 6.30012 7.63333 6.00012 7.99999 6.00012ZM4.85999 7.30679L2.43999 4.89345L4.85999 2.47345L7.27333 4.88679L4.85999 7.30679ZM6.66666 8.66679C6.29999 8.66679 5.99999 8.36679 5.99999 8.00012C5.99999 7.63345 6.29999 7.33345 6.66666 7.33345C7.03333 7.33345 7.33333 7.63345 7.33333 8.00012C7.33333 8.36679 7.03333 8.66679 6.66666 8.66679ZM7.99999 10.0001C7.63333 10.0001 7.33333 9.70012 7.33333 9.33345C7.33333 8.96679 7.63333 8.66679 7.99999 8.66679C8.36666 8.66679 8.66666 8.96679 8.66666 9.33345C8.66666 9.70012 8.36666 10.0001 7.99999 10.0001ZM9.33333 7.33345C9.69999 7.33345 9.99999 7.63345 9.99999 8.00012C9.99999 8.36679 9.69999 8.66679 9.33333 8.66679C8.96666 8.66679 8.66666 8.36679 8.66666 8.00012C8.66666 7.63345 8.96666 7.33345 9.33333 7.33345ZM11.1067 13.5601L8.68666 11.1468L11.1067 8.72679L13.52 11.1401L11.1067 13.5601Z" 
        fill="#FB65FE"/>
    </Svg>
  </View>
);