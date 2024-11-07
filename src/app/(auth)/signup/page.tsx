"use client";

import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Leaf } from "lucide-react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

declare global {
  interface Window {
    google: any;
  }
}

type FormData = {
  name: string;
  email: string;
  password: string;
  gender: string;
};

const firebaseConfig = {
  // Your Firebase configuration goes here
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = () => setIsGoogleLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Registration successful! Welcome to EcoTrack!", {
        duration: 5000,
        position: "top-center",
      });
    } catch (error) {
      toast.error("Registration failed. Please try again.", {
        duration: 5000,
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Google sign-in successful! Welcome to EcoTrack!", {
        duration: 5000,
        position: "top-center",
      });
    } catch (error) {
      toast.error("Google sign-in failed. Please try again.", {
        duration: 5000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-green-500 to-emerald-700">
      <Toaster />
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Join EcoTrack
          </CardTitle>
          <CardDescription className="text-center">
            Start tracking your carbon footprint and make a positive impact on
            the environment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                  placeholder="Create a password"
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => setValue("gender", value)}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p className="text-sm text-red-500">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>
            <Button
              className="w-full mt-6"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col items-center space-y-2">
            <Button className="w-full" onClick={signInWithGoogle}>
              Sign up with Google
            </Button>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/signin" className="text-green-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Signup;
