import { prisma } from "@/lib/prisma"
import { CreateProducts } from "@/lib/serverActions"
import Link from "next/link"
import DeleteButton from "./DeleteButton"

export default async function CatalogProducts() {
    const product = await prisma.product.findMany({
        include: {
            images: true,
        },
    })
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Добавьте ваш товар</h1>

            <form className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg mb-12" action={CreateProducts}>
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <input
                        className="w-full max-w-sm px-5 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                        placeholder="Введите название товара"
                        name="name"
                        type="text"
                    />
                    <input
                        className="w-full max-w-sm px-5 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                        placeholder="Введите цену $"
                        name="prise"
                        type="text"
                    />
                    <input
                        className="w-full max-w-sm px-5 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                        placeholder="Добавьте фото продукта"
                        name="image"
                        type="file"
                        multiple
                    />
                </div>
                <button
                    className="px-12 py-4 bg-emerald-600 text-white text-xl font-semibold rounded-xl hover:bg-emerald-700 active:scale-95 transition-all shadow-md hover:shadow-lg"
                >
                    Добавить
                </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    product.map(products => (
                        <div
                            className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            key={products.id}
                        >
                            {products.images.map(img => (
                                <div className="p-4" key={img.id}>
                                    <img
                                        className="w-full h-48 object-cover rounded-lg"
                                        src={img.url}
                                        alt="картинки"
                                    />
                                </div>
                            ))}
                            <div className="p-4">
                                <p className="text-xl font-bold text-center text-gray-800 mb-2">
                                    {products.name}
                                </p>
                                <p className="text-2xl font-bold text-center text-emerald-600 mb-4">
                                    {products.prise} $
                                </p>
                            </div>
                            <div className="flex justify-center gap-3 p-4 border-t border-gray-100">
                                <Link href={`/catalog/createproducts/edit/${products.id}`}>
                                    <button className="px-6 py-2 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 active:scale-95 transition-all">
                                        Изменить
                                    </button>
                                </Link>
                                <DeleteButton id={products.id} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}