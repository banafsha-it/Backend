import React, { useState } from "react";
import "./App.css";

const giftData = [
  {
    name: "For the Elegant One",
    icon: "✨",
    budgets: {
      under2000: [
        ["Minimalist Wallet", "A clean and stylish everyday wallet.", "Unisex"],
        ["Satin Scarf", "A soft and elegant scarf for a polished look.", "Female"],
        ["Classic Tie", "A timeless accessory for formal outfits.", "Male"],
        ["Premium Fountain Pen", "An elegant pen for writing and work.", "Unisex"],
      ],
      "2000-3500": [
        ["Leather Card Holder", "A slim and sophisticated card holder.", "Unisex"],
        ["Pearl Hair Accessories", "Elegant pearl accessories for special occasions.", "Female"],
        ["Classic Sunglasses", "Sophisticated sunglasses for everyday style.", "Unisex"],
        ["Executive Notebook", "A premium notebook for work and planning.", "Male"],
      ],
      "3500-5000": [
        ["Leather Handbag", "A stylish handbag for everyday use.", "Female"],
        ["Stainless Steel Watch", "A classic watch with a refined finish.", "Male"],
        ["Premium Perfume Set", "A beautiful fragrance collection.", "Unisex"],
        ["Designer Belt", "A smart accessory for formal outfits.", "Male"],
      ],
      "5000+": [
        ["Premium Leather Bag", "A luxury-inspired leather bag.", "Female"],
        ["Luxury Wrist Watch", "A statement watch for sophisticated style.", "Male"],
        ["Designer Fragrance Collection", "A refined premium fragrance collection.", "Unisex"],
        ["Luxury Jewelry Set", "An elegant jewelry set for special moments.", "Female"],
      ],
    },
  },

  {
    name: "For the Self-Care Lover",
    icon: "🌷",
    budgets: {
      under2000: [
        ["Aromatherapy Candle", "A relaxing scented candle.", "Unisex"],
        ["Hand Cream Set", "A moisturizing hand-care collection.", "Unisex"],
        ["Bath Salt Collection", "A relaxing addition to bath time.", "Unisex"],
        ["Lip Care Set", "A simple nourishing lip-care collection.", "Unisex"],
      ],
      "2000-3500": [
        ["Skincare Essentials Kit", "Everyday skincare products.", "Female"],
        ["Spa Gift Box", "A relaxing collection for an at-home spa.", "Unisex"],
        ["Body Care Set", "Refreshing body-care essentials.", "Unisex"],
        ["Scented Candle Trio", "Three calming fragrances for the home.", "Unisex"],
      ],
      "3500-5000": [
        ["Luxury Skincare Box", "Premium skincare essentials.", "Female"],
        ["Wellness Hamper", "A thoughtful collection of wellness items.", "Unisex"],
        ["Premium Bath Set", "A complete bath-time relaxation set.", "Unisex"],
        ["Self-Care Beauty Box", "A curated beauty and relaxation collection.", "Female"],
      ],
      "5000+": [
        ["Luxury Spa Collection", "A premium spa-inspired collection.", "Unisex"],
        ["Premium Beauty Hamper", "A high-end beauty collection.", "Female"],
        ["Complete Wellness Set", "Luxury wellness products for everyday relaxation.", "Unisex"],
        ["Signature Skincare Collection", "A premium skincare routine in one collection.", "Female"],
      ],
    },
  },

  {
    name: "For the Creative Soul",
    icon: "🎨",
    budgets: {
      under2000: [
        ["Watercolor Set", "Beginner-friendly colors for creative projects.", "Unisex"],
        ["Sketchbook", "Quality paper for drawing and sketching.", "Unisex"],
        ["Calligraphy Pens", "Creative lettering tools for beginners.", "Unisex"],
        ["DIY Craft Kit", "A fun creative project kit.", "Unisex"],
      ],
      "2000-3500": [
        ["Premium Art Set", "A versatile collection of art supplies.", "Unisex"],
        ["Creative Journal", "A beautiful journal for ideas and inspiration.", "Unisex"],
        ["Crochet Starter Kit", "Everything needed for a beginner crochet project.", "Unisex"],
        ["Acrylic Painting Kit", "A colorful collection for acrylic painting.", "Unisex"],
      ],
      "3500-5000": [
        ["Professional Sketch Set", "An expanded collection for artists.", "Unisex"],
        ["Premium Crochet Kit", "A creative crochet collection.", "Unisex"],
        ["Art Marker Collection", "A large marker set for illustration.", "Unisex"],
        ["Photography Starter Kit", "Creative accessories for photographers.", "Unisex"],
      ],
      "5000+": [
        ["Digital Drawing Tablet", "A creative tablet for digital artists.", "Unisex"],
        ["Professional Art Kit", "A complete premium collection for artists.", "Unisex"],
        ["Premium Camera Accessories", "Creative accessories for photography.", "Unisex"],
        ["Luxury Craft Collection", "Premium materials for advanced crafting.", "Unisex"],
      ],
    },
  },

  {
    name: "For the Tech Lover",
    icon: "🎧",
    budgets: {
      under2000: [
        ["Phone Stand", "A minimal desk stand for smartphones.", "Unisex"],
        ["USB Desk Light", "A compact adjustable workspace light.", "Unisex"],
        ["Cable Organizer", "Keeps charging cables neat and organized.", "Unisex"],
        ["Wireless Mouse", "A comfortable mouse for everyday computer use.", "Unisex"],
      ],
      "2000-3500": [
        ["Mechanical Keyboard", "A compact keyboard for productive work.", "Unisex"],
        ["Bluetooth Speaker", "A portable speaker for music.", "Unisex"],
        ["Gaming Mouse", "A responsive mouse designed for gaming.", "Unisex"],
        ["Power Bank", "A portable charging companion.", "Unisex"],
      ],
      "3500-5000": [
        ["Wireless Earbuds", "Compact earbuds for music and calls.", "Unisex"],
        ["Gaming Headset", "An immersive headset for gaming.", "Unisex"],
        ["Smart Desk Lamp", "A modern lamp with adjustable lighting.", "Unisex"],
        ["Smart Fitness Band", "A wearable for everyday activity tracking.", "Unisex"],
      ],
      "5000+": [
        ["Noise Cancelling Earbuds", "Premium earbuds for focused listening.", "Unisex"],
        ["Smartwatch", "A feature-rich smartwatch for everyday use.", "Unisex"],
        ["Gaming Controller", "An advanced controller for gaming.", "Unisex"],
        ["Premium Portable Speaker", "A powerful speaker for music lovers.", "Unisex"],
      ],
    },
  },

  {
    name: "For the Cozy Soul",
    icon: "☕",
    budgets: {
      under2000: [
        ["Ceramic Coffee Mug", "A beautiful mug for morning coffee.", "Unisex"],
        ["Mini Scented Candle", "A warm fragrance for a cozy room.", "Unisex"],
        ["Cozy Socks", "Soft socks for relaxing evenings.", "Unisex"],
        ["Tea Infuser", "A simple accessory for tea lovers.", "Unisex"],
      ],
      "2000-3500": [
        ["Coffee Gift Set", "Coffee essentials for relaxing mornings.", "Unisex"],
        ["Cozy Throw Blanket", "A soft blanket for comfortable evenings.", "Unisex"],
        ["Tea Collection", "A selection of comforting tea flavors.", "Unisex"],
        ["Ceramic Mug Pair", "Matching mugs for cozy coffee moments.", "Unisex"],
      ],
      "3500-5000": [
        ["Premium Coffee Hamper", "A curated collection for coffee lovers.", "Unisex"],
        ["Luxury Candle Set", "Beautiful scented candles for home ambiance.", "Unisex"],
        ["Cozy Home Box", "A comfort-focused collection for home.", "Unisex"],
        ["Premium Tea Set", "Elegant tea accessories and selected teas.", "Unisex"],
      ],
      "5000+": [
        ["Luxury Coffee Experience Set", "A premium collection for coffee enthusiasts.", "Unisex"],
        ["Designer Throw Blanket", "An elegant and comfortable home accessory.", "Unisex"],
        ["Luxury Tea Ceremony Set", "A beautiful set for refined tea moments.", "Unisex"],
        ["Premium Home Comfort Hamper", "A luxurious collection of cozy essentials.", "Unisex"],
      ],
    },
  },

  {
    name: "For the Nature Lover",
    icon: "🌿",
    budgets: {
      under2000: [
        ["Mini Succulent", "An easy-care plant for a desk or shelf.", "Unisex"],
        ["Plant Pot", "A decorative pot for indoor plants.", "Unisex"],
        ["Seed Starter Kit", "A simple kit for growing plants.", "Unisex"],
        ["Botanical Notebook", "A nature-inspired notebook.", "Unisex"],
      ],
      "2000-3500": [
        ["Indoor Plant Set", "A collection of attractive indoor plants.", "Unisex"],
        ["Gardening Starter Kit", "Essential tools for beginner gardeners.", "Unisex"],
        ["Botanical Wall Art", "Nature-inspired decoration for the home.", "Unisex"],
        ["Herb Growing Kit", "A kit for growing fresh herbs indoors.", "Unisex"],
      ],
      "3500-5000": [
        ["Indoor Garden Kit", "A complete kit for a small indoor garden.", "Unisex"],
        ["Premium Planter Set", "Stylish planters for home decoration.", "Unisex"],
        ["Gardening Tool Collection", "Useful tools for passionate gardeners.", "Unisex"],
        ["Terrarium Kit", "A creative miniature indoor garden.", "Unisex"],
      ],
      "5000+": [
        ["Large Indoor Plant", "A statement plant for a beautiful living space.", "Unisex"],
        ["Premium Gardening Set", "High-quality tools for gardeners.", "Unisex"],
        ["Designer Planter Collection", "Elegant planters for modern interiors.", "Unisex"],
        ["Luxury Terrarium", "A beautiful miniature indoor ecosystem.", "Unisex"],
      ],
    },
  },

  {
    name: "For the Adventurer",
    icon: "✈️",
    budgets: {
      under2000: [
        ["Travel Organizer", "Keeps passports and essentials organized.", "Unisex"],
        ["Travel Water Bottle", "A reusable bottle for journeys.", "Unisex"],
        ["Luggage Tag Set", "Stylish tags for frequent travelers.", "Unisex"],
        ["Travel Journal", "A journal for recording memorable journeys.", "Unisex"],
      ],
      "2000-3500": [
        ["Travel Backpack", "A compact backpack for day trips.", "Unisex"],
        ["Packing Cube Set", "Organizes clothing efficiently.", "Unisex"],
        ["Travel Pillow Set", "Comfort accessories for long journeys.", "Unisex"],
        ["Compact Camera Bag", "A protective bag for photography gear.", "Unisex"],
      ],
      "3500-5000": [
        ["Premium Travel Backpack", "A durable backpack for frequent adventures.", "Unisex"],
        ["Travel Luggage Set", "Coordinated luggage for organized travel.", "Unisex"],
        ["Adventure Camera Accessories", "Useful gear for travel photography.", "Unisex"],
        ["Premium Travel Organizer", "A complete organizer for travel essentials.", "Unisex"],
      ],
      "5000+": [
        ["Premium Cabin Luggage", "Stylish luggage for frequent travelers.", "Unisex"],
        ["Professional Travel Backpack", "A feature-rich backpack for adventures.", "Unisex"],
        ["Travel Photography Kit", "Curated photography accessories.", "Unisex"],
        ["Luxury Travel Set", "A premium collection of travel essentials.", "Unisex"],
      ],
    },
  },

  {
    name: "For the Foodie",
    icon: "🍰",
    budgets: {
      under2000: [
        ["Chocolate Box", "A delicious selection of assorted chocolates.", "Unisex"],
        ["Baking Spatula Set", "Useful tools for home bakers.", "Unisex"],
        ["Cookie Gift Tin", "Sweet treats in a beautiful gift tin.", "Unisex"],
        ["Spice Collection", "A selection of flavorful cooking spices.", "Unisex"],
      ],
      "2000-3500": [
        ["Gourmet Chocolate Hamper", "A curated premium chocolate collection.", "Unisex"],
        ["Baking Starter Set", "Essential tools for creative baking.", "Unisex"],
        ["Coffee and Chocolate Box", "A perfect pairing for sweet breaks.", "Unisex"],
        ["Cooking Utensil Set", "Useful kitchen tools for home chefs.", "Unisex"],
      ],
      "3500-5000": [
        ["Premium Gourmet Hamper", "A luxury-inspired collection of treats.", "Unisex"],
        ["Artisan Chocolate Collection", "An elegant specialty chocolate assortment.", "Unisex"],
        ["Baking Essentials Collection", "An expanded set for passionate bakers.", "Unisex"],
        ["Premium Tea and Treats Box", "Selected teas paired with sweet treats.", "Unisex"],
      ],
      "5000+": [
        ["Luxury Gourmet Basket", "A premium collection for food enthusiasts.", "Unisex"],
        ["Premium Chocolate Collection", "An elegant high-end chocolate assortment.", "Unisex"],
        ["Professional Baking Set", "Advanced tools for passionate bakers.", "Unisex"],
        ["Luxury Food Experience Box", "A curated selection of gourmet treats.", "Unisex"],
      ],
    },
  },

  {
    name: "For the Book Lover",
    icon: "📚",
    budgets: {
      under2000: [
        ["Hardcover Novel", "A thoughtful addition to a reading collection.", "Unisex"],
        ["Reading Bookmark Set", "Beautiful bookmarks for everyday reading.", "Unisex"],
        ["Book Sleeve", "A protective sleeve for favorite books.", "Unisex"],
        ["Reading Journal", "A journal for favorite books and quotes.", "Unisex"],
      ],
      "2000-3500": [
        ["Premium Book Set", "A curated collection for readers.", "Unisex"],
        ["Reading Light", "A compact light for nighttime reading.", "Unisex"],
        ["Leather Bookmark", "An elegant bookmark for readers.", "Unisex"],
        ["Book Lover Gift Box", "Useful reading accessories in one box.", "Unisex"],
      ],
      "3500-5000": [
        ["Collectors Book Set", "Beautiful editions for a personal library.", "Unisex"],
        ["Premium Reading Lamp", "An elegant lamp for reading spaces.", "Unisex"],
        ["Library Desk Set", "Sophisticated accessories for a reading desk.", "Unisex"],
        ["Luxury Book Box", "A curated collection for dedicated readers.", "Unisex"],
      ],
      "5000+": [
        ["Premium Collectors Edition", "A beautiful edition for collectors.", "Unisex"],
        ["Luxury Reading Corner Set", "Elegant accessories for a reading space.", "Unisex"],
        ["Premium Book Collection", "A curated collection of beautiful books.", "Unisex"],
        ["Executive Library Set", "Sophisticated accessories for a home library.", "Unisex"],
      ],
    },
  },

  {
    name: "For the Romantic",
    icon: "💕",
    budgets: {
      under2000: [
        ["Personalized Mug", "A meaningful everyday keepsake.", "Unisex"],
        ["Memory Photo Frame", "A frame for a favorite shared memory.", "Unisex"],
        ["Love Letter Set", "Beautiful stationery for heartfelt messages.", "Unisex"],
        ["Mini Flower Bouquet", "A simple romantic gesture.", "Unisex"],
      ],
      "2000-3500": [
        ["Personalized Keychain", "A small keepsake with a meaningful touch.", "Unisex"],
        ["Couple Photo Album", "A place to preserve favorite memories.", "Unisex"],
        ["Romantic Candle Set", "Warm candles for a cozy evening.", "Unisex"],
        ["Personalized Bracelet", "A wearable keepsake for couples.", "Unisex"],
      ],
      "3500-5000": [
        ["Memory Gift Box", "A curated box for meaningful memories.", "Unisex"],
        ["Couple Keepsake Set", "A thoughtful collection for couples.", "Unisex"],
        ["Premium Flower Arrangement", "An elegant floral gift.", "Unisex"],
        ["Personalized Jewelry", "A meaningful personalized accessory.", "Unisex"],
      ],
      "5000+": [
        ["Luxury Couple Gift Box", "A premium collection of romantic keepsakes.", "Unisex"],
        ["Premium Personalized Necklace", "An elegant personalized keepsake.", "Female"],
        ["Luxury Flower Arrangement", "A large elegant arrangement.", "Unisex"],
        ["Premium Memory Collection", "A beautiful collection celebrating memories.", "Unisex"],
      ],
    },
  },
];

/* =========================================================
   CREATE THE COMPLETE DATABASE
========================================================= */

const GIFT_DATABASE = [];

let giftId = 1;

/* =========================================================
   DIRECT IMAGE URLS
========================================================= */

const GIFT_IMAGES = [
  // 1–16 Elegant One
  "https://images.pexels.com/photos/13370907/pexels-photo-13370907.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/2365046/pexels-photo-2365046.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/15036737/pexels-photo-15036737.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/29619105/pexels-photo-29619105.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/13370854/pexels-photo-13370854.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/8100358/pexels-photo-8100358.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/20689005/pexels-photo-20689005.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/21378259/pexels-photo-21378259.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5658856/pexels-photo-5658856.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5827825/pexels-photo-5827825.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/9888084/pexels-photo-9888084.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5827829/pexels-photo-5827829.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5827780/pexels-photo-5827780.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7093186/pexels-photo-7093186.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7541801/pexels-photo-7541801.jpeg?auto=compress&cs=tinysrgb&w=900",

  // 17–32 Self-Care Lover
  "https://images.pexels.com/photos/1652095/pexels-photo-1652095.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7020247/pexels-photo-7020247.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/11635430/pexels-photo-11635430.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/11169881/pexels-photo-11169881.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/33538457/pexels-photo-33538457.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/17555294/pexels-photo-17555294.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/9656216/pexels-photo-9656216.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6311846/pexels-photo-6311846.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4841478/pexels-photo-4841478.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/9496255/pexels-photo-9496255.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6847829/pexels-photo-6847829.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7870488/pexels-photo-7870488.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6690146/pexels-photo-6690146.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7796692/pexels-photo-7796692.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4406798/pexels-photo-4406798.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/3066868/pexels-photo-3066868.jpeg?auto=compress&cs=tinysrgb&w=900",

  // 33–48 Creative Soul
  "https://images.pexels.com/photos/5800235/pexels-photo-5800235.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7898630/pexels-photo-7898630.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7256861/pexels-photo-7256861.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7147723/pexels-photo-7147723.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/10607174/pexels-photo-10607174.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/18840607/pexels-photo-18840607.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/8768119/pexels-photo-8768119.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/36031720/pexels-photo-36031720.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/16313648/pexels-photo-16313648.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/37041292/pexels-photo-37041292.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/13840867/pexels-photo-13840867.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/788817/pexels-photo-788817.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/13071302/pexels-photo-13071302.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/17890947/pexels-photo-17890947.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/37401982/pexels-photo-37401982.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/26563069/pexels-photo-26563069.jpeg?auto=compress&cs=tinysrgb&w=900",

  // 49–64 Tech Lover
  "https://images.pexels.com/photos/27791751/pexels-photo-27791751.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7184222/pexels-photo-7184222.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/11434410/pexels-photo-11434410.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/14401665/pexels-photo-14401665.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/9620477/pexels-photo-9620477.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/15390199/pexels-photo-15390199.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/32977239/pexels-photo-32977239.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/28779692/pexels-photo-28779692.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/20519465/pexels-photo-20519465.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/12504200/pexels-photo-12504200.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7987293/pexels-photo-7987293.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7773382/pexels-photo-7773382.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7776882/pexels-photo-7776882.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/12583098/pexels-photo-12583098.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/10997585/pexels-photo-10997585.jpeg?auto=compress&cs=tinysrgb&w=900",

  // 65–80 Cozy Soul
  "https://images.pexels.com/photos/18757104/pexels-photo-18757104.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7368108/pexels-photo-7368108.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/8329975/pexels-photo-8329975.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6691946/pexels-photo-6691946.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6545406/pexels-photo-6545406.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5104975/pexels-photo-5104975.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/16792213/pexels-photo-16792213.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5189621/pexels-photo-5189621.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/8952008/pexels-photo-8952008.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6545420/pexels-photo-6545420.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5104972/pexels-photo-5104972.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/17571839/pexels-photo-17571839.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/13616779/pexels-photo-13616779.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4472875/pexels-photo-4472875.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/10838930/pexels-photo-10838930.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/17352331/pexels-photo-17352331.jpeg?auto=compress&cs=tinysrgb&w=900",

  // 81–96 Nature Lover
  "https://images.pexels.com/photos/4857870/pexels-photo-4857870.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5830977/pexels-photo-5830977.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/13242090/pexels-photo-13242090.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/10922368/pexels-photo-10922368.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/22610811/pexels-photo-22610811.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/1466434/pexels-photo-1466434.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/10885476/pexels-photo-10885476.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/8543137/pexels-photo-8543137.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6231714/pexels-photo-6231714.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/3971211/pexels-photo-3971211.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7658758/pexels-photo-7658758.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5934017/pexels-photo-5934017.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5218008/pexels-photo-5218008.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/18222297/pexels-photo-18222297.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/19627804/pexels-photo-19627804.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/12467831/pexels-photo-12467831.jpeg?auto=compress&cs=tinysrgb&w=900",

  // 97–112 Adventurer
  "https://images.pexels.com/photos/9185998/pexels-photo-9185998.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/10802875/pexels-photo-10802875.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/15444391/pexels-photo-15444391.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/30117635/pexels-photo-30117635.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/10771784/pexels-photo-10771784.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/18999368/pexels-photo-18999368.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/25210705/pexels-photo-25210705.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/2263817/pexels-photo-2263817.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/14853733/pexels-photo-14853733.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/33808642/pexels-photo-33808642.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/10308839/pexels-photo-10308839.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/17492005/pexels-photo-17492005.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/12944070/pexels-photo-12944070.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/37923464/pexels-photo-37923464.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/2994105/pexels-photo-2994105.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/2994110/pexels-photo-2994110.jpeg?auto=compress&cs=tinysrgb&w=900",

  // 113–128 Foodie
  "https://images.pexels.com/photos/7407278/pexels-photo-7407278.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6245/pexels-photo-6245.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/34310023/pexels-photo-34310023.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6149586/pexels-photo-6149586.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/31325598/pexels-photo-31325598.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6629315/pexels-photo-6629315.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/30222494/pexels-photo-30222494.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/12292645/pexels-photo-12292645.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/14457505/pexels-photo-14457505.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/14288447/pexels-photo-14288447.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/10788700/pexels-photo-10788700.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5446788/pexels-photo-5446788.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6061452/pexels-photo-6061452.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/3952054/pexels-photo-3952054.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/15776580/pexels-photo-15776580.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/12292644/pexels-photo-12292644.jpeg?auto=compress&cs=tinysrgb&w=900",

  // 129–144 Book Lover
  "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/8715442/pexels-photo-8715442.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/15382584/pexels-photo-15382584.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/8790934/pexels-photo-8790934.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/35930243/pexels-photo-35930243.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/27296579/pexels-photo-27296579.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7013243/pexels-photo-7013243.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/32023525/pexels-photo-32023525.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/9565975/pexels-photo-9565975.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/12593769/pexels-photo-12593769.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/20092857/pexels-photo-20092857.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/20092846/pexels-photo-20092846.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/34217713/pexels-photo-34217713.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6281016/pexels-photo-6281016.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6549637/pexels-photo-6549637.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7695412/pexels-photo-7695412.jpeg?auto=compress&cs=tinysrgb&w=900",

  // 145–160 Romantic
  "https://images.pexels.com/photos/6692088/pexels-photo-6692088.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/8861594/pexels-photo-8861594.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/3731876/pexels-photo-3731876.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/12272314/pexels-photo-12272314.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/15680035/pexels-photo-15680035.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/15679999/pexels-photo-15679999.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/30403642/pexels-photo-30403642.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/12194240/pexels-photo-12194240.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/29808411/pexels-photo-29808411.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/9686731/pexels-photo-9686731.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/9451139/pexels-photo-9451139.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/30403643/pexels-photo-30403643.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/29808397/pexels-photo-29808397.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/15233460/pexels-photo-15233460.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/15955322/pexels-photo-15955322.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/11178582/pexels-photo-11178582.jpeg?auto=compress&cs=tinysrgb&w=900",
];

function createGiftImage(giftName, categoryName, id) {
  return GIFT_IMAGES[(id - 1) % GIFT_IMAGES.length];
}

giftData.forEach(function (category) {
  Object.keys(category.budgets).forEach(function (budget) {
    category.budgets[budget].forEach(function (gift) {
      GIFT_DATABASE.push({
        id: giftId,
        name: gift[0],
        description: gift[1],
        gender: gift[2],
        category: category.name,
        icon: category.icon,
        budget: budget,
        image: createGiftImage(
          gift[0],
          category.name,
          giftId
        ),
      });

      giftId++;
    });
  });
});

/* =========================================================
   OPTIONS
========================================================= */

const relationships = [
  "Mom",
  "Dad",
  "Sister",
  "Brother",
  "Partner",
  "Friend",
  "Teacher",
  "Colleague",
  "Other",
];

const genders = [
  "Everyone",
  "Male",
  "Female",
];

const ages = [
  "Under 15",
  "15–20",
  "21–30",
  "31–45",
  "46–60",
  "60+",
];

const occasions = [
  "Birthday",
  "Anniversary",
  "Graduation",
  "Wedding",
  "Eid",
  "Thank You",
  "Just Because",
];

const budgets = [
  {
    value: "under2000",
    label: "Under Rs. 2,000",
  },
  {
    value: "2000-3500",
    label: "Rs. 2,000 – 3,500",
  },
  {
    value: "3500-5000",
    label: "Rs. 3,500 – 5,000",
  },
  {
    value: "5000+",
    label: "Rs. 5,000+",
  },
];

function getBudgetLabel(value) {
  const found = budgets.find(function (item) {
    return item.value === value;
  });

  return found ? found.label : value;
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const [relationship, setRelationship] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [occasion, setOccasion] = useState("");
  const [interest, setInterest] = useState("");
  const [budget, setBudget] = useState("");

  const [results, setResults] = useState([]);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [profileName, setProfileName] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user") || "{}").name || ""; }
    catch { return ""; }
  });
  const [profileEmail, setProfileEmail] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user") || "{}").email || ""; }
    catch { return ""; }
  });
  const [profileMessage, setProfileMessage] = useState("");

  function goToPage(newPage) {
    setPage(newPage);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function findGifts() {
    let filtered = GIFT_DATABASE;

    if (interest !== "") {
      filtered = filtered.filter(function (gift) {
        return gift.category === interest;
      });
    }

    if (gender !== "" && gender !== "Everyone") {
      filtered = filtered.filter(function (gift) {
        return (
          gift.gender === gender ||
          gift.gender === "Unisex"
        );
      });
    }

    if (budget !== "") {
      filtered = filtered.filter(function (gift) {
        return gift.budget === budget;
      });
    }

    setResults(filtered);
    setPage("browse");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function showCategory(categoryName) {
    setInterest(categoryName);

    const filtered = GIFT_DATABASE.filter(function (gift) {
      return gift.category === categoryName;
    });

    setResults(filtered);
    setPage("browse");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function resetFinder() {
    setRelationship("");
    setGender("");
    setAge("");
    setOccasion("");
    setInterest("");
    setBudget("");
    setResults([]);
    setPage("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <button
          className="logo"
          onClick={function () {
            goToPage("home");
          }}
        >
          <span style={{ color: "#452231" }}>GiftGenius</span>
        </button>

        <div className={"nav-links " + (menuOpen ? "open" : "")}>

          <button
            className={page === "home" ? "active" : ""}
            onClick={function () {
              goToPage("home");
            }}
          >
            Home
          </button>

          <button
            className={page === "browse" ? "active" : ""}
            onClick={function () {
              goToPage("browse");
            }}
          >
            Browse
          </button>

          <button
            className={page === "about" ? "active" : ""}
            onClick={function () {
              goToPage("about");
            }}
          >
            About Us
          </button>

          {!localStorage.getItem("token") && (
            <button
              className={page === "login" ? "active" : ""}
              onClick={function () {
                goToPage("login");
              }}
            >
              Log In
            </button>
          )}

        </div>

        {localStorage.getItem("token") && (
          <button
            type="button"
            className={"nav-profile-button " + (page === "profile" ? "active" : "")}
            aria-label="Open your profile"
            title={profileName ? profileName + "'s profile" : "Your profile"}
            onClick={function () {
              goToPage("profile");
            }}
          >
            {profileName.trim() ? profileName.trim().charAt(0).toUpperCase() : "🎁"}
          </button>
        )}

        <button
          className="menu-btn"
          onClick={function () {
            setMenuOpen(!menuOpen);
          }}
        >
          ☰
        </button>

      </nav>

      {/* =================================================
          HOME PAGE
      ================================================= */}

      {page === "home" && (
        <main>

          <section className="hero">

            <div className="hero-content">

              <span className="hero-label">
                THE ART OF GIVING
              </span>

              <h1>
                Make every moment <em>unforgettable.</em>
              </h1>

              <p>
                Thoughtful gift ideas, beautifully curated
                for the people who matter most.
              </p>

              <button
                className="hero-btn"
                onClick={function () {
                  document
                    .getElementById("finder")
                    .scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                Discover Their Gift →
              </button>

            </div>

          </section>

          {/* INTRO */}

          <section className="intro-section">

            <span className="section-label">
              A LITTLE INSPIRATION
            </span>

            <h2>
              Because the right gift says <em>more.</em>
            </h2>

            <p>
              Tell us a little about them and GiftGenius
              will help you discover thoughtful ideas that
              fit their personality, occasion and budget.
            </p>

          </section>

          {/* FINDER */}

          <section
            className="finder-section"
            id="finder"
          >

            <div className="finder-card">

              <div className="finder-heading">

                <span className="section-label">
                  YOUR PERSONAL GIFT EDIT
                </span>

                <h2>
                  Tell us about <em>them.</em>
                </h2>

                <p>
                  The more you tell us, the more personal
                  your gift suggestions become.
                </p>

              </div>

              <div className="finder-grid">

                <div className="finder-field">
                  <label>For Whom</label>

                  <select
                    value={relationship}
                    onChange={function (e) {
                      setRelationship(e.target.value);
                    }}
                  >
                    <option value="">
                      Choose relationship
                    </option>

                    {relationships.map(function (item) {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="finder-field">
                  <label>Gender</label>

                  <select
                    value={gender}
                    onChange={function (e) {
                      setGender(e.target.value);
                    }}
                  >
                    <option value="">
                      Choose gender
                    </option>

                    {genders.map(function (item) {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="finder-field">
                  <label>Age</label>

                  <select
                    value={age}
                    onChange={function (e) {
                      setAge(e.target.value);
                    }}
                  >
                    <option value="">
                      Choose age
                    </option>

                    {ages.map(function (item) {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="finder-field">
                  <label>Occasion</label>

                  <select
                    value={occasion}
                    onChange={function (e) {
                      setOccasion(e.target.value);
                    }}
                  >
                    <option value="">
                      Choose occasion
                    </option>

                    {occasions.map(function (item) {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="finder-field">
                  <label>Personality</label>

                  <select
                    value={interest}
                    onChange={function (e) {
                      setInterest(e.target.value);
                    }}
                  >
                    <option value="">
                      Choose personality
                    </option>

                    {giftData.map(function (category) {
                      return (
                        <option
                          key={category.name}
                          value={category.name}
                        >
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="finder-field">
                  <label>Budget</label>

                  <select
                    value={budget}
                    onChange={function (e) {
                      setBudget(e.target.value);
                    }}
                  >
                    <option value="">
                      Choose budget
                    </option>

                    {budgets.map(function (item) {
                      return (
                        <option
                          key={item.value}
                          value={item.value}
                        >
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </div>

              </div>

              <button
                className="find-btn"
                onClick={findGifts}
              >
                Find My Gifts →
              </button>

            </div>

          </section>

          {/* CATEGORIES */}

          <section className="categories-section">

            <div className="section-heading">

              <span className="section-label">
                GIFT PERSONALITIES
              </span>

              <h2>
                Find their <em>kind.</em>
              </h2>

            </div>

            <div className="category-grid">

              {giftData.map(function (category) {
                return (
                  <button
                    className="category-card"
                    key={category.name}
                    onClick={function () {
                      showCategory(category.name);
                    }}
                  >

                    <span className="category-icon">
                      {category.icon}
                    </span>

                    <span className="category-name">
                      {category.name.replace("For the ", "")}
                    </span>

                    <span className="category-arrow">
                      →
                    </span>

                  </button>
                );
              })}

            </div>

          </section>

          {/* ABOUT PREVIEW */}

          <section className="home-about">

            <div className="home-about-text">

              <span className="section-label">
                ABOUT GIFTGENIUS
              </span>

              <h2>
                Giving should feel <em>personal.</em>
              </h2>

              <p>
                GiftGenius is designed to take the guesswork
                out of gift-giving. Discover ideas based on
                personality, occasion and budget.
              </p>

              <button
                className="outline-btn"
                onClick={function () {
                  goToPage("about");
                }}
              >
                Our Story →
              </button>

            </div>

          </section>

        </main>
      )}

      {/* =================================================
          BROWSE PAGE
      ================================================= */}

      {page === "browse" && (
        <main className="browse-page">

          <section className="browse-hero">

            <div>

              <span className="hero-label">
                YOUR GIFT EDIT
              </span>

              <h1>
                Thoughtful gifts, <em>beautifully chosen.</em>
              </h1>

              <p>
                Explore suggestions curated around their
                personality and your preferences.
              </p>

            </div>

          </section>

          {/* ANSWERS */}

          <section className="answers-section">

            <div className="answers-inner">

              <div className="answers-title">

                <span>
                  Your selections
                </span>

                <button
                  onClick={function () {
                    goToPage("home");
                  }}
                >
                  Edit answers →
                </button>

              </div>

              <div className="answers-grid">

                {relationship && (
                  <div className="answer-item">
                    <small>FOR WHOM</small>
                    <strong>{relationship}</strong>
                  </div>
                )}

                {gender && (
                  <div className="answer-item">
                    <small>GENDER</small>
                    <strong>{gender}</strong>
                  </div>
                )}

                {age && (
                  <div className="answer-item">
                    <small>AGE</small>
                    <strong>{age}</strong>
                  </div>
                )}

                {occasion && (
                  <div className="answer-item">
                    <small>OCCASION</small>
                    <strong>{occasion}</strong>
                  </div>
                )}

                {interest && (
                  <div className="answer-item">
                    <small>PERSONALITY</small>
                    <strong>{interest}</strong>
                  </div>
                )}

                {budget && (
                  <div className="answer-item">
                    <small>BUDGET</small>
                    <strong>
                      {getBudgetLabel(budget)}
                    </strong>
                  </div>
                )}

              </div>

            </div>

          </section>

          {/* RESULTS */}

          <section className="results-section">

            <div className="results-heading">

              <div>

                <span className="section-label">
                  CURATED FOR YOU
                </span>

                <h2>
                  Your <em>gift ideas.</em>
                </h2>

              </div>

              <p>
                {results.length} suggestions found
              </p>

            </div>

            {results.length > 0 ? (

              <div className="gift-grid">

                {results.map(function (gift) {

                  return (
                    <article
                      className="gift-card"
                      key={gift.id}
                    >

                      <div className="gift-image">

                        <img
                          src={gift.image}
                          alt={gift.name}
                          loading="lazy"
                          onError={function (e) {
                            e.currentTarget.style.display = "none";
                          }}
                        />

                        <span className="gift-category">
                          {gift.category.replace(
                            "For the ",
                            ""
                          )}
                        </span>

                      </div>

                      <div className="gift-info">

                        <h3>
                          {gift.name}
                        </h3>

                        <p>
                          {gift.description}
                        </p>

                        <div className="gift-bottom">

                          <strong>
                            {getBudgetLabel(
                              gift.budget
                            )}
                          </strong>

                          <span>
                            {gift.gender}
                          </span>

                        </div>

                      </div>

                    </article>
                  );
                })}

              </div>

            ) : (

              <div className="no-results">

                <div className="no-results-icon">
                  🎁
                </div>

                <h2>
                  Let's find their perfect gift.
                </h2>

                <p>
                  Choose your preferences to see
                  personalized gift ideas.
                </p>

                <button
                  className="find-btn"
                  onClick={function () {
                    goToPage("home");
                  }}
                >
                  Start Finding →
                </button>

              </div>

            )}

          </section>

          <section className="browse-bottom">

            <span className="section-label">
              STILL LOOKING?
            </span>

            <h2>
              There is always another <em>beautiful idea.</em>
            </h2>

            <p>
              Change your preferences and explore
              a completely different collection.
            </p>

            <button
              className="outline-btn"
              onClick={resetFinder}
            >
              Start Again →
            </button>

          </section>

        </main>
      )}

      {/* =================================================
          ABOUT PAGE
      ================================================= */}

      {page === "about" && (
        <main>

          <section className="about-section">

            <div className="about-overlay"></div>

            <div className="about-content">

              <span className="about-label">
                THE GIFTGENIUS STORY
              </span>

              <h1>
                More than a gift. <em>A feeling.</em>
              </h1>

              <p>
                GiftGenius was created around one simple idea:
                finding a meaningful gift should be exciting,
                not stressful.
              </p>

              <p>
                We bring together thoughtful ideas based on
                personality, occasion and budget.
              </p>

              <p className="about-quote">
                “The most memorable gifts are the ones
                that feel chosen.”
              </p>

            </div>

          </section>

          <section className="about-details">

            <div>

              <span className="section-label">
                OUR PURPOSE
              </span>

              <h2>
                Making thoughtful giving <em>easier.</em>
              </h2>

            </div>

            <div>

              <p>
                GiftGenius is a gift discovery platform.
                It does not process orders or sell products.
              </p>

              <p>
                Instead, it helps people explore suitable
                gift ideas through a personalized
                recommendation experience.
              </p>

              <p>
                From the elegant one to the creative soul,
                the tech lover to the romantic, there is
                an idea for every personality.
              </p>

            </div>

          </section>

        </main>
      )}

      {/* =================================================
          LOGIN
      ================================================= */}

      {page === "login" && (
        <main className="login-page">

          <div className="login-card">

            <span className="section-label">
              WELCOME BACK
            </span>

            <h1>
              It's lovely to see you <em>again.</em>
            </h1>

            <p>
              Sign in to continue discovering thoughtful gift ideas.
            </p>
                
                
<form
  onSubmit={async function (e) {
    e.preventDefault();
    setLoginMessage("Logging in...");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: loginEmail,
            password: loginPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setLoginMessage(
          data.message || "Login failed. Please try again."
        );
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setProfileName(data.user?.name || "");
      setProfileEmail(data.user?.email || loginEmail);
      setProfileMessage("");
      setPage("profile");

    } catch (error) {
      setLoginMessage(
        "Cannot connect to the server. Please try again."
      );
    }
  }}
>
              <label htmlFor="login-email">Email Address</label>

              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                value={loginEmail}
                onChange={function (e) {
                  setLoginEmail(e.target.value);
                }}
                required
              />

              <label htmlFor="login-password">Password</label>

              <div className="password-field">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={loginPassword}
                  onChange={function (e) {
                    setLoginPassword(e.target.value);
                  }}
                  required
                  minLength={6}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={function () {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <button
                className="find-btn"
                type="submit"
              >
                Log In →
              </button>

              {loginMessage && (
                <p className="login-message">
                  {loginMessage}
                </p>
              )}

            </form>

            <p className="login-note">
              Find something thoughtful for someone special. ♡
            </p>

          </div>

        </main>
      )}
{page === "profile" && (
        <main className="profile-page">
          <section className="profile-shell">
            <div className="profile-heading">
              <span className="profile-eyebrow">YOUR PERSONAL SPACE</span>
              <h1>My <em>Profile</em></h1>
              <p>Your little corner of GiftGenius. Keep your details up to date.</p>
            </div>

            <div className="profile-layout">
              <aside className="profile-welcome-card">
                <div className="profile-avatar" aria-label="Profile avatar">
                  {profileName.trim() ? profileName.trim().charAt(0).toUpperCase() : "🎁"}
                </div>
                <span className="profile-gold-line" />
                <p className="profile-welcome-label">A WARM WELCOME</p>
                <h2>Lovely to see you{profileName.trim() ? "," : ""}<br />
                  <em>{profileName.trim() || "GiftGenius Member"}</em>
                </h2>
                <p className="profile-welcome-copy">Thoughtful gifting begins with you. We’re happy to have you here.</p>
                <div className="profile-member-tag">✦ GIFTGENIUS MEMBER</div>
              </aside>

              <div className="profile-details-card">
                <div className="profile-card-heading">
                  <div>
                    <span className="profile-eyebrow">ACCOUNT DETAILS</span>
                    <h2>Personal information</h2>
                  </div>
                  <span className="profile-heading-icon">✧</span>
                </div>

                <form className="profile-form" onSubmit={function (e) {
                  e.preventDefault();
                  const user = JSON.parse(localStorage.getItem("user") || "{}");
                  const name = profileName.trim();
                  const email = profileEmail.trim().toLowerCase();
                  if (!name || !email) {
                    setProfileMessage("Please enter your name and email address.");
                    return;
                  }
                  const updatedUser = { ...user, name, email };
                  localStorage.setItem("user", JSON.stringify(updatedUser));
                  setProfileName(name);
                  setProfileEmail(email);
                  setProfileMessage("Your profile details have been saved on this device.");
                }}>
                  <label htmlFor="profileName">Full name</label>
                  <input id="profileName" type="text" value={profileName} onChange={e => setProfileName(e.target.value)} placeholder="Your full name" required />

                  <label htmlFor="profileEmail">Email address</label>
                  <input id="profileEmail" type="email" value={profileEmail} onChange={e => setProfileEmail(e.target.value)} placeholder="you@example.com" required />

                  <button className="profile-primary-btn" type="submit">Save changes <span>→</span></button>
                </form>

                {profileMessage && <p className="profile-message" role="status">{profileMessage}</p>}


                <div className="profile-logout-row">
                  <div><strong>Ready to leave?</strong><p>You can sign out of your account on this device.</p></div>
                  <button className="profile-logout-btn" type="button" onClick={function () {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    setProfileName("");
                    setProfileEmail("");
                    setProfileMessage("");
                    setLoginEmail("");
                    setLoginPassword("");
                    setPage("login");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}>Log out ↗</button>
                </div>
              </div>
            </div>
            <p className="profile-edit-note">Note: profile name and email changes are currently saved in this browser. To update them in your database too, the backend needs a profile-update route.</p>
          </section>
        </main>
      )}

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">

        <div className="footer-brand">

          <button
            className="logo"
            onClick={function () {
              goToPage("home");
            }}
          >
           
            <span style={{ color: "#452231" }}>GiftGenius</span>
          </button>

          <p>
            Thoughtful gift ideas for every person,
            personality and special moment.
          </p>

        </div>

        <div className="footer-links">

          <div>

            <h4>Explore</h4>

            <button
              onClick={function () {
                goToPage("home");
              }}
            >
              Home
            </button>

            <button
              onClick={function () {
                goToPage("browse");
              }}
            >
              Browse Gifts
            </button>

            <button
              onClick={function () {
                goToPage("about");
              }}
            >
              About Us
            </button>

          </div>

          <div>

            <h4>Gift Personalities</h4>

            <button
              onClick={function () {
                showCategory(
                  "For the Elegant One"
                );
              }}
            >
              Elegant One
            </button>

            <button
              onClick={function () {
                showCategory(
                  "For the Self-Care Lover"
                );
              }}
            >
              Self-Care Lover
            </button>

            <button
              onClick={function () {
                showCategory(
                  "For the Tech Lover"
                );
              }}
            >
              Tech Lover
            </button>

            <button
              onClick={function () {
                showCategory(
                  "For the Romantic"
                );
              }}
            >
              Romantic
            </button>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 GiftGenius
          </span>

          <span>
            Made for thoughtful giving.
          </span>

        </div>

      </footer>

    </div>
  );
}