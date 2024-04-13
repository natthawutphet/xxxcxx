export async function getData(id) {
 
    const res = await fetch(`http://localhost:8000/vdo/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }

  