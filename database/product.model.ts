export interface products {
  name: string;
  price: number;
  image: string;
  rating: {
    average: number;
    total_ratings: number;
  };
  quantity: number;
  category: string[];
}
