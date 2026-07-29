(() => {
  const symbols = [
    "H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar",
    "K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr",
    "Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe",
    "Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu",
    "Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn",
    "Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr",
    "Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"
  ];

  const active = {
    Sc:{cn:"钪",en:"Scandium",tags:["METAL","PVD","CVD"],products:["高纯钪金属","钪金属靶材","超干无水氯化钪","铝钪合金靶材","铝钪锗钽合金靶材"]},
    Y:{cn:"钇",en:"Yttrium",tags:["METAL","PVD","CVD","POWDER"],products:["高纯钇金属","钇金属靶材","钇金属颗粒","超干无水氯化钇","铝钇合金靶材","球形氧化钇粉末","钇铝石榴石粉末"]},
    La:{cn:"镧",en:"Lanthanum",tags:["METAL","PVD","CVD"],products:["高纯镧金属","镧金属靶材","超干无水氯化镧"]},
    Ce:{cn:"铈",en:"Cerium",tags:["METAL","CVD"],products:["高纯铈金属","超干无水氯化铈"]},
    Pr:{cn:"镨",en:"Praseodymium",tags:["METAL","CVD"],products:["高纯镨金属","超干无水氯化镨"]},
    Nd:{cn:"钕",en:"Neodymium",tags:["METAL","PVD","CVD"],products:["高纯钕金属","钕金属颗粒","超干无水氯化钕","铝钕合金靶材"]},
    Sm:{cn:"钐",en:"Samarium",tags:["METAL","CVD"],products:["高纯钐金属","超干无水氯化钐"]},
    Eu:{cn:"铕",en:"Europium",tags:["METAL"],products:["高纯铕金属"]},
    Gd:{cn:"钆",en:"Gadolinium",tags:["METAL","PVD","CVD"],products:["高纯钆金属","钆金属靶材","钆金属块","钆金属颗粒","超干无水氯化钆"]},
    Tb:{cn:"铽",en:"Terbium",tags:["METAL","PVD","CVD"],products:["高纯铽金属","铽金属靶材","铽金属块","超干无水氯化铽"]},
    Dy:{cn:"镝",en:"Dysprosium",tags:["METAL","PVD","CVD"],products:["高纯镝金属","镝金属靶材","超干无水氯化镝"]},
    Ho:{cn:"钬",en:"Holmium",tags:["METAL","PVD","CVD","POWDER"],products:["高纯钬金属","钬金属靶材","超干无水氯化钬","钬铜合金棒","钬铜球形粉末"]},
    Er:{cn:"铒",en:"Erbium",tags:["METAL","PVD","CVD"],products:["高纯铒金属","铒金属靶材","铒金属颗粒","超干无水氯化铒"]},
    Tm:{cn:"铥",en:"Thulium",tags:["METAL","CVD"],products:["高纯铥金属","超干无水氯化铥"]},
    Yb:{cn:"镱",en:"Ytterbium",tags:["METAL","PVD","CVD"],products:["高纯镱金属","镱金属靶材","镱金属块","镱金属颗粒","超干无水氯化镱"]},
    Lu:{cn:"镥",en:"Lutetium",tags:["METAL","PVD","CVD"],products:["高纯镥金属","镥金属靶材","超干无水氯化镥"]},
    Al:{cn:"铝",en:"Aluminium",tags:["PVD","POWDER","ALLOY"],products:["铝金属靶材","铝金属颗粒","铝钇合金靶材","铝钪合金靶材","铝钕合金靶材","铝钪锗钽合金靶材","球形氧化铝粉末","钇铝石榴石粉末"]},
    Ti:{cn:"钛",en:"Titanium",tags:["PVD"],products:["钛金属靶材"]},
    V:{cn:"钒",en:"Vanadium",tags:["ALLOY","PVD"],products:["镍钒合金靶材"]},
    Cr:{cn:"铬",en:"Chromium",tags:["PVD","ALLOY"],products:["铬金属靶材","镍铬合金靶材"]},
    Ni:{cn:"镍",en:"Nickel",tags:["PVD","ALLOY"],products:["镍金属靶材","镍金属颗粒","镍铬合金靶材","镍钒合金靶材"]},
    Cu:{cn:"铜",en:"Copper",tags:["PVD","ALLOY","POWDER"],products:["铜金属靶材","铜金属颗粒","钬铜合金棒","钬铜球形粉末"]},
    Ge:{cn:"锗",en:"Germanium",tags:["ALLOY","PVD"],products:["铝钪锗钽合金靶材"]},
    Hf:{cn:"铪",en:"Hafnium",tags:["PVD"],products:["铪金属靶材"]},
    Ta:{cn:"钽",en:"Tantalum",tags:["PVD","ALLOY"],products:["钽金属靶材","铝钪锗钽合金靶材"]},
    Sn:{cn:"锡",en:"Tin",tags:["METAL","PVD"],products:["高纯锡金属","锡金属颗粒"]}
  };

  const mainPositions = {
    H:[1,1],He:[1,18],
    Li:[2,1],Be:[2,2],B:[2,13],C:[2,14],N:[2,15],O:[2,16],F:[2,17],Ne:[2,18],
    Na:[3,1],Mg:[3,2],Al:[3,13],Si:[3,14],P:[3,15],S:[3,16],Cl:[3,17],Ar:[3,18],
    K:[4,1],Ca:[4,2],Sc:[4,3],Ti:[4,4],V:[4,5],Cr:[4,6],Mn:[4,7],Fe:[4,8],Co:[4,9],Ni:[4,10],Cu:[4,11],Zn:[4,12],Ga:[4,13],Ge:[4,14],As:[4,15],Se:[4,16],Br:[4,17],Kr:[4,18],
    Rb:[5,1],Sr:[5,2],Y:[5,3],Zr:[5,4],Nb:[5,5],Mo:[5,6],Tc:[5,7],Ru:[5,8],Rh:[5,9],Pd:[5,10],Ag:[5,11],Cd:[5,12],In:[5,13],Sn:[5,14],Sb:[5,15],Te:[5,16],I:[5,17],Xe:[5,18],
    Cs:[6,1],Ba:[6,2],Hf:[6,4],Ta:[6,5],W:[6,6],Re:[6,7],Os:[6,8],Ir:[6,9],Pt:[6,10],Au:[6,11],Hg:[6,12],Tl:[6,13],Pb:[6,14],Bi:[6,15],Po:[6,16],At:[6,17],Rn:[6,18],
    Fr:[7,1],Ra:[7,2],Rf:[7,4],Db:[7,5],Sg:[7,6],Bh:[7,7],Hs:[7,8],Mt:[7,9],Ds:[7,10],Rg:[7,11],Cn:[7,12],Nh:[7,13],Fl:[7,14],Mc:[7,15],Lv:[7,16],Ts:[7,17],Og:[7,18]
  };
  const cnFallback = {Al:"铝",Sc:"钪",Ti:"钛",V:"钒",Cr:"铬",Ni:"镍",Cu:"铜",Ge:"锗",Y:"钇",Sn:"锡",Hf:"铪",Ta:"钽"};

  const makeCell = (symbol, placement) => {
    const number = symbols.indexOf(symbol) + 1;
    const info = active[symbol];
    const cell = document.createElement(info ? "button" : "div");
    cell.className = `element-cell${info ? " is-available" : ""}`;
    if (placement) {
      cell.style.gridRow = placement[0];
      cell.style.gridColumn = placement[1];
    }
    cell.innerHTML = `<span class="atomic-number">${number}</span><span class="symbol">${symbol}</span><span class="cn-name">${info?.cn || cnFallback[symbol] || ""}</span>`;
    if (info) {
      cell.type = "button";
      cell.dataset.element = symbol;
      cell.setAttribute("aria-label", `${info.cn} ${symbol} 相关产品`);
    }
    return cell;
  };

  const table = document.querySelector("#periodic-table");
  Object.entries(mainPositions).forEach(([symbol, position]) => table?.append(makeCell(symbol, position)));
  [["57–71",[6,3]],["89–103",[7,3]]].forEach(([label, position]) => {
    const placeholder = document.createElement("div");
    placeholder.className = "element-cell series-placeholder";
    placeholder.style.gridRow = position[0];
    placeholder.style.gridColumn = position[1];
    placeholder.innerHTML = `<span class="symbol">${label}</span>`;
    table?.append(placeholder);
  });

  const lanthanides = symbols.slice(56, 71);
  const actinides = symbols.slice(88, 103);
  const lanRow = document.querySelector("#lanthanide-row");
  const actRow = document.querySelector("#actinide-row");
  lanthanides.forEach((symbol) => lanRow?.append(makeCell(symbol)));
  actinides.forEach((symbol) => actRow?.append(makeCell(symbol)));

  const elementSlugs = {
    钪:"scandium", 钇:"yttrium", 镧:"lanthanum", 铈:"cerium", 镨:"praseodymium",
    钕:"neodymium", 钐:"samarium", 铕:"europium", 钆:"gadolinium", 铽:"terbium",
    镝:"dysprosium", 钬:"holmium", 铒:"erbium", 铥:"thulium", 镱:"ytterbium",
    镥:"lutetium", 钛:"titanium", 铬:"chromium", 镍:"nickel", 铜:"copper",
    铪:"hafnium", 钽:"tantalum", 锡:"stannum"
  };
  const specialProductLinks = {
    "铝金属靶材":"products/aluminum-metal-target.html",
    "铝金属颗粒":"products/aluminium-metal-granule.html",
    "铝钇合金靶材":"products/aluminium-yttrium-alloy-target.html",
    "铝钪合金靶材":"products/aluminium-scandium-alloy-target.html",
    "铝钕合金靶材":"products/aluminium-neodymium-alloy-target.html",
    "铝钪锗钽合金靶材":"products/aluminium-scandium-germanium-tantalum-alloy-target.html",
    "镍铬合金靶材":"products/nickel-chromium-alloy-target.html",
    "镍钒合金靶材":"products/nickel-vanadium-alloy-target.html",
    "钬铜合金棒":"products/holmium-copper-rod.html",
    "钬铜球形粉末":"products/holmium-copper-spherical-powder.html",
    "球形氧化铝粉末":"products/spherical-aluminum-oxide.html",
    "球形氧化钇粉末":"products/spherical-yttrium-oxide.html",
    "钇铝石榴石粉末":"products/yttrium-aluminum-garnet.html"
  };
  const productHref = (product) => {
    if (specialProductLinks[product]) return specialProductLinks[product];
    const chloride = product.match(/^超干无水氯化(.)$/);
    if (chloride && elementSlugs[chloride[1]]) {
      return `products/ultra-dry-anhydrous-${elementSlugs[chloride[1]]}-chloride.html`;
    }
    const metal = product.match(/^高纯(.)金属$/);
    if (metal && elementSlugs[metal[1]]) {
      return `products/${elementSlugs[metal[1]]}-metal.html`;
    }
    const form = product.match(/^(.)金属(靶材|颗粒|块)$/);
    if (form && elementSlugs[form[1]]) {
      const suffix = {靶材:"target", 颗粒:"granule", 块:"block"}[form[2]];
      return `products/${elementSlugs[form[1]]}-metal-${suffix}.html`;
    }
    return "products.html";
  };

  const renderElement = (symbol) => {
    const info = active[symbol];
    if (!info) return;
    document.querySelectorAll(".element-cell.is-selected").forEach((cell) => cell.classList.remove("is-selected"));
    document.querySelectorAll(`[data-element="${symbol}"]`).forEach((cell) => cell.classList.add("is-selected"));
    document.querySelector("#element-number").textContent = symbols.indexOf(symbol) + 1;
    document.querySelector("#element-symbol").textContent = symbol;
    document.querySelector("#element-name").textContent = `${info.cn} · ${info.en}`;
    document.querySelector("#element-title").textContent = `${info.cn}相关产品`;
    document.querySelector("#element-tags").innerHTML = info.tags.map((tag) => `<span>${tag}</span>`).join("");
    document.querySelector("#element-product-list").innerHTML = info.products
      .map((product) => `<li><a href="${productHref(product)}">${product}<span aria-hidden="true">→</span></a></li>`)
      .join("");
  };

  document.querySelectorAll(".element-cell.is-available").forEach((cell) => {
    cell.addEventListener("click", () => renderElement(cell.dataset.element));
  });
  renderElement("Yb");
})();
