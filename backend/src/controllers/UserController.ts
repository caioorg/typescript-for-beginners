import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'Caio Almeida', email: 'caioalmeidasilva96@gmail.com' }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: { name: 'Caio Almeida', email: 'caioalmeidasilva@gmail.com' },
      message: { subject: 'Email Teste', body: 'Body Teste'}
    })

    res.send('Success')   
  }
}