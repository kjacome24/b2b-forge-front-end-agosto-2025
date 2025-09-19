import {format_date_a, formar_date_one_year_ago, format_date_c, format_date_d} from './utils/formatearFecha.js';
import chalk  from 'chalk';

console.log(
    chalk.bgBlue(format_date_a("2024-04-21T09:40:26+0000"))
    )
console.log(
    chalk.bgRed(formar_date_one_year_ago("2024-04-21T09:40:26+0000"))
    
)
console.log(
    chalk.blue(
        format_date_c("2024-04-21T09:40:26+0000")
    )
    )
console.log(format_date_d("2024-04-21T09:40:26+0000"))