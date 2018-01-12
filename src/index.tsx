import * as React from "react";
import * as ReactDOM from "react-dom";

import styled, { css } from 'react-emotion';


const Child = styled('div')`
	color: red;
`

const Parent = styled('div')`
	${Child} {
		color: green;
	}
`

class HelloWorld extends React.Component<{}, {}> {

  render(){
   return(
    <div>
      <Parent>
        <Child>green</Child>
      </Parent>
      <Child>red</Child>
    </div>
  )}
}

const rootEl = document.getElementById("root");
ReactDOM.render( <HelloWorld />, rootEl);

