# get-meta
> Carrega os metadados à partir de uma url.

# Install

```shell
npm install --save extract-meta
```

# Exemplo

```js
const url = "https://www.americanas.com.br/produto/1299771212?cor=Verde%20-%20Forecast%20Green&pfm_carac=xiaomi&pfm_page=search&pfm_pos=grid&pfm_type=search_page&tamanho=64GB";
const metadata = await getMetadata(url);
```
### Resultado

```json
 {
    title: "Smartphone Xiaomi Redmi Note 8 PRO nas Lojas Americanas.com",
    description: "Smartphone Xiaomi Redmi Note 8 PRO em Promoção é na Americanas.com. Compre online com entrega rápida e segura!",
    canonical: "/produto/1299771212",
    price: "2529.99",
    priceCurrency: "BRL",
    image: {
        url: "https://images-americanas.b2w.io/produtos/01/00/img/1299771/6/1299771626G1.jpg",
        alt: "smartphone xiaomi redmi note 8 pro nas lojas americanas.com"
    },
    images: [] 
}
```