export default async function getFoodProducts() {
    const response = await fetch('http://localhost:3000/meals');
    const resData = await response.json();
    console.log(resData);
    return resData
}
