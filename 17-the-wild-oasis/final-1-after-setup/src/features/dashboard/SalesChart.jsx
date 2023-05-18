import { useDarkMode } from 'context/DarkModeContext';
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';
import Heading from 'ui/Heading';
import DashboardBox from './DashboardBox';

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ bookings, numDays }) {
  // In the chart we need to set colors, but we can't do it based on CSS variables, because we have no access to them here. So let's set them manually
  const { isDarkMode } = useDarkMode();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, 'MMM dd'),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });

  const colors = isDarkMode
    ? {
        totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
        extrasSales: { stroke: '#22c55e', fill: '#22c55e' },
        text: '#e5e7eb',
        background: '#18212f',
      }
    : {
        totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
        extrasSales: { stroke: '#16a34a', fill: '#dcfce7' },
        text: '#374151',
        background: '#fff',
      };

  return (
    <StyledSalesChart>
      <Heading type='h2'>
        Sales from {format(allDates.at(0), 'MMM dd yyyy')} &mdash;{' '}
        {format(allDates.at(-1), 'MMM dd yyyy')}
      </Heading>

      <ResponsiveContainer width='100%' height={300}>
        {/* <AreaChart data={data} width={700} height={300}> */}
        <AreaChart data={data}>
          <XAxis
            dataKey='label'
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit='$'
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray='4' />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            type='monotone'
            dataKey='totalSales'
            // stroke='#4f46e5'
            // fill='#c7d2fe'
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            unit='$'
            name='Total sales'
          />
          <Area
            type='monotone'
            dataKey='extrasSales'
            // stroke='#15803d'
            // fill='#dcfce7'
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            unit='$'
            name='Extras sales'
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;

const OLDdata = [
  { label: 'Jan 09', totalSales: 480, extrasSales: 320 - 300 },
  { label: 'Jan 10', totalSales: 580, extrasSales: 400 - 300 },
  { label: 'Jan 11', totalSales: 550, extrasSales: 450 - 300 },
  { label: 'Jan 12', totalSales: 600, extrasSales: 350 - 300 },
  { label: 'Jan 13', totalSales: 700, extrasSales: 550 - 300 },
  { label: 'Jan 14', totalSales: 800, extrasSales: 650 - 500 },
  { label: 'Jan 15', totalSales: 700, extrasSales: 700 - 500 },
  { label: 'Jan 16', totalSales: 650, extrasSales: 500 - 300 },
  { label: 'Jan 17', totalSales: 600, extrasSales: 600 - 300 },
  { label: 'Jan 18', totalSales: 550, extrasSales: 400 - 300 },
  { label: 'Jan 19', totalSales: 700, extrasSales: 600 - 500 },
  { label: 'Jan 20', totalSales: 800, extrasSales: 700 - 500 },
  { label: 'Jan 21', totalSales: 700, extrasSales: 600 - 500 },
  { label: 'Jan 22', totalSales: 810, extrasSales: 550 - 500 },
  { label: 'Jan 23', totalSales: 950, extrasSales: 750 - 500 },
  { label: 'Jan 24', totalSales: 970, extrasSales: 600 - 500 },
  { label: 'Jan 25', totalSales: 900, extrasSales: 700 - 500 },
  { label: 'Jan 26', totalSales: 950, extrasSales: 800 - 500 },
  { label: 'Jan 27', totalSales: 850, extrasSales: 700 - 500 },
  { label: 'Jan 28', totalSales: 900, extrasSales: 600 - 500 },
  { label: 'Jan 29', totalSales: 800, extrasSales: 800 - 500 },
  { label: 'Jan 30', totalSales: 950, extrasSales: 700 - 500 },
  { label: 'Jan 31', totalSales: 1100, extrasSales: 800 - 500 },
  { label: 'Feb 01', totalSales: 1200, extrasSales: 900 - 500 },
  { label: 'Feb 02', totalSales: 1250, extrasSales: 800 - 500 },
  { label: 'Feb 03', totalSales: 1400, extrasSales: 950 - 500 },
  { label: 'Feb 04', totalSales: 1500, extrasSales: 1000 - 500 },
  { label: 'Feb 05', totalSales: 1400, extrasSales: 1100 - 500 },
  { label: 'Feb 06', totalSales: 1450, extrasSales: 900 - 500 },
];
