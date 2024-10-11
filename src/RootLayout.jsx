import { Outlet } from "react-router";
import Navigation from "./navigation/Navigation";

export default function RootLayout(){
    return <>
        <Navigation/>
        <Outlet/>
    </>
}