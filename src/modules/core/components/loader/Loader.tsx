import React from 'react';
import {StyledLoader} from "./styled";
import whatsappLoaderIcon from '../../assets/whatsappLoaderIcon.svg'

type Props = {
    isLoading: boolean
}
const Loader = ({isLoading}: Props) => {
    return (
        isLoading ?
            <StyledLoader.Container>
                <StyledLoader.Body src={whatsappLoaderIcon} alt='Loader'/>
            </StyledLoader.Container> : null
    );
};

export default Loader;
