import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;

  form {
    display: flex;
    width: 100%;
    margin: 50px 0;

    input {
      flex: 1;
      background: #eee;
      border-radius: 20px;
      border: 0;
      height: 44px;
      padding: 0 26px;

      &::placeholder {
        color: #136ca0;
        font-size: 16px;
      }
    }

    button {
      background: #136ca0;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 20px;
      font-size: 16px;
      transition: background 0.2s;
      height: 44px;
      padding: 0 25px;
      margin-left: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin: 0px;
        padding: 0px;
        animation: ${rotate} 1s linear infinite;
      }

      &:hover {
        background: ${darken(0.05, '#136ca0')};
      }
    }
  }

  > ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: auto;

    form {
      input {
        &::placeholder {
          color: #136ca0;
          font-size: 12px;
        }
      }
    }
  }
`;

export const Movie = styled.li`
  @import url('https://fonts.googleapis.com/css?family=Abel|Lato&display=swap');

  display: flex;
  height: 330px;
  width: 100%;

  img {
    width: 220px;
    height: 330px;
  }

  > div {
    width: 100%;
    background: #e6e6e6;

    header {
      display: flex;
      align-items: flex-end;
      height: 60px;
      background: #136ca0;
      padding: 5px 20px;

      > span {
        color: #0ce7f3;
        font: 30px 'Abel', sans-serif;
        margin-left: 10px;
      }
    }

    aside {
      display: flex;
      flex-direction: column;

      background: #e6e6e6;
      padding: 3px 20px;

      span {
        font-size: 18px;
        color: #666;
        margin-left: 75px;
        margin-bottom: 25px;
      }

      p {
        font-size: 16px;
        color: #333;
        line-height: 18px;
      }

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          background: #136ca0;
          font-weight: bold;
          color: #fff;
          border: 0;
          border-radius: 20px;
          font-size: 16px;
          transition: background 0.2s;
          height: 31px;
          padding: 0 25px;
          margin-top: 30px;
          margin-bottom: 15px;

          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            margin-right: 10px;
          }

          &:hover {
            background: ${darken(0.05, '#136ca0')};
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    > div {
      header {
        > span {
          font-size: 22px;
        }
      }

      aside {
        p {
          font-size: 12px;
          color: #333;
          line-height: 14px;
        }
      }
    }
  }

  @media only screen and (max-width: 425px) {
    img {
      display: none;
    }

    > div {
      header {
        height: 40px;

        > span {
          font-size: 14px;
        }
      }

      aside {
        p {
          font-size: 12px;
          color: #333;
          line-height: 14px;
          max-width: 380px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;

export const Rating = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Abel|Lato&display=swap');

  border-radius: 50%;
  border: 3px solid #136ca0;
  margin-bottom: -35px;

  div {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #136ca0;
    border: 4px solid #0ce7f3;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font: 22px 'Abel', sans-serif;
      color: #0ce7f3;
    }
  }
`;

export const Genre = styled.ul`
  display: flex;
  margin-top: 30px;
  margin-bottom: 15px;

  li {
    margin: 0 5px;
    background: #fff;
    border: 2px solid #136ca0;
    border-radius: 20px;
    padding: 5px;
    color: #136ca0;
    font-size: 14px;

    &:first-child {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

export const Pagination = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  ul {
    display: flex;
  }

  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    background: #136ca0;
    color: #fff;
    padding: 8px;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;

export const PageElement = styled.li`
  margin: 0 5px;
  background: ${props => (props.select ? '#136ca0' : '#fff')};
  border: ${props => (props.select ? '4px solid #0ce7f3' : '0')};
  border-radius: 50%;
  padding: 5px;
  color: ${props => (props.select ? '#0ce7f3' : '#136ca0')};
  font-size: 20px;
  cursor: pointer;
  width: 42px;
  height: 42px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 425px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
`;
