import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const {
    product_id,
    seo_score,
    geo_score,
    assignment_id,
    review_status,
    summary_notes
  } = await req.json()

  console.log(`Logged review for product ${product_id}`)

  return NextResponse.json({
    status: 'success',
    timestamp: new Date().toISOString()
  })
}
