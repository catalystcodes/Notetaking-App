import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const PersonalDetails = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={"36px"}
    height={"36px"}
    fill="none"
    {...props}
  >
    <Circle cx={18} cy={18} r={18} fill="#7D57F1" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M28 18a9.976 9.976 0 0 1-3.441 7.549A9.961 9.961 0 0 1 18 28a9.961 9.961 0 0 1-6.559-2.451A9.977 9.977 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10Zm-10 7a6.973 6.973 0 0 0 5-2.101C21.92 21.15 20.083 20 18 20s-3.92 1.15-5 2.899A6.974 6.974 0 0 0 18 25Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default PersonalDetails;
