"use client";
import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LeaderBoard from "../components/LeaderBoard";

const Portfolio = () => {
  const data = [
    {
      name: "Page A",
      uv: 2000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 2090,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 1990,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2200,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 2100,
      pv: 4800,
      amt: 2000,
    },
    {
      name: "Page G",
      uv: 2100,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <section className="container text-white m-auto px-5 md:px-16 3xl:px-[18rem] border-0 border-primary my-3">
      <h3 className="text-[2rem] text-center font-light">
        <span className="font-medium">Analytic</span> / Portfolio
      </h3>

      <div className="flex justify-between items-center my-12">
        <div>
          <div className="flex flex-col items-center gap-5">
            <p className="md:font-medium text-[1.3rem] text-lightGray">
              Net Worth
            </p>
            <h1 className="text-1xl md:text-4xl 3xl:text-[3.12rem] font-semibold text-primary m-1">
              $100.00
            </h1>
          </div>
        </div>

        <div className="flex text-[1.4rem] gapy-4 justify-center flex-wrap">
          <p className="py-3 px-5 rounded-[10px] border-[1px] border-primary font-bold text-primary">
            7D
          </p>
          <p className="py-3 px-5 rounded-[10px]">30D</p>
          <p className="py-3 px-5 rounded-[10px]">90D</p>
          <p className="py-3 px-5 rounded-[10px]">180D</p>
        </div>
      </div>

      <ResponsiveContainer width="90%" height={400} className="m-auto">
        <AreaChart
          // width={1216}
          // height={400}
          data={data}
          // margin={{
          //   top: 0,
          //   right: 0,
          //   left: 0,
          //   bottom: 0,
          // }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2DFE87" stopOpacity={0.4} />
              <stop offset="80%" stopColor="#2DFE87" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="colorPv" /> */}
          {/* <YAxis /> */}
          <Tooltip />

          <Area
            // type="monotoneX"
            className="border-2 border-primary"
            dataKey="uv"
            strokeWidth={3}
            stroke="#2DFE87"
            fill="#2DFE87"
            fillOpacity={0.4}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="my-14 border-2 border-primary rounded-[2.6rem] p-8 text-lg bg-gradient-to-r from-[#15283B] to-[rgba(27, 32, 83, 0) 100%)]">
        <table className="w-full">
          <thead>
            <tr className="text-left text-3xl text-primary border-b-[1px] border-[rgba(255, 255, 255, 0.2)]">
              <th className="py-2 font-normal ">Detail</th>
              <th className="py-2 font-normal "></th>
              <th className="py-2 font-normal ">Currency</th>
              <th className="py-2 font-normal text-right">Token Amount</th>
            </tr>
          </thead>
          <tbody className="my-5 text-2xl font-medium ">
            {[1, 2, 3, 4, 5].map((item, i) => {
              return (
                <tr>
                  <td className="py-4" key={i}>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/images/Portfolio/Ellipse 2.svg"
                        alt="ellipse"
                        width={50}
                        height={50}
                      />
                      <span>Buy Seed</span>
                    </div>
                  </td>
                  <td className="py-4  ">
                    <div className="rounded-[4rem] flex items-center gap-2  bg-white text-black w-fit p-2">
                      <Image
                        src="/assets/images/Portfolio/Ellipse 2.svg"
                        alt="ellipse"
                        width={40}
                        height={40}
                      />
                      <span className="text-lg font-medium">
                        0x752319...93fff
                      </span>
                    </div>
                  </td>
                  <td className="py-4  ">
                    <div className="flex items-center gap-2 ps-2 3xl:ps-5">
                      <Image
                        src="/assets/images/Portfolio/T-icon.svg"
                        width={40}
                        height={40}
                        alt="tIcon"
                      />
                      <span>$50</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-center gap-2  xl:me-[-4rem] 2xl:me-[-7rem] 3xl:me-[-8rem]">
                      <Image
                        src="/assets/images/Portfolio/mIcon.svg"
                        width={40}
                        height={40}
                        alt="tIcon"
                      />
                      <span>2,000</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <LeaderBoard />
    </section>
  );
};

export default Portfolio;
