import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import DetailButton from './DetailButton';

const PaymentDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
`;

const NoContents = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;
  font-size: 1rem;
  margin-top: 20px;
`;

const DetailForm = ({
  title,
  transactions,
  showAll,
  showIncome,
  showExpenditure,
}) => {
  return (
    <PaymentDetail>
      <DetailButton
        showAll={showAll}
        showIncome={showIncome}
        showExpenditure={showExpenditure}
      />

      {transactions.length === 1 ? (
        <NoContents>요청하신 카드의 사용 내역이 존재하지 않습니다.</NoContents>
      ) : (
        <Paper>
          <Chart data={transactions}>
            <ArgumentAxis />
            <ValueAxis max={20} />
            <BarSeries
              valueField="cost"
              argumentField="_id"
              color="#f50057"
              barWidth="0.5"
            />
            <Title text={title} />
            <Animation />
          </Chart>
        </Paper>
      )}
    </PaymentDetail>
  );
};

export default DetailForm;