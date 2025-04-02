"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "國文", A: 10, fullMark: 15 },
  { subject: "英文", A: 7, fullMark: 15 },
  { subject: "數學A", A: 10, fullMark: 15 },
  { subject: "數學B", A: 10, fullMark: 15 },
  { subject: "社會", A: 11, fullMark: 15 },
  { subject: "自然", A: 10, fullMark: 15 },
];

export default function RadarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Score"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
