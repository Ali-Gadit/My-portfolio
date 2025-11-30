import { NextRequest, NextResponse } from 'next/server';

// Use environment variable with fallback for local development
const PYTHON_BACKEND_URL = process.env.PYTHON_BACKEND_URL || 'http://localhost:8000';

export async function POST(request: NextRequest) {
  try {
    const { message, session_id } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const response = await fetch(`${PYTHON_BACKEND_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message,
        session_id: session_id || null 
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Python backend error:', errorText);
      throw new Error(`Python backend error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return NextResponse.json({ 
      response: data.response,
      session_id: data.session_id 
    });

  } catch (error) {
    console.error('Python backend connection error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to connect to AI agent',
        response: "I'm currently unavailable. Please contact us directly at +92 3248274201 or email muhammadaligadit@gmail.com",
      },
      { status: 500 }
    );
  }
}