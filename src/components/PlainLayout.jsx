import React from 'react';
import {Toaster} from "react-hot-toast";
import {cookies} from "next/headers";
import Navbar from './Navbar';

async function getData(){
    let socials= (await (await fetch(`${process.env.HOST}/api/social`)).json())['data']
    let categories= (await (await fetch(`${process.env.HOST}/api/category`)).json())['data']
    return {socials:socials, categories:categories}
}

const PlainLayout = async (props) => {
    const data = await getData();
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    let isLogin = false;
    isLogin = typeof token !== "undefined";

    return (
        <>
            <Navbar isLogin={isLogin} data={data} />
            {props.children}
            <Toaster position="bottom-center"/>
        </>
    );
};

export default PlainLayout;