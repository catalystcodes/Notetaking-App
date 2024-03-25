import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const ChangePasswordIcon = (props) => (
  <Svg width={"36px"} height={"36px"} fill="none" {...props}>
    <Circle cx={18} cy={18} r={18} fill="#7D57F1" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 14h-8m8 0a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4m8 0v-2a4 4 0 0 0-8 0v2m4 8v-2"
    />
  </Svg>
);
export default ChangePasswordIcon;
