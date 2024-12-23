import { View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";

type Props = {
  onSubmit: (data: FormValues) => void;
};
export type FormValues = {
  name: string;
  description: string;
};
export default function ItemForm({ onSubmit }: Props) {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="名称"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="物品介绍"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
