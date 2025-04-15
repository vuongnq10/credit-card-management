import { cards } from './mockData';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const records = Number(searchParams.get('records'));
  const page = Number(searchParams.get('page'));
  console.log(records * page)
  console.log(records)

  const response = cards.slice(records * page, (records * page) + records);

  return new Response(JSON.stringify(response));
}