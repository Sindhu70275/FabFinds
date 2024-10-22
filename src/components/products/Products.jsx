import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ProductsCard from "./ProductsCard";
import ProductsHeader from "./ProductsHeader";
import NoDataFound from "../../common/NoDataFound";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (product) =>
        checkedCategories.length === 0 ||
        checkedCategories.includes(product.category.toLowerCase())
    )
    .filter(
      (product) => selectedRating === 0 || product.rating.rate >= selectedRating
    )
    .sort((a, b) => {
      if (sortOrder === "highToLow") {
        return b.price - a.price;
      } else if (sortOrder === "lowToHigh") {
        return a.price - b.price;
      } else {
        return 0; 
      }
    });

  return (
    <Box
      sx={{
        textAlign: "center",
        justifyContent: "center",
        marginTop: "3.5rem",
      }}
    >
      <Box sx={{ marginBottom: "1rem" }}>
        <ProductsHeader
          onSearchChange={handleSearchChange}
          onHightoLow={() => handleSortChange("highToLow")}
          onLowtoHigh={() => handleSortChange("lowToHigh")}
          checkedCategories={checkedCategories}
          setCheckedCategories={setCheckedCategories}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
      </Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : filteredProducts.length === 0 ? (
        <NoDataFound
          imageSrc="https://static.vecteezy.com/system/resources/previews/002/076/417/non_2x/data-search-not-found-illustration-concept-vector.jpg"
          heading="No Products Found"
          subHeading="Try adjusting your search or filter to find what you're looking for."
        />
      ) : (
        <Grid
          container
          sx={{
            marginTop: "1rem",
            textAlign: "start",
            paddingX: { md: "1.8rem" },
          }}
        >
          {filteredProducts.map((value) => (
            <ProductsCard key={value.id} product={value} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Products;
