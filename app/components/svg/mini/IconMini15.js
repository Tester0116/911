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
        d="M27.517 18.9302C27.8603 18.9205 28.1793 18.7777 28.4154 18.5281C28.9024 18.0129 28.8794 17.1973 28.3641 16.71L22.724 11.3671C22.7303 11.4364 22.7337 11.5063 22.7337 11.5767V15.0429C22.7525 15.0543 22.7705 15.0675 22.7872 15.0829L26.594 18.5757C26.8472 18.8152 27.1735 18.9394 27.517 18.9302Z" 
        fill={colorFill}/>
      <Path 
        d="M19.469 18.117C19.3061 17.9272 19.0961 17.7927 18.8619 17.7231L18.5055 20.2401C18.8074 20.2381 19.0977 20.1306 19.3308 19.9305C19.5914 19.7067 19.7493 19.3949 19.7754 19.0524C19.8015 18.7098 19.6927 18.3776 19.469 18.117Z" 
        fill={colorFill}/>
      <Path 
        d="M13.6646 19.8398L17.834 20.1898L19.4889 8.50301L19.4815 8.5L13.6646 19.8398Z" 
        fill={colorFill}/>
      <Path 
        d="M17.5204 8.0564H17.5201C16.5951 8.0564 15.4324 8.4453 14.52 9.04376C14.5474 9.07206 14.5743 9.10099 14.6002 9.1311C14.9408 9.52791 15.1064 10.0336 15.0667 10.5551L14.8309 13.2726L18.1324 8.10873C17.9194 8.07497 17.7133 8.0564 17.5204 8.0564Z" 
        fill={colorFill}/>
      <Path 
        d="M11.8324 10.3084L11.1826 18.351C11.1688 18.5328 11.1945 18.7087 11.2515 18.8711L14.0507 14.4929L14.3971 10.5005C14.423 10.1615 14.3141 9.82932 14.0904 9.5687C13.8667 9.30809 13.5548 9.15015 13.2123 9.12399C12.5044 9.06937 11.8863 9.60143 11.8324 10.3084Z" 
        fill={colorFill}/>
      <Path 
        d="M18.8282 8.26769L11.6724 19.4599C11.8639 19.6106 12.0995 19.7091 12.3594 19.7304L12.9407 19.7791L18.8432 8.27227L18.8282 8.26769Z" 
        fill={colorFill}/>
      <Path 
        d="M21.4998 28.0038V36.5538C21.845 36.2399 22.062 35.7874 22.062 35.2851L22.0618 11.2336C22.0618 10.273 21.1947 9.39646 20.124 8.80836L18.9567 17.0524C19.3528 17.148 19.7081 17.3641 19.9787 17.6794C20.3193 18.0762 20.4849 18.5819 20.4452 19.1034C20.4055 19.6248 20.1651 20.0996 19.7683 20.4403C19.4102 20.7478 18.9634 20.9126 18.4964 20.9126C18.4459 20.9126 18.3952 20.9107 18.3444 20.9069L12.9789 20.4566V35.2852C12.9789 35.8315 13.236 36.3187 13.6353 36.6329V29.1895C13.6353 29.004 13.7857 28.8536 13.9712 28.8536C14.1568 28.8536 14.3072 29.004 14.3072 29.1895V36.936C14.3072 36.9425 14.3057 36.9486 14.3053 36.955C14.4302 36.984 14.5601 36.9999 14.6937 36.9999C15.6392 36.9999 16.4084 36.2307 16.4084 35.2852L16.4083 24.796C16.4083 24.6966 16.4522 24.6023 16.5284 24.5385C16.6046 24.4747 16.705 24.4476 16.803 24.4653C17.0571 24.5105 17.2985 24.5334 17.5205 24.5334C17.7426 24.5334 17.984 24.5106 18.2377 24.4654C18.3354 24.448 18.4361 24.4748 18.5123 24.5387C18.5884 24.6026 18.6324 24.6969 18.6324 24.7962L18.6325 35.2852C18.6325 36.2308 19.4018 37 20.3473 37C20.5142 37 20.6754 36.9755 20.828 36.9309V28.0038C20.828 27.8183 20.9784 27.6679 21.1639 27.6679C21.3494 27.6679 21.4998 27.8183 21.4998 28.0038Z" 
        fill={colorFill}/>
      <Ellipse 
        cx="17.4737" cy="3.43165" rx="3.43172" ry="3.43165" 
        fill={colorFill}/>
    </Svg>
  </View>
);