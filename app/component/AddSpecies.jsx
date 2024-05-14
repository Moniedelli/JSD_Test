
'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

function AddSpecies() {
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState('');
  const [typeOfFish, setTypeOfFish] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [indonesianName, setIndonesianName] = useState('');
  const [localName, setLocalName] = useState('');
  const [typeOfWater, seTypeOfWater] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [statusInIndonesia, setStatusInIndonesia] = useState('');
  const [fishUtilization, setFishUtilization] = useState('');

  function onCloseModal() {
    const modal = document.getElementById('my_modal_3');
    modal.close();
    setId('');
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

  const handleAddSpecies = async () => {
    try {
      const response = await fetch('/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          typeOfFish,
          scientificName,
          englishName,
          indonesianName,
          localName,
          typeOfWater,
          imageUrl,
          statusInIndonesia,
          fishUtilization
        }),
      });

      if (response.ok) {
        toast.success("Success add species");
        onCloseModal();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error("Error adding species.")
        onCloseModal();
        console.error('Error adding species');
      }
    } catch (error) {
      toast.error("Error adding species.")
      onCloseModal();
      console.error('Error adding species', error);
    }
  };

  return (
    <>
      <div onClick={()=>document.getElementById('my_modal_3').showModal()} className='pb-5 pt-2 text-zinc-400 cursor-pointer pl-2 hover:text-zinc-200'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-zinc-800">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg mb-3">Add Species</h3>

          <div className='flex gap-5'>
            <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-zinc-300">Id</span>
                </div>
                <input value={id} onChange={(event) => setId(event.target.value)} required type="id" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
              </label>

              <label className="form-control">
                <div className="label">
                  <span className="label-text text-zinc-300">Type of Fish</span>
                </div>
                <input value={typeOfFish} onChange={(event) => setTypeOfFish(event.target.value)} required type="typeOfFish" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-zinc-300">Scientific Name</span>
                </div>
                <input value={scientificName} onChange={(event) => setScientificName(event.target.value)} required type="scientificName" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-zinc-300">English Name</span>
                </div>
                <input value={englishName} onChange={(event) => setEnglishName(event.target.value)} required type="englishName" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-zinc-300">Indonesian Name</span>
                </div>
                <input value={indonesianName} onChange={(event) => setIndonesianName(event.target.value)} required type="indonesianName" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
              </label>

              <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-zinc-300">Image</span>
                </div>
                <input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} required type="imageUrl" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
              </label>
            </div>
            </div>

            <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-zinc-300">Local Name</span>
                </div>
                <input value={localName} onChange={(event) => setLocalName(event.target.value)} required type="localName" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-zinc-300">Type of Water</span>
                </div>
                <input value={typeOfWater} onChange={(event) => seTypeOfWater(event.target.value)} required type="typeOfWater" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-zinc-300">Status in Indonesia</span>
                </div>
                <input value={statusInIndonesia} onChange={(event) => setStatusInIndonesia(event.target.value)} required type="statusInIndonesia" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-zinc-300">Fish Utilization</span>
                </div>
                <input value={fishUtilization} onChange={(event) => setFishUtilization(event.target.value)} required type="fishUtilization" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
              </label>
            </div>

          </div>

          <div className="w-full mt-5">
            <button onClick={handleAddSpecies} className="btn orange rounded-3xl py-2 px-5">Add</button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default AddSpecies;
