import styled from 'styled-components';
import { blue, grey } from '@mui/material/colors'

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  gap: 20px;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;

  .card {
    width: 200px;
    height: 120px;
    border: 3px solid ${grey[300]};
  }
`