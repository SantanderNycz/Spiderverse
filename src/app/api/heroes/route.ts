import { NextResponse } from "next/server";

import JSONData from "./heroes.json";

export async function GET() {
  // Se não há API_URL definida, usa os dados locais
  if (!process.env.API_URL) {
    return NextResponse.json({ data: JSONData });
  }

  try {
    let res = await fetch(`${process.env.API_URL}/api/heroes`);
    let data = await res.json();
    
    if (!data) {
      data = JSONData;
    }
    
    return NextResponse.json({ data });
  } catch (error) {
    // Em caso de erro, usa os dados locais
    return NextResponse.json({ data: JSONData });
  }
}
