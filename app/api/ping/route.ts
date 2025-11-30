import { NextResponse } from 'next/server';

// Use your backend URL from environment variables
const PYTHON_BACKEND_URL = process.env.PYTHON_BACKEND_URL || 'http://localhost:8000';

export async function GET() {
  try {
    const res = await fetch(`${PYTHON_BACKEND_URL}/health`, { method: 'GET' });

    if (res.ok) {
      return NextResponse.json({
        status: '✅ Backend awake',
        backend: PYTHON_BACKEND_URL,
      });
    } else {
      return NextResponse.json(
        {
          status: '⚠️ Backend reachable but returned non-200 status',
          backend: PYTHON_BACKEND_URL,
          code: res.status,
        },
        { status: 200 }
      );
    }
  } catch (err) {
    console.error('Ping failed:', err);
    return NextResponse.json(
      {
        status: '❌ Backend unreachable',
        backend: PYTHON_BACKEND_URL,
        message: 'Render server might be sleeping. Try again in a few seconds.',
      },
      { status: 500 }
    );
  }
}
