import CheckoutButton from 'features/check-in-out/CheckoutButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'ui/Button';
import { Flag } from 'ui/Flag';
import Tag from 'ui/Tag';

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
  /* &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  } */
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ stay }) {
  const { id, status, guests, numNights } = stay;

  const statusToAction = {
    unconfirmed: {
      action: 'arriving',
      tag: 'green',
      button: (
        <Button
          variation='primary'
          size='small'
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      ),
    },
    'checked-in': {
      action: 'departing',
      tag: 'blue',
      button: <CheckoutButton bookingId={id} />,
    },
  };

  return (
    <StyledTodayItem>
      <Tag type={statusToAction[status].tag}>
        {statusToAction[status].action}
      </Tag>
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>

      {statusToAction[status].button}
    </StyledTodayItem>
  );
}

export default TodayItem;
