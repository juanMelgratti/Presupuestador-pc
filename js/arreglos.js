//arreglo urls
var urls = [{'procesador':'https://api.mercadolibre.com/sites/MLA/search?category=MLA1693&q=','motherboard':'https://api.mercadolibre.com/sites/MLA/search?category=MLA1692&q=',
'ram':'https://api.mercadolibre.com/sites/MLA/search?category=MLA1694&q=',
'tarjetaGrafica':'https://api.mercadolibre.com/sites/MLA/search?category=MLA1658&q=','disco':'https://api.mercadolibre.com/sites/MLA/search?category=MLA1672&q=',
'fuente':'https://api.mercadolibre.com/sites/MLA/search?category=MLA1695&q=','gabinete':'https://api.mercadolibre.com/sites/MLA/search?category=MLA4286&q=',
'monitor':'https://api.mercadolibre.com/sites/MLA/search?category=MLA14407&q=','mouse':'https://api.mercadolibre.com/sites/MLA/search?category=MLA1714&q=',
'teclado':'https://api.mercadolibre.com/sites/MLA/search?category=MLA418448&q='}];
//arreglos de productos
var ram = [{'marca':'kingston', 'busqueda':'kingston 8gb'}, {'marca':'kingston', 'busqueda':'kingston 16gb'},{'marca':'crucial', 'busqueda':'crucial 8gb'},
{'marca':'vengeance', 'busqueda':'vengeance 2x8gb'},{'marca':'adata', 'busqueda':'adata 8gb'},{'marca':'adata', 'busqueda':'adata 16gb'},
{'marca':'adata', 'busqueda':'adata xpg 8gb'},{'marca':'adata', 'busqueda':'adata spectrix 8gb'},{'marca':'adata', 'busqueda':'adata spectrix 16gb'},
{'marca':'vengeance', 'busqueda':'vengeance 1x16gb'},{'marca':'vengeance', 'busqueda':'vengeance 1x8gb'}, {'marca':'hp', 'busqueda':'hp 8gb v6'}];

var mother = [{'marca':'gigabyte', 'busqueda':'gigabyte H310'}, {'marca':'asus', 'busqueda':'asus H410m'},
{'marca':'asus', 'busqueda':'H310m'}, {'marca':'asus', 'busqueda':'z390'},{'marca':'aorus', 'busqueda':'z390'},{'marca':'msi', 'busqueda':'z390'},
{'marca':'rog strix', 'busqueda':'rog strix z390'}, {'marca':'gigabyte', 'busqueda':'gigabyte b365'}, {'marca':'evga', 'busqueda':'evga z390 dark'},
{'marca':'asus', 'busqueda':'asus b360m'},{'marca':'asus', 'busqueda':'asus z490'},{'marca':'gigabyte', 'busqueda':'gigabyte aorus z490'}, {'marca':'rog', 'busqueda':'rog maximus'}, {'marca':'msi', 'busqueda':'msi b460'},
{'marca':'asus', 'busqueda':'asus a320'}, {'marca':'gigabyte', 'busqueda':'gigabyte a320'}, {'marca':'aorus', 'busqueda':'aorus b450'},{'marca':'asus', 'busqueda':'asus b450'},
{'marca':'msi', 'busqueda':'a320'},{'marca':'asus', 'busqueda':'rog strix x570'}];

var procesador = [{'marca':'i3', 'busqueda':'i3 9100'}, {'marca':'i3', 'busqueda':'i3 10100'},{'marca':'i5', 'busqueda':'i5 9400'},
{'marca':'i5', 'busqueda':'i5 9600'},{'marca':'i5', 'busqueda':'i5 10400'},{'marca':'i5', 'busqueda':'i5 10600'},{'marca':'i7', 'busqueda':'i7 10700k'},
{'marca':'i7', 'busqueda':'i7 10700'},{'marca':'i7', 'busqueda':'i7 9700k'},{'marca':'i7', 'busqueda':'i7 9700f'},{'marca':'i7', 'busqueda':'i7 9700kf'},
{'marca':'ryzen 3', 'busqueda':'ryzen 3 3200g'},{'marca':'ryzen 3', 'busqueda':'ryzen 3 3100'},{'marca':'ryzen 3', 'busqueda':'ryzen 3 2200'},
{'marca':'amd', 'busqueda':'ryzen 5 2600'},{'marca':'amd', 'busqueda':'ryzen 3 4350'},{'marca':'amd', 'busqueda':'ryzen 5 3600'},
{'marca':'amd', 'busqueda':'ryzen 5 3400'},{'marca':'amd', 'busqueda':'ryzen 7 3700x'}, {'marca':'amd', 'busqueda':'ryzen 7 3800x'},
{'marca':'amd', 'busqueda':'ryzen 7 2700'},];

var tarjetaGrafica = [{'marca':'amd', 'busqueda':'amd msi xt 5500'},{'marca':'amd', 'busqueda':'amd xt 5700'},
{'marca':'amd', 'busqueda':'amd rx 570'},{'marca':'amd', 'busqueda':'amd rx 580'},{'marca':'amd', 'busqueda':'amd xt 5600'},
{'marca':'geforce', 'busqueda':'geforce gtx msi 1060 6gb'},{'marca':'geforce', 'busqueda':'geforce gtx 1050ti'},
{'marca':'geforce', 'busqueda':'geforce 1650'},{'marca':'geforce', 'busqueda':'geforce 1660'},
{'marca':'geforce', 'busqueda':'geforce 2060'}, {'marca':'geforce', 'busqueda':'geforce 2070'},
{'marca':'geforce', 'busqueda':'geforce rtx 2080 ventus'}];

var disco = [{'marca':'western digital', 'busqueda':'western digital 1tb red'},
{'marca':'western digital', 'busqueda':'western digital 1tb purple'}, {'marca':'western digital', 'busqueda':'western digital 1tb blue'},
{'marca':'western digital ssd', 'busqueda':'western digital ssd 1tb green'},{'marca':'western digital', 'busqueda':'western digital interno 1tb black'},
{'marca':'western digital', 'busqueda':'interno 2tb'},{'marca':'seagate', 'busqueda':'1tb'},
{'marca':'kingston', 'busqueda':'kingston ssd 240gb'},{'marca':'kingston', 'busqueda':'kingston ssd 120gb'},
{'marca':'western digital', 'busqueda':'western digital ssd 480gb'},{'marca':'western digital', 'busqueda':'western digital ssd 240'},
{'marca':'western digital', 'busqueda':'western digital 500gb'},{'marca':'western digital', 'busqueda':'western digital sólido 2tb'}];

var fuente = [{'marca':'lnz', 'busqueda':'lnz 550w'},{'marca':'lnz', 'busqueda':'lnz 650w'},
{'marca':'redragon', 'busqueda':'redragon 500w'},{'marca':'redragon', 'busqueda':'redragon 600w'}, {'marca':'thermaltake', 'busqueda':'thermaltake 600w'},
{'marca':'thermaltake', 'busqueda':'thermaltake 700w'},{'marca':'evga', 'busqueda':'evga 650w'},
{'marca':'gigabyte', 'busqueda':'semimodular 700w'},{'marca':'nzxt', 'busqueda':'700w modular 80 plus'}];

var gabinete = [{'marca':'sentey', 'busqueda':'x10'},{'marca':'sentey', 'busqueda':'f10'},{'marca':'nyx', 'busqueda':'xigmatek'},
{'marca':'redragon', 'busqueda':'gc-601'},{'marca':'eros', 'busqueda':'xigmatek'},
{'marca':'sentey', 'busqueda':'j20'},{'marca':'gigabyte', 'busqueda':'aorus c200'},
{'marca':'luminous 110f', 'busqueda':'azza'},{'marca':'corsair', 'busqueda':'carbide spec delta'},
{'marca':'apollo 430', 'busqueda':'azza'}, {'marca':'h510', 'busqueda':'nzxt'},{'marca':'h710', 'busqueda':'nzxt'}];

var monitor = [{'marca':'samsung', 'busqueda':'c24f390fh'},{'marca':'samsung', 'busqueda':'s24f350fh'},{'marca':'samsung', 'busqueda':'c24rg50fql'},
{'marca':'samsung', 'busqueda':'c27f390fhl'},{'marca':'vp228he', 'busqueda':'asus'},{'marca':'tuf gaming', 'busqueda':'asus'},
{'marca':'monitor', 'busqueda':'asus 27'},{'marca':'led 24', 'busqueda':'asus 75hz'},{'marca':'ad27qd', 'busqueda':'aorus'},{'marca':'gigabyte', 'busqueda':'cv27f'},
{'marca':'gigabyte', 'busqueda':'aorus kd25f'}];

var mouse = [{'marca':'logitech', 'busqueda':'hero g serie g502'},{'marca':'redragon', 'busqueda':'griffin m607'},{'marca':'logitech', 'busqueda':'prodigy'},
{'marca':'redragon', 'busqueda':'impact m908'},{'marca':'razer', 'busqueda':'deathadder'},{'marca':'logitech', 'busqueda':'pro series'},
{'marca':'redragon', 'busqueda':'invader m719'},{'marca':'logitech', 'busqueda':'g403'},{'marca':'genius', 'busqueda':'x-g600'},
{'marca':'redragon', 'busqueda':'centrophorus'},{'marca':'redragon', 'busqueda':'cobra chroma m711'},
{'marca':'corsair', 'busqueda':'harpoon'},{'marca':'corsair', 'busqueda':'dark core'},
{'marca':'steelseries', 'busqueda':'600 rival'},{'marca':'steelseries', 'busqueda':'rival 100'},
{'marca':'thermaltake', 'busqueda':'iris'}];

var teclado = [{'marca':'redragon', 'busqueda':'kumara k552'},{'marca':'redragon', 'busqueda':'yama k550'},
{'marca':'redragon', 'busqueda':'draconic k530'},{'marca':'redragon', 'busqueda':'visnu k561'},{'marca':'redragon', 'busqueda':'harpe k503'},
{'marca':'redragon', 'busqueda':'vishnu k596'},{'marca':'redragon', 'busqueda':'dark avenger k568'},{'marca':'redragon', 'busqueda':'indrah k555'},
{'marca':'redragon', 'busqueda':'mitra 551'},{'marca':'redragon', 'busqueda':'vata k580'},{'marca':'razer', 'busqueda':'cynosa'},
{'marca':'razer', 'busqueda':'ornata'},{'marca':'razer', 'busqueda':'blackwidow'},{'marca':'razer', 'busqueda':'huntsman'},
{'marca':'corsair', 'busqueda':'k55'},{'marca':'corsair', 'busqueda':'strafe mk.2'},{'marca':'corsair', 'busqueda':'platinum k95'},
{'marca':'corsair', 'busqueda':'k57'},
{'marca':'alloy fps', 'busqueda':'hiperx'},{'marca':'alloy cor', 'busqueda':'hiperx'},{'marca':'alloy origins', 'busqueda':'hiperx'},
];