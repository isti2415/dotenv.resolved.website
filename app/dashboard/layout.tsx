    import { DashboardNav } from "@/components/dashboard/navbar";

    export default function DashboardLayout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
        return (
            <>
                <DashboardNav />
                <div className="w-[90%] px-2 md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto">
                    {children}
                </div>
            </>
        )
    }