import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
`;

type Props = {
  className?: string,
  scrollTop?: number
}

const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {  // 只所以加setTimeout是因为初始页面为空，无滚动条，也就无法滚动。
      if (!mainRef.current) {return;}
      mainRef.current.scrollTop = props.scrollTop!; // 因为加了默认值，scollTop不存在为空的情况，加'！'就是排除ts的检查。
    }, 0);

  }, [props.scrollTop]);// 钩子，页面渲染之后做的事情
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};
// 加默认值
Layout.defaultProps = {
  scrollTop: 0
};

export default Layout;
