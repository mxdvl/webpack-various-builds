const { format } = Intl.DateTimeFormat("en-GB");

export const getDay = () => format(new Date());
