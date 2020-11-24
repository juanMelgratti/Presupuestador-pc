//arreglos de productos 
var ram = [{'modelo':'kingston', 'serie':'8gb'}, {'modelo':'kingston', 'serie':'16gb'},{'modelo':'crucial', 'serie':'8gb'},
{'modelo':'vengeance', 'serie':'2x8gb'},{'modelo':'adata', 'serie':'8gb'},{'modelo':'adata', 'serie':'16gb'}, 
{'modelo':'adata', 'serie':'xpg 8gb'},{'modelo':'adata', 'serie':'spectrix 8gb'},{'modelo':'adata', 'serie':'spectrix 16gb'},
{'modelo':'vengeance', 'serie':'1x16gb'},{'modelo':'vengeance', 'serie':'1x8gb'}, {'modelo':'hp', 'serie':'8gb v6'}];
var mother = [{'modelo':'gigabyte', 'serie':'H310'}, {'modelo':'asus', 'serie':'H410m'},
{'modelo':'asus', 'serie':'H310m'}, {'modelo':'asus', 'serie':'z390'},{'modelo':'aorus', 'serie':'z390'},{'modelo':'msi', 'serie':'z390'},
{'modelo':'rog strix', 'serie':'z390'}, {'modelo':'gigabyte', 'serie':'b365'}, {'modelo':'evga', 'serie':'z390 dark'},
{'modelo':'asus', 'serie':'b360m'},{'modelo':'asus', 'serie':'z490'}, {'modelo':'gigabyte', 'serie':'h410'},
{'modelo':'gigabyte', 'serie':'aorus z490'}, {'modelo':'rog', 'serie':'maximus'}, {'modelo':'msi', 'serie':'b460'},
{'modelo':'asus', 'serie':'a320'}, {'modelo':'gigabyte', 'serie':'a320'}, {'modelo':'aorus', 'serie':'b450'},{'modelo':'asus', 'serie':'b450'},
{'modelo':'msi', 'serie':'a320'},{'modelo':'gigabyte', 'serie':'b450 gaming'},{'modelo':'asus', 'serie':'x570'},
{'modelo':'asus', 'serie':'rog strix x570'}];
var procesador = [{'modelo':'i3', 'serie':'9100'}, {'modelo':'i3', 'serie':'10100'},{'modelo':'i5', 'serie':'9400'},
{'modelo':'i5', 'serie':'9600'},{'modelo':'i5', 'serie':'10400'},{'modelo':'i5', 'serie':'10600'},{'modelo':'i7', 'serie':'10700k'},
{'modelo':'i7', 'serie':'10700'},{'modelo':'i7', 'serie':'9700k'},{'modelo':'i7', 'serie':'9700f'},{'modelo':'i7', 'serie':'9700kf'},
{'modelo':'ryzen 3', 'serie':'3200g'},{'modelo':'ryzen 3', 'serie':'3100'},{'modelo':'ryzen 3', 'serie':'2200'},
{'modelo':'amd', 'serie':'ryzen 5 2600'},{'modelo':'amd', 'serie':'ryzen 3 4350'},{'modelo':'amd', 'serie':'ryzen 5 3600'},
{'modelo':'amd', 'serie':'ryzen 5 3400'},{'modelo':'amd', 'serie':'ryzen 7 3700x'}, {'modelo':'amd', 'serie':'ryzen 7 3800x'},
{'modelo':'amd', 'serie':'ryzen 7 2700'},];
var tarjetaGrafica = [{'modelo':'amd', 'serie':'msi xt 5500'},{'modelo':'amd', 'serie':'xt 5700'},
{'modelo':'amd', 'serie':'rx 570'},{'modelo':'amd', 'serie':'rx 580'},{'modelo':'amd', 'serie':'xt 5600'},
{'modelo':'geforce', 'serie':'gtx msi 1060 6gb'},{'modelo':'geforce', 'serie':'gtx 1050ti'},
{'modelo':'geforce', 'serie':'1650'},{'modelo':'geforce', 'serie':'1660'},
{'modelo':'geforce', 'serie':'2060'}, {'modelo':'geforce', 'serie':'2070'},
{'modelo':'geforce', 'serie':'rtx 2080 ventus'}];
var disco = [{'modelo':'western digital', 'serie':'1tb red'},
{'modelo':'western digital', 'serie':'1tb purple'}, {'modelo':'western digital', 'serie':'1tb blue'},
{'modelo':'western digital ssd', 'serie':'1tb green'},{'modelo':'western digital', 'serie':'interno 1tb black'},
{'modelo':'western digital', 'serie':'interno 2tb'},{'modelo':'seagate', 'serie':'1tb'},
{'modelo':'kingston', 'serie':'ssd 240gb'},{'modelo':'kingston', 'serie':'ssd 120gb'},
{'modelo':'western digital', 'serie':'ssd 480gb'},{'modelo':'western digital', 'serie':'ssd 240'},
{'modelo':'western digital', 'serie':'500gb'},{'modelo':'western digital', 'serie':'sólido 2tb'}]
var fuente = [{'modelo':'lnz', 'serie':'550w'},{'modelo':'lnz', 'serie':'650w'},
{'modelo':'redragon', 'serie':'500w'},{'modelo':'redragon', 'serie':'600w'}, {'modelo':'thermaltake', 'serie':'600w'},
{'modelo':'thermaltake', 'serie':'500w'},{'modelo':'thermaltake', 'serie':'700w'},
{'modelo':'evga', 'serie':'650w'}, {'modelo':'gigabyte', 'serie':'semimodular 700w'},{'modelo':'nzxt', 'serie':'700w modular 80 plus'}]
var gabinete = [{'modelo':'sentey', 'serie':'x10'},{'modelo':'sentey', 'serie':'f10'},{'modelo':'nyx', 'serie':'xigmatek'},
{'modelo':'redragon', 'serie':'gc-601'},{'modelo':'redragon', 'serie':'gc-530'},{'modelo':'eros', 'serie':'xigmatek'},
{'modelo':'sentey', 'serie':'j20'},{'modelo':'gigabyte', 'serie':'aorus c200'},{'modelo':'gigabyte', 'serie':'aorus c300'},
{'modelo':'aerocool', 'serie':'tomahawk'},{'modelo':'luminous 110f', 'serie':'azza'},{'modelo':'corsair', 'serie':'carbide spec delta'},
{'modelo':'apollo 430', 'serie':'azza'}, {'modelo':'h510', 'serie':'nzxt'},{'modelo':'h710', 'serie':'nzxt'}];
var monitor = [{'modelo':'samsung', 'serie':'c24f390fh'},{'modelo':'samsung', 'serie':'s24f350fh'},{'modelo':'samsung', 'serie':'c24rg50fql'},
{'modelo':'samsung', 'serie':'c27f390fhl'},{'modelo':'24mk430h', 'serie':'lg '},{'modelo':'vp228he', 'serie':'asus'},{'modelo':'tuf gaming', 'serie':'asus'},
{'modelo':'monitor', 'serie':'asus 27'},{'modelo':'led 24', 'serie':'asus 75hz'},{'modelo':'ad27qd', 'serie':'aorus'},{'modelo':'gigabyte', 'serie':'cv27f'},
{'modelo':'gigabyte', 'serie':'aorus kd25f'}];
var mouse = [{'modelo':'logitech', 'serie':'hero g series g502'},{'modelo':'redragon', 'serie':'griffin m607'},{'modelo':'logitech', 'serie':'prodigy'},
{'modelo':'redragon', 'serie':'impact m908'},{'modelo':'razer', 'serie':'deathadder'},{'modelo':'logitech', 'serie':'pro series'},
{'modelo':'redragon', 'serie':'invader m719'},{'modelo':'logitech', 'serie':'g403'},{'modelo':'genius', 'serie':'x-g600'},
{'modelo':'hiperx', 'serie':'pulsefire'},{'modelo':'redragon', 'serie':'centrophorus'},{'modelo':'redragon', 'serie':'cobra chroma m711'},
{'modelo':'redragon', 'serie':'phoenix'},{'modelo':'hiperx', 'serie':'fps pro pulsefire'},{'modelo':'corsair', 'serie':'harpoon'},
{'modelo':'corsair', 'serie':'m55'},{'modelo':'corsair', 'serie':'ironclaw'},{'modelo':'corsair', 'serie':'dark core'},
{'modelo':'steelseries', 'serie':'600 rival'},{'modelo':'steelseries', 'serie':'310 sensei'},{'modelo':'steelseries', 'serie':'rival 100'},
{'modelo':'thermaltake', 'serie':'iris'}];
var teclado = [{'modelo':'redragon', 'serie':'kumara k552'}, {'modelo':'redragon', 'serie':'scorpion kg916'},{'modelo':'redragon', 'serie':'yama k550'},
{'modelo':'redragon', 'serie':'draconic k530'},{'modelo':'redragon', 'serie':'visnu k561'},{'modelo':'redragon', 'serie':'harpe k503'},
{'modelo':'redragon', 'serie':'vishnu k596'},{'modelo':'redragon', 'serie':'dark avenger k568'},{'modelo':'redragon', 'serie':'indrah k555'},
{'modelo':'redragon', 'serie':'mitra 551'},{'modelo':'redragon', 'serie':'vata k580'},{'modelo':'razer', 'serie':'cynosa'},
{'modelo':'razer', 'serie':'ornata'},{'modelo':'razer', 'serie':'blackwidow'},{'modelo':'razer', 'serie':'huntsman'},
{'modelo':'corsair', 'serie':'k55'},{'modelo':'corsair', 'serie':'strafe mk.2'},{'modelo':'corsair', 'serie':'platinum k95'},
{'modelo':'corsair', 'serie':'k57'},{'modelo':'corsair', 'serie':'k63'},{'modelo':'corsair', 'serie':'k68'},
{'modelo':'alloy fps', 'serie':'hiperx'},{'modelo':'alloy cor', 'serie':'hiperx'},{'modelo':'alloy origins', 'serie':'hiperx'},
{'modelo':'alloy elite', 'serie':'hiperx'}];