import { EditProducts } from "@/lib/serverActions";
import { prisma } from "@/lib/prisma"


export default async function EditPageProducts({ params }) {
    const { id } = await params
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        }
    })


    return (
        <div>


            <div>
                <form action={EditProducts}>
                    <input placeholder="Введите имя товара " name="id" type="text" />
                    <input placeholder="Введите имя товара " name="name" type="text" />
                    <input placeholder="Введите стоимость товара" name="prise" type="number" />
                    <button className="">Сохранить изменения </button>
                </form>
            </div>
            <h1 className="mt-20 text-xl">Ваши отредактированные товары тут</h1>


        </div>
    )
}
