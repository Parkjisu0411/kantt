import React from 'react';
import styled, { isStyledComponent } from 'styled-components';

type ModalProps = {
    onClick?: Function,
    children?: React.ReactNode
};

function BlockUI({ children }: ModalProps) {

    let zIndex = 20;

    if(!!children) {
        if(isStyledComponent(children)) {
            const style = children.type.componentStyle;
            
        } else if(React.isValidElement(children)) {
            zIndex = isNaN(children.props.style?.zIndex) ? 20 : children.props.style.zIndex - 1;
        }
    }

    const BlockUIWrap = styled.div`
        display: flex;
        position: fixed;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${zIndex};
        background-color: #F9F9F9D9;
        opacity: 0.8;
    `;

    return (
        <BlockUIWrap>
            { children }
        </BlockUIWrap>
    );
}

export default BlockUI;
