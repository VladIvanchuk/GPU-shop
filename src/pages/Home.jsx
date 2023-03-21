import { Main, NewGoods, Explore, HotGoods } from "../components";

export const Home = () => {
  return (
    <div className="wrapper home">
      <Main />
      <NewGoods />
      <Explore />
      <HotGoods />
    </div>
  );
};
