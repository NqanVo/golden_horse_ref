import btc_big from "./assets/image/bitcoin_bigsize.png"
import logo from "./assets/image/logo.png"
import logo_attlas from "./assets/image/logo_attlas.png"
import logo_binance from "./assets/image/logo_binance.png"
import logo_mexc from "./assets/image/logo_mexc.png"
import logo_bybit from "./assets/image/logo_bybit.png"
import token_ats from "./assets/image/token_ats.png"
import token_bnb from "./assets/image/token_bnb.png"
import token_mx from "./assets/image/token_mx.png"
import token_bit from "./assets/image/token_bit.png"
import qr_attlas from "./assets/image/qr_attlas.png"
import qr_binance from "./assets/image/qr_binance.png"
import qr_mexc from "./assets/image/qr_mexc.png"
import qr_bybit from "./assets/image/qr_bybit.png"
import logo_zalo from "./assets/image/logo_zalo.png"
import logo_telegram from "./assets/image/logo_telegram.png"
import axios from "axios";
import Marquee from "react-fast-marquee";
import qr_telegram from "./assets/image/qr_telegram.png"
import { useEffect, useState } from "react"

function App() {
  const [top20CMC, setTop20CMC] = useState([])
  useEffect(() => {
    const GetTop10CMC = async () => {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h`);
      setTop20CMC(res.data)
    }
    GetTop10CMC()
  }, [])

  return (
    <div className="bg-black min-h-screen overflow-hidden scroll-smooth">
      <div id="home" className="container xl:max-w-screen-xl xl:px-10 xl:py-5 md:max-w-screen-md md:px-5 md:py-3 max-w-screen-sm px-2 py-1 mx-auto text-white">
        <header className="flex justify-between items-center">
          <a href="" className="w-full lg:w-auto flex items-center justify-center lg:justify-start">
            <img src={logo} alt="" className="w-28 h-28 object-cover" />
            <span className="hidden lg:flex items-center gap-2 font-minor font-bold">
              <h1 className="text-3xl font-black text-yellow-500">G</h1>
              <h1 className="text-3xl font-black">H</h1>
            </span>
          </a>
          <ul className="hidden w-1/2 lg:flex justify-around font-bold tracking-wider">
            <li className="hover:text-yellow-500 transition-all cursor-pointer"><a href="#home">Trang chủ</a></li>
            <li className="hover:text-yellow-500 transition-all cursor-pointer"><a href="#ref">Mở tài khoản</a></li>
            <li className="hover:text-yellow-500 transition-all cursor-pointer"><a href="#community">Cộng đồng</a></li>
            <li className="hover:text-yellow-500 transition-all cursor-pointer">Blog</li>
          </ul>
        </header>
        <main className="flex flex-col gap-2">
          <div className="w-full flex">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center xl:items-start gap-4">
              <span className="flex gap-2 text-3xl md:text-4xl lg:text-6xl font-black font-minor uppercase">
                <h1 className="text-yellow-500">Golden</h1>
                <h1>Horse</h1>
              </span>
              <p className="text-xl text-center lg:text-left">Đầu tư & tích lũy tài sản số cùng <b>Golden Horse</b></p>
              <div className="w-full flex flex-wrap gap-2 mx-auto justify-center lg:justify-start">
                <a href="https://attlas.io/r/32359247" target="_blank" className="max-w-[120px] h-20 p-2 rounded-lg">
                  <img src={logo_attlas} alt="" className="mx-auto w-full h-full object-contain" />
                </a>
                <a href="https://attlas.io/r/32359247" target="_blank" className="max-w-[120px] h-20 p-2 rounded-lg">
                  <img src={logo_binance} alt="" className="mx-auto w-full h-full object-contain" />
                </a>
                <a href="https://attlas.io/r/32359247" target="_blank" className="max-w-[120px] h-20 p-2 rounded-lg">
                  <img src={logo_mexc} alt="" className="mx-auto w-full h-full object-contain" />
                </a>
                <a href="https://attlas.io/r/32359247" target="_blank" className="max-w-[120px] h-20 p-2 rounded-lg">
                  <img src={logo_bybit} alt="" className="mx-auto w-full h-full object-contain" />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex w-1/2 justify-center items-center">
              <img src={btc_big} alt="" className="hidden md:block md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] object-cover" />
              {/* <img src={btc_big} alt="" className="fixed block md:hidden top-1/4 -right-1/2 opacity-50 md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] object-cover" /> */}
            </div>
          </div>
          <Marquee gradient={false} loop={0} className="w-full overflow-hidden flex gap-4">
            {top20CMC && top20CMC.map((coin) => {
              return (<div key={coin.id} className="flex gap-2 items-center min-w-[200px]">
                <img src={coin.image} alt="" className="w-10 h-10 object-cover rounded-full" />
                <div className="">
                  <h3 className="uppercase">{coin.symbol}: ${(coin.current_price).toFixed(2)}</h3>
                  <div className="text-xs">Thay đổi 24h: {
                    coin.price_change_percentage_24h >= 0
                      ? <span className="text-green-500">{(coin.price_change_percentage_24h).toFixed(2)}%</span>
                      : <span className="text-red-500">{(coin.price_change_percentage_24h).toFixed(2)}%</span>}
                  </div>
                </div>
              </div>)
            }
            )}
          </Marquee>
          <content id="ref" className="flex flex-col gap-2 mt-20 pt-10 md:mt-28 md:pt-14 lg:mt-32 lg:pt-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 w-1/2 bg-yellow-500 rounded-full"></div>
            <h2 className="text-3xl font-medium text-center mb-10 md:mb-14 lg:mb-16">Mở tài khoản</h2>
            <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
              <div className="relative mx-auto w-3/4 md:w-full min-h-[400px] p-4 flex flex-col gap-4 items-center rounded-lg justify-between overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-white/20 blur-[1px] shadow-sm"></div>
                <img src={token_ats} alt="" className="absolute top-1/3 -right-1/3 opacity-10 -rotate-45" />
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#1776F0] font-bold text-xl text-center z-20">Attlas Exchange</h3>
                  <ul className="flex flex-col gap-2 justify-center text-justify z-20">
                    <li>Sàn giao dịch hàng đầu Việt Nam</li>
                    <li>Lãi suất linh hoạt 12,8% cho VNDC</li>
                    <li>Hoàn phí giao dịch đến 30%</li>
                    <li>CSKH & hỗ trợ 24/7</li>
                    <li>Mở tài khoản nhận thưởng đến 1.000.000 VNDC</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <a href="https://attlas.io/r/32359247" target="_blank" className="text-[#1776F0] font-bold text-xl underline z-20">Đăng ký ngay</a>
                  <p>Hoặc</p>
                  <img src={qr_attlas} alt="" className="w-36 h-36 mx-auto object-cover rounded-2xl" />
                </div>
              </div>
              <div className="relative mx-auto w-3/4 md:w-full min-h-[400px] p-4 flex flex-col gap-4 items-center rounded-lg justify-between overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-white/20 blur-[1px] shadow-sm"></div>
                <img src={token_bnb} alt="" className="absolute top-1/3 -right-1/3 opacity-10 -rotate-45" />
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#F0B90B] font-bold text-xl text-center z-20">Binance Exchange</h3>
                  <ul className="flex flex-col gap-2 justify-center text-justify z-20">
                    <li>Khối lượng giao dịch lớn nhất</li>
                    <li>Phí giao dịch SPOT 0% cho BTC</li>
                    <li>Lãi suất linh hoạt 6% cho BUSD</li>
                    <li>Nhiều sự kiện hàng tuần</li>
                    <li>CSKH & hỗ trợ 24/7</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <a href="https://www.binance.com/vi/activity/referral-entry/CPA?fromActivityPage=true&ref=CPA_00S1ZVEWVS" target="_blank" className="text-[#F0B90B] font-bold text-xl underline z-20">Đăng ký ngay</a>
                  <p>Hoặc</p>
                  <img src={qr_binance} alt="" className="w-36 h-36 mx-auto object-cover rounded-2xl" />
                </div>
              </div>
              <div className="relative mx-auto w-3/4 md:w-full min-h-[400px] p-4 flex flex-col gap-4 items-center rounded-lg justify-between overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-white/20 blur-[1px] shadow-sm"></div>
                <img src={token_mx} alt="" className="absolute top-1/3 -right-1/3 opacity-10 -rotate-45" />
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#1972E2] font-bold text-xl text-center z-20">Mexc Exchange</h3>
                  <ul className="flex flex-col gap-2 justify-center text-justify z-20">
                    <li>Phí giao dịch 0%</li>
                    <li>Nhiều sự kiện thưởng đến $30.000</li>
                    <li>Giao dịch ETF đầu tiên nhận $5</li>
                    <li>CSKH & hỗ trợ 24/7</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <a href="https://www.mexc.com/register?inviteCode=1LGLb" target="_blank" className="text-[#1972E2] font-bold text-xl underline z-20">Đăng ký ngay</a>
                  <p>Hoặc</p>
                  <img src={qr_mexc} alt="" className="w-36 h-36 mx-auto object-cover rounded-2xl" />
                </div>
              </div>
              <div className="relative mx-auto w-3/4 md:w-full min-h-[400px] p-4 flex flex-col gap-4 items-center rounded-lg justify-between overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-white/20 blur-[1px] shadow-sm"></div>
                <img src={token_bit} alt="" className="absolute top-1/3 -right-1/3 opacity-10 -rotate-45" />
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#FFB11A] font-bold text-xl text-center z-20">Bybit Exchange</h3>
                  <ul className="flex flex-col gap-2 justify-center text-justify z-20">
                    <li>Lãi suất linh hoạt 8% cho USDC</li>
                    <li>Phí giao dịch SPOT 0%</li>
                    <li>CSKH & hỗ trợ 24/7</li>
                    <li>Mở tài khoản nhận thưởng đến $2.000</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <a href="https://www.bybit.com/invite?ref=EGG7X4" target="_blank" className="text-[#FFB11A] font-bold text-xl underline z-20">Đăng ký ngay</a>
                  <p>Hoặc</p>
                  <img src={qr_bybit} alt="" className="w-36 h-36 mx-auto object-cover rounded-2xl" />
                </div>
              </div>
            </div>
          </content>
          <content id="community" className="flex flex-col gap-2 mt-20 pt-10 md:mt-28 md:pt-14 lg:mt-32 lg:pt-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 w-1/2 bg-yellow-500 rounded-full"></div>
            <h2 className="text-3xl font-medium text-center mb-10 md:mb-14 lg:mb-16">Cộng đồng</h2>
            <div className="z-10 flex justify-center gap-2 w-full mx-auto md:w-3/5">
              <div className="relative mx-auto min-h-[400px] p-4 flex flex-col gap-4 items-center rounded-lg justify-between overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-white/20 blur-[1px] shadow-sm"></div>
                <div className="flex flex-col gap-4">
                  <img src={logo_zalo} alt="" className="h-auto w-52 object-cover" />
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <a href="https://attlas.io/r/32359247" target="_blank" className="text-[#1776F0] font-bold text-xl underline z-20">Tham gia</a>
                  <p>Hoặc</p>
                  <img src={qr_attlas} alt="" className="w-36 h-36 mx-auto object-cover rounded-2xl" />
                </div>
              </div>
              <div className="relative mx-auto min-h-[400px] p-4 flex flex-col gap-4 items-center rounded-lg justify-between overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-white/20 blur-[1px] shadow-sm"></div>
                <div className="flex flex-col gap-4">
                  <img src={logo_telegram} alt="" className="h-auto w-52 object-cover" />
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <a href="https://t.me/goldenhorsechannel" target="_blank" className="text-[#1776F0] font-bold text-xl underline z-20">Tham gia</a>
                  <p>Hoặc</p>
                  <img src={qr_telegram} alt="" className="w-36 h-36 mx-auto object-cover rounded-2xl" />
                </div>
              </div>
            </div>
          </content>
        </main>
        <footer className="">
          <p className="text-gray-500">@2023 Golden Horse</p>
        </footer>
      </div>
      <div className="-z-0 fixed top-1/2 -left-[50%] xl:-left-[5%] opacity-25 w-20 h-20 bg-yellow-500 rounded-full shadow-[0_0_1000px_200px] shadow-yellow-500"></div>
      <div className="-z-0 fixed top-[100%] -right-[50%] xl:-right-[5%] opacity-50 w-20 h-20 bg-yellow-500 rounded-full shadow-[0_0_1000px_200px] shadow-yellow-500"></div>
      <a href="#home" className="fixed flex justify-center items-center bottom-5 right-5 w-10 h-10 bg-yellow-500 rounded-full">^</a>
    </div>
  );
}

export default App;
