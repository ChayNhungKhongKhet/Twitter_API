import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'pkyoulike@gmail.com' && password === '123123') {
    return res.json({
      message: 'Login successful'
    })
  }
  return res.status(400).json({ message: 'Login failed' })
}
