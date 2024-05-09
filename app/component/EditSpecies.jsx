'use client'

import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const EditSpecies = ({species}) => {
  const [id, setId] = useState(species.id);
  const [typeOfFish, setTypeOfFish] = useState(species.typeOfFish);
  const [scientificName, setScientificName] = useState(species.scientificName);
  const [englishName, setEnglishName] = useState(species.englishName);
  const [indonesianName, setIndonesianName] = useState(species.indonesianName);
  const [localName, setLocalName] = useState(species.localName);
  const [typeOfWater, seTypeOfWater] = useState(species.typeOfWater);
  const [imageUrl, setImageUrl] = useState(species.imageUrl);
  const [statusInIndonesia, setStatusInIndonesia] = useState(species.statusInIndonesia);
  const [fishUtilization, setFishUtilization] = useState(species.fishUtilization);

  function onCloseModal() {
    const modal = document.getElementById(`my_modal_${species.id}`);
    modal.close();
    setTypeOfFish('');
    setScientificName('');
    setEnglishName('');
    setIndonesianName('');
    setLocalName('');
    seTypeOfWater('');
    setImageUrl('');
    setStatusInIndonesia('');
    setFishUtilization('');
  }  
  
  const handleEdit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.patch(`/api/species/${species.id}/update`, {
        typeOfFish,
        scientificName,
        englishName,
        indonesianName,
        localName,
        typeOfWater,
        imageUrl,
        statusInIndonesia,
        fishUtilization
      });
  
      console.log('Species berhasil diupdate');
      toast.success("Success editing species");
      onCloseModal();
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      toast.error("Error editing species!")
      onCloseModal();
    }
  };

  return (
    <div>
      <div className='text-amber-500' onClick={()=>document.getElementById(`my_modal_${species.id}`).showModal()}>
          <div className="tooltip tooltip-warning tooltip-left" data-tip="change">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </div>
          
          <div className='text-gray-300'>
            <dialog id={`my_modal_${species.id}`} className="modal">
              <div className="modal-box bg-zinc-800  w-11/12 max-w-5xl">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-xl pb-5">Edit <span className='italic'>{typeOfFish}</span></h3>
                <div className="flex flex-col gap-4 max-w-6xl">
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Type of Fish</span>
                    </div>
                    <input type="text" value={typeOfFish} onChange={(e) => setTypeOfFish(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Scientific Name</span>
                    </div>
                    <input type="text" value={scientificName} onChange={(e) => setScientificName(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">English Name</span>
                    </div>
                    <input type="text" value={englishName} onChange={(e) => setEnglishName(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Indonesian Name</span>
                    </div>
                    <input type="text" value={indonesianName} onChange={(e) => setIndonesianName(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Local Name</span>
                    </div>
                    <input type="text" value={localName} onChange={(e) => setLocalName(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Type of Water</span>
                    </div>
                    <input type="text" value={typeOfWater} onChange={(e) => setTypeOfWater(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Image URL</span>
                    </div>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Status in Indonesia</span>
                    </div>
                    <input type="text" value={statusInIndonesia} onChange={(e) => setStatusInIndonesia(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Fish Utilization</span>
                    </div>
                    <input type="text" value={fishUtilization} onChange={(e) => setFishUtilization(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                </div>

                {/* Tombol Submit Example dan Pesan Submit */}
                <div className='flex justify-start gap-2'>
                  <button type="submit" className='mt-5 orange py-2 px-5 rounded-3xl' onClick={(e) => handleEdit(e)}>Submit changes</button>
                </div>
              </div>
            </dialog>
          </div>
        </div>
    </div>
  );
};

export default EditSpecies;
