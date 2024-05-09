import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const speciesId = req.query.id;

  try {
    const existingSpecies = await prisma.species.findUnique({
      where: { id: speciesId },
    });

    if (!existingSpecies) {
      return res.status(404).json({ error: 'Species not found' });
    }

    const updatedSpecies = await prisma.species.update({
      where: { id: speciesId },
      data: {
        typeOfFish: req.body.typeOfFish || existingSpecies.typeOfFish,
        scientificName: req.body.scientificName || existingSpecies.scientificName,
        englishName: req.body.englishName || existingSpecies.englishName,
        indonesianName: req.body.indonesianName || existingSpecies.indonesianName,
        localName: req.body.localName || existingSpecies.localName,
        typeOfWater: req.body.typeOfWater || existingSpecies.typeOfWater,
        imageUrl: req.body.imageUrl || existingSpecies.imageUrl,
        statusInIndonesia: req.body.statusInIndonesia || existingSpecies.statusInIndonesia,
        fishUtilization: req.body.fishUtilization || existingSpecies.fishUtilization,
      },
    });

    return res.status(200).json({ message: 'Species updated successfully', data: updatedSpecies });
  } catch (error) {
    console.error('Error updating species:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
