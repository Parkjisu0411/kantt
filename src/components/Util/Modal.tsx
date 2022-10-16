import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import BlockUI from './BlockUI';

const ModalContainer = styled.div`
    position: fixed;
    z-index: 21;
    width: 606px;
    height: 530px;
    box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
    background-color: white;
    > header {
        display: flex;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        > * {
            margin-left: auto;
        }
    }
    > main {
        padding-left: 1rem;
        padding-right: 1rem;
        width: 100%
    }
`;

type ModalProps = {
    closeModal: Function,
    children?: React.ReactNode
};

function Modal({ closeModal, children }: ModalProps) {

    return (
        <BlockUI onClick={() => {closeModal();}}>
            <ModalContainer>
                <header>
                    <FontAwesomeIcon className={'compo-hover--pointer'} icon={ faX } onClick={() => {closeModal();}}></FontAwesomeIcon>
                </header>
                <main>
                    { children }
                </main>
            </ModalContainer>
        </BlockUI>
    );
}

export default Modal;
