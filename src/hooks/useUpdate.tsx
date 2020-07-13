import {useEffect, useRef} from 'react';

const useUpdate = (fn: () => void, dependency: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => { // 在数据变化之后，或者首次render后触发。第一个参数就是数据变化后做的事情，第二个参数[tags]是待变化的数据。
    if (count.current > 1) {
      fn();
    }
  }, [fn, dependency]); // 不可变数据（每次都是新的对象，不是对原本对象的修修补补，react应该是看的是内存地址，而不是看具体的内容）
};

export {useUpdate};
