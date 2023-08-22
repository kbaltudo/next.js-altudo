// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { title } from 'process'
import { ourProfessionalRouter } from '../../../lib/provider/mapper'

type Data = {
  data?: any
  page?: number,
  status?: boolean,
  error?: any
  members?: object | null,
  message?: string,
  metadata?: any | null
}
type Request = {
  query: object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "GET") {
    try {
      const members: Data = await ourProfessionalRouter(Number(req?.query?.page || 1), Array(req.query.location || []), String(req.query.title || ""), Array(req.query.area_of_focus||[]))
      res.status(200).json({
        page: req.query.page,
        members: members.data?.ourTeams || [],
        message: "success",
        location: req.query.location,
        metadata: members?.data?.metadata || {},
        title: req.query.title,
        area_of_focus: req.query.area_of_focus
      })

    } catch (error: any) {
      console.error(error.message);
      res.status(200).json({
        status: false,
        message: error.message,
        error: error
      })
    }
  } else {
    res.status(400).json({
      status: false, message: "Method not supported"
    })
  }

  const { page } = req.query

}
