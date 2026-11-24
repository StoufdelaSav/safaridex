/* =========================================================
   SAFARIDEX — Encyclopédie de La Réunion
   =========================================================
   Même format que especes.js (Afrique du Sud), numéros à partir de 1001.

   n     : nom affiché (nom créole ou nom courant à La Réunion)
   a     : autre nom (nom français officiel), affiché sous le nom
   s     : nom scientifique
   c     : classe (M, O, R, A, P ou I = invertébrés)
   r     : rareté dans le jeu = statut UICN mondial
           LC = Commun, NT = Peu commun, VU = Rare, EN = Épique, CR = Légendaire
   ne    : 1 si l'espèce n'est pas évaluée par l'UICN (insectes, araignées…) :
           la rareté de jeu reste « Commun » et la fiche affiche « non évaluée »
   g     : famille, qui choisit l'icône
   f     : l'anecdote « Le savais-tu ? »

   Les 26 espèces de l'affiche « La faune de La Réunion » sont toutes présentes.
   Statuts UICN vérifiés en novembre 2026. Lieux volontairement larges.
   ========================================================= */

(function () {
const M = "Mammifères", O = "Oiseaux", R = "Reptiles", A = "Amphibiens", P = "Poissons", I = "Invertébrés";

window.SAFARIDEX_PAYS = window.SAFARIDEX_PAYS || {};
window.SAFARIDEX_PAYS.RE = {
  nom: "La Réunion",
  regions: ["Nord","Ouest","Sud","Est","Cirques et Hauts","Volcan","En mer / lagon"],

  /* Lieux proposés à l'ajout d'une photo (n = nom affiché, r = région enregistrée).
     Toujours larges : jamais de site précis de nidification ou de ponte. */
  lieux: [
    {n:"Saint-Denis et le Nord", r:"Nord"},
    {n:"Saint-Gilles et le lagon de l'Hermitage", r:"Ouest"},
    {n:"Saint-Leu et la côte Ouest", r:"Ouest"},
    {n:"Le Maïdo et les Hauts de l'Ouest", r:"Cirques et Hauts"},
    {n:"Cirque de Mafate", r:"Cirques et Hauts"},
    {n:"Cirque de Cilaos", r:"Cirques et Hauts"},
    {n:"Cirque de Salazie", r:"Cirques et Hauts"},
    {n:"Plaine des Cafres et Plaine des Palmistes", r:"Cirques et Hauts"},
    {n:"Forêts de Bébour-Bélouve", r:"Cirques et Hauts"},
    {n:"Piton de la Fournaise et Plaine des Sables", r:"Volcan"},
    {n:"Saint-Pierre et le Sud", r:"Sud"},
    {n:"Côte sauvage du Sud (Saint-Joseph, Grand Anse)", r:"Sud"},
    {n:"Sainte-Rose et la côte Est", r:"Est"},
    {n:"Saint-Benoît et l'Est", r:"Est"},
    {n:"En mer (sortie baleines, dauphins)", r:"En mer / lagon"},
    {n:"Plongée ou snorkeling", r:"En mer / lagon"}
  ],

  especes: [

/* ---------- Mammifères ---------- */
{id:1001, g:"herisson", n:"Tangue", a:"Tenrec commun", s:"Tenrec ecaudatus", c:M, r:"LC", f:"Venu de Madagascar, le tangue est l'un des mammifères qui ont le plus de petits : jusqu'à 30 par portée, un record."},
{id:1002, g:"chauvesouris", n:"Roussette noire", a:"Roussette de Maurice", s:"Pteropus niger", c:M, r:"EN", f:"Disparue de La Réunion au XVIIIe siècle, elle est revenue d'elle-même depuis l'île Maurice : on la revoit voler dans le ciel réunionnais depuis les années 2000."},
{id:1003, g:"chauvesouris", n:"Petit molosse", a:"Petit molosse de La Réunion", s:"Mormopterus francoismoutoui", c:M, r:"LC", f:"Cette minuscule chauve-souris n'existe nulle part ailleurs au monde. Le soir, des milliers sortent des toits et des ponts pour chasser les moustiques."},
{id:1004, g:"chauvesouris", n:"Taphien", a:"Taphien de Maurice", s:"Taphozous mauritianus", c:M, r:"LC", f:"Le jour, il se repose collé à plat contre les troncs et les murs, si bien camouflé qu'on passe à côté sans le voir."},
{id:1005, g:"cerf", n:"Cerf de Java", a:"Cerf rusa", s:"Rusa timorensis", c:M, r:"VU", f:"Introduit au XVIIIe siècle pour la chasse, il est menacé dans son Indonésie natale : il y en a parfois plus loin de chez lui que chez lui."},
{id:1006, g:"lievre", n:"Lièvre", a:"Lièvre à collier noir", s:"Lepus nigricollis", c:M, r:"LC", f:"Venu d'Inde, il s'observe surtout le soir dans les savanes sèches de l'Ouest, oreilles dressées au-dessus des herbes."},
{id:1007, g:"baleine", n:"Baleine à bosse", a:"Mégaptère", s:"Megaptera novaeangliae", c:M, r:"LC", f:"Chaque hiver austral, elles viennent de l'Antarctique pour mettre bas dans les eaux chaudes de La Réunion. Les mâles chantent des mélodies qui changent d'année en année."},
{id:1008, g:"dauphin", n:"Grand dauphin de l'Indo-Pacifique", s:"Tursiops aduncus", c:M, r:"NT", f:"Plus petit que le grand dauphin de Flipper, il vit près des côtes en petits groupes fidèles, souvent devant Saint-Leu et Saint-Paul."},
{id:1009, g:"dauphin", n:"Dauphin à long bec", s:"Stenella longirostris", c:M, r:"LC", f:"C'est le grand acrobate des océans : il peut tourner jusqu'à sept fois sur lui-même en un seul saut hors de l'eau."},
{id:1010, g:"baleine", n:"Cachalot", s:"Physeter macrocephalus", c:M, r:"VU", f:"Il plonge à plus de 1 000 m pour chasser les calmars géants et peut retenir son souffle plus d'une heure."},

/* ---------- Oiseaux ---------- */
{id:1011, g:"rapace", n:"Papangue", a:"Busard de La Réunion", s:"Circus maillardi", c:O, r:"EN", f:"C'est le dernier rapace nicheur de l'île, et il n'existe qu'ici. Il reste environ 200 couples ; le voir planer est toujours un petit événement."},
{id:1012, g:"oiseaumarin", n:"Paille-en-queue", a:"Phaéton à bec jaune", s:"Phaethon lepturus", c:O, r:"LC", f:"Ses deux longues plumes de queue lui ont donné son nom créole. C'est l'oiseau symbole de La Réunion, on le voit tourner le long des falaises et des ravines."},
{id:1013, g:"oiseaumarin", n:"Paille-en-queue à brins rouges", a:"Phaéton à brins rouges", s:"Phaethon rubricauda", c:O, r:"LC", f:"Le cousin aux plumes de queue rouges, plus rare autour de l'île. Lors de ses parades, il vole parfois à reculons !"},
{id:1014, g:"passereau", n:"Tuit-tuit", a:"Échenilleur de La Réunion", s:"Lalage newtoni", c:O, r:"CR", f:"C'est l'un des oiseaux les plus rares au monde : il reste une cinquantaine de couples, tous dans une petite zone de forêt d'altitude. Il doit son nom à son chant."},
{id:1015, g:"passereau", n:"Tec-tec", a:"Tarier de La Réunion", s:"Saxicola tectes", c:O, r:"LC", f:"Endémique et pas farouche du tout : dans les Hauts, il vient souvent se poser tout près des randonneurs en criant « tec-tec ! »."},
{id:1016, g:"passereau", n:"Merle péi", a:"Bulbul de La Réunion", s:"Hypsipetes borbonicus", c:O, r:"NT", f:"Endémique, il descend des forêts des Hauts en février-mars pour se régaler de goyaviers mûrs."},
{id:1017, g:"passereau", n:"Oiseau-vert", a:"Zostérops de La Réunion", s:"Zosterops olivaceus", c:O, r:"LC", f:"Avec son anneau blanc autour de l'œil, ce petit oiseau endémique butine le nectar des fleurs et aide à les polliniser."},
{id:1018, g:"passereau", n:"Zoizo blanc", a:"Zostérops des Mascareignes", s:"Zosterops borbonicus", c:O, r:"LC", f:"Endémique de La Réunion, il change de couleur selon l'endroit de l'île : plumage gris, brun ou à tête grise selon les régions."},
{id:1019, g:"passereau", n:"Oiseau la Vierge", a:"Tchitrec de Bourbon", s:"Terpsiphone bourbonnensis", c:O, r:"LC", f:"Son nom viendrait de sa silhouette rappelant le voile de la Vierge. Curieux, il s'approche souvent des promeneurs en forêt."},
{id:1020, g:"oiseaumarin", n:"Pétrel de Barau", s:"Pterodroma baraui", c:O, r:"EN", f:"Il ne niche que sur les plus hauts sommets de La Réunion. En avril, les jeunes attirés par les lumières tombent en ville : les Réunionnais éteignent alors leurs lumières pour les sauver."},
{id:1021, g:"oiseaumarin", n:"Pétrel noir de Bourbon", s:"Pseudobulweria aterrima", c:O, r:"CR", f:"Si discret qu'on a cru l'espèce éteinte pendant un siècle. Son nid n'a été découvert qu'en 2016, dans une falaise inaccessible."},
{id:1022, g:"oiseaumarin", n:"Fouquet", a:"Puffin du Pacifique", s:"Ardenna pacifica", c:O, r:"LC", f:"La nuit, ses cris dans les falaises ressemblent à des pleurs de bébé, ce qui a nourri bien des légendes."},
{id:1023, g:"hirondelle", n:"Salangane", a:"Salangane des Mascareignes", s:"Aerodramus francicus", c:O, r:"NT", f:"Comme une chauve-souris, elle se repère dans le noir des grottes grâce à l'écholocation, en émettant de petits clics."},
{id:1024, g:"passereau", n:"Cardinal", a:"Foudi rouge", s:"Foudia madagascariensis", c:O, r:"LC", f:"En saison des amours, le mâle devient rouge vif de la tête à la poitrine ; le reste de l'année, il ressemble à un moineau."},
{id:1025, g:"passereau", n:"Bellier", a:"Tisserin gendarme", s:"Ploceus cucullatus", c:O, r:"LC", f:"Le mâle tisse des nids en forme de boule suspendus aux palmes. Si la femelle n'aime pas le nid, il le défait et recommence !"},
{id:1026, g:"passereau", n:"Martin", a:"Martin triste", s:"Acridotheres tristis", c:O, r:"LC", f:"Introduit au XVIIIe siècle pour lutter contre les criquets, il est devenu l'un des oiseaux les plus communs des villes."},
{id:1027, g:"passereau", n:"Merle Maurice", a:"Bulbul orphée", s:"Pycnonotus jocosus", c:O, r:"LC", f:"Reconnaissable à sa huppe noire et ses joues rouges. Échappé de cage, il s'est répandu partout et concurrence le merle péi."},
{id:1028, g:"pigeon", n:"Tourterelle", a:"Géopélie zébrée", s:"Geopelia striata", c:O, r:"LC", f:"Cette petite colombe au plumage rayé roucoule dans tous les jardins et marche au sol sans se laisser déranger."},
{id:1029, g:"passereau", n:"Bec-rose", a:"Astrild ondulé", s:"Estrilda astrild", c:O, r:"LC", f:"Minuscule oiseau au bec rouge corail, il se déplace en bandes bruyantes dans les herbes hautes."},
{id:1030, g:"echassier", n:"Héron strié", a:"Butor", s:"Butorides striata", c:O, r:"LC", f:"Il pêche immobile au bord des rivières et peut même poser un appât à la surface de l'eau pour attirer les poissons."},
{id:1031, g:"canard", n:"Poule d'eau", a:"Gallinule poule-d'eau", s:"Gallinula chloropus", c:O, r:"LC", f:"Avec son bec rouge et ses longs doigts, elle marche sur les feuilles flottantes des étangs comme sur un tapis."},
{id:1032, g:"oiseaumarin", n:"Noddi brun", s:"Anous stolidus", c:O, r:"LC", f:"Son nom anglais « noddy » vient de sa manie de hocher la tête pendant les parades."},
{id:1033, g:"oiseaumarin", n:"Fou brun", s:"Sula leucogaster", c:O, r:"LC", f:"Il pêche en plongeant tête la première depuis plusieurs mètres de haut, comme une flèche."},
{id:1034, g:"oiseaumarin", n:"Frégate", a:"Frégate ariel", s:"Fregata ariel", c:O, r:"LC", f:"Elle peut rester des semaines en vol sans se poser et vole souvent la nourriture des autres oiseaux marins."},

/* ---------- Reptiles ---------- */
{id:1035, g:"lezard", n:"Gecko vert de Manapany", a:"Gecko vert de Manapany", s:"Phelsuma inexpectata", c:R, r:"CR", f:"Il ne vit que sur une petite bande de côte du sud de l'île, nulle part ailleurs au monde. Chaque individu compte."},
{id:1036, g:"lezard", n:"Gecko vert des Hauts", a:"Gecko vert de Bourbon", s:"Phelsuma borbonica", c:R, r:"EN", f:"Endémique des forêts humides de La Réunion, il lèche le nectar des fleurs et aide à polliniser certaines plantes."},
{id:1037, g:"cameleon", n:"Endormi", a:"Caméléon panthère", s:"Furcifer pardalis", c:R, r:"LC", f:"On l'appelle endormi à cause de sa lenteur. Les mâles réunionnais sont parmi les plus colorés : vert, rouge, bleu turquoise…"},
{id:1038, g:"lezard", n:"Agame", a:"Agame des jardins", s:"Calotes versicolor", c:R, r:"LC", f:"Le mâle devient rouge vif de la tête en période de reproduction, d'où son surnom de « suceur de sang » (totalement inoffensif)."},
{id:1039, g:"serpent", n:"Couleuvre loup", s:"Lycodon aulicus", c:R, r:"LC", f:"Bonne nouvelle : c'est l'un des seuls serpents de l'île, et il est totalement inoffensif pour l'homme."},
{id:1040, g:"tortuemarine", n:"Tortue verte", s:"Chelonia mydas", c:R, r:"EN", f:"Malgré son nom, sa carapace est brune : c'est sa graisse, verte, qui lui a donné son nom. Elle broute les herbiers du lagon comme une vache."},
{id:1041, g:"tortuemarine", n:"Tortue imbriquée", s:"Eretmochelys imbricata", c:R, r:"CR", f:"Son bec pointu lui permet d'aller chercher les éponges entre les coraux. Ses écailles se chevauchent comme les tuiles d'un toit."},
{id:1042, g:"tortuemarine", n:"Tortue caouanne", s:"Caretta caretta", c:R, r:"VU", f:"Avec sa grosse tête, elle peut broyer les coquillages et les crabes. Les jeunes traversent tout l'océan Indien."},

/* ---------- Amphibiens ---------- */
{id:1043, g:"grenouille", n:"Crapaud", a:"Crapaud guttural", s:"Sclerophrys gutturalis", c:A, r:"LC", f:"Les soirs de pluie, son chant ressemble à un ronflement. Il a été introduit à La Réunion au début du XXe siècle."},
{id:1044, g:"grenouille", n:"Grenouille", a:"Grenouille des Mascareignes", s:"Ptychadena mascareniensis", c:A, r:"LC", f:"Très bonne sauteuse, elle peut faire des bonds de plus d'un mètre pour échapper à un prédateur."},

/* ---------- Poissons ---------- */
{id:1045, g:"poisson", n:"Poisson-ange empereur", s:"Pomacanthus imperator", c:P, r:"LC", f:"Le juvénile, bleu foncé à cercles blancs, ne ressemble pas du tout à l'adulte, rayé jaune et bleu : on a longtemps cru que c'étaient deux espèces."},
{id:1046, g:"poisson", n:"Poisson-coffre pintade", s:"Ostracion meleagris", c:P, r:"LC", f:"Son corps est une boîte rigide : il nage seulement avec ses nageoires, comme un petit sous-marin. Il libère un poison s'il est stressé."},
{id:1047, g:"poisson", n:"Baliste clown", s:"Balistoides conspicillum", c:P, r:"LC", f:"Un cousin de ton poisson Friandasie ! Il se coince dans les trous du récif en dressant l'épine de son dos, impossible alors de l'en sortir."},
{id:1048, g:"poisson", n:"Baliste Picasso", s:"Rhinecanthus aculeatus", c:P, r:"LC", f:"Ses dessins semblent peints par Picasso. Il défend son territoire et n'hésite pas à foncer sur les plongeurs."},
{id:1049, g:"poisson", n:"Poisson-papillon de Bennett", s:"Chaetodon bennetti", c:P, r:"LC", f:"Il nage presque toujours en couple, fidèle à son partenaire pendant des années."},
{id:1050, g:"poisson", n:"Poisson-papillon à dos noir", s:"Chaetodon melannotus", c:P, r:"LC", f:"La nuit, ses couleurs pâlissent et des taches sombres apparaissent : c'est son pyjama de camouflage."},
{id:1051, g:"poisson", n:"Poisson-cocher", a:"Poisson-cocher commun", s:"Heniochus acuminatus", c:P, r:"LC", f:"Sa longue nageoire blanche ressemble au fouet d'un cocher, d'où son nom."},
{id:1052, g:"poisson", n:"Poisson-clown des Mascareignes", s:"Amphiprion chrysogaster", c:P, r:"LC", f:"Il n'existe qu'autour de La Réunion et de Maurice. Comme Nemo, il vit à l'abri dans une anémone qui ne le pique pas."},
{id:1053, g:"poisson", n:"Idole des Maures", s:"Zanclus cornutus", c:P, r:"LC", f:"Avec sa longue nageoire en faucille et son museau en tube, c'est l'un des poissons les plus élégants du récif."},
{id:1054, g:"poisson", n:"Chirurgien bagnard", s:"Acanthurus triostegus", c:P, r:"LC", f:"Ses rayures rappellent la tenue des bagnards. Il a une petite lame tranchante de chaque côté de la queue, d'où le nom de chirurgien."},
{id:1055, g:"poisson", n:"Poisson-perroquet", a:"Perroquet à bandes bleues", s:"Scarus ghobban", c:P, r:"LC", f:"Il croque le corail et rejette du sable fin : une partie du sable blanc des plages vient de lui ! La nuit, il dort dans un cocon de mucus."},
{id:1056, g:"poisson", n:"Murène javanaise", s:"Gymnothorax javanicus", c:P, r:"LC", f:"Elle ouvre et ferme la bouche en permanence, non pour menacer mais pour respirer. Elle a une deuxième mâchoire dans la gorge !"},
{id:1057, g:"poisson", n:"Poisson-lion", a:"Rascasse volante", s:"Pterois miles", c:P, r:"LC", f:"Splendide mais à ne pas toucher : ses longues épines sont venimeuses."},
{id:1058, g:"poisson", n:"Poisson porc-épic", a:"Diodon", s:"Diodon hystrix", c:P, r:"LC", f:"En cas de danger, il avale de l'eau et se gonfle comme un ballon hérissé de piquants."},
{id:1059, g:"poisson", n:"Carangue", a:"Carangue à grosse tête", s:"Caranx ignobilis", c:P, r:"LC", f:"Puissant chasseur, elle peut dépasser 1,5 m et chasse parfois en suivant les requins."},
{id:1060, g:"poisson", n:"Bichique", a:"Cabot bouche-ronde", s:"Sicyopterus lagocephalus", c:P, r:"LC", f:"Les bichiques sont ses larves : nées en mer, elles remontent les rivières par milliers. Le cari bichique est un plat de fête réunionnais."},
{id:1061, g:"requin", n:"Requin tigre", s:"Galeocerdo cuvier", c:P, r:"NT", f:"Ses rayures s'effacent avec l'âge. Il mange presque tout ce qu'il trouve, et on a retrouvé de tout dans son estomac."},
{id:1062, g:"requin", n:"Requin bouledogue", s:"Carcharhinus leucas", c:P, r:"VU", f:"Il est l'un des rares requins capables de vivre en eau douce et de remonter les fleuves."},
{id:1063, g:"requin", n:"Requin pointe blanche de récif", s:"Triaenodon obesus", c:P, r:"VU", f:"Calme et peu craintif, il dort le jour posé au fond ou sous les surplombs, et chasse la nuit dans le récif."},
{id:1064, g:"requin", n:"Requin-baleine", s:"Rhincodon typus", c:P, r:"EN", f:"Le plus grand poisson du monde, jusqu'à 18 m, se nourrit pourtant de minuscule plancton. Il passe parfois au large de l'île."},
{id:1065, g:"raie", n:"Raie aigle", a:"Raie léopard", s:"Aetobatus ocellatus", c:P, r:"VU", f:"Elle « vole » sous l'eau en battant de ses grandes nageoires, et saute parfois hors de l'eau."},
{id:1066, g:"raie", n:"Raie manta", a:"Raie manta de récif", s:"Mobula alfredi", c:P, r:"VU", f:"Elle peut mesurer 5 m d'envergure et possède le plus gros cerveau de tous les poissons. Chaque manta a des taches uniques sur le ventre."},
{id:1067, g:"raie", n:"Raie pastenague à points bleus", s:"Taeniura lymma", c:P, r:"LC", f:"Ses points bleu électrique avertissent : sa queue porte un aiguillon venimeux. Elle se cache sous les coraux le jour."},

/* ---------- Invertébrés ---------- */
{id:1068, g:"poulpe", n:"Zourite", a:"Poulpe de jour", s:"Octopus cyanea", c:I, r:"LC", f:"Il change de couleur et de texture en une fraction de seconde. Pêché sur le récif, le cari zourite est un grand classique réunionnais."},
{id:1069, g:"crabe", n:"Crabe porcelaine", s:"Porcellanidae", c:I, r:"LC", ne:1, f:"Ce n'est pas un vrai crabe mais un cousin des galathées. Il filtre l'eau avec des sortes de petits éventails sous sa bouche."},
{id:1070, g:"meduse", n:"Méduse pélagique", a:"Pélagie", s:"Pelagia noctiluca", c:I, r:"LC", ne:1, f:"La nuit, elle brille d'une lumière bleutée quand l'eau bouge. Attention, ses filaments piquent."},
{id:1071, g:"coquillage", n:"Bénitier", a:"Bénitier commun", s:"Tridacna maxima", c:I, r:"LC", f:"Il loge dans sa chair des algues qui lui fabriquent du sucre grâce au soleil : ce sont elles qui lui donnent ses couleurs bleues et vertes."},
{id:1072, g:"oursin", n:"Oursin crayon", s:"Heterocentrotus mamillatus", c:I, r:"LC", ne:1, f:"Ses gros piquants rouges et épais servaient autrefois de crayons pour écrire sur les ardoises."},
{id:1073, g:"langouste", n:"Langouste", s:"Panulirus", c:I, r:"LC", f:"Le jour, seules ses longues antennes dépassent des trous du récif. Elle sort la nuit pour chercher sa nourriture."},
{id:1074, g:"papillon", n:"Papillon La Pâture", s:"Papilio phorbanta", c:I, r:"VU", f:"Ce grand papillon noir et bleu n'existe qu'à La Réunion. Sa chenille mange les feuilles de la liane patte-poule… et parfois celles des citronniers."},
{id:1075, g:"insecte", n:"Bébête l'argent", a:"Cétoine", s:"Cetoniinae", c:I, r:"LC", ne:1, f:"Ces scarabées des fleurs ont des reflets métalliques. Ils volent ailes repliées sous leurs élytres, qu'ils gardent fermés."},
{id:1076, g:"insecte", n:"Bébête coco", a:"Scarabée rhinocéros", s:"Oryctes rhinoceros", c:I, r:"LC", ne:1, f:"Le mâle porte une grande corne sur la tête. Il creuse les cœurs des cocotiers, ce qui en fait l'ennemi des planteurs."},
{id:1077, g:"mante", n:"Chipèque pardon", a:"Mante religieuse", s:"Mantodea", c:I, r:"LC", ne:1, f:"Elle peut tourner la tête à 180° pour surveiller ses proies et les attrape en un éclair avec ses pattes avant."},
{id:1078, g:"guepe", n:"Guêpe", a:"Guêpe poliste", s:"Polistes olivaceus", c:I, r:"LC", ne:1, f:"Elle fabrique son nid en papier en mâchant du bois mort. Utile au jardin, elle mange beaucoup de chenilles."},
{id:1079, g:"moustique", n:"Moustique tigre", s:"Aedes albopictus", c:I, r:"LC", ne:1, f:"Il pique en plein jour. À La Réunion, on vide les soucoupes et les gouttières pour l'empêcher de pondre : quelques gouttes d'eau lui suffisent."},
{id:1080, g:"araignee", n:"Bibe", a:"Néphile dorée", s:"Trichonephila inaurata", c:I, r:"LC", ne:1, f:"Sa toile géante a des fils dorés si solides qu'ils peuvent retenir un petit oiseau. Elle est impressionnante mais sans danger."}
  ],

  infos: {
/* Mammifères */
1001:{t:"Corps 25 à 39 cm, pas de queue",p:"1 à 2,5 kg",h:"Forêts, ravines, champs et jardins, du littoral aux Hauts",m:"Nuit · actif en été (oct.–avril), il hiberne pendant l'hiver austral",r:"Insectivore et omnivore : vers, insectes, petits animaux, fruits tombés"},
1002:{t:"Envergure jusqu'à 80 cm",p:"350 à 600 g",h:"Forêts de l'Est et des Hauts, arbres fruitiers",m:"Crépuscule et nuit ; parfois en journée au-dessus des forêts · toute l'année",r:"Frugivore : fruits, fleurs et nectar"},
1003:{t:"Envergure 25 cm environ",p:"6 à 10 g",h:"Partout : toits, ponts, falaises, du littoral à 2 000 m",m:"Au coucher du soleil, sortie des colonies · toute l'année",r:"Insectivore : moustiques et petits insectes attrapés en vol"},
1004:{t:"Envergure 35 cm environ",p:"20 à 35 g",h:"Troncs d'arbres, falaises et murs des basses altitudes",m:"Crépuscule et nuit · toute l'année",r:"Insectivore : papillons de nuit, coléoptères"},
1005:{t:"Environ 1 m au garrot",p:"Mâle 70 à 130 kg · femelle 50 à 80 kg",h:"Forêts et savanes des Hauts, plaines d'altitude",m:"Aube et crépuscule · brame en juillet–août",r:"Herbivore : herbes, feuilles, jeunes pousses"},
1006:{t:"Corps 40 à 70 cm, oreilles 10 à 12 cm",p:"1,5 à 3,5 kg",h:"Savanes sèches et friches de l'Ouest",m:"Crépuscule et nuit · toute l'année",r:"Herbivore : herbes, jeunes pousses"},
1007:{t:"12 à 16 m",p:"25 à 35 tonnes",h:"Au large et près des côtes, surtout côte Ouest",m:"Journée, depuis un bateau ou du rivage · de juin à octobre, pic en août–septembre",r:"Ne mange presque pas à La Réunion : elle se nourrit de krill en Antarctique"},
1008:{t:"2 à 2,6 m",p:"150 à 230 kg",h:"Eaux côtières peu profondes, souvent dans l'Ouest",m:"Journée · toute l'année",r:"Carnivore : poissons de récif, calmars"},
1009:{t:"1,3 à 2 m",p:"45 à 75 kg",h:"Au large des côtes Ouest et Nord-Ouest, en grands groupes",m:"Matin, quand ils se reposent près des côtes · toute l'année",r:"Carnivore : petits poissons et calmars chassés la nuit"},
1010:{t:"Mâle jusqu'à 18 m · femelle 11 m",p:"Mâle jusqu'à 50 tonnes · femelle 15 tonnes",h:"Grand large, eaux profondes",m:"Journée, rare, lors de sorties en mer · toute l'année",r:"Carnivore : calmars des profondeurs"},
/* Oiseaux */
1011:{t:"50 cm environ · envergure 1,15 à 1,40 m",p:"500 à 750 g",h:"Ravines, forêts, champs de cannes et plaines, du littoral aux Hauts",m:"Journée, en vol plané · toute l'année",r:"Carnivore : rats, oiseaux, lézards, insectes"},
1012:{t:"70 à 80 cm avec les plumes de la queue · envergure 90 cm",p:"300 à 400 g",h:"Falaises, remparts des cirques, ravines et mer",m:"Journée, en vol le long des falaises · toute l'année",r:"Poissons volants et calmars pêchés en mer"},
1013:{t:"80 à 95 cm avec les plumes de la queue · envergure 1,1 m",p:"600 à 800 g",h:"Grand large, falaises littorales (rare autour de l'île)",m:"Journée · surtout en été austral",r:"Poissons volants et calmars"},
1014:{t:"20 cm environ",p:"25 à 30 g",h:"Forêts humides d'altitude du nord de l'île, en réserve protégée",m:"Matin, au chant · sa présence est très localisée et surveillée",r:"Insectivore : chenilles et insectes"},
1015:{t:"13 cm environ",p:"15 g",h:"Forêts et landes des Hauts, au-dessus de 1 000 m",m:"Journée, toute l'année ; facile au Maïdo ou au volcan",r:"Insectivore : insectes, araignées"},
1016:{t:"22 cm environ",p:"40 à 50 g",h:"Forêts humides d'altitude",m:"Journée · descend dans les vallées en février–mars",r:"Frugivore et insectivore : baies, goyaviers, insectes"},
1017:{t:"11 cm environ",p:"10 g",h:"Forêts indigènes, surtout dans les Hauts",m:"Journée, toute l'année",r:"Nectar, petits fruits et insectes"},
1018:{t:"11 cm environ",p:"10 g",h:"Partout, des jardins aux forêts d'altitude",m:"Journée, toute l'année, en petits groupes",r:"Insectes, nectar, petits fruits"},
1019:{t:"Mâle 18 cm · femelle 15 cm",p:"15 à 20 g",h:"Forêts humides indigènes, des basses pentes aux Hauts",m:"Journée · toute l'année, chant plus fréquent de septembre à février",r:"Insectivore : attrape les insectes en vol"},
1020:{t:"38 cm · envergure 96 cm",p:"350 à 450 g",h:"En mer le jour ; niche sur les plus hauts sommets",m:"Retour aux colonies au crépuscule · de septembre à avril",r:"Calmars et petits poissons pêchés au large"},
1021:{t:"36 cm · envergure 90 cm",p:"200 g environ",h:"Grand large ; niche dans des falaises inaccessibles du Sud",m:"Nuit, quasiment impossible à voir · présent d'octobre à mars",r:"Calmars et poissons"},
1022:{t:"45 cm · envergure 1 m",p:"350 à 450 g",h:"En mer ; niche dans des terriers sur les falaises littorales",m:"Crépuscule et nuit · de septembre à avril",r:"Poissons et calmars"},
1023:{t:"11 cm",p:"10 g",h:"Ciel des ravines et des cirques ; niche dans les grottes",m:"Journée, en vol, toute l'année",r:"Insectivore : petits insectes attrapés en vol"},
1024:{t:"13 cm",p:"15 g",h:"Jardins, champs, lisières, basses et moyennes altitudes",m:"Journée · mâle rouge de septembre à mars",r:"Graines et insectes"},
1025:{t:"15 à 17 cm",p:"35 à 45 g",h:"Jardins, palmiers, bords de champs, basses altitudes",m:"Journée · nids et parades en été austral",r:"Graines, céréales, insectes"},
1026:{t:"23 cm",p:"110 g",h:"Villes, jardins, champs, plages",m:"Journée, toute l'année ; dortoirs bruyants le soir",r:"Omnivore : insectes, fruits, restes"},
1027:{t:"20 cm",p:"30 g",h:"Jardins, forêts dégradées, partout",m:"Journée, toute l'année",r:"Fruits, baies, insectes"},
1028:{t:"20 cm",p:"50 g",h:"Jardins, pelouses, bords de route",m:"Journée, toute l'année",r:"Graines ramassées au sol"},
1029:{t:"11 cm",p:"8 g",h:"Herbes hautes, friches, bords de champs",m:"Journée, toute l'année, en bandes",r:"Graines de graminées"},
1030:{t:"40 à 45 cm",p:"200 à 250 g",h:"Rivières, étangs, embouchures, bord de mer",m:"Aube et crépuscule · toute l'année",r:"Poissons, crevettes, insectes aquatiques"},
1031:{t:"30 à 35 cm",p:"250 à 400 g",h:"Étangs, mares, bassins",m:"Journée, toute l'année",r:"Omnivore : plantes aquatiques, insectes, escargots"},
1032:{t:"40 cm · envergure 80 cm",p:"150 à 250 g",h:"Mer, côtes rocheuses, îlots",m:"Journée · surtout en été austral",r:"Petits poissons attrapés à la surface"},
1033:{t:"70 cm · envergure 1,4 m",p:"1 à 1,5 kg",h:"Au large et le long des côtes",m:"Journée, lors de sorties en mer",r:"Poissons pêchés en plongeant"},
1034:{t:"75 cm · envergure 1,8 m",p:"700 à 900 g",h:"Grand large, passe parfois au-dessus des côtes",m:"Journée, surtout avant ou après les cyclones",r:"Poissons volants, calmars, vol de nourriture"},
/* Reptiles */
1035:{t:"10 à 13 cm",p:"5 à 8 g",h:"Végétation littorale du Sud : vacoas, palmiers, haies",m:"Journée ensoleillée · toute l'année",r:"Insectes, nectar, fruits mûrs"},
1036:{t:"12 à 16 cm",p:"5 à 10 g",h:"Forêts humides indigènes de l'Est et du Nord",m:"Journée ensoleillée · toute l'année",r:"Insectes, nectar, pollen"},
1037:{t:"Mâle 40 à 50 cm · femelle 25 à 35 cm",p:"60 à 180 g",h:"Haies, jardins, buissons des basses altitudes",m:"Journée, toute l'année ; plus visible en été",r:"Insectivore : criquets, papillons, mouches"},
1038:{t:"30 à 40 cm avec la queue",p:"40 à 80 g",h:"Jardins, haies, bords de route, savanes",m:"Journée ensoleillée, toute l'année",r:"Insectes, parfois petits lézards"},
1039:{t:"40 à 70 cm",p:"30 à 80 g",h:"Jardins, murets, zones habitées de basse altitude",m:"Nuit · toute l'année",r:"Geckos et petits lézards"},
1040:{t:"Carapace 80 cm à 1,2 m",p:"90 à 200 kg",h:"Lagons, herbiers marins, côte Ouest",m:"Journée, en snorkeling ou plongée · toute l'année",r:"Herbivore : herbes marines et algues"},
1041:{t:"Carapace 60 à 90 cm",p:"45 à 80 kg",h:"Récifs coralliens et tombants",m:"Journée, en plongée · toute l'année",r:"Éponges, anémones, invertébrés"},
1042:{t:"Carapace 80 cm à 1 m",p:"80 à 150 kg",h:"Large et récifs",m:"Journée, en mer · toute l'année, rare",r:"Crabes, coquillages, méduses"},
/* Amphibiens */
1043:{t:"8 à 12 cm",p:"40 à 90 g",h:"Jardins, mares, champs, basses altitudes",m:"Nuit, surtout les soirs de pluie · été austral",r:"Insectes, vers, escargots"},
1044:{t:"4 à 6 cm",p:"5 à 15 g",h:"Mares, rizières anciennes, bords de ruisseaux",m:"Nuit et soirées humides · été austral",r:"Insectes"},
/* Poissons */
1045:{t:"Jusqu'à 40 cm",p:"1 à 2 kg",h:"Récifs et tombants, grottes",m:"Journée, en plongée · toute l'année",r:"Éponges, algues, petits invertébrés"},
1046:{t:"15 à 25 cm",p:"200 à 400 g",h:"Récifs et lagons",m:"Journée · toute l'année",r:"Éponges, vers, petits invertébrés"},
1047:{t:"25 à 50 cm",p:"1 à 2,5 kg",h:"Tombants extérieurs du récif",m:"Journée, en plongée · toute l'année",r:"Oursins, crabes, coquillages"},
1048:{t:"20 à 30 cm",p:"300 à 500 g",h:"Lagons peu profonds, fonds sableux",m:"Journée, en snorkeling · toute l'année",r:"Algues, petits crustacés, vers"},
1049:{t:"15 à 20 cm",p:"100 à 200 g",h:"Récifs riches en coraux",m:"Journée · toute l'année, en couple",r:"Polypes de corail"},
1050:{t:"15 à 18 cm",p:"100 à 150 g",h:"Lagons et récifs peu profonds",m:"Journée · toute l'année",r:"Corail mou et polypes"},
1051:{t:"20 à 25 cm",p:"200 à 400 g",h:"Tombants et pentes externes",m:"Journée, en petits groupes · toute l'année",r:"Plancton et petits invertébrés"},
1052:{t:"10 à 15 cm",p:"50 à 100 g",h:"Anémones des récifs et tombants",m:"Journée, en plongée · toute l'année",r:"Plancton, algues, restes de l'anémone"},
1053:{t:"15 à 23 cm",p:"150 à 250 g",h:"Récifs et lagons",m:"Journée · toute l'année",r:"Éponges et petits invertébrés"},
1054:{t:"15 à 27 cm",p:"200 à 400 g",h:"Lagons et platiers, en bancs",m:"Journée, en snorkeling · toute l'année",r:"Herbivore : algues"},
1055:{t:"50 à 75 cm",p:"2 à 5 kg",h:"Récifs et lagons",m:"Journée, en snorkeling · toute l'année",r:"Algues et corail mort"},
1056:{t:"Jusqu'à 2,5 m",p:"Jusqu'à 30 kg",h:"Trous et failles du récif",m:"Journée (tête qui dépasse) et chasse la nuit · toute l'année",r:"Poissons, poulpes"},
1057:{t:"25 à 35 cm",p:"300 à 500 g",h:"Récifs, épaves, surplombs",m:"Crépuscule et nuit · toute l'année",r:"Petits poissons et crevettes"},
1058:{t:"Jusqu'à 70 cm",p:"Jusqu'à 3 kg",h:"Récifs et lagons, sous les surplombs",m:"Journée (repos) et nuit (chasse) · toute l'année",r:"Oursins, crabes, coquillages"},
1059:{t:"Jusqu'à 1,7 m",p:"Jusqu'à 80 kg",h:"Passes, tombants et large",m:"Journée, en plongée · toute l'année",r:"Poissons et céphalopodes"},
1060:{t:"Larve 2 à 3 cm · adulte 10 à 15 cm",p:"Quelques grammes",h:"Embouchures et rivières de l'île",m:"Remontée des larves les matins de pleine saison · de septembre à février",r:"Algues des galets de rivière"},
1061:{t:"3 à 5 m",p:"400 à 700 kg",h:"Large et côtes ; baignade interdite hors zones protégées",m:"Rare, en plongée encadrée · toute l'année",r:"Carnivore : poissons, tortues, oiseaux, carcasses"},
1062:{t:"2 à 3,5 m",p:"90 à 230 kg",h:"Côtes, embouchures, eaux troubles",m:"Rare, à éviter · toute l'année",r:"Carnivore : poissons, raies, autres requins"},
1063:{t:"1,2 à 1,6 m",p:"15 à 20 kg",h:"Récifs et tombants",m:"Journée (repos au fond), en plongée · toute l'année",r:"Poissons et poulpes chassés la nuit"},
1064:{t:"8 à 12 m (jusqu'à 18 m)",p:"10 à 20 tonnes",h:"Grand large, eaux de surface",m:"Rare, lors de sorties en mer · surtout en été austral",r:"Plancton filtré"},
1065:{t:"Envergure 1,5 à 3 m",p:"Jusqu'à 200 kg",h:"Lagons, passes et pentes du récif",m:"Journée, en plongée · toute l'année",r:"Coquillages et crustacés enfouis"},
1066:{t:"Envergure 3 à 5 m",p:"Jusqu'à 1,4 tonne",h:"Large et tombants",m:"Rare, en plongée · surtout en été austral",r:"Plancton filtré"},
1067:{t:"Disque 25 à 35 cm",p:"2 à 5 kg",h:"Fonds sableux des lagons, sous les coraux",m:"Journée, en snorkeling · toute l'année",r:"Vers, crevettes, coquillages"},
/* Invertébrés */
1068:{t:"Corps 15 cm · bras jusqu'à 80 cm",p:"0,5 à 3 kg",h:"Platier et récifs peu profonds",m:"Journée, en snorkeling · toute l'année",r:"Crabes, coquillages, poissons"},
1069:{t:"1 à 3 cm",p:"Quelques grammes",h:"Dans les anémones, sous les galets du récif",m:"En plongée, en regardant de près · toute l'année",r:"Plancton filtré"},
1070:{t:"Ombrelle 3 à 12 cm",p:"Quelques dizaines de grammes",h:"Pleine mer, parfois près des côtes",m:"Variable, souvent après des vents du large",r:"Plancton, petits poissons"},
1071:{t:"15 à 35 cm",p:"Jusqu'à 3 kg",h:"Encastré dans les coraux du lagon",m:"Journée, en snorkeling · toute l'année",r:"Plancton filtré et sucres produits par ses algues"},
1072:{t:"Corps 8 cm · piquants jusqu'à 10 cm",p:"200 à 400 g",h:"Platier et pente externe du récif",m:"Journée, caché ; sort la nuit · toute l'année",r:"Algues"},
1073:{t:"20 à 30 cm",p:"300 g à 1 kg",h:"Trous du récif",m:"Nuit · toute l'année",r:"Coquillages, oursins, restes"},
1074:{t:"Envergure 10 à 12 cm",p:"Moins d'un gramme",h:"Forêts et jardins, du littoral à 1 400 m",m:"Journée ensoleillée · surtout de septembre à avril",r:"Adulte : nectar · chenille : feuilles de patte-poule et d'agrumes"},
1075:{t:"1,5 à 3 cm",p:"Quelques grammes",h:"Jardins fleuris, lisières",m:"Journée ensoleillée · été austral",r:"Fleurs, pollen, fruits mûrs"},
1076:{t:"3 à 5 cm",p:"5 à 10 g",h:"Cocotiers, bois pourris, compost",m:"Nuit, attiré par les lumières · été austral",r:"Adulte : cœur des palmiers · larve : bois mort"},
1077:{t:"5 à 8 cm",p:"2 à 5 g",h:"Herbes, buissons, jardins",m:"Journée · surtout en été austral",r:"Insectes chassés à l'affût"},
1078:{t:"1,5 à 2 cm",p:"Moins d'un gramme",h:"Jardins, toitures, haies",m:"Journée · été austral",r:"Adulte : nectar · larves nourries de chenilles"},
1079:{t:"5 à 10 mm",p:"Quelques milligrammes",h:"Partout où il y a de l'eau stagnante",m:"Journée, surtout matin et fin d'après-midi · été austral",r:"Femelle : sang · mâle : nectar"},
1080:{t:"Femelle 3 à 5 cm (pattes jusqu'à 12 cm) · mâle 5 mm",p:"Quelques grammes",h:"Jardins, lisières, forêts, entre deux arbres",m:"Journée, au centre de sa toile · surtout en été austral",r:"Insectes pris dans la toile"}
  }
};
})();
