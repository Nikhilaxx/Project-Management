"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle ,CardDescription } from "@/components/ui/card";
import { DottedSeparator } from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import {FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { Form, FormControl,FormField,FormItem,FormMessage } from "@/components/ui/form";
import { registerSchema } from "../schemas";
import { useRegister } from "../api/use-register";


export const SignUpCard = () =>{
    const {mutate}= useRegister();
    const form = useForm<z.infer<typeof registerSchema>>({
            resolver:zodResolver(registerSchema),
            defaultValues:{
                name:"",
                email: "",
                password:"",
            },
        });
    const OnSubmit =(values : z.infer<typeof registerSchema>)=>{
        mutate({json :values});
    };
    
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By signing up,You agree to out {""}
                     <Link href="/privacy"><span className="text-blue-700">Privacy Policy</span></Link>{""} and {""}
                     <Link href="/terms"><span className="text-blue-700">Terms of Service</span></Link>
                </CardDescription>
            </CardHeader>
            <div className="px-7 ">
                <DottedSeparator/>
                
            </div>
            <CardContent className="p-7">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-4">
                <FormField
                name="name"
                control={form.control}
                    render={({field})=>(
                        <FormItem>
                            <FormControl>
                    <Input {...field}  type="text"  placeholder="Enter your name" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}/>
                <FormField
                name="email"
                control={form.control}
                    render={({field})=>(
                        <FormItem>
                            <FormControl>
                    <Input {...field}  type="email"  placeholder="Enter  your email" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}/>
                    <FormField
                name="password"
                control={form.control}
                    render={({field})=>(
                        <FormItem>
                            <FormControl>
                    <Input {...field}  type="password"  placeholder="Enter password" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}/>
                    <Button disabled={false} size="lg" className="w-full">Register</Button>
                
                </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator/>
            </div>
            
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button disabled={false} variant="secondary" size="lg" className="w-full">
                    <FcGoogle className="mr-2 size-5"/>
                    Login with Google
                </Button>
                <Button disabled={false} variant="secondary" size="lg" className="w-full">
                    <FaGithub className="mr-2 size-5"/>
                    Login with Github
                </Button>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
                <CardContent className="p-7 flex items-center justify-center">
                    <p>
                        Already have an account ?
                        <Link href="/sign-in"></Link>
                        <span className="text-blue-700">Sign In</span>
                    </p>
                </CardContent>

            </div>

        </Card>
    );
};