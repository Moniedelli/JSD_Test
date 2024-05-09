import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { id, typeOfFish, scientificName, englishName, indonesianName, localName, typeOfWater, imageUrl, statusInIndonesia, fishUtilization } = req.body;

      // if (!userId) {
      //   return res.status(400).json({ error: 'Silahkan login dulu' });
      // }
      
      const newSpecies = await prisma.species.create({
        data: {
          id,
          typeOfFish,
          scientificName,
          englishName,
          indonesianName,
          localName,
          typeOfWater,
          imageUrl,
          statusInIndonesia,
          fishUtilization,
          // userId,
        },
        // include: {
        //   user: true,
        // },
      });

      res.status(201).json(newSpecies);
    } catch (error) {
      console.error('Error creating species:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
