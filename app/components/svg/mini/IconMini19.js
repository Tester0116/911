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

export default ({ style={}, colorFill="#FFFFFF" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 37 37">
      <Path 
        fillRule="evenodd" clipRule="evenodd" 
        d="M9.934 3.29606L14.5589 4.99998L15.0775 3.59247L11.4392 2.25204C12.5613 1.58438 13.6963 1.15972 14.9957 0.897754L29.6161 6.28422C30.0891 7.05582 30.494 7.92621 30.8712 8.93933C30.9774 9.22482 31.0746 9.50533 31.1628 9.7818L17.0775 4.59247L16.5589 5.99998L31.6151 11.547C31.8623 12.8496 31.8998 14.1025 31.7489 15.4179L26.2298 12.6583L25.5589 14L31.4928 16.9669C31.4251 17.2864 31.3477 17.6115 31.2608 17.9436L5.69658 8.81349C5.94499 8.3435 6.87006 6.64484 7.99418 5.21761L23.5589 13L24.2298 11.6583L9.03291 4.05992C9.10259 3.99403 9.17246 3.93055 9.24244 3.86977C9.47594 3.66697 9.70606 3.47595 9.934 3.29606ZM5.45352 10.3195C5.40861 10.8176 5.38408 11.3582 5.42799 11.7713C5.5333 12.7621 6.11784 13.9354 6.11784 13.9354L5.63089 15.7856L3 18.3905V19.7597L5.21833 20.8551V22.0841C5.21833 22.0841 4.6076 22.8853 4.73138 23.2062C4.85516 23.5272 5.21833 23.794 5.21833 23.794C5.21833 23.794 4.71231 24.5546 4.73138 25.0965C5.44853 25.7392 6.11784 26.8064 6.11784 26.8064C6.11784 26.8064 5.68854 28.3693 6.11784 29.2042C6.41209 29.7765 6.74723 30.0204 7.29463 30.3664C7.71217 30.4351 8.92115 30.2805 10.0182 30.1403H10.0182C10.9468 30.0215 11.7952 29.913 12.0153 29.959C12.4955 30.0592 12.9194 30.2031 13.4018 30.4933C14.2301 30.9917 14.3826 31.6502 14.5955 32.5701C14.6262 32.7027 14.6581 32.8408 14.6936 32.9847C14.9302 33.9453 14.9235 35.5028 14.9235 35.5028C14.9235 35.5028 16.3911 36.9455 18.8056 36.9455C19.4829 36.9455 20.0767 36.9612 20.6257 36.9758C22.0338 37.0132 23.1476 37.0428 24.622 36.7785C26.6712 36.4111 28.5108 35.5028 28.5108 35.5028V33.6593C28.5108 33.6593 26.9765 30.8623 26.6712 28.8435C26.4901 27.6461 26.6142 26.8287 26.7851 25.7033L26.7851 25.7033C26.8031 25.5848 26.8216 25.463 26.8403 25.3369C27.0184 24.8389 27.5397 24.1787 28.1704 23.3799L28.1704 23.3799C29.0367 22.2827 30.1093 20.9241 30.7824 19.3655L5.45352 10.3195ZM27.6831 3.97348C27.0186 3.38264 26.2452 2.83858 25.3253 2.30014C22.8948 0.877503 21.029 0.46616 18.379 0.54565L27.6831 3.97348Z"
        fill={colorFill}/>
    </Svg>
  </View>
);