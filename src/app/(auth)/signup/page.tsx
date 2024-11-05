"use client";

import { useRef, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
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

type FormData = {
  name: string;
  email: string;
  password: string;
  gender: string;
  location: string;
};

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const autocompleteInput = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("User registered:", data);
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(
        "An error occurred during registration. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div
      className="
  min-h-screen
   bg-gradient-to-b
    from-green-100
     to-green-200
      flex
       items-center
        justify-center 
        p-4
  "
    >
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center items-center mb-4">
            <Leaf className="w-12 h-12 text-green-600" />
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
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  type="text"
                  {...register("location", {
                    required: "Location is required",
                  })}
                  placeholder="Enter your city or region"
                  ref={autocompleteInput}
                />
                {errors.location && (
                  <p className="text-sm text-red-500">
                    {errors.location.message}
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
      </Card>
    </div>
  );
};

export default Signup;
