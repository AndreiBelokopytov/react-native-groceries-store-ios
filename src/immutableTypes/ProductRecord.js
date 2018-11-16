import { Record } from "immutable";

const ProductRecord = Record({
  id: "",
  name: "",
  description: "",
  price: 0,
  regular_price: 0,
  images: []
});

export default ProductRecord;
