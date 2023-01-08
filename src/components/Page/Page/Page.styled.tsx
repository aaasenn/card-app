import styled from 'styled-components';
import { grey } from '@mui/material/colors';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100%, max-content, 100%;


  .content {
    min-height: 100vh;
    padding: 40px 20px;
    background-color: ${grey[100]};
  }
`