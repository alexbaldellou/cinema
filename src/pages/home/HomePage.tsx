import { Header } from "../../components/Header";
import { Slider } from "../../components/Slider";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-full">
        <Header />
        <Slider />
      </div>
    </div>
  );
};

export default HomePage;
