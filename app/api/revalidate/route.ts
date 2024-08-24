import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    // Ensure the SANITY_HOOK_SECRET environment variable is set
    const secret = process.env.SANITY_HOOK_SECRET;
    if (!secret) {
      throw new Error("Missing SANITY_HOOK_SECRET environment variable");
    }

    // Parse the request body and validate the signature
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string;
    }>(req, secret);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request: Missing '_type' in body", {
        status: 400,
      });
    }

    // Revalidate the tag associated with the body._type
    revalidateTag(body._type);

    // Return a success response with additional debugging information
    return NextResponse.json({
      status: 200,
      message: "Revalidation successful",
      revalidated: true,
      timestamp: Date.now(),
      data: body,
    });
  } catch (error: unknown) {
    // Log and return an error response with more details
    console.error("Error in POST handler:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return new Response(errorMessage, { status: 500 });
  }
}
