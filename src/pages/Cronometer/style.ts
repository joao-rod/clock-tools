import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 300px;

    border: 1px solid black;
    border-radius: 50%;

    h5 {
      font-size: 3rem;
    }

    h6 {
      font-size: 1.5rem;
    }  
  }
  flex-direction: column;
  button {
    margin-top: 2rem;
    width: 150px;
    height: 3.5rem;

    color: white;
    background-color: #4f5af3;
    border: 1px solid;
    border-radius: 8px;
    font-size: 1.3rem;
  }
`
