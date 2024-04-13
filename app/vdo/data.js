export async function getData() {
    const res = await fetch(`https://api.service-ads.com/vdo`);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
     
      return res.json()
    }

