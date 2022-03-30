// Kids Styles

let kidData = [
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220222/pmBZ/6214007daeb26921afa7dec1/cherry_crumble_by_nitt_hyman_red_checked_shirt_with_flap_pockets.jpg",
        brand: "NITT HYMAN",
        product: "Checked Shirt with Flap Pockets",
        gender: "boy",
        category: "kids",
        price: 1109,
        strikedOffPrice: 1849,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20210831/8r7g/612e23547cdb8cb824103117/noddy_multicoloured_colourblock_crew-neck_t-shirt_with_applique.jpg",
        brand: "NODDY",
        product: "Colourblock Crew-Neck T-shirt with Applique",
        gender: "boy",
        category: "kids",
        price: 358,
        strikedOffPrice: 550,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220122/Xh3W/61eb1a38aeb2695cdd28af2d/max_multicoloured_checked_shirt_with_patch_pocket_.jpg",
        brand: "MAX",
        product: "Checked Shirt with Patch Pocket",
        gender: "boy",
        category: "kids",
        price: 549,
        strikedOffPrice: 699,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220207/8Uek/6201389baeb26921af8c7ea3/poplins_brown_%26_white_floral_print_print_top_with_pants_.jpg",
        brand: "POPLINS",
        product: "Floral Print Print Top with Pants",
        gender: "girl",
        category: "kids",
        price: 650,
        strikedOffPrice: 1299,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220211/uedG/6206584caeb26921af93d377/tommy_hilfiger_yellow_brand_print_round-neck_organic_cotton_t-shirt.jpg",
        brand: "TOMMY HILFIGER",
        product: "Brand Print Round-Neck Organic Cotton T-shirt",
        gender: "boy",
        category: "kids",
        price: 1299,
        strikedOffPrice: 1499,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220113/HXSd/61df3fb7aeb2695cdd12271f/peppermint_maroon_%26_white_micro_printed_fit_and_flare_frocks.jpg",
        brand: "PEPPERMINT",
        product: "Micro Printed Fit and Flare Frocks",
        gender: "girl",
        category: "kids",
        price: 1055,
        strikedOffPrice: 1599,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220111/02kd/61dc989bf997dd662318a27f/disney_by_wear_your_mind_black_cartoon_round_neck_t-shirt.jpg",
        brand: "DISNEY",
        product: "Cartoon Round Neck T-shirt",
        gender: "girl",
        category: "kids",
        price: 383,
        strikedOffPrice: 1095,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220207/p3Wq/620112c3aeb26921af8bb430/kb_team_spirit_blue_printed_crew-neck_t-shirt_with_striped_shirt.jpg",
        brand: "KB TEAM SPIRIT",
        product: "Printed Crew-Neck T-shirt with Striped Shirt",
        gender: "boy",
        category: "kids",
        price: 649,
        strikedOffPrice: 999,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20211231/AWpf/61cf1b11f997dd66230bfffb/rio_girls_pink_graphic_print_crew-neck_t-shirt.jpg",
        brand: "RIO GIRLS",
        product: "Graphic Print Crew-Neck T-shirt",
        gender: "girl",
        category: "kids",
        price: 199,
        strikedOffPrice: 249,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220113/gHCk/61df3fa3f997dd66231e6905/peppermint_peach_metallic_print_a-line_dress_with_floral_applique.jpg",
        brand: "PEPPERMINT",
        product: "Metallic Print A-line Dress with Floral Applique",
        gender: "girl",
        category: "kids",
        price: 857,
        strikedOffPrice: 1299,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20211111/GTbi/618d303aaeb2690110c0ed9b/max_red_camouflage_typographic_print_t-shirt_with_doctor_sleeves.jpg",
        brand: "MAX",
        product: "Camouflage Typographic Print T-shirt ",
        gender: "boy",
        category: "kids",
        price: 369,
        strikedOffPrice: 499,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220111/ZOmg/61dca4ccaeb2695cdd0d9e44/max_red_graphic_print_round-neck_t-shirt.jpg",
        brand: "MAX",
        product: "Graphic Print Round-Neck T-shirt",
        gender: "boy",
        category: "kids",
        price: 149,
        strikedOffPrice: 199,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220210/JyHe/620424bef997dd03e2c8cacd/max_multi__v-neck_t-shirt_with_patch_pocket.jpg",
        brand: "MAX",
        product: "V-Neck T-shirt with Patch Pocket",
        gender: "boy",
        category: "kids",
        price: 299,
        strikedOffPrice: 349,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20220215/pMhZ/620bc610aeb26921af99f88b/inf_frendz_blue_%26_white_placement_graphic_print_colourblock_shirt.jpg",
        brand: "INF FRENDZ",
        product: "Placement Graphic Print Colourblock Shirt",
        gender: "boy",
        category: "kids",
        price: 399,
        strikedOffPrice: 449,
    },
    {
        imageURL:
            "https://assets.ajio.com/medias/sys_master/root/20211111/tuQs/618c20e7aeb2690110c0aa65/max_red_graphic_print_round-neck_top.jpg",
        brand: "MAX",
        product: "Graphic Print Round-Neck Top",
        gender: "girl",
        category: "kids",
        price: 329,
        strikedOffPrice: 399,
    },
        {
        imageURL: "https://assets.ajio.com/medias/sys_master/root/20210827/LlLA/61284e447cdb8cb82409f048/bella_moda_green_embellished_fit_%26_flare_dress_with_sling_bag.jpg",
        brand: "BELLA MODA",
        product: "Embellished Fit & Flare Dress with Sling Bag",
        gender: "girl",
        category: "kids",
        price: 669,
        strikedOffPrice: 2157,
    },
];

// Writing Womens Data to Local Storage
localStorage.setItem("kidsData",JSON.stringify(kidData));




var x=JSON.parse(localStorage.getItem("CartItemsOftarun"));
  if(x==null){
    cartArrFF=[];
  }
  else{
    var cartArrFF=JSON.parse(localStorage.getItem("CartItemsOftarun"))
  }


// On Click function
function addToCart(item) {

    if(cartArrFF.length==1){
        cartArrFF.pop();
      }
      cartArrFF.push(item);

    localStorage.setItem("CartItemsOftarun",JSON.stringify(cartArrFF));

window.location.href = "clickedproduct.html";
}
