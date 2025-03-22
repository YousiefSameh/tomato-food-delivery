import { assets } from "@frontendAssets/assets"

const DownloadApp = () => {
  return (
    <section className="pb-24 sm:pb-32 text-center font-medium" style={{fontSize: "max(3vw, 32px)"}} id="mobile-app">
      <p>For Better Experience Download <br /> <span className="text-tomato">Tomato App.</span></p>
      <div className="download-platforms flex justify-center items-center mt-10" style={{ gap: "max(2vw, 10px)" }}>
        <img src={assets.play_store} className="max-w-[180px] transition duration-500 hover:scale-105 cursor-pointer" style={{ width: "max(30vw, 120px)" }} alt="Play Store Platform" />
        <img src={assets.app_store} className="max-w-[180px] transition duration-500 hover:scale-105 cursor-pointer" style={{ width: "max(30vw, 120px)" }} alt="App Stor Platform" />
      </div>
    </section>
  )
}

export default DownloadApp