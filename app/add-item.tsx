import { View, Text } from "react-native";
import ItemForm, { FormValues } from "@/components/item-form";

export default function AddItem() {
  const handleSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <View>
      <Text>Add Item</Text>
      <ItemForm onSubmit={handleSubmit} />
    </View>
  );
}
