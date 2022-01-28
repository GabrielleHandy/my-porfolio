import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarImg} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='main'  onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='about'  onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='techStack'  onClick={toggle}>
                        Tech Stack
                    </SidebarLink>
                    <SidebarLink to='projects'  onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to='contact'  onClick={toggle}>
                        Contact Me!
                    </SidebarLink>
                </SidebarMenu>
                <SidebarImg src={require("../../images/side-bar-img.svg").default} />
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
