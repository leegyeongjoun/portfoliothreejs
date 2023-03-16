import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
const Cube = () => {
    const textRef = useRef();//사용자 후크생성
    // Math 함수를 사용하지 않으면 elapsedTime 시간이 계속 증가하기때문에 한 번밖에 보이지 않는다. Math를 사용하면 왼쪽 오른쪽으로 왔다갔다하면서 움직인다.
    useFrame(state=> (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2 ))

    //useFrame(state => console.log(state))상태를 가져오고 상태 내부에 무엇이있는지 확인 elapsedTime을 이용하여 개체의 모든순간을 듣는 걸 활용해 텍스트 위치를 바꾸어 줄 수있다.
  
  return (
    <mesh>
    {/* 박스 기하학  arg는 크기 조절하기 args={[2,2,2]}*/}
    <boxGeometry />
    {/* 표준재료와 색상을 변경 */}
    <meshStandardMaterial /* color='red' */>
        {/*  RenderTexture  큰 틀로 감싸주는거같음 map을 적어줘야 나옴*/}
        <RenderTexture attach='map'>
            {/* 원근법 카메라 makeDefault기본값 */}
            <PerspectiveCamera 
            makeDefault 
            position={[0,0,5]}
            />
            {/* 아무 색깔이 들어올 수 있음  args 인수를 사용하여 색상선택*/}
            <color attach="background" args={["#dc9dcd"]}/>
            {/* 글자 입력할 때 */}
            <Text ref={textRef} fontSize={3} color="#555">
                Hello
            </Text>
        </RenderTexture>    
    </meshStandardMaterial> 
</mesh>
  )
}

export default Cube
