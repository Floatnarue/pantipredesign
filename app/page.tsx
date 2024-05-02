import { store } from "@/libs/store";
import Container from "./components/Container";
import ListingCard from "./components/Listing/ListingCard";
import { listing } from "@/libs/card";
import { Provider } from "react-redux";
export default function Home() {
  return (
    
      <Container>
        <div className="border-b-[1px] border-gray-400 rounded-full p-2">
          <div className="flex justify-center items-center mb-4">
            <div className="mt-4 font-bold text-lg">Pantip Realtime</div>
          </div>
        </div>

        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl-grid-cols-6 gap-8">
          {listing.map((list) => {
            return <ListingCard key={list.topic} data={list} />;
          })}
        </div>
      </Container>
    
  );
}
