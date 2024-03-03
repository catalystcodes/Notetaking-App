import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const CollectionIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Circle cx={18} cy={18} r={18} fill="#7D57F1" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M12 11a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1H12v-1Zm-2 4.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H10v-1ZM8 20a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-3Zm7.25 1a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CollectionIcon;
