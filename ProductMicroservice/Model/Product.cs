namespace ProductMicroservice.Model
{
    public class Product
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public double Price { get; set; }
        public int StockAvailable { get; set; }
    }
}
