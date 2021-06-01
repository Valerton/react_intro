//other import
import {useState, lazy, Suspense} from 'react'
//my components
const Modal = lazy(() => import('./components/Modal/Modal'))

export const App = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='lala'>
            <button onClick={() => setIsOpen(!isOpen)}>toggle modal</button>
            <Suspense fallback={<div>Loading...</div>}>
                {isOpen && <Modal/>}
            </Suspense>
            hello world
        </div>
    )
}


