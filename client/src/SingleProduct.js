import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontex";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
import axios from "axios"
// const API = "https://api.pujakaitem.com/api/products";
// const API = "http://localhost:5000/api/products";
const API = "https://rental-data-api.up.railway.app/api/products";

const SingleProduct = () => {
  const {  isSingleLoading, singleProduct } =
    useProductContext();
  const [singlePro, setSinglePro] = useState();
  const [singleMrp, setSingleMrp] = useState();
  const [singleImage, setSingleImage] = useState("");
  const [singleCategory, setSingleCategory] = useState("");
  const [singleCompany, setSingleCompany] = useState("");
  const [singleDescription, setSingleDescription] = useState("");

  const [object, setObject] = useState({});
  const { id } = useParams();

  const {

    name,
    company,
    price,
    description,
    category,
    stars,
    rating,
    stock,
    image
  } = singleProduct;

  // console.log("singleProducthhh --> ", singleProduct[0])
  // console.log("singlePro --> ", name)

  useEffect(async () => {
    // let pro = await getSingleProduct(`${API}?id=${id}`);

    const res = await axios.get(`${API}?id=${id}`);
    const singleProduct = await res.data;

    console.log("type of ", typeof (singleProduct));

    // const { rating, description  } = singleProduct;

    // console.log("singleProduct rating --> ", rating)
    // console.log("singleProduct description --> ", description)
    setObject(singleProduct)
    setSinglePro(singleProduct[0].name);
    setSingleMrp(singleProduct[0].price);
    setSingleImage(singleProduct[0].image);
    setSingleCategory(singleProduct[0].category);
    setSingleCompany(singleProduct[0].company);
    setSingleDescription(singleProduct[0].description);
    console.log("pro price uu --> ", singleProduct[0].price)
    console.log("pro cate uu --> ", singleProduct[0].category)
    console.log("pro name uu --> ", singleProduct[0].name)
    console.log("pro image uu --> ", singleProduct[0].image)
    // getSingleProduct();

    console.log("obj  --> ", object);

  }, []);

  // var price =

  if (isSingleLoading) {
    return <div className="page_loading"><h1>Loading....</h1></div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={singlePro} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage imgs={singleImage} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{singlePro}</h2>
            <Star stars={stars} />

            <p className="product-data-price">
              MRP:
              <span>
                <FormatPrice price={singleMrp + 250000} />
              </span>
            </p>
            {/* <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p> */}
            <p>{singleDescription}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Fast Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>Minimum Security Charge</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p> Trusted </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>Working and new Product </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available: Yes
                {/* <span> {stock > 0 ? "In Stock" : "Not Available"}</span> */}
              </p>
              <p>
                ID : <span> {singleCategory} </span>
              </p>
              
              <p>
                Brand :<span> {singleCompany} </span>
              </p>
            </div>
            <hr />
             <AddToCart product={singleProduct} />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
