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
    <Svg width="100%" height="100%" viewBox="0 0 114 114">
      <Path 
        d="M92.0231 61.2797C92.2113 59.7741 92.3525 58.2686 92.3525 56.6689C92.3525 55.0693 92.2113 53.5638 92.0231 52.0582L101.95 44.2952C102.844 43.5895 103.079 42.3192 102.514 41.2841L93.1052 25.0054C92.6818 24.2526 91.882 23.8292 91.0352 23.8292C90.7529 23.8292 90.4706 23.8763 90.2354 23.9704L78.521 28.6752C76.0746 26.7933 73.44 25.2407 70.5702 24.0644L68.7825 11.5966C68.6414 10.4675 67.6534 9.62061 66.4773 9.62061H47.6589C46.4828 9.62061 45.4948 10.4675 45.3537 11.5966L43.5659 24.0644C40.6961 25.2407 38.0616 26.8403 35.6152 28.6752L23.9008 23.9704C23.6185 23.8763 23.3362 23.8292 23.054 23.8292C22.2542 23.8292 21.4544 24.2526 21.031 25.0054L11.6218 41.2841C11.0102 42.3192 11.2925 43.5895 12.1864 44.2952L22.113 52.0582C21.9249 53.5638 21.7837 55.1164 21.7837 56.6689C21.7837 58.2215 21.9249 59.7741 22.113 61.2797L12.1864 69.0427C11.2925 69.7484 11.0573 71.0187 11.6218 72.0538L21.031 88.3325C21.4544 89.0853 22.2542 89.5087 23.101 89.5087C23.3833 89.5087 23.6656 89.4617 23.9008 89.3676L35.6152 84.6627C38.0616 86.5447 40.6961 88.0972 43.5659 89.2735L45.3537 101.741C45.4948 102.87 46.4828 103.717 47.6589 103.717H66.4773C67.6534 103.717 68.6414 102.87 68.7825 101.741L70.5702 89.2735C73.44 88.0972 76.0746 86.4976 78.521 84.6627L90.2354 89.3676C90.5177 89.4617 90.7999 89.5087 91.0822 89.5087C91.882 89.5087 92.6818 89.0853 93.1052 88.3325L102.514 72.0538C103.079 71.0187 102.844 69.7484 101.95 69.0427L92.0231 61.2797ZM82.7081 53.2344C82.8962 54.6929 82.9433 55.6809 82.9433 56.6689C82.9433 57.657 82.8492 58.692 82.7081 60.1035L82.0494 65.4199L86.2365 68.7133L91.3175 72.6654L88.0242 78.3582L82.0494 75.9588L77.1567 73.9827L72.9225 77.182C70.8996 78.6876 68.9707 79.8167 67.0418 80.6166L62.055 82.6396L61.3022 87.9561L60.3613 94.3076H53.7749L52.881 87.9561L52.1283 82.6396L47.1414 80.6166C45.1185 79.7697 43.2366 78.6876 41.3548 77.2761L37.0736 73.9827L32.0868 76.0058L26.1119 78.4053L22.8187 72.7124L27.8997 68.7604L32.0868 65.467L31.4281 60.1505C31.287 58.692 31.1929 57.6099 31.1929 56.6689C31.1929 55.728 31.287 54.6459 31.4281 53.2344L32.0868 47.918L27.8997 44.6246L22.8187 40.6725L26.1119 34.9797L32.0868 37.3791L36.9795 39.3552L41.2136 36.1559C43.2366 34.6503 45.1655 33.5212 47.0944 32.7213L52.0812 30.6983L52.834 25.3818L53.7749 19.0303H60.3143L61.2081 25.3818L61.9609 30.6983L66.9477 32.7213C68.9707 33.5682 70.8525 34.6503 72.7343 36.0618L77.0155 39.3552L82.0024 37.3321L87.9772 34.9326L91.2704 40.6255L86.2365 44.6246L82.0494 47.918L82.7081 53.2344ZM57.0681 37.8496C46.671 37.8496 38.2498 46.2713 38.2498 56.6689C38.2498 67.0666 46.671 75.4883 57.0681 75.4883C67.4652 75.4883 75.8864 67.0666 75.8864 56.6689C75.8864 46.2713 67.4652 37.8496 57.0681 37.8496ZM57.0681 66.0786C51.893 66.0786 47.6589 61.8443 47.6589 56.6689C47.6589 51.4936 51.893 47.2593 57.0681 47.2593C62.2431 47.2593 66.4773 51.4936 66.4773 56.6689C66.4773 61.8443 62.2431 66.0786 57.0681 66.0786Z" 
        fill="#FB65FE"/>
    </Svg>
  </View>
);