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
        d="M33.351 12.8771L32.1416 11.6677L36.1503 9.16269L35.5375 8.18219L30.2962 11.4584L31.3993 12.5615L29.5261 13.4981C29.9574 13.6952 30.3719 13.9189 30.7639 14.1721L33.351 12.8771Z" 
        fill={colorFill}/>
      <Path 
        d="M30.5648 8.09373H28.5841L30.026 4.24978L28.9426 3.84393L26.9157 9.24998H28.4038L26.3445 12.3395L27.4724 12.7314L30.5648 8.09373Z" 
        fill={colorFill}/>
      <Path 
        d="M18.5001 8.65106C22.2394 7.62489 25.3584 5.13317 27.1945 1.73438H9.80566C11.6418 5.13317 14.7608 7.62489 18.5001 8.65106ZM18.5001 4.625C19.7968 4.625 20.8126 5.38697 20.8126 6.35938H19.6563C19.6563 6.1235 19.206 5.78125 18.5001 5.78125C17.7942 5.78125 17.3438 6.1235 17.3438 6.35938H16.1876C16.1876 5.38697 17.2033 4.625 18.5001 4.625Z" 
        fill={colorFill}/>
      <Path 
        d="M30.7638 14.171L26.8528 16.1268L26.3353 15.0926L29.526 13.4975C29.2462 13.3697 28.9612 13.2495 28.6663 13.1472L27.4725 12.7321L26.4966 14.1959L25.5346 13.5547L26.3446 12.3395L24.298 11.6279C22.9516 11.1596 22.0404 9.9114 21.9803 8.49673C20.9351 9.05636 19.8199 9.50094 18.6474 9.80965L18.5 9.84781L18.3532 9.80908C17.1807 9.50036 16.0649 9.05578 15.0203 8.49615C14.9601 9.91083 14.049 11.159 12.7026 11.6273L8.33425 13.1466C4.38623 14.5196 1.73438 18.2503 1.73438 22.4295V30.0625C1.73438 32.9312 4.06884 35.2657 6.9375 35.2657H8.09375H9.0228L17.0778 27.7864L19.621 27.3627C20.2188 27.2632 20.761 26.984 21.1894 26.5556L25.826 21.9191C25.948 21.7965 26.0156 21.634 26.0156 21.4606C26.0156 21.1033 25.7248 20.8125 25.3675 20.8125C25.1941 20.8125 25.0317 20.8802 24.9091 21.0022L21.2212 24.69L20.4038 23.8725L24.0916 20.1847L25.2479 19.0284C25.3699 18.9059 25.4375 18.7434 25.4375 18.57C25.4375 18.2127 25.1467 17.9219 24.7894 17.9219C24.616 17.9219 24.4535 17.9895 24.331 18.1115L19.4869 22.9556L18.6694 22.1382L23.5135 17.2941L24.6698 16.1378C24.7917 16.0152 24.8594 15.8528 24.8594 15.6794C24.8594 15.3221 24.5686 15.0313 24.2113 15.0313C24.0379 15.0313 23.8754 15.0989 23.7528 15.2209L22.0185 16.9553L17.7525 21.2213L16.935 20.4038L21.201 16.1378C21.323 16.0152 21.3906 15.8528 21.3906 15.6794C21.3906 15.3221 21.0998 15.0313 20.7425 15.0313C20.5691 15.0313 20.4067 15.0989 20.2841 15.2209L17.3438 18.1612L14.8619 20.6431L14.8324 20.6726L14.0149 19.8552L14.0444 19.8257L16.1875 17.6826V17.416C16.1875 16.4777 15.7221 15.6065 14.9434 15.085C14.7457 14.9527 14.4531 15.1099 14.4531 15.3458V15.9418C14.4531 17.0004 14.0409 17.9953 13.2928 18.7434L12.4095 19.6268C11.8631 20.1731 11.5625 20.8992 11.5625 21.671V23.9425L4.45561 31.0494L3.63814 30.2319L7.51562 26.3544V24.9999C7.51562 23.5725 6.96005 22.2307 5.95064 21.2213L6.76811 20.4038C7.99605 21.6317 8.67188 23.2638 8.67188 24.9999V25.1982L10.4062 23.4638V21.671C10.4062 20.59 10.8271 19.5742 11.5914 18.8093L12.4748 17.926C13.0049 17.3964 13.2969 16.6917 13.2969 15.9418V15.3458C13.2969 14.5352 13.9571 13.875 14.7676 13.875C15.0602 13.875 15.3434 13.9612 15.5862 14.1236C16.4598 14.7087 17.0478 15.6071 17.2553 16.6148L19.4666 14.4034C19.8071 14.0629 20.2604 13.875 20.7425 13.875C21.4773 13.875 22.1081 14.3179 22.3896 14.9492L22.9354 14.4034C23.2759 14.0629 23.7291 13.875 24.2113 13.875C25.2063 13.875 26.0156 14.6844 26.0156 15.6794C26.0156 16.1465 25.8364 16.5841 25.5155 16.9206C26.1492 17.201 26.5938 17.8335 26.5938 18.57C26.5938 19.0371 26.4145 19.4747 26.0937 19.8112C26.7273 20.0916 27.1719 20.7241 27.1719 21.4606C27.1719 21.9428 26.984 22.396 26.6435 22.7365L22.0069 27.3731C21.4068 27.9732 20.6477 28.3634 19.8112 28.5033L17.6097 28.8704L10.7219 35.2657H28.3281V24.9999C28.3281 23.2638 29.004 21.6317 30.2319 20.4038L31.0494 21.2213C30.04 22.2307 29.4844 23.5725 29.4844 24.9999V35.2657H35.2656V22.4295C35.2656 19.0435 33.5237 15.9528 30.7638 14.171Z" 
        fill={colorFill}/>
    </Svg>
  </View>
);