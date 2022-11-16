const Meshes = () =>{
    return (
        <>
            <mesh position-x={-2}>
                <sphereGeometry args={[1.5, 32, 32]}/>
                <meshBasicMaterial color={'orange'} wireframe/>
            </mesh>
            <mesh position={[2,0,0]} scale={1.5}>
                <boxGeometry/>
                <meshBasicMaterial color={'mediumpurple'} wireframe/>
            </mesh>
        </>
    )
}

export default Meshes