// pages/api/test.ts
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('>>>>>>>>')
  if (req.method === 'GET') {
    res.status(200).json({ message: 'API call successful' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
