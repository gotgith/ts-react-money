import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

const Item = styled.div`
  display:flex;
  justify-content:space-between;
  background: #c4c4c4;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const selectedRecords = records.filter(r => r.category === category);
  const hash: { [K: string]: RecordItem[] } = {};
  selectedRecords.forEach(r => {
    const key = day(r.createAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  // console.log(Object.entries(hash)) // 对象转换为数组
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) {return 0;}
    if (a[0] > b[0]) {return -1;}
    if (a[0] < b[0]) {return 1;}
    return 0;
  });
  console.log('aaa', array);

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      {array.map(([date, records]) =>
        <div>
          <Header>{date}</Header>
          <div>
            {
              records.map(r => {
                return <Item>
                  <div className="tags oneLine">
                    {r.tagIds
                      .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                      .reduce((result, span, index, array) =>
                        result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                    }
                  </div>
                  {r.note && <div className="notes">{r.note}</div>}
                  <div className="amount">
                    ￥{r.amount}
                  </div>
                  {/*{day(r.createAt).format('YYYY年MM月DD日')}*/}
                </Item>;
              })
            }
          </div>
        </div>
      )}
    </Layout>
  );
};
export default Statistics;
