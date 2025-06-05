import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import MyChart from "@/components/ui/PieChart";

import {
  Button,
  Card,
  Modal,
  Portal,
  Text,
  TextInput,
} from "react-native-paper";
import { PieChart } from "react-native-chart-kit";

function BudgetScreen() {
  const transactions = [
    { id: 1, title: "Groceries", amount: -50, type: "expense" },
    { id: 2, title: "Salary", amount: 1000, type: "income" },
    { id: 3, title: "Rent", amount: -300, type: "expense" },
    { id: 4, title: "Rent", amount: -300, type: "expense" },
    { id: 5, title: "Rent", amount: -300, type: "expense" },
    { id: 6, title: "Rent", amount: -300, type: "expense" },
    { id: 7, title: "Rent", amount: -300, type: "expense" },
    { id: 8, title: "Rent", amount: -300, type: "expense" },
    { id: 9, title: "Rent", amount: -300, type: "expense" },
  ];

  const [incomeModal, setIncomeModal] = useState(false);
  const showIncomeModal = () => setIncomeModal(true);
  const hideIncomeModal = () => setIncomeModal(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 16,
    height: 250,
  };

  const [expenseModal, setExpenseModal] = useState(false);
  const showExpenseModal = () => setExpenseModal(true);
  const hideExpenseModal = () => setExpenseModal(false);
  return (
    <ScrollView>
      <View className="flex-1 bg-white px-4 pt-5 ">
        <StatusBar style="dark" />
        {/* Header */}

        {/* Balance Card */}
        <View className="bg-indigo-500 rounded-xl p-6 mb-4 shadow-md flex gap-2">
          <Text
            className="text-sm "
            style={{ color: "white" }}
            variant="titleMedium"
          >
            Budget
          </Text>
          <Text className="text-3xl" style={{ color: "white" }}>
            $650
          </Text>
          <View className="gap-2 flex-row w-full items-center justify-center ">
            <Button
              mode="outlined"
              style={{ borderColor: "white" }}
              textColor="white"
              onPress={showIncomeModal}
              className="flex-1"
            >
              Add Income
            </Button>
            <Button
              textColor="white"
              mode="outlined"
              style={{ borderColor: "white" }}
              onPress={showExpenseModal}
              className="flex-1"
            >
              Add Expense
            </Button>
          </View>
        </View>

        {/* Summary Cards */}
        <View className="flex-row  w-full mb-4 items-center justify-between gap-1">
          <View className="bg-green-100  p-4 rounded-lg flex-1 ">
            <Text style={{ color: "green" }} variant="labelLarge">
              Total Income
            </Text>
            <Text>$1000</Text>
          </View>
          <View className="bg-red-100  p-4 rounded-lg flex-1 ">
            <Text style={{ color: "red" }} variant="labelLarge">
              Total Expenses
            </Text>
            <Text>$350</Text>
          </View>
        </View>

        {/* Transactions */}
        <Card
          style={{
            borderColor: "#6366f1",
            borderWidth: 2,
            backgroundColor: "white",
            maxHeight:240
          }}
        >
          <Card.Title
            title="Recent Transactions"
            titleStyle={{ color: "#6366f1", fontWeight:"bold"}}
          ></Card.Title>
          <Card.Content className="overflow">
            <ScrollView>
            {transactions.slice(0,3).map((tx) => (
              <View
                key={tx.id}
                style={{
                  backgroundColor: tx.amount < 0 ? "#fecaca" : "#bbf7d0",
                  borderRadius: 16,
                }}
                className="flex-row justify-between items-center  p-4 rounded-lg mb-2 "
              >
                <View className="flex-row items-center">
                  <FontAwesome5
                    name={tx.type === "income" ? "arrow-down" : "arrow-up"}
                    size={16}
                    color={tx.type === "income" ? "green" : "red"}
                    className="mr-2"
                  />
                  <Text
                    style={{
                      color: tx.amount < 0 ? "red" : "green",
                      fontWeight: "600",
                    }}
                  >
                    {tx.title}
                  </Text>
                </View>
                <Text
                  style={{
                    color: tx.amount < 0 ? "red" : "green",
                    fontWeight: "600",
                  }}
                >
                  ${Math.abs(tx.amount)}
                </Text>
              </View>
            ))}
            </ScrollView>
          </Card.Content>
        </Card>
        <View style={{ alignItems: "center", marginTop: 20 }}></View>
        <View className="border-2 rounded-lg border-indigo-500 flex items-center">
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
              color: "#6366f1",
              padding: 5,
            }}
          >
            Budget Overview
          </Text>
          <MyChart />
        </View>

        {/*Modals*/}
        <Portal>
          <Modal
          
            visible={incomeModal}
            onDismiss={hideIncomeModal}
            contentContainerStyle={containerStyle}
          >
            <View className="flex flex-col gap-2" >
              <Text variant="headlineSmall">Add Income</Text>
              <TextInput label="Title" mode="outlined" />
              <TextInput label="Amount" mode="outlined" />
              <View className="flex flex-row items-center justify-between gap-2">
                <Button mode="contained" className="flex-1">
                  Save
                </Button>
                <Button
                  mode="outlined"
                  className="flex-1"
                  onPress={hideIncomeModal}
                >
                  Cancel
                </Button>
              </View>
            </View>
          </Modal>

          <Modal
            visible={expenseModal}
            onDismiss={hideExpenseModal}
            contentContainerStyle={containerStyle}
          >
            <View className="flex flex-col gap-2">
              <Text variant="headlineSmall">Add Expense</Text>
              <TextInput label="Title" mode="outlined" />
              <TextInput label="Amount" mode="outlined" />
              <View className="flex flex-row items-center justify-between gap-2">
                <Button mode="contained" className="flex-1">
                  Save
                </Button>
                <Button
                  mode="outlined"
                  className="flex-1"
                  onPress={hideExpenseModal}
                >
                  Cancel
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>
      </View>
    </ScrollView>
  );
}

export default BudgetScreen;
