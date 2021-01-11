import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'


export const SidebarData = [
    {
        title: 'Accueil',
        path: '/accueil',
        icon: <AiIcons.AiFillHome />,

    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Dashboard 1',
                path: '/dashboard/dashboard1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Dashboard 2',
                path: '/dashboard/dashboard2',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Dashboard 3',
                path: '/dashboard/dashboard3',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Mes Chantiers',
        path: '/chantier',
        icon: <IoIcons.IoIosConstruct />
    },
    {
        title: 'Mes Equipes',
        path: '/equipe',
        icon: <IoIcons.IoMdPeople />,
    },
    {
        title: 'Nous Contacter',
        path: '/contacter',
        icon: <AiIcons.AiFillPhone />,
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />
    },
    {
        title: 'Connexion ',
        path: '/connexion',
        icon: <GiIcons.GiPadlock />,

    },
    {
        title: 'Inscription',
        path: '/inscription',
        icon: <BsIcons.BsPencilSquare />
    }
];


