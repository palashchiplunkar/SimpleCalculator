import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";

export default function App() {
  const [value, setvalue] = useState("");
  const addValue = (text) => {
    try {
      setvalue(value.concat(text));
      throw error;
    } catch (error) {
      console.log(error);
    }
  };
  const clearHandler = () => {
    setvalue("");
  };
  const calculate = () => {
    try {
      let x = eval(value);
      setvalue(x);
      throw "error";
    } catch (error) {
      if (error != "error") {
        Alert.alert("Oops!", "Enter valid Expression", [
          {
            text: "Cancel",
          },
          { text: "OK" },
        ]);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Simple Calculator
        </Text>
      </View>
      <ScrollView style={styles.AnsBox}>
        <Text style={{ color: "white", fontSize: 80 }}>{value}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button1} onPress={clearHandler}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "black" }}>
              AC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => addValue("/")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              /
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => addValue("7")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => addValue("8")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => addValue("9")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => addValue("*")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              *
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => addValue("4")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => addValue("5")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => addValue("6")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => addValue("-")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => addValue("1")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => addValue("2")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => addValue("3")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => addValue("+")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={{
              padding: 10,
              width: "45%",
              height: 100,
              justifyContent: "center",

              backgroundColor: "rgb(45, 45, 57)",
              borderRadius: 100,
              marginTop: 10,
            }}
            onPress={() => addValue("0")}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "white",
                marginHorizontal: 30,
              }}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => addValue(".")}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              .
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={calculate}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              =
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    marginBottom: 30,
    backgroundColor: "black",
  },
  button: {
    padding: 10,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(45, 45, 57)",
    borderRadius: 100,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button1: {
    padding: 10,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(209, 209, 224)",
    borderRadius: 100,
    marginTop: 10,
  },
  button2: {
    padding: 10,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(247, 170, 54)",
    borderRadius: 100,
    marginTop: 10,
  },
  AnsBox: {
    paddingTop: 5,
    paddingLeft: 20,
    // borderBottomColor: "grey",
    // borderBottomWidth: 2,
  },
  header: {
    paddingTop: 60,
    backgroundColor: "rgb(247, 170, 54)",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
});
