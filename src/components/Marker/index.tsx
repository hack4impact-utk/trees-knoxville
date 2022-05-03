import React, { FunctionComponent } from 'react';
import { ChildComponentProps } from 'google-map-react';
import {Tree} from "utils/types";
//import './styles.css';
interface Props extends ChildComponentProps {
  tree: Tree;
  handleTreeDisplay(tree: Tree): void;
}

const Marker: FunctionComponent<Props> = ({tree, handleTreeDisplay}): JSX.Element => {
  return (
    <div id="body" onClick={() => handleTreeDisplay(tree)}>
      <svg 
        width="36px" 
        height="36px" 
        viewBox="0 0 449.792 449.792" 
        xmlns="http://www.w3.org/2000/svg">
        <circle fill="green" stroke="#000" stroke-width="4.63214" stroke-opacity=".00409833" cx="308.979" cy="167.708" r="72.763"/>
        <circle fill="green" stroke="#000" stroke-width="4.63214" stroke-opacity=".00409833" cx="236.278" cy="103.268" r="72.763"/>
        <circle fill="green" stroke="#000" stroke-width="4.63214" stroke-opacity=".00409833" cx="228.843" cy="222.234" r="72.763"/>
        <circle fill="green" stroke="#000" stroke-width="4.63214"stroke-opacity=".00409833" cx="137.967" cy="130.531" r="72.763"/>
        <circle fill="green" stroke="#000" stroke-width="3.53626"stroke-opacity=".00409833" cx="139.206" cy="224.299" r="55.548"/>
        <path fill="#a05a2c" stroke="#000" stroke-width="4.24426"stroke-opacity=".00409833" d="M211.278 237.005h28.046v176.923h-28.046z"/>
        <path fill="#a05a2c" stroke="#000" stroke-width="3.20091"stroke-opacity=".00409833" transform="matrix(.78727 .6166 -.6622 .74933 0 0)" d="M359.545 18.921h19.709v79.67h-19.709z"/>
        <path fill="#a05a2c" stroke="#000" stroke-width="3.14132"stroke-opacity=".00409833" transform="matrix(.90534 -.4247 .44184 .8971 0 0)" d="M54.099 289.755h19.383v78.021H54.099z"/>
        </svg>
    </div>
  );
};

export default Marker;
