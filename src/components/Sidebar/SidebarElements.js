import styled from 'styled-components';
import {FaTimesCircle} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
justify-content: space-between;
height: 100%;
background: #cd7232;
width: 100%;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: .3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimesCircle)`
    color: white;

`
export const SidebarImg = styled.img`
   width: 75%;

`;

export const Icon =styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`



export const SidebarWrapper =styled.div`
   color: #fff;

`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #3C62D3;
        transition: 0.2s ease-in-out;
    }

`;

