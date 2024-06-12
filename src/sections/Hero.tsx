import AppleLogo from "../assets/logos/app_store.svg";

function Hero() {
  return (
    <section>
      <div>
        <h1>Start spending the smart way</h1>
        <p>
          Take Control of Your Finances Anytime, Anywhere with Kobodrop.
          Discover the Smart Way to Use Your Money!
        </p>
      </div>
      <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">
        <a
          href="https://www.apple.com/app-store"
          className="hover: flex gap-3 rounded-lg bg-zinc-900 bg-zinc-950 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
        >
          <img src={AppleLogo} alt="logo pic" className="w-5" />
          <div>
            <p className="text-xs">Download on the</p>
            <p>App Store</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
