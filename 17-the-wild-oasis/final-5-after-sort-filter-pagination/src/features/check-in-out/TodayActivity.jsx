import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { box } from 'styles/styles';
import Button from 'ui/Button';
import Heading from 'ui/Heading';
import Row from 'ui/Row';
import Spinner from 'ui/Spinner';
import TodayItem from '../dashboard/TodayItem';
import { useActivityTodayStays } from './useActivityTodayStays';

const StyledToday = styled.div`
  ${box}
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function Today() {
  const { isLoading, stays } = useActivityTodayStays();

  return (
    <StyledToday>
      <Row type='horizontal'>
        <Heading type='h2'>Today</Heading>
        {/* Through the 'as' props, we make the button Polymorphic! Built-in into styled components. The polymorphic component pattern comes in handy when we need flexibility on the rendered HTML element. */}
        {/* id of -1 means there is no ID, which means a new booking will be made for a new guest */}
      </Row>

      {!isLoading ? (
        stays?.length > 0 ? (
          <TodayList>
            {stays.map((stay) => (
              <TodayItem key={stay.id} stay={stay} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No activity today...</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default Today;

const OLDdata = [
  {
    id: 1,
    status: 'unconfirmed',
    guests: { fullName: 'Jonas Schmedtmann' },
    numNights: 6,
  },
  {
    id: 2,
    status: 'unconfirmed',
    guests: { fullName: 'Steven Miller' },
    numNights: 1,
  },
  {
    id: 3,
    status: 'checked-in',
    guests: { fullName: 'John Smith' },
    numNights: 3,
  },
  {
    id: 4,
    status: 'unconfirmed',
    guests: { fullName: 'Marta Schmedtmann' },
    numNights: 14,
  },
  {
    id: 5,
    status: 'checked-in',
    guests: { fullName: 'Miguel Silva' },
    numNights: 5,
  },
  {
    id: 6,
    status: 'checked-in',
    guests: { fullName: 'Mary Williams' },
    numNights: 4,
  },
];
