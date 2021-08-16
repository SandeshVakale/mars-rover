import { BiArrowFromBottom, BiArrowFromLeft, BiArrowFromRight, BiArrowFromTop } from 'react-icons/bi';
function Tile({value, withRover, direction}) {
    let icon;
    if (direction === 'N') {
        icon = <BiArrowFromBottom />
    } else if (direction === 'W'){
        icon = <BiArrowFromRight />
    } else if (direction === 'S') {
        icon = <BiArrowFromTop />
    } else {
        icon = <BiArrowFromLeft />
    }
    return (
        <div style={{display: 'flex', height: 60, width: 60, border: '1px solid gray', backgroundColor: withRover ? 'gray' : 'lightgray', justifyContent: 'space-around', alignItems: 'center'}}>
            {value[0]}  {value[1]}
            {withRover && icon}
        </div>
    );
}

export default Tile;
