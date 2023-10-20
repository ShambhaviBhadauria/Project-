import { NextResponse } from "next/server";
import { submitArticle } from '../../../lib/mongo/articles'

export async function POST(request: Request) {
    const data = await request.json()
    console.log(data)

    submitArticle(data)
    return NextResponse.json(data)
}