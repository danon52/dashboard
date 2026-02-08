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
        <div>
            <h1 className="text-xl grid w-400 h-30 rounded-xl  justify-items-start">Здесь вы можете добавить ваш товар </h1>
            <form className=" justify-items-center" action={CreateProducts}>
                <div className="flex  ">
                    <input className=" mr-10 w-80 h-17 border rounded-xl " placeholder="Введите название товара " name="name" type="text" />
                    <input className="w-80 h-17 border rounded-xl mt- " placeholder="Введите цену " name="prise" type="text" />
                    <input className="w-80 h-17 border rounded-xl ml-10  " placeholder="Добавте фото продукта" name="image" type="file" multiple />
                </div>
                <button className="w-40 h-20 border border-white-400 rounded-xl bg-blue-400 text-xl">Добавить</button>
            </form>
            <div>

                {
                    product.map(products => (
                        <div className="w-70 h-110 border mt-20 rounded-xl " key={products.id}>
                            {products.images.map(img => (
                                <div className="flex justify-center mt-0 " key={img.id}>
                                    <img className="rounded-xl" src={img.url} alt="картинки" />
                                </div>
                            ))
                            }
                            <div>

                                <div >
                                    <p className="text-xl flex justify-center">{products.name}</p>
                                </div>
                                <div className="flex  justify-center">
                                    <p className="text-xl mt-3">{products.prise} $</p>
                                </div>

                            </div>
                            <div className="flex justify-center  ">
                                <Link href={`/catalog/createproducts/edit/${products.id}`}>
                                    <DeleteButton id={products.id} />
                                    <button className="w-30 h-10 border rounded-xl bg-amber-600 ">Изменить</button>
                                </Link>
                            </div>
                        </div>


                    )

                    )


                }

            </div>


        </div >
    )
}
