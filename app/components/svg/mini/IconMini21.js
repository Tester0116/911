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
    <Svg width="100%" height="100%" viewBox="0 0 41 41">
      <Path 
        d="M39.7188 21.6211H36.5156C35.8523 21.6211 35.3145 21.0833 35.3145 20.4199C35.3145 19.7566 35.8523 19.2188 36.5156 19.2188H39.7188C40.3821 19.2188 40.9199 19.7566 40.9199 20.4199C40.9199 21.0833 40.3821 21.6211 39.7188 21.6211Z" 
        fill={colorFill}/>
      <Path 
        d="M4.48438 21.6211H1.28125C0.617883 21.6211 0.0800781 21.0833 0.0800781 20.4199C0.0800781 19.7566 0.617883 19.2188 1.28125 19.2188H4.48438C5.14774 19.2188 5.68555 19.7566 5.68555 20.4199C5.68555 21.0833 5.14774 21.6211 4.48438 21.6211Z" 
        fill={colorFill}/>
      <Path 
        d="M34.3712 13.6135C33.9561 13.6135 33.5523 13.3981 33.3299 13.0127C32.9981 12.4382 33.1949 11.7035 33.7695 11.3719L36.5435 9.77034C37.118 9.4385 37.8526 9.63541 38.1843 10.21C38.516 10.7845 38.3192 11.5192 37.7447 11.8508L34.9707 13.4523C34.7815 13.5616 34.575 13.6135 34.3712 13.6135Z" 
        fill={colorFill}/>
      <Path 
        d="M28.5067 7.75137C28.3029 7.75137 28.0963 7.69948 27.9072 7.59017C27.3326 7.25849 27.1358 6.52385 27.4676 5.94937L29.0691 3.17538C29.4008 2.60074 30.1354 2.40391 30.7099 2.73575C31.2845 3.06744 31.4813 3.80207 31.1496 4.37655L29.548 7.15054C29.3255 7.53588 28.9218 7.75137 28.5067 7.75137Z" 
        fill={colorFill}/>
      <Path 
        d="M20.5 5.60547C19.8366 5.60547 19.2988 5.06766 19.2988 4.4043V1.20117C19.2988 0.537805 19.8366 0 20.5 0C21.1634 0 21.7012 0.537805 21.7012 1.20117V4.4043C21.7012 5.06766 21.1634 5.60547 20.5 5.60547Z" 
        fill={colorFill}/>
      <Path 
        d="M12.4933 7.75137C12.0782 7.75137 11.6744 7.53596 11.4519 7.15055L9.85039 4.37656C9.51862 3.80208 9.71545 3.06736 10.29 2.73576C10.8646 2.404 11.5991 2.60083 11.9308 3.17539L13.5324 5.94938C13.8641 6.52386 13.6673 7.25857 13.0927 7.59018C12.9036 7.6994 12.6971 7.75137 12.4933 7.75137Z" 
        fill={colorFill}/>
      <Path 
        d="M6.62904 13.6136C6.42524 13.6136 6.21872 13.5617 6.02958 13.4524L3.25559 11.8508C2.68103 11.5191 2.4842 10.7845 2.81596 10.21C3.14764 9.63538 3.88228 9.43847 4.45676 9.7704L7.23075 11.372C7.80531 11.7036 8.00214 12.4383 7.67038 13.0128C7.44792 13.3982 7.04417 13.6136 6.62904 13.6136Z" 
        fill={colorFill}/>
      <Path 
        d="M39.7188 21.6211H36.5156C35.8523 21.6211 35.3145 21.0833 35.3145 20.4199C35.3145 19.7566 35.8523 19.2188 36.5156 19.2188H39.7188C40.3821 19.2188 40.9199 19.7566 40.9199 20.4199C40.9199 21.0833 40.3821 21.6211 39.7188 21.6211Z" 
        fill={colorFill}/>
      <Path 
        d="M34.3712 13.6135C33.9561 13.6135 33.5523 13.3981 33.3299 13.0127C32.9981 12.4382 33.1949 11.7035 33.7695 11.3719L36.5435 9.77034C37.118 9.4385 37.8526 9.63541 38.1843 10.21C38.516 10.7845 38.3192 11.5192 37.7447 11.8508L34.9707 13.4523C34.7815 13.5616 34.575 13.6135 34.3712 13.6135Z" 
        fill={colorFill}/>
      <Path 
        d="M28.5067 7.75137C28.3029 7.75137 28.0963 7.69948 27.9072 7.59017C27.3326 7.25849 27.1358 6.52385 27.4676 5.94937L29.0691 3.17538C29.4008 2.60074 30.1354 2.40391 30.7099 2.73575C31.2845 3.06744 31.4813 3.80207 31.1496 4.37655L29.548 7.15054C29.3255 7.53588 28.9218 7.75137 28.5067 7.75137Z" 
        fill={colorFill}/>
      <Path 
        d="M20.5 5.60547C19.8366 5.60547 19.2988 5.06766 19.2988 4.4043V1.20117C19.2988 0.537805 19.8366 0 20.5 0C21.1634 0 21.7012 0.537805 21.7012 1.20117V4.4043C21.7012 5.06766 21.1634 5.60547 20.5 5.60547Z" 
        fill={colorFill}/>
      <Path 
        d="M12.4933 7.75137C12.0782 7.75137 11.6744 7.53596 11.4519 7.15055L9.85039 4.37656C9.51862 3.80208 9.71545 3.06736 10.29 2.73576C10.8646 2.404 11.5991 2.60083 11.9308 3.17539L13.5324 5.94938C13.8641 6.52386 13.6673 7.25857 13.0927 7.59018C12.9036 7.6994 12.6971 7.75137 12.4933 7.75137Z" 
        fill={colorFill}/>
      <Path 
        d="M10.7905 22.4219C12.2832 22.4219 13.4932 21.2119 13.4932 19.7192V20.52C13.4932 21.9735 14.6407 23.1585 16.0791 23.2197C15.5831 22.4308 15.2949 21.4987 15.2949 20.5C15.2949 18.2036 16.813 16.2551 18.8984 15.6055C19.3793 15.4557 19.8904 15.375 20.4199 15.375H24.3037H29.709V12.312C29.709 10.8194 28.499 9.60938 27.0063 9.60938C25.5137 9.60938 24.3037 10.8194 24.3037 12.312V10.7104C24.3037 9.21779 23.0937 8.00781 21.6011 8.00781C20.1084 8.00781 18.8984 9.21779 18.8984 10.7104V12.312C18.8984 10.8194 17.6885 9.60938 16.1958 9.60938C14.7031 9.60938 13.4932 10.8194 13.4932 12.312V13.9136C13.4932 12.4209 12.2832 11.2109 10.7905 11.2109C9.29787 11.2109 8.08789 12.4209 8.08789 13.9136V19.7192C8.08789 21.2119 9.29787 22.4219 10.7905 22.4219Z" 
        fill={colorFill}/>
      <Path 
        d="M29.3086 17.7773H20.4199C18.9162 17.7773 17.6973 18.9963 17.6973 20.5C17.6973 22.0037 18.9162 23.2227 20.4199 23.2227H27.1096C25.0602 23.9639 24.1035 25.3679 24.1035 27.627C24.1035 28.2903 23.5657 28.8281 22.9023 28.8281C22.239 28.8281 21.7012 28.2903 21.7012 27.627C21.7012 26.9122 21.7774 26.2443 21.9267 25.625H20.4199C19.666 25.625 18.9502 25.46 18.305 25.1664C17.6617 25.46 16.948 25.625 16.1958 25.625C14.9231 25.625 13.7586 25.1557 12.8637 24.3826C12.2297 24.6656 11.5284 24.8242 10.7905 24.8242C9.79852 24.8242 8.87234 24.5388 8.08789 24.0471V29.6512C8.08789 32.061 9.29779 34.2509 11.291 35.5307V39.7988C11.291 40.4622 11.8288 41 12.4922 41H28.5078C29.1712 41 29.709 40.4622 29.709 39.7988V35.5307C29.709 35.5307 29.709 35.5305 29.709 35.5303C31.702 34.2506 32.9121 32.061 32.9121 29.6512V21.3809C32.9121 19.3907 31.2988 17.7773 29.3086 17.7773Z" 
        fill={colorFill}/>
    </Svg>
  </View>
);