"use client";

import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRegister } from "@/hooks/useRegisetr";
import { Loader2 } from "lucide-react";

type RegisterForm = {
  fullName: string;
  phone: string;
  year: string;
  department: string;
};

export default function RegisterPage() {
  const { createMember, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<RegisterForm>({
    defaultValues: { year: "", department: "" },
    mode: "onBlur",
  });

  const onSubmit = (data: RegisterForm) => {
    createMember(data);
    reset();
  };

  const years = ["Freshman", "2nd Year", "3rd Year", "4th Year", "5th Year"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 px-6 py-10">
        <div className="basis-3/5 hidden lg:flex flex-col items-center justify-center text-center bg-white">
          <Image
            src="/logo.png"
            alt="Hararge Union Logo"
            width={100}
            height={100}
            className="mb-6 rounded-full"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome to
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary mt-2">
            Hararge Union
          </h2>
          <p className="mt-4 max-w-md text-gray-600">
            Join our community and connect with members across all years. Let’s
            build a stronger Hararge Union together!
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="basis-2/5 w-full max-w-md space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Full name must be at least 3 characters",
                },
              })}
              className="rounded-none"
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\-()\s]{7,20}$/,
                  message: "Enter a valid phone number",
                },
              })}
              className="rounded-none"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Input
              id="department"
              placeholder="e.g. Computer Science"
              {...register("department", {
                required: "Department is required",
                minLength: {
                  value: 2,
                  message: "Department must be at least 2 characters",
                },
              })}
              className="rounded-none"
            />
            {errors.department && (
              <p className="text-sm text-red-500">
                {errors.department.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>

            <Controller
              name="year"
              control={control}
              rules={{ required: "Year is required" }}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(val) => field.onChange(val)}
                >
                  <SelectTrigger id="year" className="rounded-none">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((y) => (
                      <SelectItem key={y} value={y}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.year && (
              <p className="text-sm text-red-500">{errors.year.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full rounded-none py-3 flex items-center justify-center"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registering...
              </>
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
