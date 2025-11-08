import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { category_id, batch_size = 5, pagination_token = null } = await req.json()

  const fakeData = [...Array(batch_size)].map((_, i) => ({
    product_id: `prod-${i + 1}`,
    product_url: `https://example.com/product/${i + 1}`,
    title: `Test Product ${i + 1}`,
    description: `This is the description for product ${i + 1}`
  }))

  return NextResponse.json({
    products: fakeData,
    next_pagination_token: pagination_token ? null : 'next-batch-token'
  })
}
