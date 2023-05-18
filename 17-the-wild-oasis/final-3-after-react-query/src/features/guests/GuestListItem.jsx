import styled from 'styled-components';
import { Flag } from 'ui/Flag';

const StyledGuestListItem = styled.li`
  display: grid;
  grid-template-columns: 2rem 2fr 1fr;
  gap: 0.8rem;
  align-items: center;
  padding: 0.6rem 1.6rem;
  transition: all 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:hover {
    background-color: var(--color-grey-50);
    cursor: pointer;
  }
`;

const ID = styled.div`
  justify-self: right;
  font-size: 1.2rem;
  color: var(--color-grey-500);
`;

function GuestListItem({ guest, onClick }) {
  return (
    <StyledGuestListItem onClick={() => onClick(guest)} role='button'>
      <Flag src={guest.countryFlag} alt={`Flag of ${guest.nationality}`} />
      <div>{guest.fullName}</div>
      <ID>ID: {guest.nationalID}</ID>
    </StyledGuestListItem>
  );
}

export default GuestListItem;
