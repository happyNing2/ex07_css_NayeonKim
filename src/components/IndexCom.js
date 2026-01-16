import HeaderCom from "./common/HeaderCom";
import imageFile from "../styles/images/image02.jpg"
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductContext, ProductImg, ProductList, ProductListBox, ProductName, ProductPrice, ProductTitle } from "./common/StyleProduct";

const products = [
    {
        id:1, 
        name : "춘봉이 사진", 
        context : "확신의 개냥이 1등 춘봉이 사진",
        price : "5000원",
        url : imageFile
    },
    {
        id:2, 
        name : "춘봉이 사진", 
        context : "확신의 개냥이 1등 춘봉이 사진",
        price : "5000원",
        url : imageFile
    },
        {
        id:3, 
        name : "춘봉이 사진", 
        context : "확신의 개냥이 1등 춘봉이 사진",
        price : "5000원",
        url : imageFile
    },
        {
        id:4, 
        name : "춘봉이 사진", 
        context : "확신의 개냥이 1등 춘봉이 사진",
        price : "5000원",
        url : imageFile
    },
        {
        id:5, 
        name : "춘봉이 사진", 
        context : "확신의 개냥이 1등 춘봉이 사진",
        price : "5000원",
        url : imageFile
    },
        {
        id:6, 
        name : "춘봉이 사진", 
        context : "확신의 개냥이 1등 춘봉이 사진",
        price : "5000원",
        url : imageFile
    },
        {
        id:7, 
        name : "춘봉이 사진", 
        context : "확신의 개냥이 1등 춘봉이 사진",
        price : "5000원",
        url : imageFile
    },
        {
        id:8, 
        name : "춘봉이 사진", 
        context : "확신의 개냥이 1등 춘봉이 사진",
        price : "5000원",
        url : imageFile
    },
        {
        id:9, 
        name : "춘봉이 사진", 
        context : "확신의 개냥이 1등 춘봉이 사진",
        price : "5000원",
        url : imageFile
    }
]
function IndexCom() {
    return (
        <>
            <HeaderCom />
            <StyleContentBlock>
                <StyleContentWrap>
                    <ProductTitle>
                        상품 제목
                    </ProductTitle>
                    <ProductList>
                        {products.map(pro=>(
                            <ProductListBox key={pro.id}>
                                <ProductImg src={pro.url} alt=""/>
                                <ProductName>{pro.name}</ProductName>
                                <ProductContext>{pro.context}</ProductContext>
                                <ProductPrice>{pro.price}</ProductPrice>
                            </ProductListBox>
                        ))}
                        
                    </ProductList>
                </StyleContentWrap>
                
            </StyleContentBlock>
        </>
    )
}
export default IndexCom;