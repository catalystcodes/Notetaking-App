import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const changePasswordIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={18} cy={18} r={18} fill="#7D57F1" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 14h-8m8 0a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4m8 0v-2a4 4 0 0 0-8 0v2m4 8v-2"
    />
  </Svg>
);
export default changePasswordIcon;
