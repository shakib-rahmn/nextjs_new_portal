import React from 'react';
// import Footer from "@/components/master/Footer";
import {Toaster} from "react-hot-toast";
import {cookies} from "next/headers";
import Navbar from './Navbar';
import Slider from './Slider';

async function getData(){
    let socials = (await (await fetch(`${process.env.HOST}/api/social`)).json())['data']
    let categories = (await (await fetch(`${process.env.HOST}/api/category`)).json())['data']
    return {socials:socials, categories: categories}
}

const PlainLayout = async (props) => {
    const data=await getData();

    const cookieStore = cookies();
    const token = cookieStore.get('token');
    let isLogin = false;
    isLogin = typeof token !== "undefined";

    return (
        <>
            <Navbar isLogin={isLogin} data={data}/>
            <Slider />
            {props.children}
            <Toaster position="bottom-center"/>
            {/* <Footer data={data}/> */}
        </>
    );
};

export default PlainLayout;