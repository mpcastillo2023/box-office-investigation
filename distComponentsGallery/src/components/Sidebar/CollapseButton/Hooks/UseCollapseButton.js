import { useContext } from "react";
import { IsDesktopContext } from "../../../../providers/IsDesktopProvider";
import { SidebarContext } from "../../../../providers/SidebarProvider";
export default function UseCollapseButton({ desktopIcon, desktopIconCollapsed, mobileIcon, mobileIconCollapsed }) {
    const { collapsed, setCollapsed } = useContext(SidebarContext);
    const isDesktop = useContext(IsDesktopContext);
    const icons = isDesktop
        ? { icon: desktopIcon, collapsedIcon: desktopIconCollapsed }
        : { icon: mobileIcon, collapsedIcon: mobileIconCollapsed };
    const currentIcon = collapsed && icons.collapsedIcon ? icons.collapsedIcon : icons.icon;
    const onClickHandler = () => {
        setCollapsed((prevCollapsed) => !prevCollapsed);
    };
    return {
        onClickHandler,
        currentIcon,
        collapsed
    };
}
