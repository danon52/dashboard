import { prisma } from '@/lib/prisma'
import Link from 'next/link'


export default async function page() {

    const product = await prisma.product.findMany({
        include: {
            images: true,
        },

    })

    return (
        <div>
            {product.map(newprod => (
                <div className="w-70 h-110 border mt-20 rounded-xl " key={newprod.id}>
                    {newprod.images.map(img => (
                        <div className="flex justify-center mt-0 " key={img.id}>
                            <img className="rounded-xl" src={img.url} alt="картинки" />
                        </div>
                    ))
                    }
                    <div>
                        <div >
                            <p className="text-xl flex justify-center">{newprod.name}</p>
                        </div>
                        <div className="flex  justify-center">
                            <p className="text-xl mt-3">{newprod.prise} $</p>
                        </div>

                    </div>
                </div>


            )

            )


            }


        </div>
    )
}
