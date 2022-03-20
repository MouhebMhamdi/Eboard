

import React from 'react';
import { Link } from 'react-router-dom';
import styled , { css }from 'styled-components';

const Button = styled.button`
    background-color: transparent ; 
  box-shadow:5px 5px 10px rgba(0, 0, 0, 0.2) 
  color: #FFF !important;
  border:0px;
  border-radius: 2px;
  width:100%;
  padding: 10px 20px; !Important;
  margin: 0.25em 0em;
 
  ${props => props.facebook && css`
    background: #4267B2;
    color: white;
    &:hover {
        background-color:#3C5D9F;
    }
  `}
  ${props => props.gmail && css`
    background: #EA4335;
    color: white;
    &:hover {
        background-color:#C5392D;
    }
  `}
  ${props => props.signup && css`
    background: #65A2D1;
    color: #FFF;
    &:hover {
        background-color:#4E84AD;
    }
  `}
`;

const Container = styled.div`
  text-align: center;
`

export const ButtonsLogin = ({
  text1,
  text2,
  text3,
  type,
  onClick,
}) => {
    

  return (
    <div>

    
    
      <Link  to="/login"><Button gmail
        onClick={onClick}
        type={type}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google pr-3" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
        </svg> {text2}
      </Button></Link>
      <Link  to="/sign-up"><Button signup
        onClick={onClick}
        type={type}
      >
        {text3}
      </Button></Link>
      
      </div>
  );
  
};
