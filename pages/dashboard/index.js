import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import DateRangePicker from '../../components/DateRangePicker';
import TabContent from './TabContent';

function DashBoard() {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Title>Dashboard</Title>
        <RightContent>
          <DateRangePicker />
          <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            style={{ textTransform: 'inherit' }}
          >
            Refresh
          </Button>
        </RightContent>
      </Grid>
      <TabContent />
    </Container>
  );
}

export default DashBoard;

const Container = styled.div`

`;

const Title = styled.h1`
`;

const RightContent = styled.div`
  display: inherit;
  align-items: center;
`;
