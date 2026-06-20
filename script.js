const products=[
{name:"iPhone 11",price:"Rp 5.499.000",image:"images/iphone11.png",spec:"64GB • Battery Health 90% • Garansi Toko",badge:"Best Value"},
{name:"iPhone 12",price:"Rp 7.299.000",image:"images/iphone12.png",spec:"128GB • Super Retina XDR",badge:"Favorite"},
{name:"iPhone 13",price:"Rp 11.499.000",image:"images/iphone13.png",spec:"256GB • ProMotion • Kamera Pro",badge:"Premium"},
{name:"iPhone 14 Pro Max",price:"Rp 12.799.000",image:"images/iphone14promax.png",spec:"128GB • Kondisi Mulus",badge:"Hot Item"},
{name:"iPhone 16 Pro Max",price:"Rp 18.999.000",image:"images/iphone16promax.png",spec:"256GB • Dynamic Island",badge:"Flagship"},
{name:"iPhone 16",price:"Rp 19.799.000",image:"images/iphone16.png",spec:"256GB • Titanium",badge:"New Arrival"}];
const grid=document.getElementById('productGrid'); const input=document.getElementById('searchInput');
function render(list){grid.innerHTML=''; if(!list.length){grid.innerHTML='<p>Tidak ada iPhone yang cocok.</p>';return;}
list.forEach(p=>{const el=document.createElement('article'); el.className='product-card'; el.innerHTML=`<img src="${p.image}" alt="${p.name}"><div class="product-content"><h3>${p.name}</h3><p class="spec">${p.spec}</p><p class="price">${p.price}</p><span class="tag">${p.badge}</span></div>`; grid.appendChild(el);});}
input.addEventListener('input',e=>{const q=e.target.value.toLowerCase(); render(products.filter(p=>p.name.toLowerCase().includes(q)));});
render(products);