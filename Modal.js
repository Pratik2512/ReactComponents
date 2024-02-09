import {useState} from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    z-index: 1;
    background-color: rgba(0,0,0,0.5);
`;

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto; 
    padding: 20px;
    width: 50%;
`;

export const Modal = ({children}) => {
    const [shouldShow, setShouldShow] = useState(false);
    return (
        <>
            <button onClick={() => setShouldShow(true)}>Show Modal</button>
            {shouldShow && (<ModalBackground onClick={()=> setShouldShow(false)}>
                <ModalBody onClick={(e)=> e.stopPropagation()}>
                    {children}
                    <button onClick={() => setShouldShow(false)}>Hide</button>                    
                </ModalBody>
            </ModalBackground>)}
        </>
    )
}
