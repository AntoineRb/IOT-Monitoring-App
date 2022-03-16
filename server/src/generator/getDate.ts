
export type TGetDate = () => string;

const getDate:TGetDate = () => {
    return new Date().toJSON();
}

export default getDate;
