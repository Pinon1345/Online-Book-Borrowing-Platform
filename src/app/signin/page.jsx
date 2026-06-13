"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrPowerReset } from "react-icons/gr";

const SignInPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("Signin Data:", { email, password });

        const { data, error } = await authClient.signIn.email({

            email,
            password,
            callbackURL: "/"

        })

        console.log("SignIn Information:", { data, error });

        if (error) {
            alert(error.message)
        }

        if (data) {
            alert("Congratulations! Signin Successful")
        }
    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }

    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className="container w-11/12 mx-auto min-h-screen flex flex-col justify-center items-center">


            <div className=" bg-white/80 backdrop-blur-lg shadow-2xl shadow-gray-400 rounded-2xl border-2 border-gray-200 p-10 mb-10 mt-10">

                {/* Title */}

                <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-2">
                    Book Borrowing Platform
                </h2>
                <h2 className="text-3xl md:text-4xl pt-1 font-semibold text-center text-gray-500">Signin your account</h2>

                <p className="text-center text-sm text-gray-500 mb-6 mt-3">
                    Welcome back! Please enter your details.
                </p>

                {/* Form */}

                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                    {/* Email field */}

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="font-semibold text-lg">Email</Label>
                        <Input placeholder="Enter Your Email Address" variant="secondary" />
                        <FieldError />
                    </TextField>

                    {/* Password field */}

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        validate={(value) => {
                            if (value.length < 8) return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value)) return "Must contain 1 uppercase letter";
                            if (!/[0-9]/.test(value)) return "Must contain 1 number";
                            return null;
                        }}
                    >
                        <Label className="font-semibold text-lg">Password</Label>

                        <Input
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Enter Your Password"
                            variant="secondary"
                        />

                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>

                        <FieldError />

                        {/* Toggle button BELOW input */}

                        <button
                            type="button"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            className="text-sm text-blue-600 mt-2 hover:underline"
                        >
                            {isShowPassword ? "Hide password" : "Show password"}
                        </button>

                    </TextField>

                    <Link href={"/"}>

                        <div className="flex items-center justify-center gap-4 mt-2">


                            <Button type="submit" className="btn-primary w-6/12 rounded-full">
                                <FaUserCheck className="w-5 h-5"></FaUserCheck>
                                Submit
                            </Button>

                            <Button type="reset" className="btn-primary w-6/12 rounded-full">
                                <GrPowerReset className="w-5 h-5"></GrPowerReset>
                                Reset
                            </Button>

                        </div>

                    </Link>


                </Form>

                {/* Footer */}

                <p className="text-center text-sm text-gray-500 mt-6 mb-2">
                    Don’t Have An Account ?{" "}
                    <Link href={"/signup"}>
                        <span className="text-red-600 text-lg font-semibold cursor-pointer hover:underline">
                            Register
                        </span>
                    </Link>
                </p>

                {/* Google Sign Up */}

                {/* Divider */}
                <div className="flex items-center my-6 w-full">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-4 text-sm font-medium text-gray-400">
                        OR
                    </span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* Google Sign Up Button */}

                <Button
                    onClick={handleGoogleSignIn}
                    type="button"
                    className="mt-2 w-full h-12 rounded-xl border border-gray-300 bg-white text-gray-700 font-semibold flex items-center justify-center gap-3 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-blue-500 text-lg hover:shadow-lg active:scale-[0.98]"
                >
                    <FcGoogle className="w-6 h-6" />
                    Continue with Google
                </Button>

            </div>


        </div>
    );
};

export default SignInPage;