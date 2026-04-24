"use client";
import { menuItemsThree } from '@/data/header-menu-data/menuItemsThree';
import { useState } from 'react';
import Link from 'next/link';

const MenuStyleTwo = () => {
    const [activeMenus, setActiveMenus] = useState<number[]>([]);
    const [submenuDisplay, setSubmenuDisplay] = useState<{ [key: number]: boolean }>({});
    const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

    const toggleMenu = (index: number) => {
        // Toggle submenu display
        setSubmenuDisplay(prev => ({
            ...prev,
            [index]: !prev[index]
        }));

        // Update active menus
        if (activeMenus.includes(index)) {
            setActiveMenus(activeMenus.filter(i => i !== index));
        } else {
            setActiveMenus([...activeMenus, index]);
        }
    };

    return (
        <ul>
            {menuItemsThree.map((item, index) => (
                <li
                    key={`menu-${index}`}
                    className={`has-dropdown ${item.static ? 'p-static' : ''} ${activeMenus.includes(index) ? 'active' : ''
                        } ${hoveredMenu === index || hoveredMenu === null ? 'is-active-2' : ''}`}
                    onMouseEnter={() => setHoveredMenu(index)}
                    onMouseLeave={() => setHoveredMenu(null)}
                >
                    <Link onClick={() => toggleMenu(index)} href="#">
                        {item.title}
                    </Link>
                    {item.subMenu && (
                        <>
                            <ul
                                className="tp-submenu submenu"
                                style={{ display: submenuDisplay[index] ? 'block' : 'none' }}
                            >
                                {item.subMenu.map((subItem, subIndex) => (
                                    <li key={`submenu-${index}-${subIndex}`}>
                                        <Link href={subItem.link}>{subItem.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className='tp-menu-close'
                                onClick={() => toggleMenu(index)}
                            >
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MenuStyleTwo;