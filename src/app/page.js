import Image from "next/image";
import Tabs from "./components/Tabs";
import Portfolio from "./portfolio/page";
import BuyToken from "./BuyToken/page";
import Vesting from "./vesting/page";


export default function Home() {
  // const [activeTab, setActiveTab] = useState(1);
  return (
    <main className="container m-auto px-10">
      {/* <Tabs /> */}
      <Portfolio />
    </main>
  );
}
