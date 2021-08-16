import { toast } from 'react-toastify';

export const handleCords = ({direction, roverPos, roverDirection}) => {
    const {x, y} = roverPos
    let i, j;
    let newRoverDirection = roverDirection;
    let toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    switch (direction) {
        case 'ArrowUp':
            if (newRoverDirection === 'N') {
                i = x;
                j = y-1;
            } else if (newRoverDirection === 'W'){
                i = x-1;
                j = y;
            } else if (newRoverDirection === 'S') {
                i = x;
                j = y+1;
            } else {
                i = x+1;
                j = y;
            }
            if (Math.sign(i) === -1 || Math.sign(j) === -1 || i >= 10 || j >= 10) {
                toast.info('Wall hit, change direction', toastOptions)
            }
            return Math.sign(i) !== -1 && Math.sign(j) !== -1 && i < 10 && j < 10 ? {i, j, newRoverDirection} : { i:x, j:y, newRoverDirection }
       /* case 'ArrowDown':
            i = x;
            j = y + 1
            if (Math.sign(i) === -1 || Math.sign(j) === -1 || i >= 10 || j >= 10) {
                toast.info('Wall hit, change direction', toastOptions)
            }
            return Math.sign(i) !== -1 && Math.sign(j) !== -1 && i < 10 && j < 10 ? {i, j} : { i:x, j:y }*/
        case 'ArrowLeft':
            if (roverDirection === 'N') {
                newRoverDirection = 'W'
            } else if (roverDirection === 'W'){
                newRoverDirection = 'S'
            } else if (roverDirection === 'S') {
                newRoverDirection = 'E'
            } else {
                newRoverDirection = 'N'
            }
            return { i:x, j:y, newRoverDirection }
        case 'ArrowRight':
            if (roverDirection === 'N') {
                newRoverDirection = 'E'
            } else if (roverDirection === 'W'){
                newRoverDirection = 'N'
            } else if (roverDirection === 'S') {
                newRoverDirection = 'W'
            } else {
                newRoverDirection = 'S'
            }
            return { i:x, j:y, newRoverDirection }
        default:
            toast.info('wrong key pressed', toastOptions)
            return {i: x, j: y, newRoverDirection}
    }
}
