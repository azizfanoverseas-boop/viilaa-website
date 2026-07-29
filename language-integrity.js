(function () {
  "use strict";

  const language = document.documentElement.dataset.language
    || new URLSearchParams(window.location.search).get("lang")
    || "zh";

  if (!["zh", "en", "ko"].includes(language)) return;

  const copy = {
    zh: {
      "VIILAA PRODUCT COVERAGE": "VIILAA 产品覆盖",
      "Target": "靶材",
      "Block": "块状",
      "Granule": "颗粒",
      "Composition": "成分",
      "Purity": "纯度",
      "Geometry": "形态",
      "Handling": "交付条件",
      "AVAILABLE TESTING / 常规检测支持": "常规检测支持",
      "EXTERNAL LAB / 外部专项检测": "外部专项检测",
      "01 / SEMICONDUCTOR": "01 / 半导体",
      "02 / DISPLAY": "02 / 显示",
      "03 / PHOTONICS": "03 / 光子学",
      "04 / ENERGY": "04 / 能源"
    },
    en: {
      "材料工作台": "MATERIAL WORKBENCH",
      "01 / 按元素探索": "01 / EXPLORE BY ELEMENT",
      "按元素探索 Viilaa 材料": "Explore Viilaa Materials by Element",
      "Viilaa 现有相关产品": "Viilaa products available",
      "暂未收录": "Not currently listed",
      "点击高亮元素查看产品": "Select a highlighted element to view products",
      "镧系": "Lanthanides",
      "锕系": "Actinides",
      "VIILAA PRODUCT COVERAGE": "VIILAA PRODUCT COVERAGE",
      "02 / 构建交付规格": "02 / DEFINE DELIVERY SPECIFICATIONS",
      "同一种元素，可以是不同交付物。": "One element can be delivered in different forms.",
      "示例材料": "Example material",
      "靶材": "Target",
      "块状": "Block",
      "颗粒": "Granule",
      "元素 / 合金比例": "Element / alloy ratio",
      "纯度 / 关键杂质": "Purity / critical impurities",
      "形态 / 尺寸 / 公差": "Form / dimensions / tolerances",
      "数量 / 包装 / 储存": "Quantity / packaging / storage",
      "03 / 确定验证项目": "03 / DEFINE VERIFICATION",
      "检测不是设备清单，而是采购判断依据。": "Testing is evidence for procurement decisions—not an equipment list.",
      "扫描电子显微镜": "Scanning electron microscope",
      "X 射线衍射仪": "X-ray diffractometer",
      "氧氮氢分析设备": "Oxygen / nitrogen / hydrogen analyzer",
      "AVAILABLE TESTING / 常规检测支持": "AVAILABLE TESTING",
      "氧氮氢气体检测": "O / N / H analysis",
      "光学显微镜": "Optical microscopy",
      "物相 XRD": "Phase XRD",
      "水含量分析": "Water-content analysis",
      "pH 分析": "pH analysis",
      "EXTERNAL LAB / 外部专项检测": "EXTERNAL LAB",
      "由合作实验室完成送检": "Testing by a partner laboratory",
      "GDMS 由合作实验室完成送检": "GDMS testing by a partner laboratory",
      "04 / 衔接后续供货": "04 / SUPPORT REPEAT SUPPLY",
      "不是一句“从研发到量产”，": "Not simply “from R&D to production,”",
      "而是四次明确确认。": "but four clearly defined confirmations.",
      "需求简报": "Requirement brief",
      "材料、纯度、形态、数量与应用。": "Material, purity, form, quantity, and application.",
      "规格确认": "Specification confirmation",
      "尺寸、公差、检测和包装要求。": "Dimensions, tolerances, testing, and packaging.",
      "样品验证": "Sample validation",
      "依据约定项目评估首批材料。": "Evaluate the first batch against agreed criteria.",
      "规格留档": "Specification record",
      "保留后续批次采购的确认基础。": "Retain an approved basis for repeat purchasing.",
      "01 / SEMICONDUCTOR": "01 / SEMICONDUCTOR",
      "02 / DISPLAY": "02 / DISPLAY",
      "03 / PHOTONICS": "03 / PHOTONICS",
      "04 / ENERGY": "04 / ENERGY",
      "新闻与动态": "News & Updates",
      "NEWS & UPDATES": "NEWS & UPDATES",
      "关注Viilaa材料在前沿科研与先进制造中的应用，以及公司最新进展。": "Follow Viilaa materials in frontier research and advanced manufacturing, together with our latest company developments.",
      "科研应用": "Research Application",
      "RESEARCH APPLICATION": "RESEARCH APPLICATION",
      "我司高纯二氢化镥材料应用于中国科学院物理研究所高压光学研究": "Viilaa High-Purity Lutetium Dihydride Used in High-Pressure Optical Research at the Institute of Physics, CAS",
      "科研团队采用Viilaa提供的99.9%纯度二氢化镥粉末，研究其在高压环境下的光学反射率及连续颜色变化，成果发表于《Science Bulletin》。": "Researchers used 99.9%-pure lutetium dihydride powder supplied by Viilaa to study optical reflectivity and continuous color changes under high pressure. The results were published in Science Bulletin.",
      "阅读全文 →": "Read the full article →",
      "新闻与动态 / 科研应用": "News & Updates / Research Application",
      "News & Updates / 科研应用": "News & Updates / Research Application",
      "/ 科研应用": "/ Research Application",
      "论文在线发表日期：2023年4月10日　|　来源：《Science Bulletin》": "Online publication: April 10, 2023  |  Source: Science Bulletin",
      "2023年4月10日，由中国科学院物理研究所、北京凝聚态物理国家研究中心及中国科学院大学科研团队开展的二氢化镥（LuH₂）高压光学研究成果在线发表于国际学术期刊《Science Bulletin》。": "On April 10, 2023, a study of the high-pressure optical behavior of lutetium dihydride (LuH₂), conducted by researchers from the Institute of Physics of the Chinese Academy of Sciences, the Beijing National Laboratory for Condensed Matter Physics, and the University of Chinese Academy of Sciences, was published online in the international journal Science Bulletin.",
      "论文题为《Pressure tuning of optical reflectivity in LuH₂》（压力调控二氢化镥的光学反射率）。研究使用了由江西中锡金属材料有限公司（Viilaa）提供的纯度为99.9%的二氢化镥粉末，用于考察二氢化镥在不同压力条件下的颜色变化及光学反射特性。": "The paper, “Pressure tuning of optical reflectivity in LuH₂,” used 99.9%-pure lutetium dihydride powder supplied by Jiangxi Viilaa Metal Materials Co., Ltd. to examine color changes and optical reflectivity under different pressure conditions.",
      "压力作用下，二氢化镥呈现连续颜色变化": "Lutetium Dihydride Shows Continuous Color Changes Under Pressure",
      "研究团队通过粉末X射线衍射分析确认，实验材料的主要物相为具有萤石结构的立方相LuH₂。随后，研究人员将二氢化镥样品制成厚度约5–10微米的薄片，并装入金刚石对顶砧高压实验装置中，对其在约14 GPa以内不同压力下的可见光至近红外反射光谱进行测量。": "Powder X-ray diffraction confirmed that the principal phase was cubic LuH₂ with a fluorite structure. The researchers then prepared flakes approximately 5–10 μm thick, loaded them into a diamond-anvil cell, and measured visible-to-near-infrared reflectance at pressures up to approximately 14 GPa.",
      "实验结果显示，二氢化镥样品在常压下呈有光泽的蓝色；随着压力增加，颜色逐渐发生变化，在约3 GPa时转变为暗红色，在超过约12 GPa后呈现明亮的橙色。": "The samples appeared lustrous blue at ambient pressure. As pressure increased, the color changed continuously—becoming dark red near 3 GPa and bright orange above approximately 12 GPa.",
      "研究表明，这一连续颜色变化主要与压力调控下等离子体频率及等离子体边缘的移动有关。随着压力升高，样品对红光的反射增强，同时对蓝光的反射受到抑制，由此形成肉眼可见的颜色转变。": "The study attributes this continuous color evolution primarily to pressure-induced shifts in plasma frequency and the plasma edge. Increasing pressure strengthens red-light reflectance while suppressing blue-light reflectance, producing the visible color transition.",
      "材料表现为前沿实验研究提供可靠支持": "Material Performance Supports Frontier Experimental Research",
      "论文指出，实验测得的光学特征与既有研究结果总体一致，并认为相关结果体现了所用LuH₂样品的良好质量。": "The paper reports that the measured optical characteristics are broadly consistent with earlier findings and indicate the good quality of the LuH₂ samples used.",
      "二氢化镥等稀土氢化物因其特殊的电子结构、压力响应和潜在量子材料特性，近年来受到凝聚态物理及高压材料研究领域的持续关注。本项研究进一步揭示了LuH₂在压力作用下光学反射率与颜色变化之间的关系，为理解稀土氢化物的光学与电子行为提供了新的实验依据。": "Rare-earth hydrides such as lutetium dihydride have attracted sustained interest in condensed-matter physics and high-pressure materials research because of their distinctive electronic structures, pressure response, and potential quantum-material properties. This study further clarifies the relationship between optical reflectivity and color change in pressurized LuH₂ and provides new experimental evidence for understanding the optical and electronic behavior of rare-earth hydrides.",
      "说明：本项研究聚焦二氢化镥的高压光学反射行为和颜色变化，论文未报告所测试LuH₂样品在实验压力范围内出现超导现象。": "Note: This study focuses on the high-pressure optical reflectivity and color changes of lutetium dihydride. The paper does not report superconductivity in the tested LuH₂ samples within the experimental pressure range.",
      "持续服务先进材料与科研应用": "Continuing to Support Advanced Materials and Research Applications",
      "江西中锡金属材料有限公司（Viilaa）专注于高纯金属、稀土及稀有金属材料、功能粉末、PVD镀膜材料和CVD前驱体相关材料的研发、生产与供应。": "Jiangxi Viilaa Metal Materials Co., Ltd. develops, manufactures, and supplies high-purity metals, rare-earth and rare metals, functional powders, PVD coating materials, and materials for CVD precursors.",
      "公司持续面向科研机构及产业客户提供不同纯度、粒度、形态和包装规格的材料解决方案，支持高压物理、薄膜沉积、半导体、新能源及先进功能材料等领域的实验研究与应用开发。": "We provide research institutions and industrial customers with material solutions in varied purities, particle sizes, forms, and packaging specifications, supporting experimental research and application development in high-pressure physics, thin-film deposition, semiconductors, new energy, and advanced functional materials.",
      "未来，Viilaa将继续加强高纯材料制备与质量控制能力，为前沿科学研究和先进制造提供稳定、可靠的材料支持。": "Viilaa will continue strengthening its high-purity material preparation and quality-control capabilities to provide stable, reliable material support for frontier science and advanced manufacturing.",
      "论文信息": "Publication Information",
      "论文：Pressure tuning of optical reflectivity in LuH₂": "Paper: Pressure tuning of optical reflectivity in LuH₂",
      "论文：": "Paper:",
      "作者：Xuan Zhao、Pengfei Shan、Ningning Wang、Yunliang Li、Yang Xu、Jinguang Cheng": "Authors: Xuan Zhao, Pengfei Shan, Ningning Wang, Yunliang Li, Yang Xu, and Jinguang Cheng",
      "作者：": "Authors:",
      "期刊：Science Bulletin 68 (2023) 883–886": "Journal: Science Bulletin 68 (2023) 883–886"
      ,"期刊：": "Journal:"
    },
    ko: {
      "材料工作台": "소재 워크벤치",
      "01 / 按元素探索": "01 / 원소별 탐색",
      "按元素探索 Viilaa 材料": "원소별로 Viilaa 소재 탐색",
      "Viilaa 现有相关产品": "Viilaa 관련 제품 보유",
      "暂未收录": "현재 미수록",
      "点击高亮元素查看产品": "강조된 원소를 선택하여 제품 확인",
      "镧系": "란타넘족",
      "锕系": "악티늄족",
      "VIILAA PRODUCT COVERAGE": "VIILAA 제품 범위",
      "02 / 构建交付规格": "02 / 납품 사양 정의",
      "同一种元素，可以是不同交付物。": "하나의 원소도 다양한 형태로 납품할 수 있습니다.",
      "示例材料": "예시 소재",
      "靶材": "타깃",
      "Target": "타깃",
      "块状": "블록",
      "Block": "블록",
      "颗粒": "과립",
      "Granule": "과립",
      "Ytterbium": "이터븀",
      "Composition": "조성",
      "Purity": "순도",
      "Geometry": "형상",
      "Handling": "취급 조건",
      "元素 / 合金比例": "원소 / 합금 비율",
      "纯度 / 关键杂质": "순도 / 주요 불순물",
      "形态 / 尺寸 / 公差": "형태 / 치수 / 공차",
      "数量 / 包装 / 储存": "수량 / 포장 / 보관",
      "03 / 确定验证项目": "03 / 검증 항목 정의",
      "检测不是设备清单，而是采购判断依据。": "시험은 장비 목록이 아니라 구매 판단의 근거입니다.",
      "扫描电子显微镜": "주사전자현미경",
      "X 射线衍射仪": "X선 회절 분석기",
      "氧氮氢分析设备": "산소·질소·수소 분석기",
      "AVAILABLE TESTING / 常规检测支持": "상시 지원 시험",
      "氧氮氢气体检测": "산소·질소·수소 분석",
      "光学显微镜": "광학 현미경",
      "物相 XRD": "상 분석 XRD",
      "水含量分析": "수분 함량 분석",
      "pH 分析": "pH 분석",
      "EXTERNAL LAB / 外部专项检测": "외부 전문 시험",
      "由合作实验室完成送检": "협력 시험기관에서 분석",
      "GDMS 由合作实验室完成送检": "협력 시험기관을 통한 GDMS 분석",
      "04 / 衔接后续供货": "04 / 반복 공급 연계",
      "不是一句“从研发到量产”，": "단순히 ‘연구개발에서 양산까지’가 아니라,",
      "而是四次明确确认。": "네 차례의 명확한 확인 과정입니다.",
      "需求简报": "요구사항 정리",
      "材料、纯度、形态、数量与应用。": "소재, 순도, 형태, 수량 및 용도.",
      "规格确认": "사양 확인",
      "尺寸、公差、检测和包装要求。": "치수, 공차, 시험 및 포장 요구사항.",
      "样品验证": "샘플 검증",
      "依据约定项目评估首批材料。": "합의된 항목에 따라 첫 소재를 평가합니다.",
      "规格留档": "사양 기록",
      "保留后续批次采购的确认基础。": "후속 구매를 위한 승인 기준을 보관합니다.",
      "01 / SEMICONDUCTOR": "01 / 반도체",
      "02 / DISPLAY": "02 / 디스플레이",
      "03 / PHOTONICS": "03 / 포토닉스",
      "04 / ENERGY": "04 / 에너지",
      "新闻与动态": "뉴스 및 소식",
      "NEWS & UPDATES": "뉴스 및 소식",
      "关注Viilaa材料在前沿科研与先进制造中的应用，以及公司最新进展。": "첨단 연구와 선진 제조 분야에서의 Viilaa 소재 적용 사례와 회사의 최신 소식을 전합니다.",
      "科研应用": "연구 적용 사례",
      "RESEARCH APPLICATION": "연구 적용 사례",
      "我司高纯二氢化镥材料应用于中国科学院物理研究所高压光学研究": "Viilaa 고순도 루테튬 이수소화물이 중국과학원 물리연구소의 고압 광학 연구에 활용",
      "科研团队采用Viilaa提供的99.9%纯度二氢化镥粉末，研究其在高压环境下的光学反射率及连续颜色变化，成果发表于《Science Bulletin》。": "연구팀은 Viilaa가 공급한 순도 99.9%의 루테튬 이수소화물 분말을 사용해 고압 환경에서의 광학 반사율과 연속적인 색상 변화를 연구했으며, 그 결과는 Science Bulletin에 게재되었습니다.",
      "阅读全文 →": "전체 기사 보기 →",
      "新闻与动态 / 科研应用": "뉴스 및 소식 / 연구 적용 사례",
      "뉴스 및 소식 / 科研应用": "뉴스 및 소식 / 연구 적용 사례",
      "/ 科研应用": "/ 연구 적용 사례",
      "论文在线发表日期：2023年4月10日　|　来源：《Science Bulletin》": "온라인 게재일: 2023년 4월 10일  |  출처: Science Bulletin",
      "2023年4月10日，由中国科学院物理研究所、北京凝聚态物理国家研究中心及中国科学院大学科研团队开展的二氢化镥（LuH₂）高压光学研究成果在线发表于国际学术期刊《Science Bulletin》。": "2023년 4월 10일, 중국과학원 물리연구소·베이징 응집물질물리 국가연구센터·중국과학원대학교 연구진이 수행한 루테튬 이수소화물(LuH₂)의 고압 광학 연구가 국제 학술지 Science Bulletin에 온라인 게재되었습니다.",
      "论文题为《Pressure tuning of optical reflectivity in LuH₂》（压力调控二氢化镥的光学反射率）。研究使用了由江西中锡金属材料有限公司（Viilaa）提供的纯度为99.9%的二氢化镥粉末，用于考察二氢化镥在不同压力条件下的颜色变化及光学反射特性。": "논문 제목은 ‘Pressure tuning of optical reflectivity in LuH₂’입니다. 연구에는 Jiangxi Viilaa Metal Materials Co., Ltd.가 공급한 순도 99.9%의 루테튬 이수소화물 분말이 사용되었으며, 서로 다른 압력 조건에서의 색상 변화와 광학 반사 특성을 조사했습니다.",
      "压力作用下，二氢化镥呈现连续颜色变化": "압력에 따라 연속적인 색상 변화를 보이는 루테튬 이수소화물",
      "研究团队通过粉末X射线衍射分析确认，实验材料的主要物相为具有萤石结构的立方相LuH₂。随后，研究人员将二氢化镥样品制成厚度约5–10微米的薄片，并装入金刚石对顶砧高压实验装置中，对其在约14 GPa以内不同压力下的可见光至近红外反射光谱进行测量。": "분말 X선 회절 분석 결과, 실험 소재의 주상은 형석 구조를 갖는 입방정 LuH₂로 확인되었습니다. 연구진은 시료를 약 5–10 μm 두께의 박편으로 제작해 다이아몬드 앤빌 셀에 장입하고, 약 14 GPa까지의 압력에서 가시광선부터 근적외선 영역의 반사 스펙트럼을 측정했습니다.",
      "实验结果显示，二氢化镥样品在常压下呈有光泽的蓝色；随着压力增加，颜色逐渐发生变化，在约3 GPa时转变为暗红色，在超过约12 GPa后呈现明亮的橙色。": "시료는 상압에서 광택이 있는 청색을 띠었으며, 압력이 증가함에 따라 색상이 연속적으로 변했습니다. 약 3 GPa에서는 짙은 적색으로, 약 12 GPa를 넘으면 밝은 주황색으로 변했습니다.",
      "研究表明，这一连续颜色变化主要与压力调控下等离子体频率及等离子体边缘的移动有关。随着压力升高，样品对红光的反射增强，同时对蓝光的反射受到抑制，由此形成肉眼可见的颜色转变。": "연구에 따르면 이러한 연속적인 색상 변화는 압력에 따른 플라스마 주파수와 플라스마 에지의 이동과 주로 관련됩니다. 압력이 높아질수록 적색광 반사는 강화되고 청색광 반사는 억제되어 육안으로 확인되는 색상 전이가 나타납니다.",
      "材料表现为前沿实验研究提供可靠支持": "첨단 실험 연구를 뒷받침하는 소재 성능",
      "论文指出，实验测得的光学特征与既有研究结果总体一致，并认为相关结果体现了所用LuH₂样品的良好质量。": "논문은 측정된 광학 특성이 기존 연구 결과와 전반적으로 일치하며, 사용된 LuH₂ 시료의 우수한 품질을 보여준다고 설명합니다.",
      "二氢化镥等稀土氢化物因其特殊的电子结构、压力响应和潜在量子材料特性，近年来受到凝聚态物理及高压材料研究领域的持续关注。本项研究进一步揭示了LuH₂在压力作用下光学反射率与颜色变化之间的关系，为理解稀土氢化物的光学与电子行为提供了新的实验依据。": "루테튬 이수소화물과 같은 희토류 수소화물은 독특한 전자 구조, 압력 반응 및 잠재적인 양자 소재 특성으로 인해 응집물질물리와 고압 소재 연구 분야에서 꾸준히 주목받고 있습니다. 이번 연구는 압력 하에서 LuH₂의 광학 반사율과 색상 변화의 관계를 더욱 명확히 하며, 희토류 수소화물의 광학적·전자적 거동을 이해하기 위한 새로운 실험 근거를 제공합니다.",
      "说明：本项研究聚焦二氢化镥的高压光学反射行为和颜色变化，论文未报告所测试LuH₂样品在实验压力范围内出现超导现象。": "참고: 본 연구는 루테튬 이수소화물의 고압 광학 반사 거동과 색상 변화에 초점을 두며, 논문은 실험 압력 범위에서 시험한 LuH₂ 시료의 초전도 현상을 보고하지 않았습니다.",
      "持续服务先进材料与科研应用": "첨단 소재와 연구 적용 분야에 대한 지속적인 지원",
      "江西中锡金属材料有限公司（Viilaa）专注于高纯金属、稀土及稀有金属材料、功能粉末、PVD镀膜材料和CVD前驱体相关材料的研发、生产与供应。": "Jiangxi Viilaa Metal Materials Co., Ltd.는 고순도 금속, 희토류 및 희유금속 소재, 기능성 분말, PVD 코팅 소재와 CVD 전구체 관련 소재를 개발·생산·공급합니다.",
      "公司持续面向科研机构及产业客户提供不同纯度、粒度、形态和包装规格的材料解决方案，支持高压物理、薄膜沉积、半导体、新能源及先进功能材料等领域的实验研究与应用开发。": "연구기관과 산업 고객에게 다양한 순도, 입도, 형태 및 포장 사양의 소재 솔루션을 제공하며, 고압 물리, 박막 증착, 반도체, 신에너지 및 첨단 기능성 소재 분야의 실험 연구와 응용 개발을 지원합니다.",
      "未来，Viilaa将继续加强高纯材料制备与质量控制能力，为前沿科学研究和先进制造提供稳定、可靠的材料支持。": "Viilaa는 앞으로도 고순도 소재 제조와 품질관리 역량을 강화하여 첨단 과학 연구와 선진 제조에 안정적이고 신뢰할 수 있는 소재를 제공하겠습니다.",
      "论文信息": "논문 정보",
      "论文：Pressure tuning of optical reflectivity in LuH₂": "논문: Pressure tuning of optical reflectivity in LuH₂",
      "论文：": "논문:",
      "作者：Xuan Zhao、Pengfei Shan、Ningning Wang、Yunliang Li、Yang Xu、Jinguang Cheng": "저자: Xuan Zhao, Pengfei Shan, Ningning Wang, Yunliang Li, Yang Xu, Jinguang Cheng",
      "作者：": "저자:",
      "期刊：Science Bulletin 68 (2023) 883–886": "학술지: Science Bulletin 68 (2023) 883–886"
      ,"期刊：": "학술지:"
    }
  };

  const elementNames = {
    en: {
      Al: "Aluminium", Sc: "Scandium", Ti: "Titanium", V: "Vanadium", Cr: "Chromium",
      Ni: "Nickel", Cu: "Copper", Ge: "Germanium", Y: "Yttrium", Sn: "Tin",
      Hf: "Hafnium", Ta: "Tantalum", La: "Lanthanum", Ce: "Cerium",
      Pr: "Praseodymium", Nd: "Neodymium", Sm: "Samarium", Eu: "Europium",
      Gd: "Gadolinium", Tb: "Terbium", Dy: "Dysprosium", Ho: "Holmium",
      Er: "Erbium", Tm: "Thulium", Yb: "Ytterbium", Lu: "Lutetium"
    },
    ko: {
      Al: "알루미늄", Sc: "스칸듐", Ti: "티타늄", V: "바나듐", Cr: "크로뮴",
      Ni: "니켈", Cu: "구리", Ge: "게르마늄", Y: "이트륨", Sn: "주석",
      Hf: "하프늄", Ta: "탄탈럼", La: "란타넘", Ce: "세륨",
      Pr: "프라세오디뮴", Nd: "네오디뮴", Sm: "사마륨", Eu: "유로퓸",
      Gd: "가돌리늄", Tb: "터븀", Dy: "디스프로슘", Ho: "홀뮴",
      Er: "어븀", Tm: "툴륨", Yb: "이터븀", Lu: "루테튬"
    }
  };

  const titleCase = (value) => value
    .split("-")
    .map((part) => part ? part[0].toUpperCase() + part.slice(1) : part)
    .join(" ")
    .replace("Aluminum", "Aluminium")
    .replace("Stannum", "Tin");

  const koreanProductName = (href) => {
    const slug = href.split("/").pop().replace(/\.html(?:\?.*)?$/, "");
    const element = Object.keys(elementNames.en).find((symbol) =>
      slug.startsWith(elementNames.en[symbol].toLowerCase())
      || (symbol === "Al" && slug.startsWith("aluminum"))
      || (symbol === "Sn" && slug.startsWith("stannum"))
    );
    const name = element ? elementNames.ko[element] : "";
    if (slug.startsWith("ultra-dry-anhydrous-")) return `초건조 무수 염화${name}`;
    if (slug.includes("yttrium-aluminum-garnet")) return "이트륨 알루미늄 가넷 분말";
    if (slug.includes("spherical-aluminum-oxide")) return "구형 산화알루미늄 분말";
    if (slug.includes("spherical-yttrium-oxide")) return "구형 산화이트륨 분말";
    if (slug.includes("holmium-copper-rod")) return "홀뮴-구리 합금 봉";
    if (slug.includes("holmium-copper-spherical-powder")) return "홀뮴-구리 합금 구형 분말";
    if (slug.includes("alloy-target")) {
      const alloyNames = Object.entries(elementNames.en)
        .filter(([, english]) => slug.includes(english.toLowerCase()) || (english === "Aluminium" && slug.includes("aluminium")))
        .map(([symbol]) => elementNames.ko[symbol]);
      return `${alloyNames.join("-")} 합금 타깃`;
    }
    if (slug.endsWith("-metal-target")) return `${name} 금속 타깃`;
    if (slug.endsWith("-metal-granule")) return `${name} 금속 과립`;
    if (slug.endsWith("-metal-block")) return `${name} 금속 블록`;
    if (slug.endsWith("-metal")) return `${name} 금속`;
    return titleCase(slug);
  };

  function translateTextNodes() {
    const dictionary = copy[language];
    const normalizedDictionary = new Map(
      Object.entries(dictionary).map(([key, value]) => [key.replace(/\s+/g, " ").trim(), value])
    );
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const raw = node.nodeValue;
      const trimmed = raw.trim();
      const normalized = trimmed.replace(/\s+/g, " ");
      if (!normalized || !normalizedDictionary.has(normalized)) return;
      const leading = raw.match(/^\s*/)?.[0] || "";
      const trailing = raw.match(/\s*$/)?.[0] || "";
      node.nodeValue = `${leading}${normalizedDictionary.get(normalized)}${trailing}`;
    });
  }

  function translateWorkbench() {
    const workbench = document.querySelector(".material-workbench");
    if (!workbench) return;
    if (language === "zh") return;

    workbench.querySelectorAll(".element-cell.is-available").forEach((cell) => {
      const symbol = cell.dataset.element;
      const localized = elementNames[language][symbol];
      const cn = cell.querySelector(".cn-name");
      if (cn && localized) cn.textContent = language === "en" ? "" : localized;
      if (localized) cell.setAttribute("aria-label",
        language === "en" ? `${localized} ${symbol} products` : `${localized} ${symbol} 관련 제품`);
    });

    const selectedSymbol = document.querySelector("#element-symbol")?.textContent.trim();
    const localized = elementNames[language][selectedSymbol];
    const elementCn = document.querySelector("#element-cn");
    const elementName = document.querySelector("#element-name");
    const elementTitle = document.querySelector("#element-title");
    if (localized) {
      if (elementCn) elementCn.textContent = language === "en" ? "" : localized;
      if (elementName) elementName.textContent = localized;
      if (elementTitle) {
        elementTitle.textContent = language === "en"
          ? `${localized} Products`
          : `${localized} 관련 제품`;
      }
    }

    document.querySelectorAll("#element-product-list a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const slug = href.split("/").pop()?.replace(/\.html(?:\?.*)?$/, "") || "";
      const arrow = link.querySelector("span");
      const label = language === "en" ? titleCase(slug) : koreanProductName(href);
      link.replaceChildren(document.createTextNode(label));
      if (arrow) link.append(arrow);
    });

    const tags = { METAL: ["METAL", "금속"], POWDER: ["POWDER", "분말"], ALLOY: ["ALLOY", "합금"] };
    document.querySelectorAll("#element-tags span").forEach((tag) => {
      const values = tags[tag.textContent.trim()];
      if (values) tag.textContent = language === "en" ? values[0] : values[1];
    });
  }

  function translateMetadata() {
    const path = window.location.pathname.toLowerCase();
    if (path.endsWith("/news.html")) {
      document.title = language === "en"
        ? "News & Updates | Viilaa"
        : "뉴스 및 소식 | Viilaa";
    }
    if (path.endsWith("/news-luh2-pressure-optical-reflectivity.html")) {
      document.title = language === "en"
        ? "Viilaa Lutetium Dihydride in High-Pressure Optical Research | Viilaa"
        : "Viilaa 루테튬 이수소화물의 고압 광학 연구 적용 | Viilaa";
    }
  }

  function applyLanguageIntegrity() {
    translateTextNodes();
    translateWorkbench();
    translateMetadata();
  }

  applyLanguageIntegrity();
  document.addEventListener("site:language-ready", applyLanguageIntegrity);

  const workbench = document.querySelector(".material-workbench");
  if (workbench) {
    workbench.addEventListener("click", (event) => {
      if (!event.target.closest(".element-cell.is-available")) return;
      window.requestAnimationFrame(translateWorkbench);
    });
  }
})();
