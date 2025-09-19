import dayjs from "dayjs";
import 'dayjs/locale/es';
dayjs.locale('es');


export const format_date_a = date => dayjs(date).format('DD [de] MMMM [de] YYYY, hh:mm:ss A [UTC]');
export const formar_date_one_year_ago = date => dayjs(date).subtract(1, "Year").format('DD [de] MMMM [de] YYYY, hh:mm:ss A [UTC]') ;
export const format_date_c = date => dayjs(date).format('dddd, DD [de] MMMM [de] YYYY');
export const format_date_d = date => dayjs(date).format('MM[/]DD[/]YYYY')



