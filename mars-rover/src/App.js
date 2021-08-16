import {useEffect, useState} from "react";
import { ToastContainer } from 'react-toastify';
import Tile from "./components/tile";
import {handleCords} from "./utils";


const RenderGrid = ({roverPos, direction}) => {

    let tiles = [];
          for(let x = 0; x < 10; x++) {
              let arr2 = []
            for (let y = 0; y < 10; y++) {
                arr2.push(<Tile value={[x, y]} withRover={x === roverPos.x && y === roverPos.y} direction={direction}/>)
            }
            tiles.push(arr2)
              arr2 = [];
          }

    return <div style={{
      display: 'flex',
        flexDirection: 'row'}}>{tiles.map((i) => <div style={{flexDirection: 'column'}}>{i.map(j => j)}</div>)}</div>

}

function App() {

  const [roverPos, setRoverPos] = useState({x: 0, y: 0})
  const [direction, setDirection] = useState('N')
    const handleHover = (e) => {

      let cords = handleCords({direction: e.key, roverPos: roverPos, roverDirection: direction})
      setRoverPos({x: cords.i, y: cords.j})
        setDirection(cords.newRoverDirection)
  }

    useEffect(() => {
        window.addEventListener("keydown", handleHover);

        return () => {
            window.removeEventListener("keydown", handleHover);
        };
    }, [roverPos, direction]);
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',}}>
      <RenderGrid roverPos={roverPos} direction={direction}/>
        <ToastContainer />
    </div>
  );
}

export default App;
