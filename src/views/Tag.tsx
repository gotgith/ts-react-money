import React from 'react';
import {useTags} from '../hooks/useTags';
import {useParams, useHistory} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Cente';
import {Space} from '../components/Space';

type Params = {
  id: string
}
const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: gray;
`;

const InputWrapper = styled.div`
  padding: 0 16px;
  margin-top: 8px;
  background: gray;
`;

const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  const {id: idString} = useParams<Params>();  // 把 id 重命名为 idString
  const tag = findTag(parseInt(idString));

  const tagContent = (tag: { id: number, name: string }) => {
    return (
      <div>
        <InputWrapper>
          <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
                 onChange={(e) => updateTag(tag.id, {name: e.target.value})}/>
        </InputWrapper>
        <Center>
          <Space/>
          <Space/>
          <Space/>
          <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
        </Center>
      </div>
    );
  };
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <TopBar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
    </Layout>

  );
};

export {Tag};
