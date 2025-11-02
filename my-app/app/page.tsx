import Image from "next/image";
import Ads_Banner from "../component/AdsBanner";
import FlightDiscover from "@/component/flightDiscover";
import FlightDetails from "@/component/flightDetail";
import StayDiscover from "@/component/stayDiscover";

export default function page() {
  return (
    <div>
      <Ads_Banner></Ads_Banner>
      <FlightDiscover></FlightDiscover>
      <FlightDetails></FlightDetails>
      <StayDiscover></StayDiscover>
    </div>
  )
}
