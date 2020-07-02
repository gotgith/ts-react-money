import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

require('icons/chart.svg');
require('icons/money.svg');
require('icons/taps.svg');

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    width: 100%;
    display:flex;
    justify-content: space-around;
    li{
      padding: 4px;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon">
            <use xlinkHref="#taps"></use>
          </svg>
          <Link to="/tags">标签页面</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money"></use>
          </svg>
          <Link to="/money">记账页面</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#chart"></use>
          </svg>
          <Link to="/statistics">统计页面</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
