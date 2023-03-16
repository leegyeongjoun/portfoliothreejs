import React from 'react'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
const Title = styled.h1`
    font-size: 74px;
`
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Line = styled.img`
    height: 5px;
`
const Subtitle = styled.h2`
    color: #da4ea2;
`
const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`
const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 3;
    position: relative;
`
const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to{
            transform: translateY(20px);
        }
    }
`

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
            <Title>Think. Make. Solve</Title>
            <WhatWeDo>
                <Line src="./img/line.png"/>
                <Subtitle>What We Do</Subtitle>
            </WhatWeDo>                
            <Desc>we enjoy creating delightgul, human-centered digital experiences.</Desc>
            <Button>Learn More</Button>
        </Left>
        <Right>
        <Canvas>
             {/*enableZoom 확대 축소 금지 autoRotate 자동회전*/}
            <OrbitControls enableZoom={false}/>
            {/* 빛을 주고 강도 추가 */}
            <ambientLight intensity={1}/>
            {/* 방향성 조명 배열내부의 위치를 제공해야함 */}
            <directionalLight position={[3,2,1]}/>
            {/* 반지름 너비 높이 */}
            <Sphere args={[1, 100, 200]} scale={2.7}>
                <MeshDistortMaterial
                // distort 왜곡하고싶은 정도
                color="#400756" 
                attach="material" 
                distort={0.5}
                speed={2}
                />
            </Sphere>
        </Canvas>
            <Img src="./img/moon.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
