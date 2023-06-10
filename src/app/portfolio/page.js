"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
      uv: 2050,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2070,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 1980,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 2000,
      pv: 4800,
      amt: 2000,
    },
    {
      name: "Page F",
      uv: 2050,
      pv: 3800,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 2080,
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

        <div className="flex text-[1.4rem] gap-4 justify-center flex-wrap">
          <p className="py-3 px-5 rounded-[10px] border-[1px] border-primary font-bold text-primary">
            7D
          </p>
          <p className="py-3 px-5 rounded-[10px]">30D</p>
          <p className="py-3 px-5 rounded-[10px]">90D</p>
          <p className="py-3 px-5 rounded-[10px]">180D</p>
        </div>
      </div>

      {/* <ResponsiveContainer width="100%" height="100%"> */}
        {/* <div className="chart-container flex justify-center"> */}
          <AreaChart
            className="m-auto"
            width={1216}
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="35%" stopColor="#2DFE87" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#2DFE87" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip />

            <Area
              type="monotoneX"
              dataKey="uv"
              stroke="#2DFE87"
              startOffset={10}
              fill="#2DFE87"
              fillOpacity={0.5}
            />
          </AreaChart>
        {/* </div> */}
      {/* </ResponsiveContainer> */}
    </section>
  );
};

export default Portfolio;
