import React from "react";
import { View, Text, ScrollView, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";


function BudgetScreen() {
     const transactions = [
    { id: 1, title: "Groceries", amount: -50, type: "expense" },
    { id: 2, title: "Salary", amount: 1000, type: "income" },
    { id: 3, title: "Rent", amount: -300, type: "expense" },
  ];
  return (
    <View className="flex-1 bg-white px-4 pt-12 ">
      <StatusBar style="dark" />
      {/* Header */}

      {/* Balance Card */}
      <View className="bg-indigo-500 rounded-xl p-6 mb-4 shadow-md flex gap-2">
        <Text className="text-white text-sm">Savings</Text>
        <Text className="text-white text-3xl font-bold">$650</Text>
        <View className="flex gap-2 flex-row w-full items-center justify-center">
          <TouchableOpacity className=" bg-green-300 rounded-xl p-2 flex-1 "><Text className="text-white text-center font-semibold">Add Budget</Text></TouchableOpacity>
          <TouchableOpacity className="  bg-red-500 rounded-xl p-2 flex-1"><Text className=" text-white text-center font-semibold">Add Expenses</Text></TouchableOpacity>
        </View>
      </View>

      

      {/* Summary Cards */}
      <View className="flex-col gap-3 justify- mb-4">
        <View className="bg-green-100  p-4 rounded-lg ">
          <Text className="text-green-800">Budget</Text>
          <Text className="text-green-800 text-lg font-semibold">$1000</Text>
        </View>
        <View className="bg-red-100  p-4 rounded-lg ">
          <Text className="text-red-800">Expense</Text>
          <Text className="text-red-800 text-lg font-semibold">$350</Text>
        </View>
      </View>

      {/* Transactions */}
      <Text className="text-lg font-semibold text-gray-700 mb-2">Recent Transactions</Text>
      <ScrollView className="flex-1">
        {transactions.map((tx) => (
          <View key={tx.id} className="flex-row justify-between items-center bg-gray-100 p-4 rounded-lg mb-2">
            <View className="flex-row items-center">
              <FontAwesome5
                name={tx.type === "income" ? "arrow-down" : "arrow-up"}
                size={16}
                color={tx.type === "income" ? "green" : "red"}
                className="mr-2"
              />
              <Text className="text-gray-700">{tx.title}</Text>
            </View>
            <Text className={`font-semibold ${tx.amount < 0 ? "text-red-500" : "text-green-500"}`}>
              ${Math.abs(tx.amount)}
            </Text>
          </View>
        ))}
         <View className="flex flex-col gap-2">
        <Text className="font-semibold">Random Shit</Text>
        <TouchableOpacity className="w-full flex items-center p-4 bg-blue-300 rounded-2xl" onPress={()=>alert('You pressed Me')}><Text>Press Me</Text></TouchableOpacity>
      </View>
      </ScrollView>

    </View>
  )
}

export default BudgetScreen