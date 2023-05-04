
import { useState } from "react";
import { 
    IconLogo, 
    IconLogoMobile, 
    Menu, MenuItem, 
    MenuItemLink, 
    NavbarContainer, 
    NavbarWrapper 
} from "./Navbar.elements"
import { AiFillAliwangwang } from "react-icons/ai";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
        const [click, setClick] = useState(false);

        const ChangeClick = () => {
            setClick(!click);

        }
    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <IconLogo>
                        <AiFillAliwangwang size={"2em"}/>
                        Javi-p(x)
                    </IconLogo>

                    <IconLogoMobile onClick={()=>ChangeClick()}>
                        {click? <AiOutlineClose/> : <AiOutlineBars/>}
                    </IconLogoMobile>

                        <Menu click={click}>
                            <MenuItem onClick={()=>ChangeClick()}>
                                <MenuItemLink>HOME</MenuItemLink>
                            </MenuItem>
                            <MenuItem onClick={()=>ChangeClick()}>
                                <MenuItemLink>ABOUT US</MenuItemLink>
                            </MenuItem>
                            <MenuItem onClick={()=>ChangeClick()}>
                                <MenuItemLink>SERVICES</MenuItemLink>
                            </MenuItem>
                            <MenuItem onClick={()=>ChangeClick()}>
                                <MenuItemLink>COMUNITY</MenuItemLink>
                            </MenuItem>
                            <MenuItem onClick={()=>ChangeClick()}>
                                <MenuItemLink>CONTACT</MenuItemLink>
                            </MenuItem>
                        </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    )
}

export default Navbar