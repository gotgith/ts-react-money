import {useEffect, useRef, useState} from 'react';
import {createID} from '../lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => { //封装一个自定义的 hook(在函数里面使用useState等一系列，返回读写接口到外面去，这个函数就是一个自定义hook)
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {  // 第二个参数为空，相当于第一次渲染，类似于afterMount
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createID(), name: '衣'},
        {id: createID(), name: '食'},
        {id: createID(), name: '住'},
        {id: createID(), name: '行'}
      ];
    }
    setTags(localTags);
  }, []);  // 组件挂载时执行
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const addTag = () => {
    const tagName = window.prompt('新的标签名为');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createID(), name: tagName}]);
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter(item => item.id === id)[0];
    return tag ? tag.name : '';

  };
  const findTagIndex = (id: number) => {
    let result = -1;  //若是直接返回i，会存在找不到的情况，这样返回的就是tags的length长度，因此需要标记一下，找不到返回result的默认值
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
      return result;
    }
  };
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));

    // 下面的方法过于繁琐
    // // 获取要更改的 tag 的下标
    // let index = findTagIndex(id);
    // // 深拷贝 tags 得到 tagsClone
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // // 把 tagsClone 的第 index 删除，换成{id: id, name: obj.name}
    // tagsClone.splice(index, 1, {id: id, name: obj.name});  //splice的返回是删除的元素，因此不需要接收返回值，只需要改变tags
    // setTags(tagsClone); // 不可变数据，在vue中我们可以直接更改原数据并返回；但是react不能这么做，需要我们深拷贝后在新的数据上操作
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  return {tags, getName, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag};
};

export {useTags};
