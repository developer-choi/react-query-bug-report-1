import {NextRequest} from 'next/server';

export async function GET(request: NextRequest) {
  await timeoutPromise(200);

  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get('page') ?? '1');

  try {
    return Response.json({
      list: range((page - 1) * LIMIT + 1, LIMIT * page).map(value => ({
        pk: value,
        title: `${value}th title`
      }))
    });
  } catch (error) {
    return new Response('', {
      status: 500
    });
  }
}

const LIMIT = 20;

function range(from: number, to: number): number[] {
  const max = Math.max(from, to);
  const min = Math.min(from, to);
  const length = max - min + 1;

  if (from > to)
    return [...new Array(length).keys()].map(num => num + min).reverse();

  else
    return [...new Array(length).keys()].map(num => num + min);
}

async function timeoutPromise(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
