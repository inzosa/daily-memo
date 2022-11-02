import styled from "styled-components";

interface Props {
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string;
    margin?: string;
    src: string;
};


const StyledIcon = styled.img<Props>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    maxWidth: ${(props) => props.maxWidth};
    minWidth: ${(props) => props.minWidth};
    maxHeight: ${(props) => props.maxHeight};
    minHeight: ${(props) => props.minHeight};
    margin: ${(props) => props.margin};
    src: ${(props) => props.src};
    
`;

export const Icon = ({
    width = '80px',
    height = '80px',
    maxWidth = '80px',
    maxHeight = '80px',
    minWidth = '80px',
    minHeight = '80px',
    margin = '0px',
    src= '',
}:Props) => {
    return (
        <StyledIcon
            width={width}
            height = {height}
            maxWidth = {maxWidth}
            maxHeight = {maxHeight}
            minWidth = {minWidth}
            minHeight = {minHeight}
            margin = {margin}
            src= {src}
        />
    )
    
};