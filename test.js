const getMetadata = require('./index');

jest.setTimeout(30000);

test('test metada from magazineluiza', async () => {
  const url = "https://www.magazineluiza.com.br/notebook-lenovo-ideapad-330-330-15ikb-intel-core-i3-4gb-1tb-156-windows-10/p/224019600/in/note/";
  const metadata = await getMetadata(url);
  expect(metadata.title).toBe('Notebook Lenovo Ideapad 330 330-15IKB - Intel Core i3 4GB 1TB 15,6” Windows 10 - Notebook - Magazine Luiza');
});

test('test metada from amazon', async () => {
  const url = "https://www.amazon.com.br/Novo-Kindle-Paperwhite-Agora-prova-agua/dp/B0773XBMB6/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=kindle&qid=1581433213&sr=8-1";
  const metadata = await getMetadata(url);
  expect(metadata.title).toBe('Kindle Paperwhite 8 Gb - Agora à prova dŽágua: Amazon.com.br: Loja Kindle');
});

test('test metada from americanas', async () => {
  const url = "https://www.americanas.com.br/produto/1299771212?cor=Verde%20-%20Forecast%20Green&pfm_carac=xiaomi&pfm_page=search&pfm_pos=grid&pfm_type=search_page&tamanho=64GB";
  const metadata = await getMetadata(url);
  console.log(metadata)
  expect(metadata.title).toBe('Smartphone Xiaomi Redmi Note 8 PRO nas Lojas Americanas.com');
});

test('test metada from submarino', async () => {
  const url = "https://www.submarino.com.br/produto/134513784?DCSext.recom=RR_home_page.rr1-PopularProducts&dcsext.recom=RR_home_page.rr1-PopularProducts&nm_origem=rec_home_page.rr1-PopularProducts&nm_ranking_rec=1";
  const metadata = await getMetadata(url);
  expect(metadata.title).toBe('Smartphone Samsung Galaxy A50 128GB Dual Chip Android 9.0 Tela 6,4\" Octa-Core 4G Câmera Tripla 25MP+5MP+8MP - Azul no Submarino.com');
});

