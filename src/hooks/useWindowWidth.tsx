import {useEffect, useState} from 'react'

const useWindowWidth = () => {
    const [width, setWidth] = useState<Number>(window.innerWidth)
    useEffect(()=>{
        const handleSize = () => setWidth(window.innerWidth)

        window.addEventListener('resize', handleSize );

        return ()=> window.removeEventListener('resize', handleSize)
    },[])

  return width
}

export default useWindowWidth
