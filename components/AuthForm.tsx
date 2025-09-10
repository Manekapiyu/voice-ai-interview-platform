"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUp, signIn } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormField from "@/components/FormField";

//Define the form type
type FormType = "sign-in" | "sign-up";

//Schema factory
const authFormSchema = (type: FormType) =>
  z.object({
    name:
      type === "sign-up"
        ? z.string().min(2, { message: "Name is required" })
        : z.string().optional(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be 6+ characters" }),
  });

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (type === "sign-up") {
        const { name, email, password } = data;

        const result = await signUp({
          name: name!,
          email,
          password,
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success("Account created successfully. Please sign in.");
        router.push("/sign-in");
      } else {
        const { email, password } = data;

        const result = await signIn({
          email,
          password,
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success(" Signed in successfully.");
        router.push("/");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(`There was an error: ${error.message || error}`);
    }
  };

  const isSignIn = type === "sign-in";

  return (
    <div className="lg:min-w-[566px]">
      {/* Gradient Border Wrapper */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-xl">
        {/* Inner Card */}
        <div className="flex flex-col gap-6 bg-white dark:bg-gray-900 rounded-2xl py-14 px-10">
          {/* Logo + Title */}
          <div className="flex flex-row gap-2 justify-center items-center">
            <Image src="/logo.svg" alt="logo" height={32} width={38} />
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              PrepWise
            </h2>
          </div>

          <h3 className="text-center text-gray-600 dark:text-gray-300">
            Practice job interviews with{" "}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              AI
            </span>
          </h3>

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6 mt-4"
            >
              {!isSignIn && (
                <FormField
                  control={form.control}
                  name="name"
                  label="Name"
                  placeholder="Your Name"
                  type="text"
                />
              )}

              <FormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="Your email address"
                type="email"
              />

              <FormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />

              <Button
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 
                text-white font-semibold py-2 rounded-xl shadow-md transition-all"
                type="submit"
              >
                {isSignIn ? "Sign In" : "Create an Account"}
              </Button>
            </form>
          </Form>

          {/* Switch Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            {isSignIn ? "No account yet?" : "Already have an account?"}{" "}
            <Link
              href={!isSignIn ? "/sign-in" : "/sign-up"}
              className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {!isSignIn ? "Sign In" : "Sign Up"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
