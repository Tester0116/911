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
    <Svg width="100%" height="100%" viewBox="0 0 47 41">
      <Path 
        d="M34.0574 9.9017C34.0574 7.79177 35.7686 6.08136 37.8773 6.08136C39.9877 6.08136 41.6973 7.79177 41.6973 9.9017C41.6973 12.0116 39.9868 13.722 37.8773 13.722C35.7686 13.722 34.0574 12.0116 34.0574 9.9017ZM46.9705 9.22121L45.2646 16.1576C45.1194 16.7475 44.595 17.1437 44.0147 17.1499L43.8711 17.1512L42.2179 17.1683L42.8236 24.3752C42.8412 24.584 42.8366 24.7894 42.8178 24.991C42.865 25.1889 42.8837 25.3976 42.8675 25.6105C42.862 25.6686 42.8554 25.7278 42.8458 25.7842L42.0262 30.7989L44.1566 39.2266C44.3366 39.9375 43.9053 40.6589 43.1948 40.838C42.5297 41.0058 41.853 40.6347 41.6217 40.0051L38.4939 31.4014C38.4259 31.2143 38.4008 31.0219 38.4154 30.8353L38.428 30.6649L38.5845 28.588L34.4039 31.6498L35.2693 38.9573C35.3549 39.6854 34.8347 40.345 34.1075 40.4314C33.4215 40.512 32.7945 40.049 32.653 39.3877L30.9116 31.1392C30.791 30.5668 30.9976 30.0016 31.4059 29.6396L31.5249 29.5344L35.9582 25.6051C35.901 25.398 35.8621 25.1834 35.8433 24.9609L35.2251 17.6042C35.2196 17.5457 35.2213 17.4889 35.2188 17.4313L31.7992 17.7336L31.6823 17.7436C31.1037 17.7945 30.581 17.4559 30.371 16.9466L27.7146 10.4841C27.4921 9.94219 27.7505 9.3214 28.2928 9.09847C28.8034 8.88848 29.3853 9.11016 29.6375 9.58859L32.3812 14.8354L37.254 14.0088C37.3755 13.9884 37.6143 13.9896 37.6143 13.9896L38.557 15.5723L39.7142 13.9562C39.7159 13.9562 39.718 13.9562 39.7197 13.9562C39.7806 13.9558 39.8411 13.9583 39.9004 13.9646L42.9831 14.2769L44.9373 8.6213C45.129 8.0673 45.7322 7.7734 46.2866 7.9646C46.8072 8.14454 47.097 8.69561 46.9705 9.22121ZM41.4363 19.9921L41.284 17.5541L39.455 17.668L39.6078 20.1061L41.4363 19.9921ZM27.0612 17.5816C27.2913 18.8428 26.2283 19.9896 25.2965 20.729C24.5764 21.2997 23.9193 21.6462 23.8917 21.6608L23.8053 21.7063L23.5323 21.3614L23.1323 21.6787C23.2095 21.9259 23.1995 22.2014 23.0784 22.4531C22.8392 22.9504 22.2581 23.175 21.7504 22.9871L15.133 20.5169C14.9768 20.4584 14.842 20.3687 14.7326 20.2568L14.6387 20.1604L13.754 19.2498L11.963 24.9062C11.847 25.2724 11.6758 25.6059 11.4625 25.9011L14.427 29.9999L14.5076 30.1118C14.7848 30.495 14.8453 30.9759 14.7171 31.3959L12.2782 39.2082C12.0745 39.8611 11.3798 40.2252 10.7269 40.021C10.1102 39.8286 9.75204 39.1927 9.88605 38.5736L11.4541 31.4252L8.25829 27.7276L7.94894 29.5294L7.92389 29.6763C7.88924 29.8784 7.80658 30.0679 7.69553 30.2241L2.24532 37.8702C1.84829 38.4271 1.0747 38.5573 0.517779 38.1591C-0.00657714 37.7854 -0.149356 37.0736 0.16626 36.528L4.66253 28.8055L5.05454 24.1143C5.0654 23.984 5.0892 23.8592 5.12426 23.7402C5.13428 23.4246 5.18355 23.1065 5.28332 22.7921L7.04969 17.2142L6.0899 17.41L4.57444 19.6469L3.65431 21.0287L3.20677 21.7159L2.99386 22.0528L2.90243 22.2018L2.88072 22.2365L2.86987 22.2544L2.86444 22.2632L2.87404 22.2419C2.89951 22.183 2.91287 22.1154 2.91161 22.0511C2.83021 22.6318 2.29458 23.0359 1.71428 22.9545C1.13398 22.874 0.729859 22.3375 0.810851 21.7576C0.835482 21.6286 0.875143 21.4975 0.92691 21.3752L0.99329 21.2299L1.0985 21.0124L1.29513 20.6213L1.68673 19.8669L2.47743 18.384L4.07722 15.4387C4.23336 15.1511 4.48969 14.9528 4.77901 14.863L4.91636 14.8204L9.4047 13.4377C9.64558 13.3634 9.89023 13.3505 10.1236 13.386C10.6972 13.2632 11.3092 13.2812 11.9087 13.4711C12.2841 13.5897 12.6226 13.7684 12.9232 13.9888C13.1457 14.0698 13.3553 14.195 13.5311 14.3762C13.567 14.4134 13.602 14.453 13.6338 14.4923L16.5536 18.1389L22.314 20.9072C22.3211 20.8884 22.3291 20.8697 22.3345 20.8509L23.0129 20.3115L23.0346 20.3382L26.8587 17.3032L27.055 17.5499L27.0612 17.5816ZM23.3669 21.1669L22.9724 20.6701L22.5374 21.0145L22.5808 21.0362C22.772 21.1285 22.9215 21.2709 23.0246 21.4391L23.3669 21.1669ZM26.8316 17.6517L26.8212 17.6384L23.1824 20.5252L23.7239 21.2082L23.7172 21.2137L23.8671 21.4028C24.0683 21.2896 24.5956 20.9803 25.1479 20.5419C26.0217 19.8485 27.0186 18.7873 26.8316 17.6517ZM24.0771 20.1065L25.2514 20.2418L25.2656 20.1157L24.0917 19.9804L24.0771 20.1065ZM24.4031 19.8477L25.5779 19.9829L25.5925 19.8569L24.4173 19.7216L24.4031 19.8477ZM23.8011 7.75211C21.7279 9.00496 18.4377 10.9642 20.0208 9.9088C21.601 8.8555 21.4461 6.98812 21.3121 6.25128C21.2332 6.16402 21.1576 6.0751 21.0879 5.98326C20.6629 5.42217 20.422 4.78009 20.422 4.09793C20.422 1.902 22.9202 0.12146 26.0021 0.12146C29.0839 0.12146 31.5821 1.90158 31.5821 4.09793C31.5821 6.29344 29.0839 8.07398 26.0021 8.07398C25.2197 8.07398 24.4758 7.95876 23.8011 7.75211ZM27.705 4.38641C27.705 4.63105 27.4987 4.80722 27.194 4.80722C26.9535 4.80722 26.7302 4.72582 26.5761 4.6227L26.4734 4.91034C26.6233 5.01763 26.8817 5.09445 27.1297 5.09904V5.5328H27.3994V5.08652C27.8423 5.01346 28.0774 4.69617 28.0774 4.35677C28.0774 3.97477 27.8553 3.75184 27.4123 3.57149C27.0383 3.41702 26.8809 3.30514 26.8809 3.08221C26.8809 2.91062 27.0049 2.71316 27.3359 2.71316C27.6098 2.71316 27.786 2.80751 27.8766 2.85886L27.9839 2.57581C27.8594 2.50275 27.6833 2.43428 27.4257 2.42552V2.00929H27.1597V2.44263C26.7652 2.50692 26.511 2.77703 26.511 3.13356C26.511 3.50678 26.7807 3.70425 27.219 3.87583C27.5371 4.00442 27.7046 4.15053 27.705 4.38641ZM25.5015 4.38641C25.5015 4.63105 25.2965 4.80722 24.9909 4.80722C24.7509 4.80722 24.5275 4.72582 24.3731 4.6227L24.2708 4.91034C24.4202 5.01763 24.6787 5.09445 24.9266 5.09904V5.5328H25.1963V5.08652C25.6389 5.01346 25.8747 4.69617 25.8747 4.35677C25.8747 3.97477 25.6514 3.75184 25.2093 3.57149C24.8356 3.41702 24.677 3.30514 24.677 3.08221C24.677 2.91062 24.8018 2.71316 25.1325 2.71316C25.4067 2.71316 25.5833 2.80751 25.6731 2.85886L25.7804 2.57581C25.656 2.50275 25.4802 2.43428 25.2226 2.42552V2.00929H24.9567V2.44263C24.5618 2.50692 24.3083 2.77703 24.3083 3.13356C24.3083 3.50678 24.5785 3.70425 25.016 3.87583C25.3349 4.00442 25.5015 4.15053 25.5015 4.38641ZM12.593 13.4523C14.6178 13.7312 16.4843 12.316 16.7632 10.2912C16.772 10.2282 16.7741 10.166 16.7795 10.1038C17.4546 10.4565 18.0349 10.5855 18.1238 10.062C18.224 9.47253 17.7581 8.91603 17.2057 8.4756L17.303 7.76087C17.4387 6.77145 16.7486 5.8601 15.7579 5.72317L11.8182 5.18254C10.8312 5.0456 9.91987 5.73778 9.78293 6.72637L9.66228 7.61017C9.62012 7.90908 9.67606 8.05269 9.8013 8.11239C9.61845 8.47017 9.48903 8.8626 9.43142 9.28341C9.15462 11.3078 10.5678 13.1747 12.593 13.4523Z"
        fill={colorFill}/>
    </Svg>
  </View>
);