// Shared content for all design options. Edit here once.
window.SITE = {
  name: "Reza Zolfaghari",
  role: "Principal Scientist, Multimodal AI",
  org: "Huawei",
  links: [
    { label: "Google Scholar", short: "Scholar", url: "https://scholar.google.com/citations?user=FXTGm84AAAAJ&hl=en" },
    { label: "GitHub", short: "GitHub", url: "https://github.com/mzolfaghari" },
    { label: "LinkedIn", short: "LinkedIn", url: "https://www.linkedin.com/in/zolf/" },
    { label: "Hugging Face", short: "HF", url: "https://huggingface.co/qvac/VisionPsy-Nano-460M" },
  ],

  themes: [
    { id: "vl", name: "Video–language learning", text: "Aligning video with language through contrastive and hierarchical objectives." },
    { id: "gen", name: "Generative models", text: "Video generation, diffusion at scale and subject-consistent image generation." },
    { id: "eff", name: "Efficient & on-device", text: "Compact vision-language and speech models through distillation and better data." },
    { id: "vid", name: "Video understanding", text: "Action recognition, detection and anticipating future activity." },
  ],

  leadership: [
    { k: "Teams", v: "Built and led research and engineering teams at Huawei, Tether AI and Zebracat AI." },
    { k: "Scale", v: "Trained video diffusion and video–text models on more than fifty million videos." },
    { k: "Production", v: "Took video generation into production and reduced inference cost by more than half." },
    { k: "Mentoring", v: "Supervised more than eight PhD and MSc students." },
  ],

  news: [
    { d: "Nov 2026", t: "Joined Huawei to lead multimodal AI research." },
    { d: "Oct 2026", t: "<a href='https://arxiv.org/abs/2610.19134'>CAFE</a>, compact multilingual speech recognition, is on arXiv." },
    { d: "Sep 2026", t: "<a href='https://arxiv.org/abs/2609.31746'>VisionPsy-Nano</a> is on arXiv, and the <a href='https://huggingface.co/qvac/VisionPsy-Nano-460M'>460M model</a> is released." },
    { d: "2025", t: "<a href='https://arxiv.org/abs/2508.03735'>StorySync</a> was accepted at GCPR 2025." },
  ],

  roles: [
    { from: 2026, to: null, when: "2026 –", org: "Huawei", title: "Tech Lead & Principal Scientist, Multimodal AI", text: "Research on understanding and generating video, images and music.", kind: "ind" },
    { from: 2026, to: 2026, when: "2026", org: "Tether AI", title: "Co-lead & Principal ML Scientist", text: "Co-led a team of eight on multimodal AI, including on-device vision-language models and video generation.", kind: "ind" },
    { from: 2021, to: 2025, when: "2021 – 2025", org: "Zebracat AI", title: "Head of AI/ML & CTO", text: "Led the AI team working on video generation, multimodal video understanding and agentic content pipelines, from research to production.", kind: "ind" },
    { from: 2020, to: 2021, when: "2020 – 2021", org: "Amazon Web Services", title: "Applied Scientist", text: "Worked on video–text retrieval and contributed video models to GluonCV.", kind: "ind" },
    { from: 2016, to: 2020, when: "2016 – 2020", org: "University of Freiburg", title: "PhD, Multimodal AI · Research Scientist", text: "Research on multimodal video understanding, advised by <a href='https://scholar.google.com/citations?user=0VAe-TQAAAAJ&amp;hl=en'>Prof. Thomas Brox</a>. Supervised several PhD and MSc students.", kind: "acad" },
    { from: 2009, to: 2015, when: "2009 – 2015", org: "Earlier", title: "Research and engineering", text: "Machine learning roles at Sharif University of Technology, DarViz, Niroo Research Institute and CRCIS.", kind: "early" },
  ],

  education: [
    { when: "2020", what: "PhD, Computer Science", where: "University of Freiburg · advisor Thomas Brox" },
    { when: "2013", what: "MSc, Artificial Intelligence", where: "Sharif University of Technology" },
    { when: "2010", what: "BSc, Computer Engineering", where: "Iran University of Science and Technology" },
  ],

  pubs: [
    { id: "visionpsy", topic: "Efficient on-device vision-language models", year: 2026, sel: true, topics: ["eff", "vl"], fig: "visionpsy.jpg", short: "VisionPsy-Nano",
      title: "VisionPsy-Nano: Improving Accuracy, Efficiency, and Reliability in On-Device Vision-Language Models",
      authors: "K. A. Hashmi, <b>M. Zolfaghari</b>, C. Park, R. Jain, N. Moratelli, P. Wei, L. Lu, T. Liu, et al.",
      venue: "arXiv", url: "https://arxiv.org/abs/2609.31746",
      blurb: "A small vision-language model designed to run on phones and edge devices.",
      links: [["Paper", "https://arxiv.org/abs/2609.31746"], ["Model", "https://huggingface.co/qvac/VisionPsy-Nano-460M"]] },
    { id: "cafe", topic: "Compact multilingual speech recognition", year: 2026, sel: true, topics: ["eff"], fig: "cafe.jpg", short: "CAFE",
      title: "CAFE: Confining Feature Distillation to Language-Routed Adapters for Compact Multilingual Automatic Speech Recognition",
      authors: "T. Liu, N. Moratelli, K. A. Hashmi, <b>M. Zolfaghari</b>, R. Jain, L. Lu, C. Park, A. Nazir",
      venue: "arXiv", url: "https://arxiv.org/abs/2610.19134",
      blurb: "A compact multilingual speech recognition model, much smaller than the model it learns from.",
      links: [["Paper", "https://arxiv.org/abs/2610.19134"]] },
    { id: "storysync", topic: "Subject consistency in image generation", year: 2025, sel: true, topics: ["gen"], fig: "storysync.jpg", short: "StorySync",
      title: "StorySync: Training-Free Subject Consistency in Text-to-Image Generation via Region Harmonization",
      authors: "G. Gaur, <b>M. Zolfaghari</b>, T. Brox",
      venue: "GCPR", url: "https://arxiv.org/abs/2508.03735",
      blurb: "Keeps the same character consistent across a series of generated images, with no fine-tuning.",
      links: [["Paper", "https://arxiv.org/abs/2508.03735"]] },
    { id: "thesis", year: 2025, sel: false, topics: ["vl", "vid"], short: "PhD thesis",
      title: "Beyond Frames: Multimodal Video Understanding",
      authors: "<b>M. Zolfaghari</b>", venue: "PhD thesis, University of Freiburg", url: null, links: [] },
    { id: "droplet", year: 2023, sel: false, topics: ["vid"], short: "DropletAI",
      title: "DropletAI: Deep Learning-Based Classification of Fluids with Different Ohnesorge Numbers during Non-Contact Dispensing",
      authors: "P. Sardana, <b>M. Zolfaghari</b>, G. Miotto, R. Zengerle, T. Brox, P. Koltay, et al.",
      venue: "Fluids", url: "https://www.mdpi.com/2311-5521/8/6/183", links: [] },
    { id: "crossclr", topic: "Cross-modal contrastive learning for video", year: 2021, sel: true, topics: ["vl"], fig: null, short: "CrossCLR",
      title: "CrossCLR: Cross-modal Contrastive Learning for Multi-modal Video Representations",
      authors: "<b>M. Zolfaghari</b>, Y. Zhu, P. Gehler, T. Brox",
      venue: "ICCV", url: "https://openaccess.thecvf.com/content/ICCV2021/html/Zolfaghari_CrossCLR_Cross-Modal_Contrastive_Learning_for_Multi-Modal_Video_Representations_ICCV_2021_paper.html",
      blurb: "A contrastive loss for video and text that also uses similarities within each modality.",
      links: [["Paper", "https://openaccess.thecvf.com/content/ICCV2021/html/Zolfaghari_CrossCLR_Cross-Modal_Contrastive_Learning_for_Multi-Modal_Video_Representations_ICCV_2021_paper.html"]] },
    { id: "tsgan", topic: "Large-scale video generation", year: 2021, sel: true, topics: ["gen"], fig: "tsgan.jpg", short: "TS-GAN",
      title: "Temporal Shift GAN for Large Scale Video Generation",
      authors: "A. Muñoz*, <b>M. Zolfaghari*</b>, M. Argus, T. Brox",
      venue: "WACV", url: "https://openaccess.thecvf.com/content/WACV2021/html/Munoz_Temporal_Shift_GAN_for_Large_Scale_Video_Generation_WACV_2021_paper.html",
      blurb: "A GAN with temporal shift modules for longer, more coherent generated video.",
      links: [["Paper", "https://openaccess.thecvf.com/content/WACV2021/html/Munoz_Temporal_Shift_GAN_for_Large_Scale_Video_Generation_WACV_2021_paper.html"]] },
    { id: "coot", topic: "Video–text representation learning", year: 2020, sel: true, topics: ["vl"], fig: "coot.jpg", short: "COOT",
      title: "COOT: Cooperative Hierarchical Transformer for Video-Text Representation Learning",
      authors: "S. Ging*, <b>M. Zolfaghari*</b>, H. Pirsiavash, T. Brox",
      venue: "NeurIPS", url: "https://proceedings.neurips.cc/paper/2020/hash/ff0abbcc0227c9124a804b084d161a2d-Abstract.html",
      blurb: "A hierarchical transformer that learns joint video and text representations at several levels.",
      links: [["Paper", "https://proceedings.neurips.cc/paper/2020/hash/ff0abbcc0227c9124a804b084d161a2d-Abstract.html"], ["Code", "https://github.com/gingsi/coot-videotext"], ["Talk", "https://youtu.be/5TRp5SuEtoY"]] },
    { id: "survey", topic: "Survey of video action recognition", year: 2020, sel: false, topics: ["vid", "vl"], fig: "survey.jpg", short: "Video survey",
      title: "A Comprehensive Study of Deep Video Action Recognition",
      authors: "Y. Zhu, X. Li, C. Liu, <b>M. Zolfaghari</b>, Y. Xiong, C. Wu, Z. Zhang, J. Tighe, R. Manmatha, M. Li",
      venue: "arXiv", url: "https://arxiv.org/abs/2012.06567", links: [["Paper", "https://arxiv.org/abs/2012.06567"]] },
    { id: "future", year: 2019, sel: false, topics: ["vid"], short: "Future prediction",
      title: "Learning Representations for Predicting Future Activities",
      authors: "<b>M. Zolfaghari</b>, Ö. Çiçek, S. M. Ali, F. Mahdisoltani, C. Zhang, T. Brox",
      venue: "arXiv", url: "https://arxiv.org/abs/1905.03578", links: [] },
    { id: "eco", topic: "Efficient online video understanding", year: 2018, sel: true, topics: ["eff", "vid"], fig: "eco.jpg", short: "ECO",
      title: "ECO: Efficient Convolutional Network for Online Video Understanding",
      authors: "<b>M. Zolfaghari</b>, K. Singh, T. Brox",
      venue: "ECCV", url: "https://openaccess.thecvf.com/content_ECCV_2018/html/Mohammadreza_Zolfaghari_ECO_Efficient_Convolutional_ECCV_2018_paper.html",
      blurb: "An efficient network for understanding video in real time.",
      links: [["Paper", "https://openaccess.thecvf.com/content_ECCV_2018/html/Mohammadreza_Zolfaghari_ECO_Efficient_Convolutional_ECCV_2018_paper.html"], ["Code", "https://github.com/mzolfaghari/ECO-efficient-video-understanding"], ["Demo", "https://youtu.be/D17ejtecpd0"]] },
    { id: "chained", topic: "Action recognition from pose, motion and appearance", year: 2017, sel: true, topics: ["vid"], fig: "chained.jpg", short: "Chained Multi-stream",
      title: "Chained Multi-stream Networks Exploiting Pose, Motion, and Appearance for Action Classification and Detection",
      authors: "<b>M. Zolfaghari</b>, G. L. Oliveira, N. Sedaghat, T. Brox",
      venue: "ICCV", url: "https://openaccess.thecvf.com/content_iccv_2017/html/Zolfaghari_Chained_Multi-Stream_Networks_ICCV_2017_paper.html",
      blurb: "Combines pose, motion and appearance streams for action recognition and detection.",
      links: [["Paper", "https://openaccess.thecvf.com/content_iccv_2017/html/Zolfaghari_Chained_Multi-Stream_Networks_ICCV_2017_paper.html"], ["Code", "https://github.com/mzolfaghari/chained-multistream-networks"]] },
    { id: "voxnet", topic: "3D object recognition", year: 2017, sel: false, topics: ["vid"], fig: "voxnet.jpg", short: "Voxel Nets",
      title: "Orientation-boosted Voxel Nets for 3D Object Recognition",
      authors: "N. Sedaghat, <b>M. Zolfaghari</b>, E. Amiri, T. Brox",
      venue: "BMVC", url: "https://arxiv.org/abs/1604.03351", links: [["Paper", "https://arxiv.org/abs/1604.03351"]] },
    { id: "flow", year: 2016, sel: false, topics: ["vid"], short: "Hybrid flow",
      title: "Hybrid Learning of Optical Flow and Next Frame Prediction to Boost Optical Flow in the Wild",
      authors: "N. Sedaghat, <b>M. Zolfaghari</b>, T. Brox", venue: "arXiv", url: "https://arxiv.org/abs/1612.03777", links: [] },
    { id: "pose14", year: 2014, sel: false, topics: ["vid"], short: "3D pose",
      title: "3D Human Pose Estimation from Image Using Couple Sparse Coding",
      authors: "<b>M. Zolfaghari</b>, A. Jourabloo, S. G. Gozlou, B. Pedrood, M. T. Manzuri-Shalmani",
      venue: "Machine Vision and Applications", url: null, links: [] },
    { id: "pose13", year: 2013, sel: false, topics: ["vid"], short: "Metric learning",
      title: "Multiple Metric Learning for Graph Based Human Pose Estimation",
      authors: "<b>M. Zolfaghari</b>, M. G. Gozlou, M. T. Manzuri-Shalmani", venue: "ICONIP", url: null, links: [] },
    { id: "pssdl", year: 2013, sel: false, topics: [], short: "PSSDL",
      title: "PSSDL: Probabilistic Semi-Supervised Dictionary Learning",
      authors: "B. Babagholami-Mohamadabadi, A. Zarghami, <b>M. Zolfaghari</b>, M. S. Baghshah", venue: "ECML PKDD", url: null, links: [] },
    { id: "bsdl", year: 2013, sel: false, topics: [], short: "BSDL",
      title: "Bayesian Supervised Dictionary Learning",
      authors: "B. Babagholami-Mohamadabadi, A. Jourabloo, <b>M. Zolfaghari</b>, et al.", venue: "UAI Workshops", url: null, links: [] },
  ],
};

// Small shared helpers.
window.SITE_UTIL = {
  esc: s => s,
  title: p => p.url ? `<a class="pt" href="${p.url}">${p.title}</a>` : `<span class="pt">${p.title}</span>`,
  links: p => p.links.map(([l, u]) => `<a href="${u}">${l}</a>`).join(""),
  // Canvas helper: DPR-aware sizing, offscreen pause, reduced-motion single frame.
  animate(canvas, setup) {
    const ctx = canvas.getContext("2d");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, visible = true, start = performance.now(), state = null;
    const css = name => getComputedStyle(canvas).getPropertyValue(name).trim();
    const size = () => {
      const r = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
      w = r.width; h = r.height; canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      state = setup.init ? setup.init(w, h) : null;
    };
    const frame = now => {
      const t = reduced ? (setup.still || 6) : Math.max(0, (now - start) / 1000);
      setup.draw(ctx, w, h, t, state, css);
      if (!reduced && visible) raf = requestAnimationFrame(frame);
    };
    size();
    addEventListener("resize", () => { size(); if (reduced) frame(0); });
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting; cancelAnimationFrame(raf);
      if (visible && !reduced) raf = requestAnimationFrame(frame);
    }).observe(canvas);
    frame(performance.now());
  },
  ease: x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  clamp: (x, a = 0, b = 1) => Math.max(a, Math.min(b, x)),
};
