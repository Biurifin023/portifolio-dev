import { updateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const secret = request.headers.get("x-prismic-webhook-secret")

    if (
        process.env.PRISMIC_WEBHOOK_SECRET &&
        secret !== process.env.PRISMIC_WEBHOOK_SECRET
    ) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
    }

    updateTag("prismic")

    return NextResponse.json({ revalidated: true, now: Date.now() })
}
