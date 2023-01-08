import styled from 'styled-components';
import { blue, grey } from '@mui/material/colors'

export const Wrapper = styled.div`
  width: 400px;
  margin: 40px auto;
  border: 3px solid ${blue[300]};
  padding: 30px 20px;
  border-radius: 16px;

  .username, .password {
    height: 100px;
  }

  .title {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 18px;
    color: ${grey[600]}
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`