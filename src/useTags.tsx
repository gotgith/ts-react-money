import {useState} from 'react';
import {createID} from './lib/createId';

const defaultTags = [
  {id: createID(), name: '衣'},
  {id: createID(), name: '食'},
  {id: createID(), name: '住'},
  {id: createID(), name: '行'}
];

const useTags = () => { //封装一个自定义的 hook(在函数里面使用useState等一系列，返回读写接口到外面去，这个函数就是一个自定义hook)
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  return {tags, setTags, findTag};
};

export {useTags};
