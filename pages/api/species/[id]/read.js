import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  try {
    const { id } = req.query;

    const species = await prisma.species.findUnique({
      where: {
        id: id,
      },
      // include: {
      //   user: true,
      //   tours: true,
      // },
    });

    if (!species) {
      return res.status(404).json({ error: 'Species not found' });
    }

    res.status(200).json({ species });
  } catch (error) {
    console.error('Error fetching species by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
