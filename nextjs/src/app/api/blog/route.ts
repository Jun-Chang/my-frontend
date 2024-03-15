import { supabase } from "@/utils/spabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
    const {data, err} = await supabase.from('posts').select('*');
    if (err) {
        return NextResponse.json(err);
    }
    return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request, res: NextApiResponse) {
    const { id, title, content } = await req.json();
    const {data, err} = await supabase
        .from('posts')
        .insert([{
            id,
            title,
            content,
            createdAt: new Date().toISOString(),
        }]);

    if (err) {
        return NextResponse.json(err);
    }
    return NextResponse.json(data, { status: 201 });
}