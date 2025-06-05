import React from "react";
import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

type ChartData = {
  name: string;
  population: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
};

const data: ChartData[] = [
  {
    name: "Income",
    population: 70,
    color: "#4ade80",
    legendFontColor: "#4ade80",
    legendFontSize: 16,
  },
  {
    name: "Expense",
    population: 30,
    color: "#f87171",
    legendFontColor: "#f87171",
    legendFontSize: 16,
  },
];

export default function MyChart() {
  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute // shows numbers inside pie slices
      />
    </View>
  );
}
