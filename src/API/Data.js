export const getData = async () => {
    try {
        let res = await fetch(`https://fakestoreapi.com/products/`);
        let data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}