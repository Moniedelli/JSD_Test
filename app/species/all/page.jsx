'use client'
import { useState, useEffect } from 'react';
import AddSpecies from '@/app/component/AddSpecies';
import ProtectedRoute from '@/app/component/ProtecttedPage';
import apiClient from '@/app/libs/clientApi';
import Link from 'next/link';

const AllSpecies = () => {
  const [allSpecies, setAllSpecies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await apiClient.get(`/species?PageNumber=${pageNumber}&PageSize=${pageSize}`);
        const { data, metadata } = response.data;

        setAllSpecies(data);
        setTotalPages(metadata.totalPages);
      } catch (error) {
        console.error('Error fetching all species:', error);
      }
    };

    fetchSpecies();
  }, [pageNumber, pageSize]);

  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/species/${id}`);
      setAllSpecies(allSpecies.filter(species => species.id !== id));
    } catch (error) {
      console.error('Error deleting species:', error);
    }
  };

  const handlePageChange = (newPageNumber) => {
    if (newPageNumber >= 1 && newPageNumber <= totalPages) {
      setPageNumber(newPageNumber);
    }
  };

  return (
    <ProtectedRoute>
      <div className="overflow-x-auto">
        <AddSpecies />
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Fao Code</th>
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
                <td>{species.faoCode}</td>
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
        <div className="pagination">
          <button onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 1}>
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)} disabled={index + 1 === pageNumber}>
              {index + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === totalPages}>
            Next
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AllSpecies;
