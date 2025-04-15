import { cards } from './mockData';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const records = searchParams.get('records');
  const page = searchParams.get('page');
  console.log('records', records, page);

  return new Response(JSON.stringify(cards));
}