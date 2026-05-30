import { NextResponse } from 'next/server';

const INDEXNOW_KEY = '8b4d2c3a7f6e1d9b5c2a8f4d7e3b1eff';
const BASE_URL = 'https://roboticela.com';

const ALL_URLS = [
  `${BASE_URL}/`,
  `${BASE_URL}/about`,
  `${BASE_URL}/our-vision`,
  `${BASE_URL}/products`,
  `${BASE_URL}/careers`,
  `${BASE_URL}/blogs`,
  `${BASE_URL}/news`,
  `${BASE_URL}/community`,
  `${BASE_URL}/newsletter`,
  `${BASE_URL}/social-media`,
  `${BASE_URL}/feedback`,
  `${BASE_URL}/product-request`,
  `${BASE_URL}/support`,
  `${BASE_URL}/privacy`,
  `${BASE_URL}/terms`,
  `${BASE_URL}/security`,
  `${BASE_URL}/accessibility`,
];

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  const expectedToken = process.env.INDEXNOW_SECRET;

  if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const urls: string[] = body.urls ?? ALL_URLS;

  const payload = {
    host: 'roboticela.com',
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const engines = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://search.seznam.cz/indexnow',
    'https://yandex.com/indexnow',
  ];

  const results = await Promise.allSettled(
    engines.map((engine) =>
      fetch(engine, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      }).then((res) => ({ engine, status: res.status, ok: res.ok }))
    )
  );

  const summary = results.map((r, i) =>
    r.status === 'fulfilled'
      ? { engine: engines[i], status: r.value.status, ok: r.value.ok }
      : { engine: engines[i], error: String((r as PromiseRejectedResult).reason) }
  );

  return NextResponse.json({ submitted: urls.length, engines: summary });
}

export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    totalUrls: ALL_URLS.length,
    usage: 'POST /api/indexnow with optional { "urls": [...] } body to submit URLs.',
  });
}
