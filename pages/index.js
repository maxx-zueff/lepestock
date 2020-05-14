import Featured from "../components/featured";
import SeasonsFlowers from "../components/seasonsFlowers";
import SeasonsNew from "../components/seasonsNew";
import Layout, { siteTitle } from "../components/layout";
import Head from 'next/head';


export default function Index() {
  return (
  	<Layout>
		<Head>
	        <title>{siteTitle}</title>
		</Head>
	    <React.Fragment>
	      <Featured></Featured>
	      <SeasonsNew></SeasonsNew>
	      <SeasonsFlowers></SeasonsFlowers>
	    </React.Fragment>
    </Layout>
  );
}
