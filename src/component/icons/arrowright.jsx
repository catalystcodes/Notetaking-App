import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Arrowright = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#28303F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 7 4 5-4 5"
    />
  </Svg>
);
export default Arrowright;
