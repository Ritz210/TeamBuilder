import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";
import Couches from "../common/Couches";
import New from "../common/New";
import Best from "../common/Best";

export default class Home extends React.Component {
  render() {
    let test = [
      {
        image: require("../images/1.png"),
        desc: "Ritwick",
      },
      {
        image: require("../images/1.png"),
        desc: "Ankit",
      },
      {
        image: require("../images/1.png"),
        desc: "Ankit",
      },
      {
        image: require("../images/1.png"),
        desc: "Ritwick",
      },
    ];
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: 20,
        }}
      >
        {/* <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 40,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "50%",
            }}
          >
            <Text
              style={{
                fontFamily: "Bold",
                fontSize: 22,
              }}
            >
              Team Builder
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
            }}
          >
            <Image
              source={require("../images/bag-2.png")}
              style={{ width: 16, height: 20 }}
            />
          </View>
        </View> */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginTop: 10,
            // marginVertical: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              elevation: 2,
              width: "85%",
              backgroundColor: "#FFF",
              paddingHorizontal: 20,
              height: 35,
              borderRadius: 10,
              marginLeft: 1,
            }}
          >
            <Icon name="ios-search" size={22} color="#4f4a4a" />
            <TextInput
              placeholder="Search"
              style={{
                fontFamily: "Medium",
                paddingHorizontal: 10,
                fontSize: 12,
                width: "100%",
              }}
            />
          </View>

          <View
            style={{
              alignItems: "center",
              elevation: 2,
              width: "14%",
              backgroundColor: "#FFF",
              marginLeft: 5,
              height: 35,
              borderRadius: 10,
              marginLeft: 1,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../images/sort.png")}
              style={{
                width: 20,
                height: 25,
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 18,
              color: "#4f4a4a",
            }}
          >
            Modern
          </Text>
          {/* <View
            style={{
              width: 5,
              height: 5,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: "#4f4a4a",
            }}
          ></View>
          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 9,
              color: "#4f4a4a",
            }}
          >
            Good Quality items
          </Text> */}
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {test.map((items) => {
            return (
              <Image
                source={items.image}
                style={{
                  width: 300,
                  margin: 10,
                  height: 200,
                  borderRadius: 10,
                }}
              />
            );
          })}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {test.map((items) => {
            return (
              <Couches
                src={items.image}
                name={items.desc}
                onPress={() => this.props.navigation.navigate("Detail")}
              />
            );
          })}
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Bold",
              color: "#4f4a4a",
              fontSize: 20,
            }}
          >
            New Arrivals
          </Text>
          <View
            style={{
              height: 5,
              width: 5,
              borderRadius: 5,
              backgroundColor: "#4f4a4a",
              marginHorizontal: 4,
            }}
          ></View>
          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 10,
              color: "#4f4a4a",
            }}
          >
            Good Quality items
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <New src={require("../images/sofa.png")} />
          <New src={require("../images/lr.png")} />
          <New src={require("../images/sofa.png")} />
        </ScrollView>

        <Text
          style={{
            marginTop: 20,
            color: "#4f4a4a",
            fontSize: 18,
            fontFamily: "Bold",
          }}
        >
          Best Sellers
        </Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Best />
          <Best />
          <Best />
        </ScrollView>
      </ScrollView>
    );
  }
}
