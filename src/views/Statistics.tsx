import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
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
const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={value => setCategory(value)}/>
      </CategoryWrapper>

      <div>
        {
          records.map(r => {
            return <Item>
              <div className="tags">
                {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
              </div>
              {r.note && <div className="notes">{r.note}</div>}
              <div className="amount">
                ￥{r.amount}
              </div>
              {/*{day(r.createAt).format('YYYY-MM-DD')}*/}
            </Item>;
          })
        }
      </div>
    </Layout>
  );
};
export default Statistics;
