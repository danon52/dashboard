// сделать метод пост для создания заказа




export async function GET() {
    const dataFormDb = [
        {
            id: 1,
            name: "Appel Wat,ch Serias 11",
            price: 32000
        },
        {
            id: 2,
            name: "Book",
            price: 700
        },
        {
            id: 3,
            name: "Iphone 17 Pro Max",
            price: 110000
        },
        {
            id: 4,
            name: " Apple Watch Ultra 2",
            price: 90000
        },
        {
            id: 5,
            name: "BCAA",
            price: 1200
        },
        {
            id: 6,
            name: 'Gamer, Mouse',
            price: 10000
        },
        {
            id: 7,
            name: "Knife,",
            price: 3000
        },
        {
            id: 8,
            name: "Keybo,ard Couagr 60%",
            price: 10000
        },
        {
            id: 9,
            name: "IQOS",
            price: 2990
        }
    ]




    return Response.json(dataFormDb)
}

export async function POST() {
    const data = await request.json()

    console.log(data)
    return Response.json({
        starus: "success",
        message: `Ваш товар ${data.name}`
    })
}   