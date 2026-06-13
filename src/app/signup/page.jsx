"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrPowerReset } from "react-icons/gr";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const SignUpPage = () => {

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("Signup Data:", { name, image, email, password });

        const { data, error } = await authClient.signUp.email({
            name,
            image,
            email,
            password,
            callbackURL: "/"

        })

        console.log("SignUp Information:", { data, error });

        if (data) {
            alert("Congratulations! Registration Successful")
            router.push("/")
        }

        if (error) {
            alert("Registration Failed! Try again later")
        }



        // const formData = new FormData(e.currentTarget);
        // const data = {};

        // // Convert FormData to plain object

        // formData.forEach((value, key) => {
        //     data[key] = value.toString();
        // });


        // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    };


    const [isShowPassword, setIsShowPassword] = useState(false);

    return (

        <div className="container w-11/12 mx-auto min-h-screen flex flex-col justify-center items-center">


            <div className=" bg-white/80 backdrop-blur-lg shadow-2xl shadow-gray-400 rounded-2xl border-2 border-gray-200 p-10 mb-10 mt-10">

                {/* Title */}

                <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-2">
                    Book Borrowing Platform
                </h2>
                <h2 className="text-3xl md:text-4xl pt-1 font-semibold text-center text-gray-500">Register your account</h2>

                <p className="text-center text-sm text-gray-500 mb-6 mt-3">
                    Welcome! Please enter your details.
                </p>

                {/* Form */}

                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                    {/* Name field */}

                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label className="font-semibold text-lg">Name</Label>
                        <Input placeholder="Enter Your Full Name" variant="secondary" />
                        <FieldError />
                    </TextField>

                    {/* Image URL field */}

                    <TextField
                        name="image"
                        type="text"
                        validate={(value) => {
                            if (!value) return null; // optional field

                            const isBase64 = value.startsWith("data:image/");

                            if (isBase64) return null;

                            //  Allow normal URL
                            try {
                                new URL(value);
                            } catch {
                                return "Invalid image format";
                            }

                            // Must be image link
                            const urlPattern = /\.(jpg|jpeg|png|gif|webp|svg)$/i;

                            if (!urlPattern.test(value)) {
                                return "URL must be an image (.jpg, .png, .webp, etc)";
                            }

                            return null;
                        }}
                    >
                        <Label className="font-semibold text-lg">Image URL (Optional)</Label>

                        <Input
                            placeholder="https://example.com/image.jpg (300x300 recommended)"
                            variant="secondary"
                        />

                        <FieldError />
                    </TextField>

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

                        <div className="flex items-center justify-center gap-4 mt-2 mb-4">


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


            </div>


        </div>
    );
};

export default SignUpPage;