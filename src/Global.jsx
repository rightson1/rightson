import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
    
    margin: 0;
    font-family: "Josefin Sans", sans-serif;
    box-sizing: border-box;
    padding: 0;


  color:white ;


}
body{
    overflow-x:hidden;
}
::-webkit-scrollbar{

    width: 5px;
  background-color: black;
  &-button{
    height:100px ;
  }
    &-thumb{

background-color: white;
box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
}

`;

export default Global;
