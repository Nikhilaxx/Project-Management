"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface AuthLayoutProps{
    children:React.ReactNode;
}

const AuthLayout = ({children} :AuthLayoutProps) =>{
    const pathName=usePathname();
    const isSignIn=pathName==="/sign-in";
    
return (
    <main className="bg-neutral-100 min-h-screen">
        <div className="mx-auto max-w-screen-2xl p-4">
            <nav className="flex justify-between items-center">
            
                    <Image src="/logo.svg" alt="logo" width={92} height={56}/>
                        <Button asChild variant="secondary">
                            <Link href={isSignIn ? "/sign-up":"/sign-in"}>
                            {pathName === "/sign-in"? "sign-up": "login"}
                            </Link>
                            </Button>
                    
            </nav>
            <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
            {children}
            </div>
        </div>
    </main>
);
};
export default AuthLayout;