import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  try {
    const species = await prisma.species.findMany();

    res.status(200).json(species);
  } catch (error) {
    console.error('Error fetching species:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
