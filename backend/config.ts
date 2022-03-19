import { IConfig } from "./types/interface";

const config: IConfig = {
    port: process.env.PORT || "8080"
};

export default config;