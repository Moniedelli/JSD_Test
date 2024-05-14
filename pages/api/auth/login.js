import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  try {
    const response = await axios.post('https://test.api.sahabatlautlestari.com/auth/login', {
      username,
      password,
    });

    // Simpan token dalam response jika perlu
    const { accessToken, refreshToken } = response.data;

    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    res.status(401).json({ message: 'Login failed', error: error.response.data });
  }
}
