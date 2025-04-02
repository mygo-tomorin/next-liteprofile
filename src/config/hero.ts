type Hero = {
  title: string;
  description: string;
  typeAnimationTexts: (string | number)[];
  achievementsList: Achievement[];
};

type Achievement = {
  metric: string;
  value: string;
  postfix?: string;
  prefix?: string;
};

export const hero: Hero = {
  title: "我是 徐灃寯",
  description: "一位立志成為工程師的高中生自我介紹",
  typeAnimationTexts: [
    "目前就讀中和高中",
    1000,
    "擔任高三圖書股長",
    1000,
    "興趣是看動漫",
    1000,
  ],
  achievementsList: [
    { metric: "數學", value: "140 ", postfix: "PR值99" },
    { metric: "創意", value: " ", postfix: "PR值99" },
    { metric: "邏輯推理", value: " ", postfix: "PR值99" },
    { metric: "空間", value: " ", postfix: "PR值97" },
    { metric: "語文", value: " ", postfix: "PR值78" },
  ],
};
