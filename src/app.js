document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "1.jpg", price: 20000 },
      { id: 2, name: "Arabica bali", img: "2.jpg", price: 45000 },
      { id: 3, name: "Robusta Kintamani", img: "3.jpg", price: 50000 },
      { id: 4, name: "Gayo Aceh", img: "4.jpg", price: 30000 },
      { id: 5, name: "Robusta Kerinci", img: "5.jpg", price: 25000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // check apakah ada barang sama di card
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / cart masih cosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada, cek apakah barang beda atau dama dengan yg di cart

        this.items = this.items.map((item) => {
          // jika barang ada

          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada , maka tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item yang mau di remove berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri 1 1
        this.items = this.items.map((item) => {
          // jika bukan barang yg di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konversi ke rupiah

const rupiah = (Number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number);
};
