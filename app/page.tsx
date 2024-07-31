export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex w-full text-left text-2xl font-black items-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black static size-auto bg-none">
          StoryPods
        </div>
      </div>

      <div className="relative text-8xl font-mono font-black z-[-1] flex items-center justify-center min-h-screen p-4">
        <div className="absolute h-[200px] sm:h-[300px] lg:h-[360px] w-full -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10"></div>
        <div className="absolute -z-20 h-[120px] sm:h-[180px] w-full translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"></div>
        <span className="relative z-10 text-center break-words leading-tight">Own your&nbsp;<i>Podcasts</i></span>
      </div>
    </main>
  );
}
