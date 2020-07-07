import {useState} from 'react';

const useTags = () => { //封装一个自定义的 hook(在函数里面使用useState等一系列，返回读写接口到外面去，这个函数就是一个自定义hook)
  const [tags, setTags] = useState<{ id: number, name: string }[]>([
    {id: 1, name: '衣'},
    {id: 2, name: '食'},
    {id: 3, name: '住'},
    {id: 4, name: '行'}
  ]);
  return {tags, setTags};
};

export {useTags};
