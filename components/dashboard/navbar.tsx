            "use client";
            import { BarChart, PlusCircle, Wallet, ScrollText, LayoutDashboard, LucideIcon, Plus } from "lucide-react";
            import Link from "next/link";
            import React from "react";
            import { Button } from "../ui/button";
            import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
            import { ToggleTheme } from "../common/toogle-theme";
            import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

            interface NavItem {
            href: string;
            label: string;
            icon: LucideIcon;
            highlight?: boolean;
            }

            interface NavLinkProps extends NavItem {}

            const navItems: NavItem[] = [
            { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
            { href: "/accounts", label: "Accounts", icon: Wallet },
            { href: "/add", label: "Add", icon: Plus, highlight: true },
            { href: "/history", label: "History", icon: ScrollText },
            { href: "/reports", label: "Reports", icon: BarChart },
            ];

            const NavLink: React.FC<NavLinkProps> = ({ href, label, icon: Icon, highlight = false }) => (
            <Link href={href} className={`${highlight ? "mb-2" : "mb-0"} flex flex-col items-center justify-center text-xs font-medium hover:text-primary transition-colors`}>
                <Icon className={`${highlight ? 'h-8 w-8 text-primary' : 'h-6 w-6'} mb-1`} />
                {label}
            </Link>
            );

            export const DashboardNav: React.FC = () => {
            return (
                <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl grid grid-cols-2 lg:grid-cols-3 justify-between items-center p-2 bg-card">
                <Link href="/" className="font-bold text-lg flex items-center justify-start">
                    Wallet.Resolved
                </Link>
                
                {/* Mobile Navigation */}
                <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm shadow-[0_-1px_2px_0_rgba(0,0,0,0.05)] rounded-t-lg">
                    <div className="flex justify-around items-center h-16">
                    {navItems.map((item) => (
                        <NavLink key={item.href} {...item} />
                    ))}
                    </div>
                </nav>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:block mx-auto justify-center">
                    <NavigationMenuList>
                    {navItems.map(({ href, label }) => (
                        <Link key={href} href={href} className="text-base px-2 hover:text-primary transition-colors">
                        {label}
                        </Link>
                    ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-2 justify-end">
                    <ToggleTheme />
                    <Button variant="outline" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="#" alt="Avatar" />
                        <AvatarFallback className="bg-transparent">JD</AvatarFallback>
                    </Avatar>
                    </Button>
                </div>
                </header>
            );
            };