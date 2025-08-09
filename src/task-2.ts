interface Product {
  readonly id: number;
  title: string;                
  description?: string;         
}

const product: Product = {
  id: 1,
  title: "Tablet",
}

console.log(`Product: ${JSON.stringify(product)}`);
