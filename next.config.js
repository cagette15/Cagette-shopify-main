/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['cdn.shopify.com']
  },
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
      headers.push({
        source: '/:path*',


      });
    }
    return headers;
  },
  async redirects() {
    return [
      {
        source: '/products/1-2kg-australian-beef-prime-rib-wagyu',
        destination: '/products/australian-beef-prime-rib-wagyu',
        permanent: true,
      },
      {
        source: '/products/abondance-100g',
        destination: '/products/abondance',
        permanent: true,
      },
      {
        source: '/products/anchovies-in-oil-by-cagette-100g',
        destination: '/products/anchovies-in-oil',
        permanent: true,
      },


      {
        source: '/products/avocado-pc',
        destination: '/products/avocado',
        permanent: true,
      },
      {
        source: '/products/baby-carrots-250g',
        destination: '/products/baby-carrots',
        permanent: true,
      },
      {
        source: '/products/baby-spinach-100g',
        destination: '/products/baby-spinach',
        permanent: true,
      },
      {
        source: '/products/baguette-tradition',
        destination: '/products/baguette-tradition',
        permanent: true,
      },

      {
        source: '/products/bayonne-ham-100g',
        destination: '/products/bayonne-ham',
        permanent: true,
      },
      {
        source: '/products/bbq-pork',
        destination: '/products/barbecue-pork',
        permanent: true,
      },
      {
        source: '/products/beaufort-summer-a-o-c-100g',
        destination: '/products/beaufort-summer-aoc',
        permanent: true,
      },
      {
        source: '/products/beef-bresaola-by-cagette-100g',
        destination: '/products/beef-bresaola',
        permanent: true,
      },
      {
        source: '/products/beef-ribeye-angus-300g',
        destination: '/products/beef-ribeye-angus',
        permanent: true,
      },
      {
        source: '/products/beef-tenderloin-180g',
        destination: '/products/beef-tenderloin',
        permanent: true,
      },
      {
        source: '/products/beef-tomato-500g',
        destination: '/products/beef-tomato',
        permanent: true,
      },
      {
        source: '/products/beef-wellington-200g-individual-serving',
        destination: '/products/beef-wellington',
        permanent: true,
      },
      {
        source: '/products/beef-wellington-800g',
        destination: '/products/beef-wellington',
        permanent: true,
      },
      {
        source: '/products/bell-peppers-by-cagette-100g',
        destination: '/products/bell-peppers',
        permanent: true,
      },
      {
        source: '/products/beurre-isigny-sainte-mere-250g-salted',
        destination: '/products/butter-isigny-sainte-mere-salted',
        permanent: true,
      },
      {
        source: '/products/beurre-isigny-sainte-mere-25g-salted',
        destination: '/products/butter-isigny-sainte-mere-salted',
        permanent: true,
      },
      {
        source: '/products/beurre-isigny-sainte-mere-25g-unsalted',
        destination: '/products/butter-isigny-sainte-mere-unsalted',
        permanent: true,
      },
      {
        source: '/products/black-forest-ham-100g',
        destination: '/products/black-forest-ham',
        permanent: true,
      },
      {
        source: '/products/black-kalamata-olives-with-pesto-chili-by-cagette-100g',
        destination: '/products/black-kalamata-olives',
        permanent: true,
      },
      {
        source: '/products/bleu-dauvergne-100g',
        destination: '/products/bleu-dauvergne',
        permanent: true,
      },
      {
        source: '/products/bleu-des-causses-100g',
        destination: '/products/bleu-des-causses',
        permanent: true,
      },
      {
        source: '/products/blinis-24-pcs',
        destination: '/products/blinis',
        permanent: true,
      },
      {
        source: '/products/bouchot-mussels-400g',
        destination: '/products/bouchot-mussels',
        permanent: true,
      },
      {
        source: '/products/box-fresh-oysters-fine-de-claire-no4-50pcs',
        destination: '/products/oysters-fine-de-claire-no4',
        permanent: true,
      },
      {
        source: '/products/brie-de-meaux-100g',
        destination: '/products/brie-de-meaux',
        permanent: true,
      },
      {
        source: '/products/brillat-savarin-200g',
        destination: '/products/brillat-savarin',
        permanent: true,
      },
      {
        source: '/products/brillat-savarin-truffe-by-cagette-220g',
        destination: '/products/brillat-savarin-truffle',
        permanent: true,
      },
      {
        source: '/products/brioche-loaf-portion-250g',
        destination: '/products/brioche-loaf',
        permanent: true,
      },
      {
        source: '/products/brown-crab-1kg',
        destination: '/products/brown-crab',
        permanent: true,
      },
      {
        source: '/products/brunch',
        destination: '/products/brunch',
        permanent: true,
      },
      {
        source: '/products/buchette-chevre-180g',
        destination: '/products/buchette-chevre',
        permanent: true,
      },
      {
        source: '/products/burgundy-snails-12-pcs',
        destination: '/products/burgundy-snails',
        permanent: true,
      },
      {
        source: '/products/burrata-from-italy-275g',
        destination: '/products/burrata',
        permanent: true,
      },

      {
        source: '/products/camembert-normandie-250g',
        destination: '/products/camembert-normandie',
        permanent: true,
      },
      {
        source: '/products/caramelized-onion-marmelade-by-cagette-100g',
        destination: '/products/caramelized-onion-marmelade',
        permanent: true,
      },

      {
        source: '/products/caviar-baerii-prunier-30gr',
        destination: '/products/caviar-baerii-prunier',
        permanent: true,
      },
      {
        source: '/products/chabichou-du-poitou-160g',
        destination: '/products/chabichou-du-poitou',
        permanent: true,
      },
      {
        source: '/products/chaource-aop-100g',
        destination: '/products/chaource-aop',
        permanent: true,
      },
      {
        source: '/products/cheese-gougeres-box-of-6pcs',
        destination: '/products/cheese-gougeres',
        permanent: true,
      },

      {
        source: '/products/cherry-tomato-250g',
        destination: '/products/cherry-tomato',
        permanent: true,
      },
      {
        source: '/products/chicken-liver-mousse-by-cagette-100g',
        destination: '/products/chicken-liver-mousse',
        permanent: true,
      },
      {
        source: '/products/chili-olive-oil-extra-virgin-250ml',
        destination: '/products/chili-olive-oil-extra-virgin',
        permanent: true,
      },

      {
        source: '/products/chocolate-mousse-180g',
        destination: '/products/chocolate-mousse',
        permanent: true,
      },

      {
        source: '/products/christmas-gianduja-buche-4-to-6-pax',
        destination: '/products/christmas-gianduja-buche',
        permanent: true,
      },
      {
        source: '/products/christmas-yule-log-10-to-12-people',
        destination: '/products/christmas-yule-log',
        permanent: true,
      },
      {
        source: '/products/cold-cuts-platter-200gr',
        destination: '/products/cold-cuts-platter-premium',
        permanent: true,
      },
      {
        source: '/products/cold-cuts-platter-600gr',
        destination: '/products/cold-cuts-platter',
        permanent: true,
      },
      {
        source: '/products/comte-20-mois-100g',
        destination: '/products/comte-20-months',
        permanent: true,
      },
      {
        source: '/products/cooked-king-prawns-200g',
        destination: '/products/cooked-king-prawns',
        permanent: true,
      },
      {
        source: '/products/coppa-by-cagette-100g',
        destination: '/products/coppa',
        permanent: true,
      },
      {
        source: '/products/coppa-di-parma-100g',
        destination: '/products/coppa-di-parma',
        permanent: true,
      },
      {
        source: '/products/cornichons-onions-pickled-350g',
        destination: '/products/cornichons-onions-pickled',
        permanent: true,
      },
      {
        source: '/products/cornichons-onions-pickled-by-cagette-350g',
        destination: '/products/cornichons-onions-pickled',
        permanent: true,
      },
      {
        source: '/products/couscous-divella-500gr',
        destination: '/products/couscous-divella',
        permanent: true,
      },

      {
        source: '/products/creme-brulee-200g',
        destination: '/products/creme-brulee',
        permanent: true,
      },
      {
        source: '/products/croissant-au-beurre-70g',
        destination: '/products/croissant-au-beurre',
        permanent: true,
      },
      {
        source: '/products/crottin-chavignol-60g',
        destination: '/products/crottin-chavignol',
        permanent: true,
      },
      {
        source: '/products/cured-chorizo-mild-by-cagette-100g',
        destination: '/products/cured-chorizo',
        permanent: true,
      },
      {
        source: '/products/cured-duck-magret-by-cagette-100g',
        destination: '/products/cured-duck-magret',
        permanent: true,
      },
      {
        source: '/products/cured-pancetta-by-cagette-100g',
        destination: '/products/cured-pancetta',
        permanent: true,
      },
      {
        source: '/products/cured-shoulder-ham-by-cagette-100g',
        destination: '/products/cured-shoulder-ham',
        permanent: true,
      },
      {
        source: '/products/dill-cream-100gr',
        destination: '/products/dill-cream',
        permanent: true,
      },
      {
        source: '/products/dips-assortment-of-3-flavors',
        destination: '/products/dips-assortment',
        permanent: true,
      },

      {
        source: '/products/duck-confit-rillettes-by-cagette-100g',
        destination: '/products/duck-confit-rillettes',
        permanent: true,
      },
      {
        source: '/products/duck-leg-confit-by-cagette-500g-cooked',
        destination: '/products/duck-leg-confit',
        permanent: true,
      },
      {
        source: '/products/duck-pate-en-croute-slice-of-200gr',
        destination: '/products/duck-pate-en-croute',
        permanent: true,
      },
      {
        source: '/products/dutch-razor-clams-400g',
        destination: '/products/dutch-razor-clams',
        permanent: true,
      },
      {
        source: '/products/easter-chocolate-eggs-10pc',
        destination: '/products/easter-chocolate-eggs',
        permanent: true,
      },
      {
        source: '/products/easter-dark-chocolate-shells-10pc',
        destination: '/products/easter-dark-chocolate-shells',
        permanent: true,
      },
      {
        source: '/products/emmental-100g',
        destination: '/products/emmental',
        permanent: true,
      },
      {
        source: '/products/extra-virgin-olive-oil-250ml-2',
        destination: '/products/extra-virgin-olive-oil',
        permanent: true,
      },
      {
        source: '/products/fennel-250g',
        destination: '/products/fennel',
        permanent: true,
      },
      {
        source: '/products/fig-preserve-100g',
        destination: '/products/fig-preserve',
        permanent: true,
      },
      {
        source: '/products/fine-de-claire-no2-dozen',
        destination: '/products/oyster-fine-de-claire-no2',
        permanent: true,
      },
      {
        source: '/products/fine-de-claire-no3-dozen',
        destination: '/products/oyster-fine-de-claire-no3',
        permanent: true,
      },
      {
        source: '/products/fine-de-claire-verte-la-sublime-no2-dozen',
        destination: '/products/oyster-fine-de-claire-verte-no2',
        permanent: true,
      },
      {
        source: '/products/focaccia-150g',
        destination: '/products/focaccia',
        permanent: true,
      },

      {
        source: '/products/foie-gras-terrine-by-cagette-100g',
        destination: '/products/foie-gras-terrine',
        permanent: true,
      },
      {
        source: '/products/fourme-dambert-100g',
        destination: '/products/fourme-dambert',
        permanent: true,
      },
      {
        source: '/products/free-range-eggs-6pcs',
        destination: '/products/free-range-eggs',
        permanent: true,
      },
      {
        source: '/products/french-palourdes-clams-400g',
        destination: '/products/french-palourdes-clams',
        permanent: true,
      },
      {
        source: '/products/fresh-mexican-chorizo-by-cagette-3pcs-300g',
        destination: '/products/fresh-mexican-chorizo',
        permanent: true,
      },
      {
        source: '/products/fresh-salmon-isigny-180g',
        destination: '/products/fresh-salmon-isigny',
        permanent: true,
      },
      {
        source: '/products/fresh-salmon-scottish-180g',
        destination: '/products/fresh-salmon-scottish',
        permanent: true,
      },
      {
        source: '/products/fresh-tomato-sauce-by-cagette-360g',
        destination: '/products/fresh-tomato-sauce',
        permanent: true,
      },
      {
        source: '/products/galet-au-poivre-100g',
        destination: '/products/galet-au-poivre',
        permanent: true,
      },
      {
        source: '/products/gillardeau-oysters-n2-box-48pcs',
        destination: '/products/gillardeau-oysters-n2',
        permanent: true,
      },
      {
        source: '/products/gourmet-cheese-platter-250gr',
        destination: '/products/gourmet-cheese-platter',
        permanent: true,
      },
      {
        source: '/products/grana-padano-100g',
        destination: '/products/grana-padano',
        permanent: true,
      },
      {
        source: '/products/green-olives-citrus-by-cagette-100g',
        destination: '/products/green-olives-citrus',
        permanent: true,
      },
      {
        source: '/products/gruyere-dalpage-100g',
        destination: '/products/gruyere-dalpage',
        permanent: true,
      },
      {
        source: '/products/half-roasted-chicken-600g',
        destination: '/products/roasted-chicken',
        permanent: true,
      },
      {
        source: '/products/harissa-cirio-120gr',
        destination: '/products/harissa-cirio',
        permanent: true,
      },
      {
        source: '/products/home-smoked-salmon-sausage-80g',
        destination: '/products/home-smoked-salmon-sausage',
        permanent: true,
      },
      {
        source: '/products/homemade-fresh-juices-250ml',
        destination: '/products/homemade-fresh-juices',
        permanent: true,
      },
      {
        source: '/products/homemade-mayonnaise-180g',
        destination: '/products/homemade-mayonnaise',
        permanent: true,
      },
      {
        source: '/products/hummus-100g',
        destination: '/products/hummus',
        permanent: true,
      },
      {
        source: '/products/iberico-chorizo-100g',
        destination: '/products/iberico-chorizo',
        permanent: true,
      },
      {
        source: '/products/iberico-puro-bellota-ham-48-months-50g',
        destination: '/products/iberico-puro-bellota-ham-48-months',
        permanent: true,
      },
      {
        source: '/products/iberico-salchichon-100g',
        destination: '/products/iberico-salchichon',
        permanent: true,
      },
      {
        source: '/products/italian-basil-pesto-by-cagette-80g',
        destination: '/products/italian-basil-pesto',
        permanent: true,
      },
      {
        source: '/products/jambon-de-paris-ham-by-cagette-100g',
        destination: '/products/jambon-de-paris-ham',
        permanent: true,
      },
      {
        source: '/products/jambon-de-paris-smoked-100g',
        destination: '/products/jambon-de-paris-smoked',
        permanent: true,
      },

      {
        source: '/products/la-nicois-sandwich',
        destination: '/products/le-nicois-sandwich',
        permanent: true,
      },


      {
        source: '/products/laguiole-aop-100g',
        destination: '/products/laguiole-aop',
        permanent: true,
      },
      {
        source: '/products/lamb-chops-marinated-nz-300g',
        destination: '/products/lamb-chops-marinated',
        permanent: true,
      },
      {
        source: '/products/lardons-by-cagette-100g',
        destination: '/products/lardons-by-cagette',
        permanent: true,
      },
      {
        source: '/products/lasagna-with-egg-divella-500gr',
        destination: '/products/lasagna-divella',
        permanent: true,
      },
      {
        source: '/products/le-boeuf-bourguignon-et-tagliatelle',
        destination: '/products/beef-bourguignon',
        permanent: true,
      },
      {
        source: '/products/lemon-300g',
        destination: '/products/lemon',
        permanent: true,
      },
      {
        source: '/products/lemon-tart',
        destination: '/products/lemon-tart',
        permanent: true,
      },
      {
        source: '/products/litalien-sandwich',
        destination: '/products/litalien-sandwich',
        permanent: true,
      },
      {
        source: '/products/live-maine-lobster-750g-per-piece',
        destination: '/products/live-maine-lobster',
        permanent: true,
      },
      {
        source: '/products/lobster-thermidor-750g',
        destination: '/products/lobster-thermidor',
        permanent: true,
      },
      {
        source: '/products/lyonnaise-sausage-by-cagette-3pcs-360g',
        destination: '/products/lyonnaise-sausage',
        permanent: true,
      },
      {
        source: '/products/manilla-clams-large-size-400g',
        destination: '/products/manilla-clams',
        permanent: true,
      },
      {
        source: '/products/marinated-sardines-by-cagette-100g',
        destination: '/products/marinated-sardines',
        permanent: true,
      },
      {
        source: '/products/merguez-by-cagette-6pcs-500g-100-lamb',
        destination: '/products/lamb-merguez',
        permanent: true,
      },
      {
        source: '/products/mesclun-mix-100g-copy',
        destination: '/products/mesclun-mix',
        permanent: true,
      },
      {
        source: '/products/mimolette-extra-vieille-100g',
        destination: '/products/mimolette-extra-vieille',
        permanent: true,
      },
      {
        source: '/products/mini-chorizo-aperiloste-100g',
        destination: '/products/mini-chorizo-aperiloste',
        permanent: true,
      },
      {
        source: '/products/mini-saucisson-aperiloste-100g',
        destination: '/products/mini-saucisson-aperiloste',
        permanent: true,
      },
      {
        source: '/products/mix-olives-provencale-by-cagette-350g',
        destination: '/products/olives-provencale',
        permanent: true,
      },
      {
        source: '/products/mixed-cold-cuts-charcuterie-cheese-2-4-people',
        destination: '/products/mixed-cold-cuts-charcuterie-cheese',
        permanent: true,
      },
      {
        source: '/products/mont-dor-vacherin-400g',
        destination: '/products/mont-dor-vacherin',
        permanent: true,
      },
      {
        source: '/products/montage-espresso-cacao-salt-110gr',
        destination: '/products/montage-espresso-cacao-salt',
        permanent: true,
      },
      {
        source: '/products/montage-flower-of-bali-salt-110gr',
        destination: '/products/montage-flower-of-bali-salt',
        permanent: true,
      },
      {
        source: '/products/montage-galangal-lemongrass-salt-110gr',
        destination: '/products/montage-galangal-lemongrass-salt',
        permanent: true,
      },
      {
        source: '/products/montage-longan-smoked-salt-80gr',
        destination: '/products/montage-longan-smoked-salt',
        permanent: true,
      },
      {
        source: '/products/montage-pink-himalayan-salt-85gr',
        destination: '/products/montage-pink-himalayan-salt',
        permanent: true,
      },
      {
        source: '/products/montage-roasted-garlic-sweet-onion-110-gr',
        destination: '/products/montage-roasted-garlic-sweet-onion',
        permanent: true,
      },
      {
        source: '/products/montage-small-pyramid-salt-85gr',
        destination: '/products/montage-small-pyramid-salt',
        permanent: true,
      },
      {
        source: '/products/montage-sundried-tomato-thai-basil-salt-110gr',
        destination: '/products/montage-sundried-tomato-thai-basil-salt',
        permanent: true,
      },
      {
        source: '/products/montage-tamarind-smoked-salt-110gr',
        destination: '/products/montage-tamarind-smoked-salt',
        permanent: true,
      },
      {
        source: '/products/montage-yuzu-citrus-salt-110gr',
        destination: '/products/montage-yuzu-citrus-salt',
        permanent: true,
      },
      {
        source: '/products/morbier-100g',
        destination: '/products/morbier',
        permanent: true,
      },
      {
        source: '/products/morteaux-sausage-360g-3pcs',
        destination: '/products/morteaux-sausage',
        permanent: true,
      },
      {
        source: '/products/noir-de-bigorre-black-leg-50g',
        destination: '/products/noir-de-bigorre-black-leg',
        permanent: true,
      },
      {
        source: '/products/organic-green-asparagus-1kg',
        destination: '/products/organic-green-asparagus',
        permanent: true,
      },
      {
        source: '/products/ossau-iraty-100g',
        destination: '/products/ossau-iraty',
        permanent: true,
      },
      {
        source: '/products/ostra-regal-n2-dozen',
        destination: '/products/oyster-ostra-regal-n2',
        permanent: true,
      },
      {
        source: '/products/ostra-regal-n3-dozen',
        destination: '/products/oyster-ostra-regal-n3',
        permanent: true,
      },
      {
        source: '/products/oyster-ostra-regal-n1-dozen',
        destination: '/products/oyster-ostra-regal-n1',
        permanent: true,
      },
      {
        source: '/products/pain-au-chocolat-70g',
        destination: '/products/pain-au-chocolat',
        permanent: true,
      },
      {
        source: '/products/pain-de-seigle-400g',
        destination: '/products/pain-de-seigle',
        permanent: true,
      },
      {
        source: '/products/pain-savoyard-500g',
        destination: '/products/pain-savoyard',
        permanent: true,
      },
      {
        source: '/products/pain-viennois-150g',
        destination: '/products/pain-viennois',
        permanent: true,
      },
      {
        source: '/products/parma-ham-10-month-100g',
        destination: '/products/parma-ham-10-month',
        permanent: true,
      },

      {
        source: '/products/parmesan-cheese-parmigiano-reggiano-dop-36months-100g',
        destination: '/products/parmesan-cheese-parmigiano-reggiano-aop',
        permanent: true,
      },
      {
        source: '/products/party-platter-cold-cuts-cheese-6-people',
        destination: '/products/party-platter-cold-cuts-cheese',
        permanent: true,
      },
      {
        source: '/products/pave-aux-noisettes-100g',
        destination: '/products/pave-aux-noisettes',
        permanent: true,
      },
      {
        source: '/products/pears-300g',
        destination: '/products/pears',
        permanent: true,
      },
      {
        source: '/products/peppered-pork-loin-lonzo-by-cagette-100g',
        destination: '/products/peppered-pork-loin-lonzo',
        permanent: true,
      },
      {
        source: '/products/pickled-cucumbers-and-dill-100g',
        destination: '/products/pickled-cucumbers',
        permanent: true,
      },
      {
        source: '/products/pickled-pink-shallots-100g',
        destination: '/products/pickled-pink-shallots',
        permanent: true,
      },
      {
        source: '/products/pickled-veggies-by-cagette-350g',
        destination: '/products/pickled-veggies',
        permanent: true,
      },
      {
        source: '/products/porchetta-by-cagette',
        destination: '/products/porchetta',
        permanent: true,
      },
      {
        source: '/products/pork-chop-300g-2',
        destination: '/products/pork-chop',
        permanent: true,
      },
      {
        source: '/products/pork-rillettes-by-cagette-100g',
        destination: '/products/pork-rillettes',
        permanent: true,
      },
      {
        source: '/products/pork-tenderloin-100g',
        destination: '/products/pork-tenderloin',
        permanent: true,
      },
      {
        source: '/products/prosciutto-san-daniele-18-months-100g',
        destination: '/products/prosciutto-san-daniele-18-months',
        permanent: true,
      },
      {
        source: '/products/provencal-herbs-bbq-mix',
        destination: '/products/provencal-herbs',
        permanent: true,
      },
      {
        source: '/products/puff-pastry-roll-of-1kg',
        destination: '/products/puff-pastry-roll',
        permanent: true,
      },
      {
        source: '/products/quiche-legumes-chevre',
        destination: '/products/quiche-vegetables-goat-cheese',
        permanent: true,
      },
      {
        source: '/products/raclette-de-savoie-i-g-p-100g',
        destination: '/products/raclette-de-savoie-igp',
        permanent: true,
      },
      {
        source: '/products/ras-el-hanout-mix-by-cagette-50g',
        destination: '/products/ras-el-hanout',
        permanent: true,
      },
      {
        source: '/products/ratatouille-by-cagette-500g',
        destination: '/products/ratatouille',
        permanent: true,
      },
      {
        source: '/products/rattes-baby-potatoes-250g',
        destination: '/products/rattes-baby-potatoes',
        permanent: true,
      },
      {
        source: '/products/reblochon-de-savoie-100g',
        destination: '/products/reblochon-de-savoie',
        permanent: true,
      },
      {
        source: '/products/red-apple-450g',
        destination: '/products/red-apple',
        permanent: true,
      },
      {
        source: '/products/risotto-de-cecco-1kg',
        destination: '/products/risotto-de-cecco',
        permanent: true,
      },
      {
        source: '/products/roasted-1-2-capon-2-2-kg-copy',
        destination: '/products/roasted-capon',
        permanent: true,
      },
      {
        source: '/products/roasted-capon-3kg',
        destination: '/products/roasted-capon',
        permanent: true,
      },
      {
        source: '/products/rocamadour-35g',
        destination: '/products/rocamadour',
        permanent: true,
      },
      {
        source: '/products/rosemary-100g',
        destination: '/products/rosemary',
        permanent: true,
      },
      {
        source: '/products/saint-marcelin-in-claypot-80g',
        destination: '/products/saint-marcelin-in-claypot',
        permanent: true,
      },
      {
        source: '/products/saint-nectaire-laitier-100g',
        destination: '/products/saint-nectaire-laitier',
        permanent: true,
      },
      {
        source: '/products/sainte-maure-de-touraine-250g',
        destination: '/products/sainte-maure-de-touraine',
        permanent: true,
      },
      {
        source: '/products/salami-milano-100g',
        destination: '/products/salami-milano',
        permanent: true,
      },
      {
        source: '/products/salami-napoli-100g',
        destination: '/products/salami-napoli',
        permanent: true,
      },
      {
        source: '/products/salami-tartuffo-truffe-100g',
        destination: '/products/salami-tartuffo-truffle',
        permanent: true,
      },
      {
        source: '/products/salmon-wellington-1kg',
        destination: '/products/salmon-wellington',
        permanent: true,
      },
      {
        source: '/products/saucisson-la-perche-100g',
        destination: '/products/saucisson-la-perche',
        permanent: true,
      },
      {
        source: '/products/saucisson-sec-40g',
        destination: '/products/saucisson-sec',
        permanent: true,
      },
      {
        source: '/products/saucisson-sec-au-cepes-250g-pc',
        destination: '/products/saucisson-sec-au-cepes',
        permanent: true,
      },
      {
        source: '/products/saucisson-sec-by-cagette-100g',
        destination: '/products/saucisson-sec-by-cagette',
        permanent: true,
      },
      {
        source: '/products/sausage-roll-by-cagette',
        destination: '/products/sausage-roll',
        permanent: true,
      },
      {
        source: '/products/savoyardi-divella-500gr',
        destination: '/products/savoyardi-divella',
        permanent: true,
      },
      {
        source: '/products/sea-urchin-tarama-35-100g',
        destination: '/products/sea-urchin-tarama',
        permanent: true,
      },
      {
        source: '/products/seaside-terrine-fish-seafood-en-croute-200g',
        destination: '/products/seaside-terrine-fish-seafood',
        permanent: true,
      },
      {
        source: '/products/shitake-mushroom-by-cagette-100g',
        destination: '/products/shitake-mushroom',
        permanent: true,
      },
      {
        source: '/products/skrei-cod-180gr',
        destination: '/products/skrei-cod',
        permanent: true,
      },
      {
        source: '/products/smoked-chicken-breast-200g-by-cagette',
        destination: '/products/smoked-chicken-breast',
        permanent: true,
      },
      {
        source: '/products/smoked-halibut-100g',
        destination: '/products/smoked-halibut',
        permanent: true,
      },
      {
        source: '/products/smoked-salmon-red-label-sliced-100g',
        destination: '/products/smoked-salmon-red-label',
        permanent: true,
      },
      {
        source: '/products/smoked-salmon-rillette-by-cagette-100g',
        destination: '/products/smoked-salmon-rillette',
        permanent: true,
      },
      {
        source: '/products/solo',
        destination: '/products/cagette-solo',
        permanent: true,
      },
      {
        source: '/products/spicy-sausage-by-cagette-3pcs-360g',
        destination: '/products/spicy-sausage',
        permanent: true,
      },
      {
        source: '/products/strawberry-250g',
        destination: '/products/strawberry',
        permanent: true,
      },
      {
        source: '/products/sundried-tomato-pesto-by-cagette-100g',
        destination: '/products/sundried-tomato-pesto',
        permanent: true,
      },
      {
        source: '/products/sundried-tomatoes-by-cagette-320g',
        destination: '/products/sundried-tomatoes',
        permanent: true,
      },
      {
        source: '/products/sweet-italian-basil-100g',
        destination: '/products/sweet-italian-basil',
        permanent: true,
      },
      {
        source: '/products/tagliatelle-rustichella-dabruzzo-250gr',
        destination: '/products/tagliatelle-rustichella-dabruzzo',
        permanent: true,
      },
      {
        source: '/products/tapenade-black-olives-100g',
        destination: '/products/tapenade-black-olives',
        permanent: true,
      },
      {
        source: '/products/tartiflette-400g',
        destination: '/products/tartiflette',
        permanent: true,
      },
      {
        source: '/products/terrine-de-campagne-by-cagette-100g',
        destination: '/products/terrine-de-campagne',
        permanent: true,
      },
      {
        source: '/products/thyme-100g',
        destination: '/products/thyme',
        permanent: true,
      },
      {
        source: '/products/tiramisu-150g',
        destination: '/products/tiramisu',
        permanent: true,
      },
      {
        source: '/products/tomette-espelette-100g',
        destination: '/products/tomette-espelette',
        permanent: true,
      },
      {
        source: '/products/tomme-de-savoie-100g',
        destination: '/products/tomme-de-savoie',
        permanent: true,
      },
      {
        source: '/products/truffle-brie-100g',
        destination: '/products/truffle-brie',
        permanent: true,
      },
      {
        source: '/products/tuffle-paste-500g',
        destination: '/products/tuffle-paste',
        permanent: true,
      },
      {
        source: '/products/tuna-salmon-terrine-by-cagette-100g',
        destination: '/products/tuna-salmon-terrine',
        permanent: true,
      },
      {
        source: '/products/whelks-cooked-250g',
        destination: '/products/whelks-cooked',
        permanent: true,
      },
      {
        source: '/products/white-tarama-45-100g',
        destination: '/products/white-tarama',
        permanent: true,
      },
      {
        source: '/products/whole-lobster-linguine-750g',
        destination: '/products/whole-lobster-linguine',
        permanent: true,
      },
      {
        source: '/products/whole-sea-bream-france-500-600g',
        destination: '/products/whole-sea-bream-france',
        permanent: true,
      },
      {
        source: '/products/whole-seabass-france-300-400g',
        destination: '/products/whole-seabass-france',
        permanent: true,
      },
      {
        source: '/products/wild-caught-dover-sole-meuniere-600gr',
        destination: '/products/wild-caught-dover-sole-meuniere',
        permanent: true,
      },
      {
        source: '/products/wild-rocket-100g',
        destination: '/products/wild-rocket',
        permanent: true,
      },
      {
        source: '/products/wild-sea-bass-portion-160g',
        destination: '/products/wild-sea-bass-portion',
        permanent: true,
      },
    ]
  },
};
