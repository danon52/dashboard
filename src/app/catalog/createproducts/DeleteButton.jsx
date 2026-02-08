'use client'
import { deleteProduct } from "@/lib/serverActions";


export default function DeleteButton({ id }) {
    return (
        <div>
            <button onClick={() => deleteProduct(id)}>Delete Product</button>
        </div>
    )
}
