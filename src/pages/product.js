export default function Products({ productList }) {
  return (
    <>
      <h1>내 상품</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <p>
        <a href="/">홈페이지로 가기</a>
      </p>
    </>
  );
}

export async function getServerSideProps() {
  const productList = [
    { id: 1, name: "상품 1", price: 10 },
    { id: 1, name: "상품 2", price: 10 },
    { id: 1, name: "상품 3", price: 10 },
  ];
  return { props: { productList } };
}
