import React, { useState } from 'react';
import styled from 'styled-components';
import FrontEnd from './FrontEnd';
import Development from './Development';
import WebDesign from './WebDesign';

const data = [
    "Front-End",
    "Development",
    "Web Design",
    "Product Design",
    "Social Media",
  ];


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ListItem = styled.li`
  font-size: 89px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;//투명
  -webkit-text-stroke: 1px white; // 빈 배경에 라인이 흰색
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
    flex: 1;
`




const Works = () => {

    const [work,setWork] = useState("FrontEnd")

  return (
    <Section>
      <Container>
        <Left>
            <List>
                {data.map((item) => (
                <ListItem key={item} text={item} onClick={()=>setWork(item)}>{item}</ListItem>
            ))}
            </List>
        </Left>
        <Right>
            {work === "Front-End" ? (
                <FrontEnd/>
            ) : work === "Development" ? 
                (<Development/>
            ) : (
                <WebDesign/>
            )}
        </Right>
      </Container>
    </Section>
  )
}

export default Works
