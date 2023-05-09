import { Box, Button, Input } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { SubmitHandler, useForm } from "react-hook-form";

interface MyFormInputs {
  name: string;
  email: string;
  password: string;
  age: number;
}

export const MyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MyFormInputs>();

  const onSubmit: SubmitHandler<MyFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDir="column"
      gap={5}
      w="2xl"
    >
      <Box as="label" textAlign="left" htmlFor="name">
        名前
        <Input {...register("name", {required: true})} id="name" />
      </Box>
      <Box as="label" textAlign="left" htmlFor="email">
        メールアドレス
        <Input
          {...register("email", {
            required: true,
            maxLength: 60,
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "メールアドレスの形式が不正です",
            },
          })}
          id="email"
        />
      </Box>
      <ErrorMessage errors={errors} name="email" />
      <Box as="label" textAlign="left" htmlFor="password">
        パスワード
        <Input
          {...register("password", {required: true})}
          id="password"
        />
      </Box>
      <Box as="label" textAlign="left" htmlFor="age">
        年齢
        <Input {...register("age", {required: true})} min={0} max={100} id="age" type="number" />
      </Box>
      <Button type="submit">送信</Button>
    </Box>
  );
};
