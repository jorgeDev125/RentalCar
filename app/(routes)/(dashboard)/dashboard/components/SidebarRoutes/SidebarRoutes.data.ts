import { Calendar, Car, Heart, CalendarDays, SquareGanttChart } from "lucide-react";


export const dataGeneralSidebar = [
    {
        icon: Car,
        label: "Cars",
        href: "/dashboard"
    },
    {
        icon: Calendar,
        label: "Reserves",
        href: "/reserves"
    },
    {
        icon: Heart,
        label: "Loved Cars",
        href: "/loved-cars"
    }
]

export const dataAdminSidebar = [
    {
        icon: SquareGanttChart,
        label: "Manage your Cars",
        href: "/dashboard/admin/cars-manager"
    },
    {
        icon: CalendarDays,
        label: "All Reserves",
        href: "/dashboard/admin/reserves-admin"
    }
]