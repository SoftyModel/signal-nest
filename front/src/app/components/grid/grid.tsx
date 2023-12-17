import scoped from "./grid.module.css"
import style from "../../page.module.css"
import Image from "next/image"
import { FC } from "react"


export interface GridingProps {
    img:string,
    name:string,
    birthday:string,
    placeofbirthday:string,
    faculty:string,
    year:string
}

interface GridArray{
    fields:GridingProps[]
}

export const Grid:FC<GridArray>=(fields)=>{
    const srcs = fields.fields
    return (
        <div className={scoped.layout}>
            {srcs.map((src) =>
                <div className={scoped.grow1}>
                    <div className={style.text_holder}>
                        <div className={style.col1}></div>
                            <div className={style.text_container}>
                                <div className={scoped.img_container}>
                                    <Image
                                    className={scoped.img}
                                    src={src.img}
                                    alt="bla bla bla"
                                    width={300}
                                    height={250}
                                    ></Image>
                                </div>
                                <h3 className={style.title}>
                                   {src.name}
                                </h3>
                                <h3 className={style.article}>
                                Дата рождения: {src.birthday} <br />
                                Место рождения: {src.placeofbirthday} <br />
                                Факультет: {src.faculty}<br />
                                Год поступления: {src.faculty} <br />
                                </h3>
                            </div>
                        <div className={style.col1}></div>
                    </div>
                </div>
            )}
        </div>
    )
}