import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    functions: [
      {
        name: 'catalog_fetch_batch',
        description: 'Retrieves a batch of product catalog data',
        endpoint: '/api/tools/catalog_fetch_batch',
        http_method: 'POST',
        parameters: [
          { name: 'category_id', type: 'string', required: true },
          { name: 'batch_size', type: 'integer', required: true },
          { name: 'pagination_token', type: 'string', required: false }
        ]
      },
      {
        name: 'update_review_status',
        description: 'Posts review scores and status to the external system',
        endpoint: '/api/tools/update_review_status',
        http_method: 'POST',
        parameters: [
          { name: 'product_id', type: 'string', required: true },
          { name: 'seo_score', type: 'number', required: true },
          { name: 'geo_score', type: 'number', required: true },
          { name: 'assignment_id', type: 'string', required: false },
          { name: 'review_status', type: 'string', required: true },
          { name: 'summary_notes', type: 'string', required: false }
        ]
      }
    ]
  })
}
