import * as React from "react"
export default function Head(props:any){
    console.log(props.document.c_footerServices)
    return(
        <div>
            {props.document.c_footerServices.map((res:any)=>{
                  return(
                    <a href={res.url}>{res.lable}</a>
                  )
            })}
        </div>
    )
}