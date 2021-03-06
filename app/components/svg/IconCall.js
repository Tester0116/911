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
        d="M4.36 3.333c.04.594.14 1.174.3 1.727l-.8.8a9.884 9.884 0 01-.507-2.527H4.36zm6.573 8.014c.567.16 1.147.26 1.734.3v.993c-.88-.06-1.727-.233-2.534-.5l.8-.793zM5 2H2.667C2.3 2 2 2.3 2 2.667 2 8.927 7.073 14 13.333 14c.367 0 .667-.3.667-.667v-2.326c0-.367-.3-.667-.667-.667a7.604 7.604 0 01-2.38-.38.683.683 0 00-.68.16l-1.466 1.467a10.1 10.1 0 01-4.394-4.394L5.88 5.727a.669.669 0 00.167-.68 7.574 7.574 0 01-.38-2.38C5.667 2.3 5.367 2 5 2z"
        fill="#FF842C"
      />
    </Svg>
  </View>
);