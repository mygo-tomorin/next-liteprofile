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
    "擔任高三圖書股長",
    1000,
    " ",
    1000,
    "擔任FRC程式組組長",
    1000,
  ],
  achievementsList: [
    { metric: "APCS", value: "4", postfix: "級" },
    { metric: "競賽獲獎", value: "20", postfix: "+" },
    { metric: "服務使用者", value: "1000", postfix: "+" },
    { metric: "專案數量", value: "30", postfix: "+" },
    { metric: "社群追蹤數", value: "150", postfix: "+" },
  ],
};
