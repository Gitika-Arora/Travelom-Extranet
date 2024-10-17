import Login from "@/views/auth/login";
import Register from "@/views/auth/register";
import VerifyAccount from "@/views/auth/verifyAccount";
import Dashboard from "@/views/dashboard/index";
import Hotels from "@/views/hotels";
import Availability from "@/views/availability";
import HotelDetails from "@/views/hotels/hotelDetails";
// --------------------images--------------

import DashboardIcon from "../assets/images/DashboardIcon.png"
import { User, House, Users as UsersIcon, Newspaper, ShoppingCart, Dumbbell, CircleUserRound, Send, History, Hotel } from 'lucide-react';
const routes = [
    {
        id: 1,
        path: '/',
        component: Login,
        isPublic: true,
    },
    {
        id: 2,
        path: '/login',
        component: Login,
        isPublic: true,
    },
    {
        id: 3,
        path: '/verify-account',
        component: VerifyAccount,
        isPublic: true,
    },
    {
        id: 4,
        path: '/register',
        component: Register,
        isPublic: true,
    },
    {
        id: 5,
        path: '/dashboard',
        component: Dashboard,
        name: "Dashboard",
        isPublic: false,
        icon: <House size={20} />,
        isInSidebar: true
    },
    {
        id: 6,
        path: '/hotels',
        component: Hotels,
        name: "Hotels",
        isPublic: false,
        icon: <Hotel size={20} />,
        isInSidebar: true,
        isAdmin: true
    },
    {
        id: 7,
        path: '/hotels-details',
        component: HotelDetails,
        name: "Hotel Information",
        isPublic: false,
        icon: <Hotel size={20} />,
        isInSidebar: true,
        isHotelOwner: true
    },
    {
        id: 8,
        path: '/availability',
        component: Availability,
        //name: "Booking History",
        name: "Availability",
        isPublic: false,
        icon: <User size={20} />,
        //icon: <History size={20} />,
        //isInSidebar: true
    },
    {
        id: 51,
        path: '/hotels/:hid',
        component: HotelDetails,
        name: "hotelDetails",
        isPublic: false,
        icon: <User size={20} />,
        isAdmin: true
    },
]
export default routes;