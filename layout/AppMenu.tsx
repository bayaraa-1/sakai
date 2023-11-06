/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '../types/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Нүүр хуудас',
            items: [{ label: 'Хяналтын самбар', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Засвар, үйлчилгээ',
            items: [
                { label: 'Засварын бүртгэл', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
                { label: 'Суваг зогсоолын эзэлгээ', icon: 'pi pi-fw pi-id-card', to: '/uikit/input' },
                { label: 'Техник үйлчилгээний бүртгэл', icon: 'pi pi-fw pi-id-card', to: '/uikit/floatlabel' },
                { label: 'Илчит тэрэгний гүйлтийн бүртгэл', icon: 'pi pi-fw pi-id-card', to: '/uikit/invalidstate' }
            ]
        },
        {
            label: 'Ашиглалт, үйлчилгээ',
            items: [
                { label: 'Хоногийн план', icon: 'pi pi-fw pi-id-card', to: '/uikit/button' },
                { label: 'Хоорондын замын гэмтэл', icon: 'pi pi-fw pi-id-card', to: '/uikit/table' },
                { label: 'Паркын тоо мэдээлэл', icon: 'pi pi-fw pi-id-card', to: '/uikit/list' },
                { label: 'Зүтгүүрийн санамж', icon: 'pi pi-fw pi-id-card', to: '/uikit/tree' }
            ]
        },
        {
            label: 'Суурь мэдээлэл',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
                {
                    label: 'Үндсэн өгөгдөл',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Өртөө, зөрлөг',
                            icon: 'pi pi-fw pi-sign-in',
                            to: '/uikit/panel'
                        },
                        {
                            label: 'Байгууллага, нэгж',
                            icon: 'pi pi-fw pi-times-circle',
                            to: '/uikit/overlay'
                        },
                        {
                            label: 'Цех тасаг',
                            icon: 'pi pi-fw pi-times-circle',
                            to: '/uikit/media'
                        },
                        {
                            label: 'Илчит тэрэгний сери',
                            icon: 'pi pi-fw pi-lock',
                            to: '/uikit/menu'
                        },
                        {
                            label: 'Илчит тэрэгний дугаар',
                            icon: 'pi pi-fw pi-lock',
                            to: '/uikit/message'
                        },
                        {
                            label: 'Засварын төрөл',
                            icon: 'pi pi-fw pi-lock',
                            to: '/uikit/file'
                        },
                        {
                            label: 'Суваг, зогсоол',
                            icon: 'pi pi-fw pi-lock',
                            to: '/uikit/charts'
                        },
                        {
                            label: 'Үзлэгийн үнэлгээ',
                            icon: 'pi pi-fw pi-lock',
                            to: '/uikit/misc'
                        },
                        {
                            label: 'Эвдрэл гэмтэл',
                            icon: 'pi pi-fw pi-lock',
                            to: '/utilities/icons'
                        },
                        {
                            label: 'Удирдах ажилтнууд',
                            icon: 'pi pi-fw pi-lock',
                            to: '/pages/crud'
                        },
                        {
                            label: 'Засварын норм,',
                            icon: 'pi pi-fw pi-lock',
                            to: '/pages/timeline'
                        }
                    ]
                },
                {
                    label: 'Crud',
                    icon: 'pi pi-fw pi-pencil',
                    to: '/pages/crud'
                },
                {
                    label: 'Timeline',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/pages/timeline'
                },
                {
                    label: 'Not Found',
                    icon: 'pi pi-fw pi-exclamation-circle',
                    to: '/pages/notfound'
                },
                {
                    label: 'Empty',
                    icon: 'pi pi-fw pi-circle-off',
                    to: '/pages/empty'
                }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
