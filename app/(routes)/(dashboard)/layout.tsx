import { Sidebar } from "./dashboard/components/Sidebar";



export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex w-full h-full">
        <div className="hidden h-full xl:block w-80 xl:fixed">
            <Sidebar />
        </div>
        <div className=" h-full w-full xl:ml-80">
            NavBarDashboard...
            <div className="p-6 h-max">
                {children}

            </div>
        </div>
    </div>
  )
}
