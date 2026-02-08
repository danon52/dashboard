'use server'
import { writeFile } from "node:fs/promises"
import { prisma } from "./prisma"
import { join } from "node:path"

import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation';
import { redirectDocument } from "react-router"
import { hash } from "bcrypt"



export async function CreateProducts(FormData) {


    const images = FormData.getAll('image')

    const ImagesNames = []

    for (const img of images) {
        const buffer = Buffer.from(await img.arrayBuffer())

        const imagename = Date.now() + img.name

        await writeFile(
            // путь куда будет сохраняться изображение 
            join('public', imagename),
            buffer
        )
        ImagesNames.push({
            url: `/${imagename}`
        })

    }
    const createprod = await prisma.product.create({
        data: {
            name: FormData.get('name'),
            prise: Number(FormData.get('prise')),
            images: {
                createMany: {
                    data: ImagesNames
                }
            }

        }

    })
}


export async function Register(FormData) {
    const register = await prisma.user.create({
        data: {
            name: FormData.get('name'),
            age: Number(FormData.get('age')),
            email: FormData.get('email'),
            password: await hash(FormData.get('password'), 10)
        }
    })
    if (register) {
        redirectDocument('/api/auth/signin')
    }
}


export async function EditProducts(FormData) {
    const EditProduct = await prisma.product.update({
        data: {
            name: FormData.get('name'),
            prise: Number(FormData.get('prise'))
        },
        where: {
            id: Number(FormData.get('id'))
        }
    })

    redirect('/catalog/createproducts')

}
export async function deleteProduct(id) {
    const deleteprod = await prisma.product.delete({
        where: {
            id: Number(id)
        }
    })
    revalidatePath('/catalog/createproducts')
} 
