(function () {
  "use strict";

  const supportedLanguages = ["zh", "en", "ko"];
  const languageMeta = {
    zh: { html: "zh-CN", short: "中", label: "中文" },
    en: { html: "en", short: "EN", label: "English" },
    ko: { html: "ko", short: "한", label: "한국어" },
  };

  const translations = {
    "Home": ["首页", "홈"],
    "Products": ["产品", "제품"],
    "About Us": ["关于我们", "회사 소개"],
    "Markets": ["新闻与动态", "뉴스 및 소식"],
    "Contact": ["联系我们", "문의"],
    "Our Business · 我们的事业": ["我们的事业", "사업 소개"],
    "Our Business": ["我们的事业", "사업 소개"],
    "Technology & Quality": ["技术与质量", "기술 및 품질"],
    "Discover Viilaa": ["走进中锡", "Viilaa 알아보기"],
    "Viilaa · Advanced Materials": ["中锡金属 · 先进材料", "Viilaa · 첨단 소재"],
    "Purity at the core. Materials built for progress.": ["以纯度为核心，\n以材料推动进步。", "순도를 핵심으로, 진보를 위한 소재를 만듭니다."],
    "Based in Ganzhou, Jiangxi, we develop and manufacture rare metals and advanced materials for semiconductor, display, photovoltaic, electronics, infrared and research applications.": ["我们立足江西赣州，研发与制造面向半导体、显示、光伏、电子、红外及科研应用的稀有金属与先进材料。", "중국 장시성 간저우를 기반으로 반도체, 디스플레이, 태양광, 전자, 적외선 및 연구용 희소금속과 첨단 소재를 개발·제조합니다."],
    "Explore Products": ["查看产品", "제품 보기"],
    "Talk to our team →": ["联系我们 →", "문의하기 →"],
    "Established": ["成立时间", "설립"],
    "Core portfolio": ["核心产品", "핵심 포트폴리오"],
    "Targets · Metal Compounds · High-Purity Metals · Functional Powders": ["靶材 · 金属化合物 · 高纯金属 · 功能粉末", "타깃재 · 금속 화합물 · 고순도 금속 · 기능성 분말"],
    "Location": ["所在地", "소재지"],
    "Ganzhou, Jiangxi": ["江西赣州", "장시성 간저우"],
    "Who we are": ["公司定位", "회사 소개"],
    "Focused high-purity materials for advanced thin-film manufacturing": ["专注高纯材料\n服务先进薄膜制造", "첨단 박막 제조를 위한 고순도 소재에 집중"],
    "Jiangxi Viilaa Metal Materials Co., Ltd. is a new-materials company specializing in the research, production and sale of rare metals and advanced materials. We support both R&D and industrial customers with high-purity materials and coordinated customization.": ["江西中锡金属材料有限公司成立于2020年，坐落于江西赣州，是一家专注于稀有金属及先进材料研发、生产与销售的新材料企业。我们为研发及产业客户提供高纯材料与定制化产品支持。", "Jiangxi Viilaa Metal Materials Co., Ltd.는 2020년 장시성 간저우에 설립된 신소재 기업으로, 희소금속과 첨단 소재의 연구개발·생산·판매에 주력하며 연구 및 산업 고객에게 고순도 소재와 맞춤형 지원을 제공합니다."],
    "Our work is grounded in metal purification and powder-production experience, with an emphasis on stable products, practical engineering delivery and close collaboration from sample development to scaled application.": ["我们以金属提纯与制粉经验为基础，重视产品稳定性与工程化交付，并为客户从研发样品到批量应用提供深入协同。", "금속 정제와 분말 제조 경험을 기반으로 제품 안정성, 엔지니어링 납품 역량, 연구 샘플부터 양산 적용까지의 긴밀한 협업을 중시합니다."],
    "Two priorities, one dependable materials platform": ["两类核心产品\n共享可靠材料平台", "두 가지 핵심 제품, 하나의 신뢰할 수 있는 소재 플랫폼"],
    "PVD sputtering targets": ["PVD 溅射靶材", "PVD 스퍼터링 타깃"],
    "Rare-earth and rare-metal targets, alloy targets and custom specifications for advanced coating and thin-film processes.": ["提供稀土及稀有金属靶材、合金靶材与定制规格产品，服务先进镀膜和薄膜工艺。", "첨단 코팅 및 박막 공정을 위한 희토류·희소금속 타깃, 합금 타깃 및 맞춤 사양을 제공합니다."],
    "Ultra-dry anhydrous chlorides": ["超干无水氯化物", "초건조 무수 염화물"],
    "High-purity inputs for CVD/ALD precursor synthesis, thin films, crystals and research, with adaptable purity and packaging options.": ["面向 CVD/ALD 前驱体合成、薄膜、晶体及科研应用，支持不同纯度等级与包装方式。", "CVD/ALD 전구체 합성, 박막, 결정 및 연구용 고순도 원료로 순도와 포장 옵션을 조정할 수 있습니다."],
    "View PVD materials →": ["查看 PVD 材料 →", "PVD 소재 보기 →"],
    "View CVD materials →": ["查看 CVD 材料 →", "CVD 소재 보기 →"],
    "Foundation capabilities": ["基础能力", "기반 역량"],
    "From purified feedstock to application-ready form": ["从高纯原料到适配应用的材料形态", "정제 원료부터 적용 가능한 소재 형태까지"],
    "Purification": ["金属提纯", "정제"],
    "High-purity metal preparation": ["高纯金属制备", "고순도 금속 제조"],
    "Experience in rare-metal purification and high-purity raw-material preparation provides a stable base for targets, compounds and specialty materials.": ["稀有金属提纯与高纯原料制备经验，为靶材、化合物及特种材料提供稳定基础。", "희소금속 정제 및 고순도 원료 제조 경험을 바탕으로 타깃재, 화합물 및 특수 소재를 위한 안정적인 기반을 제공합니다."],
    "Powders": ["制粉经验", "분말"],
    "Powder production experience": ["多类型粉末产品经验", "분말 제조 경험"],
    "Metal, alloy, spherical and hydride powder experience supports coordinated control of composition, particle size, morphology and packaging.": ["金属、合金、球形及氢化物粉末产品经验，支持成分、粒度、形貌与包装的协同控制。", "금속, 합금, 구형 및 수소화물 분말 경험을 바탕으로 조성, 입도, 형상 및 포장을 종합적으로 관리합니다."],
    "Customization": ["协同定制", "맞춤화"],
    "Materials shaped around the process": ["围绕工艺协同材料需求", "공정에 맞춘 소재"],
    "Purity, composition, form and packaging can be discussed around research validation, material development and industrial requirements.": ["可围绕科研验证、材料开发和产业需求，协商纯度、成分、形态与包装方案。", "연구 검증, 소재 개발 및 산업 요구에 맞춰 순도, 조성, 형태 및 포장 방안을 협의할 수 있습니다."],
    "Explore our technology and quality system →": ["了解技术与质量体系 →", "기술 및 품질 시스템 보기 →"],
    "Credentials & recognition": ["资质与荣誉", "자격 및 수상"],
    "Verified systems. Recognized growth.": ["体系有据，成长有证。", "검증된 시스템, 인정받은 성장"],
    "Selected certificates are shown below. Open any card to view the full-size image.": ["以下精选展示证书，点击任一卡片可查看完整大图。", "아래에 주요 인증서를 선별해 표시했습니다. 카드를 클릭하면 전체 크기 이미지를 볼 수 있습니다."],
    "Quality Management": ["质量管理", "품질 경영"],
    "Enterprise Qualification": ["企业资质", "기업 자격"],
    "High-tech Enterprise": ["高新技术企业", "첨단기술기업"],
    "Enterprise Recognition": ["企业荣誉", "기업 인증"],
    "Specialized & Innovative": ["专精特新中小企业", "전문·정밀·특화·혁신형 중소기업"],
    "Innovation Recognition": ["创新认可", "혁신 인증"],
    "Innovative SME": ["创新型中小企业", "혁신형 중소기업"],
    "Technology Recognition": ["科技认可", "기술 인증"],
    "Technology-based SME": ["科技型中小企业", "기술형 중소기업"],
    "Innovation Platform": ["创新平台", "혁신 플랫폼"],
    "Provincial Doctoral Innovation Station": ["省博士创新站", "성급 박사 혁신 스테이션"],
    "Patent capability": ["专利能力", "특허 역량"],
    "Innovation across purification, targets, powders and processing": ["创新覆盖提纯、靶材、粉体与加工", "정제, 타깃, 분말 및 가공 전반의 혁신"],
    "27 patent documents are organized by technical theme. Nine representative covers provide a quick visual overview.": ["27 项专利按技术主题整理，并精选代表性首页便于快速浏览。", "27건의 특허 문서를 기술 주제별로 정리하고 대표 표지를 선별해 빠르게 살펴볼 수 있습니다."],
    "Browse all 27 patent documents": ["浏览全部 27 项专利文件", "전체 27건의 특허 문서 보기"],
    "Metal purification": ["金属提纯", "금속 정제"],
    "Metal distillation purification device": ["金属蒸馏提纯装置", "금속 증류 정제 장치"],
    "Target engineering": ["靶材工程", "타깃재 엔지니어링"],
    "Sputtering target welding fixture": ["溅射靶材焊接夹具", "스퍼터링 타깃재 용접 지그"],
    "Powder processing": ["粉末加工", "분말 가공"],
    "Continuous hot-press forming process": ["连续热压成型工艺", "연속 열간 프레스 성형 공정"],
    "Rare-earth applications": ["稀土应用", "희토류 응용"],
    "Grain-boundary diffusion tooling": ["晶界扩散工装", "입계 확산 치구"],
    "Extraction": ["萃取", "추출"],
    "Adjustable rare-earth extraction device": ["可调式稀土萃取装置", "조절식 희토류 추출 장치"],
    "High-purity metals": ["高纯金属", "고순도 금속"],
    "High-purity holmium preparation device": ["高纯钬制备装置", "고순도 홀뮴 제조 장치"],
    "High-purity scandium melting furnace": ["高纯钪熔炼炉", "고순도 스칸듐 용해로"],
    "Lead-antimony separation equipment for high-purity tin": ["高纯锡铅锑分离设备", "고순도 주석용 납·안티몬 분리 장비"],
    "Rare-earth processing": ["稀土加工", "희토류 가공"],
    "Rare-earth refining crusher": ["稀土精炼破碎机", "희토류 정련 분쇄기"],
    "Target sandblasting device": ["靶材喷砂装置", "타깃재 샌드블라스팅 장치"],
    "Large target machining device": ["大型靶材加工装置", "대형 타깃재 가공 장치"],
    "Adjustable wire-processing equipment": ["可调式线材加工设备", "조절식 선재 가공 장비"],
    "Rare-earth permanent-magnet diffusion device": ["稀土永磁扩散装置", "희토류 영구자석 확산 장치"],
    "Wire processing": ["线材加工", "선재 가공"],
    "Solder processing": ["焊料加工", "솔더 가공"],
    "Alloy processing": ["合金加工", "합금 가공"],
    "Solder engineering": ["焊料工程", "솔더 엔지니어링"],
    "Materials handling": ["材料储运", "소재 취급"],
    "Testing": ["检测", "시험"],
    "Optical-fiber processing": ["光纤加工", "광섬유 가공"],
    "03 · Adjustable rare-earth extraction device": ["03 · 可调式稀土萃取装置", "03 · 조절식 희토류 추출 장치"],
    "04 · Rapid cooling device for solder bar forming": ["04 · 焊料条成型快速冷却装置", "04 · 솔더 바 성형용 급속 냉각 장치"],
    "05 · Extrusion die for shaped tin alloy": ["05 · 异形锡合金挤压模具", "05 · 이형 주석 합금 압출 금형"],
    "06 · Adjustable wire-processing equipment": ["06 · 可调式线材加工设备", "06 · 조절식 선재 가공 장비"],
    "07 · Lead-antimony separation equipment for high-purity tin": ["07 · 高纯锡铅锑分离设备", "07 · 고순도 주석용 납·안티몬 분리 장비"],
    "08 · Terbium hydrogenation device": ["08 · 铽氢化装置", "08 · 터븀 수소화 장치"],
    "09 · Anti-spatter soldering device": ["09 · 防飞溅焊接装置", "09 · 비산 방지 납땜 장치"],
    "10 · Tungsten-wire processing equipment": ["10 · 钨丝加工设备", "10 · 텅스텐 와이어 가공 장비"],
    "11 · Solder terminal correction device": ["11 · 焊料端头校正装置", "11 · 솔더 단자 교정 장치"],
    "12 · High-purity scandium melting furnace": ["12 · 高纯钪熔炼炉", "12 · 고순도 스칸듐 용해로"],
    "13 · Tinned copper wire cooling and drying device": ["13 · 镀锡铜线冷却干燥装置", "13 · 주석 도금 동선 냉각·건조 장치"],
    "14 · NdFeB grain-boundary diffusion tooling": ["14 · 钕铁硼晶界扩散工装", "14 · NdFeB 입계 확산 치구"],
    "15 · Dysprosium hydrogenation device": ["15 · 镝氢化装置", "15 · 디스프로슘 수소화 장치"],
    "16 · Rare-earth permanent-magnet diffusion device": ["16 · 稀土永磁扩散装置", "16 · 희토류 영구자석 확산 장치"],
    "17 · Metal distillation purification device": ["17 · 金属蒸馏提纯装置", "17 · 금속 증류 정제 장치"],
    "18 · Rare-metal and alloy storage device": ["18 · 稀有金属及合金储存装置", "18 · 희유금속 및 합금 보관 장치"],
    "19 · Sputtering target welding fixture": ["19 · 溅射靶材焊接夹具", "19 · 스퍼터링 타깃재 용접 지그"],
    "20 · High-purity holmium preparation device": ["20 · 高纯钬制备装置", "20 · 고순도 홀뮴 제조 장치"],
    "21 · Large target machining device": ["21 · 大型靶材加工装置", "21 · 대형 타깃재 가공 장치"],
    "22 · Target sandblasting device": ["22 · 靶材喷砂装置", "22 · 타깃재 샌드블라스팅 장치"],
    "23 · Protected tin-ball welding device": ["23 · 防护式锡球焊接装置", "23 · 보호형 주석 볼 용접 장치"],
    "24 · Solder-ball strength testing device": ["24 · 焊料球强度检测装置", "24 · 솔더 볼 강도 시험 장치"],
    "25 · Tin-alloy cutting device with grinding": ["25 · 带研磨功能的锡合金切割装置", "25 · 연마 기능이 있는 주석 합금 절단 장치"],
    "26 · Optical-fiber preform fracture detection equipment": ["26 · 光纤预制棒断裂检测设备", "26 · 광섬유 프리폼 파손 검사 장비"],
    "27 · Rare-earth refining crusher": ["27 · 稀土精炼破碎机", "27 · 희토류 정련 분쇄기"],
    "28 · Rare-earth powder continuous hot-press process": ["28 · 稀土粉末连续热压工艺", "28 · 희토류 분말 연속 열간 프레스 공정"],
    "29 · Rare-earth extraction equipment with microencapsulation support": ["29 · 带微胶囊辅助的稀土萃取设备", "29 · 마이크로캡슐 보조 희토류 추출 장비"],
    "Materials expertise, aligned with your next application.": ["以材料专长，协同您的下一项应用。", "소재 전문성으로 다음 응용을 함께합니다."],
    "Start a conversation": ["开始沟通", "문의 시작"],
    "High-Purity Metals": ["高纯金属", "고순도 금속"],
    "PVD Coating Materials": ["PVD 镀膜材料", "PVD 코팅 소재"],
    "CVD Coating Materials": ["CVD 镀膜材料", "CVD 코팅 소재"],
    "Functional powders": ["功能粉末", "기능성 분말"],
    "High-Purity Metal": ["高纯金属", "고순도 금속"],
    "Sputtering Targets": ["溅射靶材", "스퍼터링 타깃"],
    "Evaporation Materials": ["蒸发材料", "증착 소재"],
    "Anhydrous Chlorides": ["无水氯化物", "무수 염화물"],
    "Ultra-dry Anhydrous Chlorides": ["超干无水氯化物", "초건조 무수 염화물"],
    "High Purity Hydrated Chlorides": ["高纯水合氯化物", "고순도 수화 염화물"],
    "High-performance Powders": ["高性能粉末", "고성능 분말"],
    "Product Center": ["产品中心", "제품 센터"],
    "Product Lines": ["产品线", "제품군"],
    "Request a Quote": ["获取报价", "견적 요청"],
    "View Products": ["查看产品", "제품 보기"],
    "View details": ["查看详情", "상세 보기"],
    "See details": ["见详情页", "상세 페이지 참조"],
    "Browse Catalog": ["浏览产品", "카탈로그 보기"],
    "Back to Product Center": ["返回产品中心", "제품 센터로 돌아가기"],
    "Formula": ["化学式", "화학식"],
    "Purity": ["纯度", "순도"],
    "Size": ["尺寸", "규격"],
    "Custom": ["定制", "맞춤형"],
    "Customizable": ["可定制", "맞춤 제작 가능"],
    "Specifications": ["产品规格", "제품 사양"],
    "Product Name": ["产品名称", "제품명"],
    "Chinese Name": ["中文名称", "중문명"],
    "Product Line": ["产品线", "제품군"],
    "Category": ["产品类别", "카테고리"],
    "Formula / Composition": ["化学式 / 成分", "화학식 / 조성"],
    "Customizable according to customer requirements": ["可根据客户要求定制", "고객 요구사항에 따라 맞춤 제작 가능"],
    "Customer-specific customization available": ["可根据客户要求定制", "고객 요구사항에 따라 맞춤 제작 가능"],
    "Product Range": ["产品范围", "제품 범위"],
    "Available Hydrated Chloride Grades": ["高纯水合氯化物产品规格", "고순도 수화 염화물 제품 규격"],
    "Available Anhydrous Chloride Grades": ["无水氯化物产品规格", "무수 염화물 제품 규격"],
    "Anhydrous chlorides are available in multiple compositions and purity grades. Purity specifications can be customized according to customer requirements.": ["无水氯化物可提供多种成分和纯度等级，纯度指标可根据客户要求定制。", "무수 염화물은 다양한 조성과 순도 등급으로 제공되며 순도 사양은 고객 요구사항에 따라 맞춤 제작할 수 있습니다."],
    "Hafnium Tetrachloride": ["四氯化铪", "사염화하프늄"],
    "Zirconium Tetrachloride": ["四氯化锆", "사염화지르코늄"],
    "Vanadium Trichloride": ["三氯化钒", "삼염화바나듐"],
    "Tantalum Pentachloride": ["五氯化钽", "오염화탄탈럼"],
    "Niobium Pentachloride": ["五氯化铌", "오염화나이오븀"],
    "Molybdenum Pentachloride": ["五氯化钼", "오염화몰리브데넘"],
    "Anhydrous Lanthanum Chloride": ["无水氯化镧", "무수 염화란타넘"],
    "Anhydrous Cerium Chloride": ["无水氯化铈", "무수 염화세륨"],
    "Anhydrous Praseodymium Chloride": ["无水氯化镨", "무수 염화프라세오디뮴"],
    "Anhydrous Neodymium Chloride": ["无水氯化钕", "무수 염화네오디뮴"],
    "Anhydrous Samarium Chloride": ["无水氯化钐", "무수 염화사마륨"],
    "Anhydrous Gadolinium Chloride": ["无水氯化钆", "무수 염화가돌리늄"],
    "Anhydrous Terbium Chloride": ["无水氯化铽", "무수 염화터븀"],
    "Anhydrous Dysprosium Chloride": ["无水氯化镝", "무수 염화디스프로슘"],
    "Anhydrous Holmium Chloride": ["无水氯化钬", "무수 염화홀뮴"],
    "Anhydrous Erbium Chloride": ["无水氯化铒", "무수 염화에르븀"],
    "Anhydrous Thulium Chloride": ["无水氯化铥", "무수 염화툴륨"],
    "Anhydrous Ytterbium Chloride": ["无水氯化镱", "무수 염화이터븀"],
    "Anhydrous Lutetium Chloride": ["无水氯化镥", "무수 염화루테튬"],
    "Anhydrous Yttrium Chloride": ["无水氯化钇", "무수 염화이트륨"],
    "Anhydrous Scandium Chloride": ["无水氯化钪", "무수 염화스칸듐"],
    "High-purity hydrated chlorides are available in multiple compositions. Purity specifications can be customized according to customer requirements.": ["高纯水合氯化物可提供多种成分，纯度指标可根据客户要求定制。", "고순도 수화 염화물은 다양한 조성으로 제공되며 순도 사양은 고객 요구사항에 따라 맞춤 제작할 수 있습니다."],
    "Chemical Formula": ["化学式", "화학식"],
    "Grade": ["等级", "등급"],
    "Purity Specification": ["纯度指标", "순도 사양"],
    "CAS No.": ["CAS号", "CAS 번호"],
    "High Purity Aluminum Chloride": ["高纯氯化铝", "고순도 염화알루미늄"],
    "High Purity Cerium Chloride": ["高纯氯化铈", "고순도 염화세륨"],
    "High Purity Praseodymium Chloride": ["高纯氯化镨", "고순도 염화프라세오디뮴"],
    "High Purity Neodymium Chloride": ["高纯氯化钕", "고순도 염화네오디뮴"],
    "High Purity Holmium Chloride": ["高纯氯化钬", "고순도 염화홀뮴"],
    "High Purity Erbium Chloride": ["高纯氯化铒", "고순도 염화에르븀"],
    "High Purity Thulium Chloride": ["高纯氯化铥", "고순도 염화툴륨"],
    "High Purity Ytterbium Chloride": ["高纯氯化镱", "고순도 염화이터븀"],
    "Note: Purity specifications can be customized according to customer requirements.": ["注：纯度指标可以根据客户的要求定制。", "참고: 순도 사양은 고객 요구사항에 따라 맞춤 제작할 수 있습니다."],
    "Standard Size": ["标准尺寸", "표준 규격"],
    "Packaging": ["包装", "포장"],
    "Customization": ["定制", "맞춤 제작"],
    "Available on request": ["可按需提供", "요청 시 제공"],
    "Yes": ["是", "예"],
    "Product Features": ["产品特点", "제품 특징"],
    "Applications": ["应用领域", "적용 분야"],
    "RFQ Checklist": ["询价清单", "RFQ 체크리스트"],
    "Recommended information for quotation": ["建议提供以下询价信息", "견적을 위해 권장되는 정보"],
    "Material name or formula": ["材料名称或化学式", "소재명 또는 화학식"],
    "Purity or composition": ["纯度或成分", "순도 또는 조성"],
    "Shape and size": ["形状和尺寸", "형상 및 크기"],
    "Quantity": ["数量", "수량"],
    "Packaging preference": ["包装要求", "포장 선호 사항"],
    "Application or deposition process": ["应用或沉积工艺", "적용 분야 또는 증착 공정"],
    "High-purity metals, PVD materials, CVD precursors, and custom advanced materials.": [
      "高纯金属、PVD 材料、CVD 前驱体原材料及定制先进材料。",
      "고순도 금속, PVD 소재, CVD 전구체 및 맞춤형 첨단 소재."
    ],

    "Advanced Materials | Thin Film | Rare Earth Metals": ["先进材料 | 薄膜 | 稀土金属", "첨단 소재 | 박막 | 희토류 금속"],
    "Materials for Advanced Coating Technologies": ["先进镀膜材料", "첨단 코팅 기술을 위한 소재"],
    "High-purity metals, sputtering targets, evaporation materials, and rare earth compounds for coating, energy, electronics, aerospace, and intelligent manufacturing.": [
      "为镀膜、能源、电子、航空航天及智能制造提供高纯金属、溅射靶材、蒸发材料和稀土化合物。",
      "코팅, 에너지, 전자, 항공우주 및 스마트 제조를 위한 고순도 금속, 스퍼터링 타깃, 증착 소재와 희토류 화합물을 제공합니다."
    ],
    "listed products and product groups": ["个产品及产品组", "개 제품 및 제품군"],
    "core product lines": ["大核心产品线", "개 핵심 제품군"],
    "purity, size, shape, and packaging": ["纯度、尺寸、形状与包装", "순도, 크기, 형상 및 포장"],
    "materials for thin film workflows": ["面向薄膜工艺的材料", "박막 공정을 위한 소재"],
    "Materials organized by purchasing workflow": ["按采购流程组织的材料体系", "구매 업무 흐름에 맞춘 소재 구성"],
    "The product structure follows how engineering and sourcing teams usually search: base high-purity metals, deposition materials, precursor chlorides, and performance powders.": [
      "产品体系遵循工程与采购团队的常用检索方式，涵盖基础高纯金属、沉积材料、氯化物前驱体和功能粉末。",
      "제품 구성은 엔지니어링 및 구매팀의 검색 방식에 맞춰 고순도 금속, 증착 소재, 염화물 전구체와 기능성 분말로 구분됩니다."
    ],
    "17 products": ["17 个产品", "제품 17종"],
    "34 products": ["34 个产品", "제품 34종"],
    "7 products": ["7 个产品", "제품 7종"],
    "Rare earth metals including La, Ce, Pr, Nd, Dy, Tb, Ho, Er, Tm, Sm, Yb, Gd, Y, Lu, and Sc.": [
      "涵盖 La、Ce、Pr、Nd、Dy、Tb、Ho、Er、Tm、Sm、Yb、Gd、Y、Lu 和 Sc 等稀土金属。",
      "La, Ce, Pr, Nd, Dy, Tb, Ho, Er, Tm, Sm, Yb, Gd, Y, Lu, Sc 등의 희토류 금속."
    ],
    "Sputtering targets, evaporation granules, blocks, rods, and custom alloy targets.": ["溅射靶材、蒸发颗粒、块材、棒材及定制合金靶材。", "스퍼터링 타깃, 증착용 과립·블록·봉 및 맞춤형 합금 타깃."],
    "Ultra-dry anhydrous chlorides, high-purity hydrated chlorides, and anhydrous chlorides.": ["超干无水氯化物、高纯水合氯化物及无水氯化物。", "초건조 무수 염화물, 고순도 수화 염화물 및 무수 염화물."],
    "Ho-Cu alloy rods and powders, metal hydrides, spherical oxides, and YAG powder.": ["钬铜合金棒材及粉末、金属氢化物、球形氧化物和 YAG 粉末。", "홀뮴-구리 합금 봉과 분말, 금속 수소화물, 구형 산화물 및 YAG 분말."],
    "Explore metals": ["查看金属产品", "금속 제품 보기"],
    "Explore PVD materials": ["查看 PVD 材料", "PVD 소재 보기"],
    "Explore CVD materials": ["查看 CVD 材料", "CVD 소재 보기"],
    "Explore powders": ["查看功能粉末", "기능성 분말 보기"],
    "01 / Application Markets": ["01 / 应用市场", "01 / 적용 시장"],
    "Materials enabling advanced industries": ["赋能先进产业的材料", "첨단 산업을 구현하는 소재"],
    "Our high-purity metals and thin-film materials support customers across semiconductor, clean energy, aerospace, optical coating, and intelligent manufacturing workflows.": [
      "我们的高纯金属和薄膜材料服务于半导体、清洁能源、航空航天、光学镀膜和智能制造等领域。",
      "당사의 고순도 금속과 박막 소재는 반도체, 청정에너지, 항공우주, 광학 코팅 및 스마트 제조 공정을 지원합니다."
    ],
    "Semiconductor, AI hardware, and advanced device research": ["半导体、AI 硬件及先进器件研发", "반도체, AI 하드웨어 및 첨단 소자 연구"],
    "New energy, mobility, aerospace, and optical coating programs": ["新能源、交通、航空航天及光学镀膜项目", "신에너지, 모빌리티, 항공우주 및 광학 코팅"],
    "Robotics, precision inspection, and automated coating platforms": ["机器人、精密检测及自动化镀膜平台", "로봇, 정밀 검사 및 자동 코팅 플랫폼"],
    "02 / Technology & Production": ["02 / 技术与生产", "02 / 기술 및 생산"],
    "Process capability supported by advanced equipment": ["先进设备支持的工艺能力", "첨단 설비가 뒷받침하는 공정 역량"],
    "From melting and forming to machining, cleaning, and packaging, our workflow is designed for purity control, dimensional consistency, and stable batch-to-batch delivery.": [
      "从熔炼成形到机械加工、清洗和包装，整套流程围绕纯度控制、尺寸一致性和批次稳定交付而设计。",
      "용해와 성형부터 가공, 세정, 포장까지 전 공정은 순도 관리, 치수 일관성 및 안정적인 배치 공급을 위해 설계됩니다."
    ],
    "Controlled production environments for high-purity samples": ["面向高纯样品的受控生产环境", "고순도 시료를 위한 관리된 생산 환경"],
    "Custom circular, rectangular, block, granule, pellet, rod, and wire formats": ["可定制圆形、矩形、块状、颗粒、丸状、棒状和丝状规格", "원형, 사각, 블록, 과립, 펠릿, 봉 및 와이어 맞춤 제작"],
    "Vacuum sealing, argon protection, and moisture-controlled handling": ["真空密封、氩气保护及控湿处理", "진공 밀봉, 아르곤 보호 및 수분 제어 취급"],
    "03 / Testing Capability": ["03 / 检测能力", "03 / 분석 역량"],
    "Analytical control for purity, structure, and consistency": ["纯度、结构与一致性的分析控制", "순도, 구조 및 일관성을 위한 분석 관리"],
    "Quality work is built around traceable inspection, composition analysis, particle and surface review, and documentation support for customer qualification workflows.": [
      "质量管理围绕可追溯检测、成分分析、颗粒与表面评估，以及客户认证流程所需的文件支持展开。",
      "품질 관리는 추적 가능한 검사, 조성 분석, 입자 및 표면 검토와 고객 승인 절차를 위한 문서 지원을 중심으로 이루어집니다."
    ],
    "Elemental composition checks and impurity review": ["元素成分检测与杂质评估", "원소 조성 검사 및 불순물 검토"],
    "Morphology, particle, and surface condition support": ["形貌、颗粒及表面状态分析支持", "형상, 입자 및 표면 상태 분석 지원"],
    "Packaging verification for sensitive rare earth compounds": ["敏感稀土化合物的包装验证", "민감한 희토류 화합물의 포장 검증"],
    "04 / Core Competency": ["04 / 核心能力", "04 / 핵심 역량"],
    "Reliable material supply from R&D samples to production": ["从研发样品到量产的可靠材料供应", "연구 시료부터 양산까지 이어지는 안정적 소재 공급"],
    "Broad material selection, custom specifications, inspection documentation, and responsive support help customers move from laboratory evaluation to recurring supply.": [
      "丰富的材料选择、定制规格、检测文件和快速响应，帮助客户从实验室评估顺利过渡到持续供应。",
      "폭넓은 소재 선택, 맞춤 사양, 검사 문서와 신속한 지원으로 실험실 평가부터 지속 공급까지 고객을 지원합니다."
    ],
    "listed product groups": ["个产品组", "개 제품군"],
    "purity, form, size, and packaging": ["纯度、形态、尺寸与包装", "순도, 형태, 크기 및 포장"],
    "documentation and inspection support": ["文件及检测支持", "문서 및 검사 지원"],
    "Built for high-specification material workflows": ["面向高规格材料工艺", "고사양 소재 공정을 위해 설계"],
    "Semiconductor & Microelectronics": ["半导体与微电子", "반도체 및 마이크로전자"],
    "High-k dielectrics, diffusion barriers, ohmic contact layers, MRAM films, and advanced device research.": ["用于高 k 介质、扩散阻挡层、欧姆接触层、MRAM 薄膜及先进器件研发。", "고유전율 유전체, 확산 방지막, 오믹 접촉층, MRAM 박막 및 첨단 소자 연구."],
    "Display & Flexible Electronics": ["显示与柔性电子", "디스플레이 및 플렉시블 전자"],
    "OLED interfaces, IGZO backplane doping, metal wiring, reflective electrodes, and barrier films.": ["用于 OLED 界面、IGZO 背板掺杂、金属布线、反射电极及阻隔膜。", "OLED 계면, IGZO 백플레인 도핑, 금속 배선, 반사 전극 및 배리어 필름."],
    "Optical Coating & Photonics": ["光学镀膜与光子学", "광학 코팅 및 포토닉스"],
    "Laser gain films, infrared optics, optical protection coatings, and rare earth functional films.": ["用于激光增益膜、红外光学、光学保护涂层及稀土功能薄膜。", "레이저 이득막, 적외선 광학, 광학 보호 코팅 및 희토류 기능성 박막."],
    "Magnetic & Energy Materials": ["磁性与能源材料", "자성 및 에너지 소재"],
    "Permanent magnets, magnetostrictive materials, magnetic refrigeration, fuel cells, and thermal barrier coatings.": ["用于永磁体、磁致伸缩材料、磁制冷、燃料电池及热障涂层。", "영구자석, 자기변형 소재, 자기 냉각, 연료전지 및 열차폐 코팅."],
    "Custom material preparation with traceable specifications": ["可追溯规格的定制材料制备", "추적 가능한 사양에 따른 맞춤 소재 제조"],
    "Product parameters can be aligned with purity, total rare earth metal content, alloy composition, target geometry, particle size, packaging, and application-specific handling requirements.": [
      "产品参数可根据纯度、稀土总量、合金成分、靶材几何形状、粒度、包装及具体应用的处理要求进行调整。",
      "제품 사양은 순도, 총희토류 함량, 합금 조성, 타깃 형상, 입도, 포장 및 적용 공정의 취급 요건에 맞춰 조정할 수 있습니다."
    ],
    "Purity confirmation": ["纯度确认", "순도 확인"],
    "Custom size and shape": ["定制尺寸与形状", "맞춤 크기 및 형상"],
    "Vacuum or argon packaging": ["真空或氩气包装", "진공 또는 아르곤 포장"],
    "PVD and CVD material matching": ["PVD 与 CVD 材料匹配", "PVD 및 CVD 소재 매칭"],
    "Research and production batches": ["研发及生产批次", "연구 및 생산 배치"],
    "Specification-based quotation": ["按规格报价", "사양 기반 견적"],
    "Request for Quote": ["询价", "견적 요청"],
    "Prepare the key details for a precise quotation": ["准备关键信息，获取准确报价", "정확한 견적을 위한 핵심 정보"],
    "A practical RFQ should include material name, chemical formula, purity, shape, size, quantity, packaging preference, and target application.": ["有效的询价应包括材料名称、化学式、纯度、形状、尺寸、数量、包装要求和目标应用。", "효율적인 RFQ에는 소재명, 화학식, 순도, 형상, 크기, 수량, 포장 방식 및 적용 분야가 포함되어야 합니다."],
    "Material identity": ["材料信息", "소재 정보"],
    "Product name, chemical formula, alloy ratio, or reference specification.": ["产品名称、化学式、合金比例或参考规格。", "제품명, 화학식, 합금 비율 또는 참조 사양."],
    "Technical requirement": ["技术要求", "기술 요구 사항"],
    "Purity, composition, form, size, tolerance, and packaging preference.": ["纯度、成分、形态、尺寸、公差和包装要求。", "순도, 조성, 형태, 크기, 공차 및 포장 방식."],
    "Application context": ["应用信息", "적용 정보"],
    "Quantity, target process, coating method, research use, or production plan.": ["数量、目标工艺、镀膜方式、研发用途或生产计划。", "수량, 대상 공정, 코팅 방식, 연구 용도 또는 생산 계획."],
    "Go to Contact Page": ["前往联系页面", "문의 페이지로 이동"],

    "Search high-purity materials by product line and specification": ["按产品线与规格查找高纯材料", "제품군과 사양으로 고순도 소재 검색"],
    "This catalog is structured around sourcing workflows: high-purity metals, PVD coating materials, CVD coating materials, and functional powders.": ["本目录按照采购流程划分为高纯金属、PVD 镀膜材料、CVD 镀膜材料和功能粉末。", "이 카탈로그는 구매 흐름에 따라 고순도 금속, PVD 코팅 소재, CVD 코팅 소재 및 기능성 분말로 구성됩니다."],

    "Empowering the World Through Advanced Materials": ["用材料为世界赋能", "첨단 소재로 세상에 힘을 더합니다"],
    "Our Business · 我们的事业": ["我们的事业", "사업 소개"],
    "From Materials to Everyday Life": ["从材料，到生活", "소재에서 일상으로"],
    "Targets to Functional Films": ["从靶材，到功能薄膜", "타깃에서 기능성 박막으로"],
    "Purity Creates Performance": ["材料性能，从纯度开始", "성능은 순도에서 시작됩니다"],
    "Control Light and Chemistry": ["控制光，也控制化学反应", "빛과 화학 반응을 제어하다"],
    "Materials in the Real World": ["让材料进入工艺，让性能服务世界", "현실을 움직이는 소재"],
    "Connecting advanced materials with advanced manufacturing.": ["连接先进材料与先进制造。", "첨단 소재와 첨단 제조를 연결합니다."],
    "Talk to Our Team": ["联系我们", "담당자에게 문의"],

    "Business Contact": ["商务联系", "비즈니스 문의"],
    "Share your material requirements with our team.": ["请向我们说明您的材料需求。", "필요한 소재 사양을 알려주세요."],
    "For a faster response, include the material name, purity or composition, shape, size, quantity, packaging preference, and intended application.": ["为便于快速回复，请提供材料名称、纯度或成分、形状、尺寸、数量、包装要求和目标应用。", "빠른 답변을 위해 소재명, 순도 또는 조성, 형상, 크기, 수량, 포장 방식과 적용 분야를 알려주세요."],
    "Address": ["地址", "주소"],
    "Chinese Address": ["中文地址", "중문 주소"],
    "Longhua Industrial Park, Nankang District, Ganzhou, Jiangxi, China": ["中国江西省赣州市南康区龙华工业园", "중국 장시성 간저우시 난캉구 룽화 산업단지"],
    "Direct Contact": ["直接联系", "직접 문의"],
    "Inquiry": ["询价", "문의"],
    "Request material support": ["获取材料支持", "소재 지원 요청"],
    "Name": ["姓名", "이름"],
    "Company": ["公司", "회사"],
    "Phone / WeChat": ["电话 / 微信", "전화 / WeChat"],
    "Material / Product": ["材料 / 产品", "소재 / 제품"],
    "Purity / Composition": ["纯度 / 成分", "순도 / 조성"],
    "Size / Shape": ["尺寸 / 形状", "크기 / 형상"],
    "Application / Message": ["应用 / 留言", "적용 분야 / 메시지"],
    "Email Inquiry": ["发送邮件", "이메일 문의"],
    "Call": ["拨打电话", "전화"],
    "Location": ["公司位置", "위치"],
    "Longhua Industrial Park, Ganzhou": ["赣州龙华工业园", "간저우 룽화 산업단지"],
    "Jiangxi Viilaa Metal Materials Co., Ltd is located in Nankang District, Ganzhou, Jiangxi. Choose Baidu Maps or Google Maps for route planning and location reference.": ["江西中锡金属材料有限公司位于江西省赣州市南康区，可选择百度地图或 Google 地图规划路线并查看位置。", "Jiangxi Viilaa Metal Materials Co., Ltd는 중국 장시성 간저우시 난캉구에 있습니다. 바이두 지도 또는 Google 지도에서 위치와 경로를 확인할 수 있습니다."],
    "Choose map": ["选择地图", "지도 선택"],
    "Baidu Maps": ["百度地图", "바이두 지도"],
    "Google Maps": ["Google 地图", "Google 지도"],
    "Selecting the best map for your region…": ["正在根据您所在地区选择地图…", "현재 지역에 적합한 지도를 선택하는 중…"],
    "Loading map…": ["正在加载地图…", "지도를 불러오는 중…"],
    "Open Google Maps": ["打开 Google 地图", "Google 지도 열기"],
    "Open Baidu Maps": ["打开百度地图", "바이두 지도 열기"],
    "Example: Scandium Metal Target": ["例如：金属钪靶", "예: 스칸듐 금속 타깃"],
    "Example: 99.95% / Al-Sc ratio": ["例如：99.95% / Al-Sc 比例", "예: 99.95% / Al-Sc 비율"],
    "Example: Dia 100 mm x 6 mm": ["例如：直径 100 mm × 6 mm", "예: 직경 100 mm × 6 mm"],
    "Example: 2 pcs / 1 kg": ["例如：2 件 / 1 kg", "예: 2개 / 1 kg"],
    "Tell us your process, packaging preference, or specification requirements.": ["请说明您的工艺、包装要求或规格需求。", "공정, 포장 방식 또는 필요한 사양을 알려주세요."],
  };

  const businessKorean = [
    "우리는 매일 소재가 만들어 내는 성능을 사용합니다. 밝게 빛나는 디스플레이, 빠르게 작동하는 반도체, 정밀 광학 부품과 안정적인 자석은 모두 소재에 대한 이해와 제어에서 시작됩니다.",
    "완성품 뒤에는 육안으로 보기 어려운 박막, 정밀하게 제어된 금속과 최종 성능을 결정하는 고순도 소재가 있습니다. Viilaa는 소재가 성능으로 전환되는 과정에 집중합니다.",
    "진공 챔버에서 플라즈마 이온이 스퍼터링 타깃 표면을 충돌합니다. 방출된 원자는 진공을 지나 유리, 웨이퍼 또는 기판 위에 재배열되어 나노미터에서 마이크로미터 두께의 기능성 박막을 형성합니다.",
    "이 박막은 디스플레이의 투명 전도층과 전극, 반도체의 도전·배리어 구조, 빛을 제어하는 광학 코팅과 데이터 저장 및 정밀 센싱용 자성막이 됩니다.",
    "첨단 제조에서는 미량의 불순물도 전기전도도, 자기 특성, 광학 특성과 박막 균일성에 영향을 줄 수 있습니다. 용해, 정제, 가공과 성형을 거친 고순도 금속은 타깃, 증착 소재와 첨단 합금의 기반이 됩니다.",
    "네오디뮴, 프라세오디뮴, 사마륨, 터븀과 디스프로슘 등의 희토류 금속은 전기차 모터, 풍력발전기, 로봇, 정밀 센서와 지능형 장비에 사용되는 고성능 자석과 특수 합금을 구현합니다.",
    "희토류 불화물과 고순도 불화물은 고유한 투과 범위, 굴절률과 광학 특성을 갖습니다. 광학 코팅, 적외선 광학, 레이저 결정과 발광 소재에서 특정 파장의 투과, 반사와 필터링을 제어합니다.",
    "희토류 및 고순도 무수 염화물은 원료, 도핑 소스, 플럭스 성분, 반응물 또는 전구체로 사용됩니다. CVD와 기상 증착 공정에서 균일하고 치밀한 정밀 박막 구조로 전환됩니다.",
    "순도, 조성, 미세조직, 입도, 물리적 형상과 공정 적합성이 함께 안정적이고 신뢰할 수 있는 성능을 결정합니다. 당사는 개별 원소나 제품을 넘어 소재에서 공정으로, 공정에서 성능으로 이어지는 전체 여정에 집중합니다.",
    "당사의 제품군은 디스플레이, 반도체, 광학, 자성 소재와 첨단 제조에 사용되는 스퍼터링 타깃, 희토류 및 고순도 금속, 염화물, 불화물과 기능성 분말을 포함합니다. 소재의 형태가 발전할수록 기술의 가능성도 확장됩니다."
  ];

  const elementKorean = {
    Aluminium: "알루미늄", Aluminum: "알루미늄", Cerium: "세륨", Chromium: "크로뮴",
    Copper: "구리", Dysprosium: "디스프로슘", Erbium: "어븀", Europium: "유로퓸",
    Gadolinium: "가돌리늄", Germanium: "게르마늄", Hafnium: "하프늄", Holmium: "홀뮴",
    Lanthanum: "란타넘", Lutetium: "루테튬", Neodymium: "네오디뮴", Nickel: "니켈",
    Praseodymium: "프라세오디뮴", Samarium: "사마륨", Scandium: "스칸듐", Stannum: "주석",
    Tantalum: "탄탈럼", Terbium: "터븀", Thulium: "툴륨", Titanium: "티타늄", Vanadium: "바나듐",
    Ytterbium: "이터븀", Yttrium: "이트륨"
  };

  const packagingTranslations = {
    zh: {
      "Vacuum sealed": "真空密封", "Vacuum sealed / argon protected": "真空密封 / 氩气保护",
      "Argon protected": "氩气保护", "Moisture-controlled packaging": "控湿包装",
      "Sealed packaging": "密封包装", "Vacuum packaging": "真空包装"
    },
    ko: {
      "Vacuum sealed": "진공 밀봉", "Vacuum sealed / argon protected": "진공 밀봉 / 아르곤 보호",
      "Argon protected": "아르곤 보호", "Moisture-controlled packaging": "수분 제어 포장",
      "Sealed packaging": "밀봉 포장", "Vacuum packaging": "진공 포장"
    },
    en: {
      "真空包装": "Vacuum packaging",
      "覆膜": "Protective film",
      "塑料瓶": "Plastic bottle",
      "真空包装或铁桶充氩气": "Vacuum packaging or argon-filled steel drum",
      "真空包装或瓶装充氩气": "Vacuum packaging or argon-filled bottle",
      "铁桶或木箱": "Steel drum or wooden case",
      "杜兰瓶": "DURAN glass bottle"
    }
  };

  Object.assign(packagingTranslations.ko, {
    "真空包装": "진공 포장",
    "覆膜": "보호 필름",
    "塑料瓶": "플라스틱 병",
    "真空包装或铁桶充氩气": "진공 포장 또는 아르곤 충전 철제 드럼",
    "真空包装或瓶装充氩气": "진공 포장 또는 아르곤 충전 병",
    "铁桶或木箱": "철제 드럼 또는 목재 상자",
    "杜兰瓶": "DURAN 유리병"
  });

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function languageFromEnvironment() {
    const query = new URLSearchParams(window.location.search).get("lang");
    if (supportedLanguages.includes(query)) return query;
    const saved = window.localStorage.getItem("viilaa-language");
    if (supportedLanguages.includes(saved)) return saved;
    const browserLanguages = navigator.languages || [navigator.language || "en"];
    const first = browserLanguages.map((item) => item.toLowerCase()).find((item) => item.startsWith("zh") || item.startsWith("ko"));
    if (first && first.startsWith("zh")) return "zh";
    if (first && first.startsWith("ko")) return "ko";
    return "en";
  }

  function translatedText(source, language) {
    if (language === "en") {
      const englishOverrides = {
        "Our Business · 我们的事业": "Our Business",
        "Markets": "News & Updates"
      };
      return englishOverrides[normalize(source)] || source;
    }
    const item = translations[normalize(source)] || window.technologyTranslations?.[normalize(source)];
    return item ? item[language === "zh" ? 0 : 1] : null;
  }

  function setText(element, text) {
    if (element && text != null) element.textContent = text;
  }

  function translateExactText(language) {
    const selector = "h1,h2,h3,p,li,a,button,span,strong,b,dt,dd,th,td,label";
    document.querySelectorAll(selector).forEach((element) => {
      if (element.closest(".language-switcher")) return;
      if (element.children.length) return;
      const source = normalize(element.textContent);
      const value = translatedText(source, language);
      if (value) element.textContent = value;
    });

    document.querySelectorAll(".credential-card span, .patent-card span, .patent-index summary").forEach((element) => {
      Array.from(element.childNodes).forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE) return;
        const source = normalize(node.textContent);
        if (!source) return;
        const value = translatedText(source, language);
        if (value) node.textContent = value;
      });
    });

    document.querySelectorAll(".patent-index-grid .patent-card span").forEach((element) => {
      Array.from(element.childNodes).forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) node.textContent = node.textContent.replace(/^\s*\d+\s*·\s*/, "");
      });
    });

    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((field) => {
      const value = translatedText(field.getAttribute("placeholder"), language);
      if (value) field.setAttribute("placeholder", value);
    });
  }

  function translateHeroHeading(language) {
    const heading = document.querySelector("#hero-title");
    if (!heading) return;
    const values = {
      zh: ["先进镀膜", "材料"],
      en: ["Materials for", "Advanced Coating", "Technologies"],
      ko: ["첨단 코팅 기술을", "위한 소재"]
    };
    heading.replaceChildren(...values[language].map((part) => {
      const span = document.createElement("span");
      span.textContent = part;
      return span;
    }));
  }

  function translateBusinessPage(language) {
    if (!document.body.classList.contains("business-page")) return;
    const cn = Array.from(document.querySelectorAll(".business-cn"));
    const en = Array.from(document.querySelectorAll(".business-en"));

    if (language === "zh") {
      cn.forEach((item) => { item.hidden = false; });
      en.forEach((item) => { item.hidden = true; });
    } else if (language === "en") {
      cn.forEach((item) => { item.hidden = true; });
      en.forEach((item) => { item.hidden = false; });
    } else {
      cn.forEach((item, index) => {
        item.hidden = false;
        item.textContent = businessKorean[index] || "첨단 소재가 공정과 성능을 통해 더 나은 일상을 만듭니다.";
        item.classList.remove("business-cn");
        item.classList.add("business-ko");
      });
      en.forEach((item) => { item.hidden = true; });
    }

    const bilingualSecondary = document.querySelectorAll(".business-hero-zh, .business-closing-zh");
    bilingualSecondary.forEach((item) => { item.hidden = true; });

    const headings = document.querySelectorAll(".business-intro-heading h2, .business-copy h2");
    const localizedHeadings = {
      zh: ["从材料，到生活", "从靶材，到功能薄膜", "材料性能，从纯度开始", "控制光，也控制化学反应", "让材料进入工艺，让性能服务世界"],
      en: ["From Materials to Everyday Life", "From Targets to Functional Films", "Performance Begins with Purity", "Controlling Light and Chemistry", "Materials at Work in the Real World"],
      ko: ["소재에서 일상으로", "타깃에서 기능성 박막으로", "성능은 순도에서 시작됩니다", "빛과 화학 반응을 제어하다", "현실을 움직이는 소재"]
    };
    headings.forEach((heading, index) => setText(heading, localizedHeadings[language][index]));
  }

  function koreanProductName(englishName) {
    const special = {
      "Anhydrous Chlorides": "무수 염화물",
      "High Purity Hydrated Chlorides": "고순도 수화 염화물",
      "Metal Hydrides Powders": "터븀/디스프로슘 수소화물 분말",
      "Metal/Alloy Powders": "금속/합금 분말",
      "Spherical Yttrium Oxide Powders": "구형 산화이트륨 분말",
      "Spherical Aluminum Oxide Powders": "구형 산화알루미늄 분말",
      "Yttrium Aluminum Garnet Powder": "이트륨 알루미늄 가닛 분말",
      "Holmium Copper Rod": "홀뮴-구리 합금 봉",
      "Holmium Copper Spherical Powder": "홀뮴-구리 합금 구형 분말"
    };
    if (special[englishName]) return special[englishName];

    const chloride = englishName.match(/^Ultra-dry Anhydrous (.+) Chloride$/);
    if (chloride) return `초건조 무수 염화${elementKorean[chloride[1]] || chloride[1]}`;

    const alloy = englishName.match(/^(.+) Alloy Target$/);
    if (alloy) {
      const parts = alloy[1].split(/\s+/).map((name) => elementKorean[name] || name);
      return `${parts.join("-")} 합금 타깃`;
    }

    const formats = [
      [" Metal Granule", " 금속 과립"], [" Metal Target", " 금속 타깃"],
      [" Metal Block", " 금속 블록"], [" Metal", " 금속"]
    ];
    for (const [suffix, koreanSuffix] of formats) {
      if (!englishName.endsWith(suffix)) continue;
      const element = englishName.slice(0, -suffix.length);
      return `${elementKorean[element] || element}${koreanSuffix}`;
    }
    return englishName;
  }

  function productNameFor(cardOrPage, language) {
    const english = normalize(cardOrPage.querySelector("h3, .product-detail-hero h1")?.textContent);
    const chinese = normalize(cardOrPage.querySelector(".cn-name, .detail-cn")?.textContent);
    if (language === "zh") return chinese && !/[�]|[?]{2,}/.test(chinese) ? chinese : english;
    if (language === "ko") return koreanProductName(english);
    return english;
  }

  function translateProductListing(language) {
    document.querySelectorAll(".catalog-card").forEach((card) => {
      const heading = card.querySelector("h3");
      const englishName = normalize(heading?.dataset.sourceText || heading?.textContent);
      const chineseName = normalize(card.querySelector(".cn-name")?.dataset.sourceText || card.querySelector(".cn-name")?.textContent);
      const koreanName = koreanProductName(englishName);
      card.dataset.searchEn = englishName;
      card.dataset.searchZh = chineseName;
      card.dataset.searchKo = koreanName;
      const name = productNameFor(card, language);
      setText(heading, name);
      const cnName = card.querySelector(".cn-name");
      if (cnName) cnName.hidden = true;

      card.querySelectorAll(".catalog-meta").forEach((meta) => {
        const parts = normalize(meta.textContent).split("/").map((part) => part.trim());
        meta.textContent = parts.map((part) => translatedText(part, language) || part).join(" / ");
      });
      const imageLink = card.querySelector(".catalog-image");
      if (imageLink) imageLink.setAttribute("aria-label", language === "zh" ? `查看${name}` : language === "ko" ? `${name} 보기` : `View ${name}`);
    });
  }

  function translateTechnicalValues(language) {
    if (language === "en") return;
    const replacements = language === "zh" ? [
      [/Atomic Ratio/gi, "原子比"],
      [/Impurities/gi, "杂质"],
      [/\bbal\b/gi, "余量"],
      [/Side length/gi, "边长"],
      [/Long side/gi, "长边"],
      [/Length/gi, "长度"],
      [/or passes/gi, "或通过"],
      [/mesh/gi, "目筛"],
      [/Customizable/gi, "可定制"]
    ] : [
      [/Atomic Ratio/gi, "원자비"],
      [/Impurities/gi, "불순물"],
      [/\bbal\b/gi, "잔량"],
      [/Side length/gi, "한 변 길이"],
      [/Long side/gi, "긴 변"],
      [/Length/gi, "길이"],
      [/or passes/gi, "또는"],
      [/mesh/gi, "메쉬 통과"],
      [/Customizable/gi, "맞춤 제작 가능"]
    ];

    const replaceNodes = (element) => {
      element.childNodes.forEach((node) => {
        if (node.nodeType === 3) {
          node.textContent = replacements.reduce((value, [pattern, replacement]) => value.replace(pattern, replacement), node.textContent);
        } else if (node.nodeType === 1) {
          replaceNodes(node);
        }
      });
    };
    document.querySelectorAll(".mini-specs dd, .spec-table td").forEach(replaceNodes);
  }

  function genericFeature(language, line) {
    const family = /CVD/.test(line) ? "cvd" : /PVD/.test(line) ? "pvd" : /powder/i.test(line) ? "powder" : "metal";
    const copy = {
      zh: {
        metal: "采用高纯原料制备，成分稳定，可根据需求提供不同形态、尺寸与包装。",
        pvd: "采用高纯原料和受控加工工艺制备，适用于稳定、均匀的薄膜沉积。",
        cvd: "严格控制水分与杂质，适用于精密化学和气相沉积工艺。",
        powder: "粒度、形貌与成分可控，可根据具体工艺要求提供定制规格。"
      },
      en: {
        metal: "Prepared from high-purity feedstock with controlled composition; available in custom forms, sizes, and packaging.",
        pvd: "Prepared from high-purity feedstock under controlled processing for stable and uniform thin-film deposition.",
        cvd: "Moisture and impurities are carefully controlled for precision chemistry and vapour-deposition processes.",
        powder: "Particle size, morphology, and composition can be tailored to specific process requirements."
      },
      ko: {
        metal: "고순도 원료와 안정된 조성으로 제조되며, 형상·크기·포장을 요구 사양에 맞춰 제공할 수 있습니다.",
        pvd: "고순도 원료와 관리된 공정으로 제조되어 안정적이고 균일한 박막 증착에 적합합니다.",
        cvd: "수분과 불순물을 엄격하게 관리하여 정밀 화학 및 기상 증착 공정에 적합합니다.",
        powder: "입도, 형상 및 조성을 제어할 수 있으며 공정 요구에 맞춘 사양으로 제공할 수 있습니다."
      }
    };
    return copy[language][family];
  }

  function genericApplication(language, line) {
    const family = /CVD/.test(line) ? "cvd" : /PVD/.test(line) ? "pvd" : /powder/i.test(line) ? "powder" : "metal";
    const copy = {
      zh: {
        metal: "适用于稀土合金、磁性材料、能源材料及先进金属研究。",
        pvd: "适用于半导体、显示、光学及功能薄膜沉积工艺。",
        cvd: "适用于 CVD 前驱体原材料、光学材料、催化及精密化学工艺。",
        powder: "适用于热喷涂、增材制造、磁性材料及其他功能材料工艺。"
      },
      en: {
        metal: "Used in rare-earth alloys, magnetic materials, energy materials, and advanced metal research.",
        pvd: "Used in semiconductor, display, optical, and functional thin-film deposition processes.",
        cvd: "Used in CVD precursors, optical materials, catalysis, and precision chemical processes.",
        powder: "Used in thermal spray, additive manufacturing, magnetic materials, and other functional material processes."
      },
      ko: {
        metal: "희토류 합금, 자성 소재, 에너지 소재 및 첨단 금속 연구에 사용됩니다.",
        pvd: "반도체, 디스플레이, 광학 및 기능성 박막 증착 공정에 사용됩니다.",
        cvd: "CVD 전구체, 광학 소재, 촉매 및 정밀 화학 공정에 사용됩니다.",
        powder: "열분사, 적층 제조, 자성 소재 및 기타 기능성 소재 공정에 사용됩니다."
      }
    };
    return copy[language][family];
  }

  function localizeSpecificationValue(value, language) {
    if (language === "en") return value;
    const replacements = language === "zh" ? [
      [/Side length/gi, "边长"],
      [/Round Target Dia/gi, "圆靶直径"],
      [/Rectangular Target Width/gi, "矩形靶宽度"],
      [/Rectangular Target Length/gi, "矩形靶长度"],
      [/Tube Target Outer Dia/gi, "管靶外径"],
      [/Long side/gi, "长边"],
      [/Length/gi, "长度"],
      [/or passes/gi, "或通过"],
      [/mesh/gi, "目筛"],
      [/ingot/gi, "铸锭"],
      [/On request/gi, "按需提供"],
      [/Customizable/gi, "可定制"],
      [/pcs?/gi, "件"]
    ] : [
      [/Side length/gi, "한 변 길이"],
      [/Round Target Dia/gi, "원형 타깃 직경"],
      [/Rectangular Target Width/gi, "사각 타깃 폭"],
      [/Rectangular Target Length/gi, "사각 타깃 길이"],
      [/Tube Target Outer Dia/gi, "튜브 타깃 외경"],
      [/Long side/gi, "긴 변"],
      [/Length/gi, "길이"],
      [/or passes/gi, "또는"],
      [/mesh/gi, "메쉬 통과"],
      [/ingot/gi, "잉곳"],
      [/On request/gi, "요청 시 제공"],
      [/Customizable/gi, "맞춤 제작 가능"],
      [/pcs?/gi, "개"]
    ];
    return replacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), value);
  }

  function translateContactPage(language) {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    const addressRows = Array.from(document.querySelectorAll(".contact-list > div"));
    const chineseAddressRow = addressRows.find((row) => normalize(row.querySelector("span")?.textContent) === "Chinese Address");
    if (chineseAddressRow) chineseAddressRow.hidden = true;

    const directRow = addressRows.find((row) => normalize(row.querySelector("span")?.textContent) === "Direct Contact");
    if (directRow) {
      const paragraph = directRow.querySelector("p");
      const mobileLabel = language === "zh" ? "手机" : language === "ko" ? "휴대전화" : "MOBILE";
      const wechatLabel = language === "zh" ? "微信" : "WeChat";
      paragraph.innerHTML = `Aziz Fan<br>${mobileLabel}: <a href="tel:+8618905971119">+86 18905971119</a><br>${wechatLabel}: superlongm66`;
    }

    form.querySelectorAll("label").forEach((label) => {
      const textNode = Array.from(label.childNodes).find((node) => node.nodeType === 3 && normalize(node.textContent));
      if (!textNode) return;
      const source = normalize(textNode.textContent);
      const value = translatedText(source, language);
      if (value) textNode.textContent = `\n              ${value}\n              `;
    });
  }

  function translateProductDetail(language) {
    const hero = document.querySelector(".product-detail-hero");
    if (!hero) return;
    const englishName = normalize(hero.querySelector("h1")?.textContent);
    const chineseName = normalize(hero.querySelector(".detail-cn")?.textContent);
    const title = language === "zh" ? (chineseName && !/[�]|[?]{2,}/.test(chineseName) ? chineseName : englishName) : language === "ko" ? koreanProductName(englishName) : englishName;
    setText(hero.querySelector("h1"), title);
    const secondary = hero.querySelector(".detail-cn");
    if (secondary) secondary.hidden = true;

    const eyebrow = hero.querySelector(".eyebrow");
    if (eyebrow) {
      const parts = normalize(eyebrow.textContent).split("/").map((part) => part.trim());
      eyebrow.textContent = parts.map((part) => translatedText(part, language) || part).join(" / ");
    }

    const table = document.querySelector(".spec-table");
    let productLine = "";
    if (table) {
      Array.from(table.rows).forEach((row) => {
        const label = normalize(row.cells[0]?.textContent);
        if (label === "Chinese Name" || translatedText("Chinese Name", language) === label) {
          row.hidden = true;
          return;
        }
        if (label === "Product Name") setText(row.cells[1], title);
        if (label === "Product Line") productLine = normalize(row.cells[1]?.textContent);
        if (["Product Line", "Category"].includes(label)) {
          const source = normalize(row.cells[1]?.textContent);
          row.cells[1].textContent = translatedText(source, language) || source.split("/").map((part) => translatedText(part.trim(), language) || part.trim()).join(" / ");
        }
        if (label === "Packaging") {
          const source = normalize(row.cells[1]?.textContent);
          if (language === "zh") {
            row.cells[1].textContent = source;
          } else {
            row.cells[1].textContent = packagingTranslations[language]?.[source] || (language === "en" ? "Packaging selected for material stability" : "소재 특성에 맞춘 밀봉 포장");
          }
        }
        if (label === "Standard Size" && language !== "en") {
          row.cells[1].textContent = localizeSpecificationValue(normalize(row.cells[1]?.textContent), language);
        }
        if (label === "Customization") {
          row.cells[1].textContent = language === "zh" ? "是" : language === "ko" ? "예" : "Yes";
        }
      });
    }

    const infoPanel = Array.from(document.querySelectorAll(".detail-panel")).find((panel) => panel.querySelector("h2")?.textContent.includes("Product Features") || panel.querySelector("h2")?.textContent.includes("产品特点") || panel.querySelector("h2")?.textContent.includes("제품 특징"));
    if (infoPanel) {
      const headings = Array.from(infoPanel.querySelectorAll("h2"));
      const featuresHeading = headings[0];
      const applicationsHeading = headings[1];
      const featureParagraphs = [];
      const applicationParagraphs = [];
      let inApplications = false;
      Array.from(infoPanel.children).forEach((child) => {
        if (child === applicationsHeading) inApplications = true;
        if (child.tagName !== "P") return;
        (inApplications ? applicationParagraphs : featureParagraphs).push(child);
      });

      const containsChinese = (value) => /[\u3400-\u9fff]/.test(value);
      const isCorrupted = (value) => /[�]|[?]{2,}|閾|鍧|鐞|闂/.test(value);

      if (language === "zh") {
        featureParagraphs.forEach((item, index) => { item.hidden = index > 0; });
        applicationParagraphs.forEach((item, index) => { item.hidden = index > 0; });
        if (featureParagraphs[0] && (!containsChinese(featureParagraphs[0].textContent) || isCorrupted(featureParagraphs[0].textContent))) {
          featureParagraphs[0].textContent = genericFeature(language, productLine);
        }
        if (applicationParagraphs[0] && (!containsChinese(applicationParagraphs[0].textContent) || isCorrupted(applicationParagraphs[0].textContent))) {
          applicationParagraphs[0].textContent = genericApplication(language, productLine);
        }
      } else if (language === "en") {
        featureParagraphs.forEach((item, index) => { item.hidden = index > 0; });
        if (featureParagraphs[0] && containsChinese(featureParagraphs[0].textContent)) {
          featureParagraphs[0].textContent = genericFeature(language, productLine);
        }
        const englishApplication = applicationParagraphs.find((item) => item.classList.contains("app-en") || !containsChinese(item.textContent));
        applicationParagraphs.forEach((item) => { item.hidden = item !== englishApplication; });
        if (!englishApplication && applicationParagraphs[0]) {
          applicationParagraphs[0].hidden = false;
          applicationParagraphs[0].textContent = genericApplication(language, productLine);
        }
      } else {
        const koreanFeature = featureParagraphs.find((item) => item.classList.contains("feature-ko"));
        featureParagraphs.forEach((item) => { item.hidden = item !== koreanFeature; });
        if (!koreanFeature && featureParagraphs[0]) {
          featureParagraphs[0].hidden = false;
          featureParagraphs[0].textContent = genericFeature(language, productLine);
        }
        const koreanApplication = applicationParagraphs.find((item) => item.classList.contains("app-ko"));
        applicationParagraphs.forEach((item) => { item.hidden = item !== koreanApplication; });
        if (!koreanApplication && applicationParagraphs[0]) {
          applicationParagraphs[0].hidden = false;
          applicationParagraphs[0].textContent = genericApplication(language, productLine);
        }
      }
    }

    document.title = `${title} | JXZX Metal`;
  }

  function createLanguageSwitcher(language) {
    const header = document.querySelector(".site-header");
    if (!header || header.querySelector(".language-switcher")) return;

    const switcher = document.createElement("div");
    const button = document.createElement("button");
    const panel = document.createElement("div");
    const panelId = "language-menu-panel";

    switcher.className = "language-switcher";
    button.className = "language-switcher-toggle";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", panelId);
    button.setAttribute("aria-label", language === "zh" ? "切换语言" : language === "ko" ? "언어 변경" : "Change language");
    button.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3c-2.4 2.5-3.6 5.5-3.6 9s1.2 6.5 3.6 9"></path></svg><strong>${languageMeta[language].label}</strong><i aria-hidden="true"></i>`;

    panel.className = "language-switcher-panel";
    panel.id = panelId;
    panel.setAttribute("aria-label", button.getAttribute("aria-label"));

    supportedLanguages.forEach((code) => {
      const link = document.createElement("a");
      const target = new URL(window.location.href);
      target.searchParams.set("lang", code);
      link.href = target.href;
      link.lang = languageMeta[code].html;
      link.textContent = languageMeta[code].label;
      if (code === language) {
        link.className = "is-current";
        link.setAttribute("aria-current", "true");
      }
      link.addEventListener("click", () => window.localStorage.setItem("viilaa-language", code));
      panel.append(link);
    });

    switcher.append(button, panel);
    header.append(switcher);

    let closeTimer = 0;
    const setOpen = (open) => {
      if (open) {
        document.querySelectorAll(".product-menu.is-open").forEach((menu) => {
          menu.classList.remove("is-open");
          const toggle = menu.querySelector(".product-menu-toggle");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        });
      }

      switcher.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    };
    const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (hoverCapable) {
      switcher.addEventListener("pointerenter", () => {
        window.clearTimeout(closeTimer);
        closeTimer = 0;
        setOpen(true);
      });
      switcher.addEventListener("pointerleave", () => {
        setOpen(true);
        closeTimer = window.setTimeout(() => {
          setOpen(false);
          closeTimer = 0;
        }, 220);
      });
    }
    button.addEventListener("click", () => {
      window.clearTimeout(closeTimer);
      closeTimer = 0;
      setOpen(!switcher.classList.contains("is-open"));
    });
    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) setOpen(false);
    });
  }

  function preserveLanguageInLinks(language) {
    document.querySelectorAll("a[href]").forEach((link) => {
      if (link.closest(".language-switcher")) return;
      const raw = link.getAttribute("href");
      if (!raw || raw.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(raw)) return;
      let url;
      try { url = new URL(raw, window.location.href); } catch (_) { return; }
      if (url.origin !== window.location.origin) return;
      if (!url.pathname.endsWith(".html") && !url.pathname.endsWith("/")) return;
      url.searchParams.set("lang", language);
      link.href = url.href;
    });
  }

  function translateMetadata(language) {
    const path = window.location.pathname.toLowerCase();
    if (path.endsWith("/index.html") || path.endsWith("/")) {
      document.title = language === "zh" ? "江西中锡金属材料 | 高纯稀土金属与薄膜材料" : language === "ko" ? "JXZX Metal | 고순도 희토류 금속 및 박막 소재" : "JXZX Metal | High-Purity Rare Earth Metals and Thin Film Materials";
    } else if (path.endsWith("/products.html")) {
      document.title = language === "zh" ? "产品中心 | 江西中锡金属材料" : language === "ko" ? "제품 센터 | JXZX Metal" : "Product Center | JXZX Metal";
    } else if (path.endsWith("/contact.html")) {
      document.title = language === "zh" ? "联系我们 | 江西中锡金属材料有限公司" : language === "ko" ? "문의 | Jiangxi Viilaa Metal Materials Co., Ltd" : "Contact | Jiangxi Viilaa Metal Materials Co., Ltd";
    } else if (path.endsWith("/our-business.html")) {
      document.title = language === "zh" ? "我们的事业 | 江西中锡金属材料有限公司" : language === "ko" ? "사업 소개 | Jiangxi Viilaa Metal Materials Co., Ltd" : "Our Business | Jiangxi Viilaa Metal Materials Co., Ltd";
    } else if (path.endsWith("/technology-quality.html")) {
      document.title = language === "zh" ? "技术与质量 | 江西中锡金属材料有限公司" : language === "ko" ? "기술 및 품질 | Jiangxi Viilaa Metal Materials Co., Ltd" : "Technology & Quality | Jiangxi Viilaa Metal Materials Co., Ltd";
    } else if (path.endsWith("/company-profile.html")) {
      document.title = language === "zh" ? "走进中锡 | 江西中锡金属材料有限公司" : language === "ko" ? "Viilaa | Jiangxi Viilaa Metal Materials Co., Ltd" : "Viilaa | Jiangxi Viilaa Metal Materials Co., Ltd";
    }
  }

  function translateImageAlternatives(language) {
    if (language === "en") return;
    document.querySelectorAll("img[alt]").forEach((image) => {
      if (/logo/i.test(image.alt)) return;
      image.alt = language === "zh" ? "先进材料及产品应用图片" : "첨단 소재 및 제품 적용 이미지";
    });
  }

  function initialize() {
    const language = languageFromEnvironment();
    window.localStorage.setItem("viilaa-language", language);
    document.documentElement.lang = languageMeta[language].html;
    document.documentElement.dataset.language = language;

    translateHeroHeading(language);
    translateBusinessPage(language);
    translateProductListing(language);
    translateProductDetail(language);
    translateTechnicalValues(language);
    translateContactPage(language);
    translateExactText(language);
    translateMetadata(language);
    translateImageAlternatives(language);
    createLanguageSwitcher(language);
    preserveLanguageInLinks(language);

    const contactHeroSecondary = document.querySelector(".contact-hero-zh");
    if (contactHeroSecondary) contactHeroSecondary.hidden = true;
    document.documentElement.classList.add("language-ready");
    document.dispatchEvent(new CustomEvent("site:language-ready", { detail: { language } }));
  }

  initialize();
})();
