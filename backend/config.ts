import { IConfig } from "./types/interface";

const config: IConfig = {
    port: process.env.PORT || "3000"
};

export default config;