import { CarImageDetailDto } from "./carImageDetailDto";

export interface CarDetailDto{
    id:number
    carName:string
    brandName:string
    colorName:string
    description:string
    dailyPrice:number
    images:CarImageDetailDto[]
}