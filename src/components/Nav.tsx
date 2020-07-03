import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    width: 100%;
    display:flex;
    justify-content: space-around;
    li{
      >a{
        padding: 4px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #231815;
        .icon{
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: #1677ff;
          .icon{
            fill: #1677ff;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签页面
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账页面
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            统计页面
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
