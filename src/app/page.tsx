import Banner from "@/components/banner/banner";
import CardEnterprise from "@/components/cards/cardEnterprise/cardEnterprise";
import Category from "@/components/category/category";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Category />
        <CardEnterprise />
      </main>
    </>
  );
}
