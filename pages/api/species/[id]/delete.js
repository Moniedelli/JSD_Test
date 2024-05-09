import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method !== 'DELETE') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const species = await prisma.species.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: 'Species deleted successfully' });
  } catch (error) {
    console.error('Error deleting species:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
