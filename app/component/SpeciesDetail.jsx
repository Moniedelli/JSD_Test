import { useState } from "react";
import { useParams } from "next/navigation";
import EditSpecies from "./EditSpecies";

function SpeciesDetail({ species }) {
  const {
    typeOfFish,
    scientificName,
    englishName,
    indonesianName,
    localName,
    typeOfWater,
    imageUrl,
    statusInIndonesia,
    fishUtilization
  } = species;

  const { id } = useParams();

  const [activeTab, setActiveTab] = useState('itinerary');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  const handleDateChange = (event) => {
    // Update the selected date when the user picks a date
    setSelectedDate(event.target.value);
  };

  return (
    <div className="p-20">
      <div className="px-5 text-gray-300">
        <div className="flex items-center justify-between pb-5">
          <h2 className="text-2xl font-bold text-white">Detail {typeOfFish}</h2>
          <EditSpecies species={species} />
        </div>
        <div className="bg-zinc-800 p-10 rounded-lg">
          <div>
            <h2 className="text-xl font-semibold pb-3">Scientific Name</h2>
            <p>{scientificName}</p>
          </div>

          <div className="pt-10">
            <h2 className="text-xl font-semibold pb-3">English Name</h2>
            <p>{englishName}</p>
          </div>

          <div className="pt-10">
            <h2 className="text-xl font-semibold pb-3">Indonesian Name</h2>
            <p>{indonesianName}</p>
          </div>

          <div className="pt-10">
            <h2 className="text-xl font-semibold pb-3">Local Name</h2>
            <p>{localName}</p>
          </div>

          <div className="pt-10">
            <h2 className="text-xl font-semibold pb-3">Type of Water</h2>
            <p>{typeOfWater}</p>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default SpeciesDetail;
