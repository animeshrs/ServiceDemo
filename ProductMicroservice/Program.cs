using Microsoft.EntityFrameworkCore;
using ProductMicroservice.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ProductMicroserviceContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ProductMicroserviceContext") ?? throw new InvalidOperationException("Connection string 'ProductMicroserviceContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
