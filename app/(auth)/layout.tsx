import BackButton from "@/components/common/back-button"
import { ReactNode } from "react"

export default async function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="fixed top-5 left-5">
                <BackButton/>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
                {children}
            </div>
        </div>
    )
}