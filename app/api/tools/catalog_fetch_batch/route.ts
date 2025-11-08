import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { category_id, batch_size, pagination_token } = body;

    // Defensive handling of Opal placeholder injection
    const cleanToken =
      !pagination_token ||
      pagination_token === "null" ||
      pagination_token === "[[pagination_token]]"
        ? undefined
        : pagination_token;

    // Simulate/fetch product data (replace this with your Supabase call)
    const products = [
      {
        product_id: "prod-1",
        product_url: "https://example.com/product/1",
        title: "Test Product 1",
        description: "This is the description for product 1",
      },
      {
        product_id: "prod-2",
        product_url: "https://example.com/product/2",
        title: "Test Product 2",
        description: "This is the description for product 2",
      },
      {
        product_id: "prod-3",
        product_url: "https://example.com/product/3",
        title: "Test Product 3",
        description: "This is the description for product 3",
      },
    ];

    // Simulate pagination response
    const response = {
      products: products.slice(0, batch_size || 3),
      next_pagination_token: cleanToken ? null : "next-batch-token",
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch product batch",
        details: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
