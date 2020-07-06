import {useState} from 'react';

const useTags = () => { //封装一个自定义的 hook(在函数里面使用useState等一系列，返回读写接口到外面去，这个函数就是一个自定义hook)
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  return {tags, setTags};
};

export {useTags};
