import { supabase } from "@/utils/spabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
    const id = req.url.split('/api/blog/')[1];
    const {data, err} = await supabase.from('posts').select('*').eq('id', id).single();
    if (err) {
        return NextResponse.json(err);
    }
    return NextResponse.json(data, { status: 200 });
}

export async function DELETE(req: Request, res: NextApiResponse) {
    const id = req.url.split('/api/blog/')[1];
    const {err: deleteError} = await supabase.from('posts').delete().eq('id', id);
    if (err) {
        return NextResponse.json(err);
    }
    res.status(200).json({message: "Deleted successfully"});
}