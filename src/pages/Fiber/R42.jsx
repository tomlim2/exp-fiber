import { Canvas } from "@react-three/fiber"
import Meshes from "./R42/Meshes"

const R42 = () =>{
    return (
        <div style={{width:'100vw',height:'100vh'}}>
            <Canvas>
                <Meshes />
            </Canvas>
        </div>
    )
}

export default R42