import { Config } from "@/types/config";

const configData: Config = {
  env: process.env.NEXT_PUBLIC_ENV,
  address: process.env.NEXT_PUBLIC_ADDRESS,
  phone_number: process.env.NEXT_PUBLIC_PHONE_NUMBER,
  email: process.env.NEXT_PUBLIC_EMAIL,
};

export default configData;
