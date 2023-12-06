import React from "react";
import { Link } from "react-router-dom";
import CommonUtils from "../../utils/CommonUtils";
import "./ItemProduct.scss";
function ItemProduct(props) {
  return (
    <div className={props.type}>
      <div style={{ cursor: "pointer" }} className="single-product">
        <Link to={`/detail-product/${props.id}`}>
          <div
            style={{ width: props.width }}
            className="product-img"
          >
            <img className="img-fluid w-100" src={props.img} alt="" />
            <div className="p_icon">
              <a>
                <i className="ti-eye" />
              </a>
              <a>
                <i className="ti-shopping-cart" />
              </a>
            </div>
          </div>
          <div className="product-btm">
            <a className="d-block">
              <h4>{props.name}</h4>
            </a>
            <div className="mt-3">
              <span className="mr-4">
                {CommonUtils.formatter.format(props.discountPrice)}
              </span>
              <del>{CommonUtils.formatter.format(props.price)}</del>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ItemProduct;
