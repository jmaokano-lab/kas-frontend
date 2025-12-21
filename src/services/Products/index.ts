// get all Products
export const getAllProducts = async (
  page?: string | number,
  limit?: string | number,
  query?: { [key: string]: string | string[] | undefined }
) => {
  try {
    const params = new URLSearchParams();

    // Add price filter
    if (query?.price) {
      params.append("minPrice", "0");
      params.append("maxPrice", query.price.toString());
    }

    // Add availability filter
    if (query?.availability) {
      params.append("availability", query.availability.toString());
    }

    // Add review filter
    if (query?.review) {
      params.append("review", query.review.toString());
    }

    // Construct URL with string conversion
    const url = `${process.env.NEXT_PUBLIC_BASE_API}/products?page=${page?.toString() || "1"}&limit=${limit?.toString() || "10"}&${params}`;

    const res = await fetch(url, {
      next: {
        tags: ["PRODUCTS"],
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

//get single product

export const getSingleProduct= async (id: string,slug:string) => {  
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/products/${slug}/${id}`, {
      method: "GET",
       cache: "no-store" 
      
    });

    const datas = await res.json();
    // console.log(datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};
//get related product

export const getRelatedProducts= async (slug:string) => {  
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/classified/related-products/${slug}`, {
      method: "GET",
       cache: "no-store" 
      
    });

    const datas = await res.json();
    // console.log(datas);
    return datas;
  } catch (error: any) {
    return Error(error);
  }
};
//classified/related-products/{slug}