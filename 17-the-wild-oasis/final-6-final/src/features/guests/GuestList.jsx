import styled from 'styled-components';
import { useGuests } from 'features/guests/useGuests';
import Pagination from 'ui/Pagination';
import Spinner from 'ui/Spinner';
import GuestListItem from './GuestListItem';

const StyledGuestList = styled.div`
  border: 1px solid var(--color-grey-200);
  border-top: none;
  border-bottom-left-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
  overflow: hidden;
  padding-top: 0.8rem;
  transform: translateY(-4px);
`;

const List = styled.ul``;

const PaginationContainer = styled.div`
  border-top: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 0.8rem;

  &:not(:has(*)) {
    display: none;
  }
`;

function GuestList({ onClick }) {
  const { isLoading, guests, count } = useGuests();

  if (isLoading) return <Spinner />;
  if (count === undefined) return null;
  if (count === 0) return <p>No guests found...</p>;

  return (
    <StyledGuestList>
      <List>
        {guests.map((guest) => (
          <GuestListItem
            key={guest.id}
            guest={guest}
            // For case where GuestList was used without the onClick function
            onClick={onClick ? onClick : () => {}}
          />
        ))}
      </List>

      <PaginationContainer>
        <Pagination count={count} />
      </PaginationContainer>
    </StyledGuestList>
  );
}

export default GuestList;
