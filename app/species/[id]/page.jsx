'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '@/app/component/Loading';
import SpeciesDetail from '@/app/component/SpeciesDetail';
import apiClient from '@/app/libs/clientApi';

const DetailSpecies = ({ params: {id} } ) => {
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const getSpeciesDetail = async () => {
      try {
        const response = await apiClient.get(`/species/${id}`);
        setSpecies(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching species details:', error);
      }
    };

    if (id) {
      getSpeciesDetail();
    }
  }, [id]);

  return (
    <div>
      {species ? (
        <div>
          <SpeciesDetail species={species} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
  
};

export default DetailSpecies;