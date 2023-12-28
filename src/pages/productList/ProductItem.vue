<template>
  <div class="product-item">
    <div class="image-container">
      <img :src="imageUrl" alt="Product Image" class="product-image" />
    </div>
    <h3 class="product-name">{{ product.product.name }}</h3>
    <div class="product-price">
      <p>{{ product.product.price }} $</p>
      <button class="product-btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  computed: {
    imageUrl() {
      return (
        "http://localhost:8081/avatar/images/" +
        this.product.productImages[0].url
      );
    },
  },
};
</script>

<style scoped>
.product-item {
  position: relative;
  width: calc(100%);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 768px) {
  .product-item {
    position: relative;
    width: calc(25% - 10px);
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}

.image-container {
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.product-name {
  margin: 15px 0;
  padding: 0 10px;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-price {
  background: #393939;
  color: #fff;
  padding: 8px 15px;
  border-radius: 0 0 10px 10px;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  cursor: pointer;
}

.product-btn {
  position: absolute;
  right: 0;
  padding: 0 10px;
  top: 0;
  bottom: 0;
  background-color: #960705;
  border-radius: 0 0 10px 0;
  overflow: hidden;
  color: #fff;
  transition: 0.3s;
}

.product-price:hover .product-btn {
  padding-right: 20px;
}
</style>
