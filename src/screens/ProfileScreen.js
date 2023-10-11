import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utility/colors";
import { fetchRandomContact } from "../utility/api";
import ContactThumbnail from "../components/ContactThumbnail";
import DetailListItem from "../components/DetailListItem";
import { useRoute } from "@react-navigation/native";
import { Avatar } from "react-native-paper";

export default function ProfileScreen(navigation) 
{
  const route = useRoute()
  const { avatar, name, email, phone, cell } = route.params.contacts1;
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} email={phone} />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem 
            icon="mail"
            title={"Email"}
            subtitle={email}
        />
        <DetailListItem 
            icon="phone"
            title={"Work"}
            subtitle={phone}
        />
        <DetailListItem 
            icon="smartphone"
            title={"Personal"}
            subtitle={cell}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
});