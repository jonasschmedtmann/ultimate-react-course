import SortBy from 'ui/SortBy';
import Filter from 'ui/Filter';
import TableOperations from 'ui/TableOperations';

function CabinTableOperations() {
  return (
    <TableOperations>
      {/* We could do these two as compound components as well, but let's keep it simple, and let's also explore different ways of achieving the same thing */}
      <Filter
        filterField='discount'
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />

      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
          {
            value: 'regularPrice-desc',
            label: 'Sort by price (high first)',
          },
          { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' },
          {
            value: 'maxCapacity-desc',
            label: 'Sort by capacity (high first)',
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
