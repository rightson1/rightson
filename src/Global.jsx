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

    width: 10px;
  background-color: black;
  border-radius: 3rem;
  &-button{
    height:10px ;
    background-color: black;
  }
    &-thumb{
  border-radius: 3rem;
background-color: white;
box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
}

`;

export default Global;
