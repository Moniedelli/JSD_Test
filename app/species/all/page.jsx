'use client'
import AddSpecies from '@/app/component/AddSpecies';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AllSpecies = () => {
  const [allSpecies, setAllSpecies] = useState([]);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await axios.get('/api/species/all/read');
        const data = await response.data;

        setAllSpecies(data);
      } catch (error) {
        console.error('Error fetching all species:', error);
      }
    };

    fetchSpecies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/species/${id}/delete`);
      setAllSpecies(allSpecies.filter(species => species.id !== id));
    } catch (error) {
      console.error('Error deleting species:', error);
    }
  };

  return (
    <div className='m-10'>
      <div className="overflow-x-auto p-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Species Id</th>
              <th>Type of Fish</th>
              <th>Scientific Name</th>
              <th>English Name</th>
              <th>Indonesian Name</th>
              <th>Local Name</th>
              <th>Type of Water</th>
              <th>Image</th>
              <th>Status in Indonesia</th>
              <th>Fish Utilization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSpecies.map((species) => (
              <tr key={species.id}>
                <td className='hover:underline hover:bg-zinc-600 bg-slate-600'><Link href={`/species/${species.id}`}>{species.id}</Link></td>
                <td>{species.typeOfFish}</td>
                <td>{species.scientificName}</td>
                <td>{species.englishName}</td>
                <td>{species.indonesianName}</td>
                <td>{species.localName}</td>
                <td>{species.typeOfWater}</td>
                <td>{species.imageUrl}</td>
                <td>{species.statusInIndonesia}</td>
                <td>{species.fishUtilization}</td>
                <td><button onClick={() => handleDelete(species.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddSpecies />
      </div>
    </div>
  );
};

export default AllSpecies;
