import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const result = trigger();   
  return (
    <>
      <Head>
        <title>Cybersecurity Made Easy!</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#021b6d] to-[#0c142e]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Learning CyberSecurity Made Easy! 
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Newbie</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to start off your Cybersecurity and Digital Forensic learning journey.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://www.w3schools.com/cybersecurity/cybersecurity_quiz.php"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Veteran</h3>
              <div className="text-lg">
                Already know some knowledge about CyberSecurity or Digital Forensics? Take a quiz to strengthen your weak spots and learn more!
              </div>
            </Link>
          </div>
        </div>
        <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/74d99ce9-fd19-4c81-a073-a9490f4aa12a/webchat/config.js" defer></script>
            
      </main>
    </>
  );
}



export function trigger(): void {
  if (typeof window !== 'undefined' && (window as any).botpressWebChat) {
    const botpressWebChat = (window as any).botpressWebChat;
    botpressWebChat.sendEvent({ type: "show" });
    botpressWebChat.sendPayload({ type: "text", text: "Hello there!" });
  }
}
