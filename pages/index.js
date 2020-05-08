import Featured from "../components/featured";
import SeasonsFlowers from "../components/seasonsFlowers";
import SeasonsNew from "../components/seasonsNew";

export default function Index() {
  return (
    <React.Fragment>
      <Featured></Featured>
      <SeasonsNew></SeasonsNew>
      <SeasonsFlowers></SeasonsFlowers>
    </React.Fragment>
  );
}
