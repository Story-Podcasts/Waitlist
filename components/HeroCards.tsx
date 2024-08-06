import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="data:image/png;base64,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"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Sample Podcast</CardTitle>
            <CardDescription>@john_doe</CardDescription>
          </div>
        </CardHeader>

        <CardContent>This landing page is awesome!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Leo Miranda</CardTitle>
          <CardDescription className="font-normal text-primary">
            Frontend Developer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            I really enjoy transforming ideas into functional software that
            exceeds expectations
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/leopoldo-miranda/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
            Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["4 Team member", "4 GB Storage", "Upto 6 pages"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="text-md mt-2">
              Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
              natusm.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};