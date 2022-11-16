using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProductMicroservice.Model;

namespace ProductMicroservice.Data
{
    public class ProductMicroserviceContext : DbContext
    {
        public ProductMicroserviceContext (DbContextOptions<ProductMicroserviceContext> options)
            : base(options)
        {
        }

        public DbSet<ProductMicroservice.Model.Product> Product { get; set; } = default!;
    }
}
