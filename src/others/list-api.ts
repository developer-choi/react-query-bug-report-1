export async function getListApi(page: number) {
  const response = await fetch(`http://localhost:3000/api?page=${page}`);

  return await response.json() as {
    list: {pk: number, title: string}[];
  }
}
