"use client"
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "./ui/input";
import { database } from "@/lib/firebase";
import { ref, set } from "firebase/database";
import { RocketIcon } from "@radix-ui/react-icons"
 
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export const Hero: React.FC = () => {
  const { toast } = useToast()
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    console.log(email)

    if (email) {
      set(ref(database, 'users/' + email.replaceAll('.', '_')), {
        email: email
      }).then(() => {
        toast({
          title: "Joined Successfully!",
          description: "You have been added to the waitlist!",
        })
        console.log("added")
      }).catch((error) => {
        toast({
          title: "Failed!",
          description: "There was an error. Please try again.",
          variant: "destructive"
        })
        console.error(error);
      });
    }
  };

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 h-[90vh] gap-10 md:gap-32">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Owned {" "}
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Podcasts
            </span>{" "}
            for
          </h1>{" "}
          everyone,{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              everywhere
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Create & Listen podcasts IP Backed Podcasts without having to worry about your content&apos;s ownership.
        </p>

        <form
          className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col lg:flex-row items-center justify-center lg:justify-start"
          onSubmit={handleSubmit}
        >
          <Input
            name="email"
            className="w-full md:w-1/3 md:text-left text-center"
            type="email"
            placeholder="Enter your email address"
          />

          <button
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "default",
            })}`}
          >
            Join Waitlist
          </button>
        </form>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
